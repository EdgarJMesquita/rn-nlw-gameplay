import React, { useState } from 'react'
import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { StackActions, useNavigation } from '@react-navigation/native';


export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();
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
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '6',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '7',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '8',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '9',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '10',
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

  function handleAppointmentDetails() {
    //  navigation.navigate('Home')
    
    const action = StackActions.push('AppointmentDetails')
    navigation.dispatch(action);
  }

  function handleAppointmentCreate(){
    const action = StackActions.push('AppointmentCreate')
    navigation.dispatch(action);
  }

  return(
    <Background>
      
      <View style={styles.header}>
        <Profile />
        <ButtonAdd 
          onPress={handleAppointmentCreate}
        />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
        
      />

      <ListHeader title="Partidas agendadas" subtitle="Total 7"/>
      
      <FlatList 
        data={appointments}
        keyExtractor={item=>item.id}
        renderItem={({ item })=>(
          <Appointment 
            data={item}
            onPress={handleAppointmentDetails}
          />
        )}
        ItemSeparatorComponent={ListDivider}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 69}}
        fadingEdgeLength={200}
      />

    </Background>
  );
}