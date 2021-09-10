import { useNavigation, StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import illustrationImg from '../../assets/illustration.png';
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from './styles';


export function SignIn(){
  const navigation = useNavigation();

  function handleSignIn() {
    const teste = StackActions.push('Home')
    navigation.dispatch(teste);
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