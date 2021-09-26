import React, { createContext, ReactNode, useState } from 'react'

import * as AuthSession from 'expo-auth-session';

import { 
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  RESPONSE_TYPE,
  REDIRECT_URI
 } from '../config';
import { api } from '../services/api';

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
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string; 
  }
}


export const AuthContext = createContext({} as ContextProps);

export function AuthContextProvider({children}:Props){
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  console.log(user);

  async function signIn(){
    try {
      setIsLoading(true);
      
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`; 
      const { type, params } = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;

      if(type === 'success'){
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;
        const {data} = await api.get('/users/@me');

        const firstName = data.username.split(' ')[0];
        const avatar = data.avatar? `${CDN_IMAGE}/avatars/${data.id}/${data.avatar}.png` : undefined;
        
        setUser({
          ...data,
          firstName,
          avatar,
          token: params.access_token
        })

        setIsLoading(false);
        
      } else {
        setIsLoading(false);
      }

    } catch (error) {
      throw new Error('Não foi possível autenticar');
    }
  }

  return(
    <AuthContext.Provider value={{
      user,
      isLoading,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  );
}