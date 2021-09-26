import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import discordImg from '../../assets/discord.png';
import { useAuth } from "../../hooks/useAuth";

import { styles } from "./styles";

type ButtonIconProps = RectButtonProps & {
  text: string;
}


export function ButtonIcon({text, ...rest}:ButtonIconProps){
  const { isLoading } = useAuth();
  return(
    <RectButton 
      style={styles.container} 
      {...rest}
      >

      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon}/>
      </View>
      
      {
        isLoading ?
        <ActivityIndicator 
          size="small"
          color="white"
          style={{flex: 1, marginRight: 15}}          
        />
        :
        <Text style={styles.title}>
          {text}
        </Text>
      }
      
    </RectButton>
  );
}