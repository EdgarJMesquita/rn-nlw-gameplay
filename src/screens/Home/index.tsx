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
  const [ appointments, setAppointments ] = useState([]);
 

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