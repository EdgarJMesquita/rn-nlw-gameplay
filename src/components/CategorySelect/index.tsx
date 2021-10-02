import React from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../../utils/category';
import { Category } from '../Category';
import { styles } from './styles';


type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryID:string)=>void;
  hasCheckBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: CategorySelectProps){
  return(
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}
      fadingEdgeLength={100}
    >
      {
        categories.map(category=>{
          return(
            <Category 
              key={category.id} 
              title={category.title} 
              icon={category.icon}
              hasCheckBox={hasCheckBox}
              checked={category.title=== categorySelected}
              onPress={()=>setCategory(category.title)}
            />
          )
        })
      }
    </ScrollView>
  );
}