import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export function TextArea({...rest}:TextInputProps) {
  return(
    <TextInput 
      {...rest}
      style={styles.container}
      multiline
      maxLength={100}
      numberOfLines={5}
      autoCorrect={false}
    />
  )
}