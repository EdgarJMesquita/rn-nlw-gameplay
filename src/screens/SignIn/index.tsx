import { useNavigation, StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import illustrationImg from '../../assets/illustration.png';
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from './styles';

type Props = {
  navigatio: any
}

export function SignIn({navigatio}:Props){
  const navigation = useNavigation();

  function handleSignIn() {

    //   No type error =) but ugly syntax
    const action = StackActions.push('Home')
    navigation.dispatch(action);

    
    /*  
        An annoying type error =/
      navigation.navigate("Home"); 
    */
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