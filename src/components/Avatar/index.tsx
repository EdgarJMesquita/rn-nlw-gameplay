import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

type AvatarProps = {
  source: string;
}

export function Avatar({source}:AvatarProps) {

  return(
    <LinearGradient 
    style={styles.container}
    colors={[theme.colors.secondary50, theme.colors.secondary70]}
    >
      <Image 
        source={{uri:source}} 
        style={styles.avatar}
        />
    </LinearGradient>
  );
}