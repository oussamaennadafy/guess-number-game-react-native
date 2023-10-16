import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from "./../../types/RootStackParamList"
import { MEALS } from '../../data/dummy_data';
import COLORS from '../constants/color';

export type MealsByCategoryProps = NativeStackScreenProps<RootStackParamList, 'Meal'>;

const Meal = ({ route }: MealsByCategoryProps) =>
{
 const meal = MEALS.filter(meal => meal.id === route.params.mealID)[0]
 return (
  <SafeAreaView style={{ flex: 1 }}>
   <ScrollView >
    <Image style={styles.image} source={{ uri: meal.imageUrl }} />
    <View style={styles.descriptionContainer}>
     <Text style={styles.title}>{meal.title}</Text>
     <View style={styles.shortDetailsContainer}>
      <Text style={styles.shortDetailsText}>{meal.duration} min</Text>
      <Text style={styles.shortDetailsText}>{meal.complexity}</Text>
      <Text style={styles.shortDetailsText}>{meal.affordability}</Text>
     </View>
     <View style={styles.ingrediantsSection}>
      <Text style={styles.longDetailsTitle}>Ingrediants</Text>
      <ScrollView nestedScrollEnabled={true} style={styles.outerLongDetailsContainer}>
       <View style={styles.innerLongDetailsContainer}>
        {meal.ingredients.map(ingrediant => (
         <View style={styles.longDetailContainer} key={ingrediant}>
          <Text style={styles.ingrediantText}>{ingrediant}</Text>
         </View>
        ))}
       </View>
      </ScrollView>
     </View>
     <View style={styles.stepsSection}>
      <Text style={styles.longDetailsTitle}>Steps</Text>
      <ScrollView nestedScrollEnabled={true} style={styles.outerLongDetailsContainer}>
       <View style={styles.innerLongDetailsContainer}>
        {
         meal.steps.map(step => (
          <View style={styles.longDetailContainer} key={step}>
           <Text style={styles.stepText}>{step}</Text>
          </View>
         ))
        }
       </View>
      </ScrollView>
     </View>
    </View>
   </ScrollView>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 image: {
  height: 350
 },
 descriptionContainer: {
  padding: 15,
  gap: 10,
  marginBottom: 10
 },
 title: {
  textAlign: "center",
  fontSize: 22,
  fontWeight: "600",
  color: "black",
 },
 shortDetailsContainer: {
  flexDirection: "row",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10
 },
 shortDetailsText: {
  color: "black",
  fontWeight: '500'
 },
 ingrediantsSection: {
  paddingHorizontal: 20
 },
 longDetailsTitle: {
  color: "black",
  fontSize: 16,
  textAlign: "center",
  marginBottom: 10
 },
 outerLongDetailsContainer: {
  // gap: 8,
  height: 200
 },
 innerLongDetailsContainer: {
  gap: 8,
 },
 longDetailContainer: {
  backgroundColor: "#C4A484",
  padding: 10,
  borderRadius: 8
 },
 ingrediantText: {
  textAlign: "center"
 },
 stepsSection: {
  paddingHorizontal: 20
 },
 stepText: {
  textAlign: "center"
 },
})

export default Meal