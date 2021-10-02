import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/useAuth';

type AvatarProps = {
  source: string;
}

export function Avatar({source}:AvatarProps) {
  const { setIsModalOpen } = useAuth();
  
  return(
    <RectButton onPress={()=>setIsModalOpen(true)}>
      <LinearGradient 
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <Image 
          source={{uri:source}} 
          style={styles.avatar}
        />
      </LinearGradient>
    </RectButton>
  );
}