import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect';
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles'

export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId:string) {
    categoryId === category? setCategory('') : setCategory(categoryId);
  }


  return (
    <View style={styles.container}>
      <Header 
        title="Agendar partida"
      />

      <Text style={styles.label}>
        Categoria
      </Text>

      <CategorySelect 
        setCategory={handleCategorySelect}
        categorySelected={category}
        hasCheckBox
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            <View style={styles.image}/>

            <View style={styles.selectBody}>

            </View>

          </View>
        </RectButton>
      </View>

    </View>
  )
}
