import { useNavigation, StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Alert } from "react-native";
import illustrationImg from '../../assets/illustration.png';
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useAuth } from "../../hooks/useAuth";
import { styles } from './styles';



export function SignIn(){
  const navigation = useNavigation();
  const { user, isLoading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (err) {
      Alert.alert(`${err}`);
    }

    /* const action = StackActions.push('Home')
    navigation.dispatch(action); */
  }
  
  return(
    <Background>
      <View style={styles.container}>
        <Image 
          source={illustrationImg} 
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'} 
            e organize {'\n'}
            suas jogatinas 
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            text="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}