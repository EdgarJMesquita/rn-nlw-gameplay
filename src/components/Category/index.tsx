import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from 'react-native-svg';
import { theme } from "../../global/styles/theme";

import { styles } from './styles';

type CategoryProps = RectButtonProps & {
  id: string;
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
}

export function Category({
  title,
  icon:Icon,
  checked = false,
  hasCheckBox=false,
  ...rest
}:CategoryProps){
  return(
    <RectButton 
      {...rest}
    >
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <LinearGradient 
          style={[styles.content, {opacity: checked ? 1 : 0.5 }]}
          colors={[checked? theme.colors.secondary85 : theme.colors.secondary50, theme.colors.secondary40]}
        >

          { hasCheckBox && <View style={checked? styles.checked: styles.check} /> }
          
          <Icon 
            height={48}
            width={48}
          />

          <Text style={styles.title}>
            { title }
          </Text>

        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}