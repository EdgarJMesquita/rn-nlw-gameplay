import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { ButtonAdd } from '../ButtonAdd';

import { styles } from './styles';

export function Profile(){
  return(
    <View style={styles.container}>
      
      <Avatar source="https://github.com/EdgarXongas.png"/>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          
          <Text style={styles.username}>
            Edgar
          </Text>
        </View>  

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  );
}