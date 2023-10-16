import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import RootStackParamList from "./../../types/RootStackParamList"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MEALS } from '../../data/dummy_data';
import { useNavigation } from '@react-navigation/native';
import MealCard from '../components/MealsByCategory/MealCard';


export type MealsByCategoryProps = NativeStackScreenProps<RootStackParamList, 'MealsByCategory'>;

const MealsByCategory = ({ route }: MealsByCategoryProps) =>
{
 const meals = MEALS.filter(meal => meal.categoryIds.includes(route.params.categoryID))

 return (
  <View>
   <FlatList
    data={meals}
    renderItem={({ item }) => <MealCard item={item} />}
    style={styles.flatList}
   />
  </View>
 )
}

const styles = StyleSheet.create({
 flatList: {
 },
})

export default MealsByCategory