import React, { useState } from 'react'
import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';

export function Home() {
  const [category, setCategory] = useState('');
  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId:string) {
    categoryId === category? setCategory('') : setCategory(categoryId);
  }

  return(
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <View>
          <CategorySelect 
            categorySelected={category}
            setCategory={handleCategorySelect}
          />

          <View style={styles.content}> 
            <ListHeader title="Partidas agendadas" subtitle="Total 7"/>
            <FlatList 
              data={appointments}
              keyExtractor={item=>item.id}
              renderItem={({item })=>(
                <Text>{item.guild.name}</Text>
              )}
            />
          </View>

        </View>
      </View>
    </Background>
  );
}