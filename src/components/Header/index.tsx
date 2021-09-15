import React, { ReactNode } from 'react'
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

type HeaderProps = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }:HeaderProps) {
  return(
    <LinearGradient 
      style={styles.container}
      colors={[]}
    >

    </LinearGradient>
  );
}