import React, { ReactNode } from 'react'
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';


type HeaderProps = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }:HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return(
    <LinearGradient 
      style={styles.container}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}
    >
      <BorderlessButton 
        onPress={handleGoBack}
      >
        <Feather 
          name="arrow-left"
          size={24}
          color={theme.colors.heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        { title }
      </Text>

      {action && 
        <View>
          { action }
        </View>
      }
    </LinearGradient>
  );
}