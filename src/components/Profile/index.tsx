import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar';
import { ButtonAdd } from '../ButtonAdd';

import { styles } from './styles';

export function Profile(){
  const { user } = useAuth();

  return(
    <View style={styles.container}>
      
      <Avatar source={user?.avatar? user.avatar : "https://github.com/EdgarXongas.png"}/>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          
          <Text style={styles.username}>
            {user?.firstName}
          </Text>
        </View>  

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  );
}