import React from 'react'
import { FlatList, View } from 'react-native'
import { Background } from '../../components/Background'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps)=>void;
}

export function Guilds({handleGuildSelect}:Props) {
  const guilds = [
    {
      id: '1',
      name: 'Overwatch',
      icon: 'https://maxcdn.icons8.com/Color/PNG/512/Logos/overwatch-512.png',
      owner: true
    },
    {
      id: '2',
      name: 'Archeage',
      icon: 'https://vectorified.com/images/archeage-icon-31.png',
      owner: true
    },
    {
      id: '3',
      name: 'Overwatch',
      icon: 'https://maxcdn.icons8.com/Color/PNG/512/Logos/overwatch-512.png',
      owner: true
    },
    {
      id: '4',
      name: 'Archeage',
      icon: 'https://vectorified.com/images/archeage-icon-31.png',
      owner: true
    },
    {
      id: '5',
      name: 'GuildWars',
      icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.S-NLaCL5wvyEdkDu-HZJVQHaDu%26pid%3DApi&f=1',
      owner: true
    },
    {
      id: '6',
      name: 'Overwatch',
      icon: 'https://maxcdn.icons8.com/Color/PNG/512/Logos/overwatch-512.png',
      owner: true
    },
    {
      id: '7',
      name: 'Archeage',
      icon: 'https://vectorified.com/images/archeage-icon-31.png',
      owner: true
    },
    {
      id: '8',
      name: 'Overwatch',
      icon: 'https://maxcdn.icons8.com/Color/PNG/512/Logos/overwatch-512.png',
      owner: true
    },
    {
      id: '9',
      name: 'Archeage',
      icon: 'https://vectorified.com/images/archeage-icon-31.png',
      owner: true
    },
    {
      id: '10',
      name: 'GuildWars',
      icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.S-NLaCL5wvyEdkDu-HZJVQHaDu%26pid%3DApi&f=1',
      owner: false
    }
  ]
  return (
    <Background>
      <View style={styles.container}>
        <FlatList 
          data={guilds}
          keyExtractor={item=>item.id}
          renderItem={({ item })=>(
            <Guild 
              onPress={()=>handleGuildSelect(item)}
              data={item}
            />
            )}
          ItemSeparatorComponent={()=><ListDivider/>}
          style={styles.guilds}
          contentContainerStyle={{paddingVertical: 69}}
          ListHeaderComponent={()=><ListDivider isCentered/>}
          fadingEdgeLength={300}
        />
      </View>
    </Background>
  )
}
