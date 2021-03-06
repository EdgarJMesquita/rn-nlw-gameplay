import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg';
import { api } from '../../services/api';

export type GuildProps = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest }:Props) {

  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >

      <GuildIcon
        iconID={data.icon}
        guildId={data.id}
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>
          {data.name}
        </Text>
        <Text style={styles.type}>
          {data.owner? 'Administrador' : 'Convidado'}
        </Text>
      </View>

      <Feather 
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
      
    </TouchableOpacity>
  )
}
