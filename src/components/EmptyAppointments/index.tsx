import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

type Props = {
  category?: string;
  isLoading: boolean;
}

export function EmptyAppointments({category, isLoading}:Props) {

  if(category){
    return(
      <Text style={styles.title}>
        {`Você não possui agendamentos da categoria ${category}`}
      </Text>
    );
  }

  return(
    <Text style={styles.title}>
      Você ainda não agendou uma partida.
    </Text>
  );
}