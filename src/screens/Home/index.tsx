import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ParamListBase, useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../storage';
import { theme } from '../../global/styles/theme';
import { NavigationProps } from '../../routes/app.routes';
import { EmptyAppointments } from '../../components/EmptyAppointments';



export function Home({navigation}:NavigationProps) {
  const [category, setCategory] = useState('');
  const [ appointments, setAppointments ] = useState<AppointmentProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
 

  function handleCategorySelect(categoryId:string) {
    categoryId === category? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected:AppointmentProps) {
    navigation.navigate('AppointmentDetails', {guildSelected});
  }

  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  async function fetchAppointmentsFromStorage() {
    try {
      setIsLoading(true);
      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const _appointments: AppointmentProps[] = storage? JSON.parse(storage) : [];

      if(category){
        setAppointments(_appointments.filter(appointment=>appointment.category === category));
        
      } else {
        setAppointments(_appointments);
        
      }

    } catch (error) {
      console.log(error);
     
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(()=>{
    fetchAppointmentsFromStorage();  
  },[category]));

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

      {
        !isLoading ?
          <>
            <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`}/>
            <FlatList 
              data={appointments}
              keyExtractor={item=>item.id}
              renderItem={({ item })=>(
                <Appointment 
                  data={item}
                  onPress={()=>handleAppointmentDetails(item)}
                />
              )}
              ItemSeparatorComponent={ListDivider}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 69}}
              fadingEdgeLength={200}
              ListEmptyComponent={()=><EmptyAppointments category={category} isLoading={isLoading}/>}
            />
          </>
          : 
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator color={theme.colors.primary} size="large" />
          </View> 
      }

    </Background>
  );
}