import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { Background } from '../../components/Background'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { theme } from '../../global/styles/theme'
import { api } from '../../services/api'
import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps)=>void;
}

export function Guilds({handleGuildSelect}:Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getUserGuilds() {
    try {
      const { data } = await api.get('/users/@me/guilds');
      setGuilds(data);
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUserGuilds();
  }, [])

  return (
    <Background>
      <View style={styles.container}>
        {
          isLoading? 
          <ActivityIndicator size="large" color={theme.colors.primary}/>
          :
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
        }
      </View>
    </Background>
  )
}
