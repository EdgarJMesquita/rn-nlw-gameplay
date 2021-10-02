import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../../global/styles/theme'
import { Avatar } from '../Avatar'
import { styles } from './styles'

export type MemberProps = {
  id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
  data: MemberProps;
}

export function Member({ data:{ username, avatar_url, status }}:Props) {
  const isOnline = status === 'online';
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar 
        source={avatar_url}
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>
          { username }
        </Text>

        <View style={styles.status}>
          <View 
            style={[
              styles.bulletStatus,
            , { backgroundColor: isOnline? on : primary}
            ]
          }/>

          <Text style={styles.nameStatus}>
            { isOnline? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
      
    </View>
  )
}
