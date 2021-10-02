import React, { createContext, ReactNode, useEffect, useState } from 'react'

import * as AuthSession from 'expo-auth-session';
import { api } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_USER, COLLECTION_APPOINTMENTS } from '../storage';
import { LogoutModal } from '../components/LogoutModal';

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { REDIRECT_URI } = process.env;

type Props = {
  children: ReactNode;
}

type User = {
  id: string | undefined;
  setId: (value:string)=>void;
  userName: string | undefined;
  setUserName: (value:string)=>void;
  firstName: string | undefined;
  setFirstName: (value:string)=>void;
  avatar: string | undefined;
  setAvatar: (value:string)=>void;
  email: string | undefined;
  setEmail: (value:string)=>void;
  token: string | undefined;
  setToken: (value:string)=>void;
}


type ContextProps = {
  user: User | undefined;
  isLoading: boolean;
  signIn: ()=>Promise<void>;
  setIsModalOpen: (value:boolean)=>void;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}


export const AuthContext = createContext({} as ContextProps);

export function AuthContextProvider({children}:Props){
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  async function signIn(){
    try {
      setIsLoading(true);
      
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`; 
      const { type, params } = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;


      if(type === 'success' && !params.error){
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;
        const {data} = await api.get('/users/@me');

        const firstName = data.username.split(' ')[0];
        const avatar = data.avatar? `${CDN_IMAGE}/avatars/${data.id}/${data.avatar}.png` : undefined;
        
        const userData = {
          ...data,
          firstName,
          avatar,
          token: params.access_token
        }

        await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

        setUser(userData);

      } 

    } catch (error) {
      throw new Error('Não foi possível autenticar');
      
    } finally {
      setIsLoading(false);
      
    }
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USER);    

    if(storage){
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
      setUser(userLogged);
    }
  }

  async function logout(){
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      setUser(undefined);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, [])

  return(
    <AuthContext.Provider value={{
      user,
      isLoading,
      signIn,
      setIsModalOpen
    }}>
      {children}
      <LogoutModal logout={logout} setIsModalOpen={setIsModalOpen} visible={isModalOpen}/>
    </AuthContext.Provider>
  );
}