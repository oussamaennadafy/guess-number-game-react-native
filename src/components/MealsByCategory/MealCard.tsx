import { Text, Pressable, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import mealType from '../../../types/mealType'
import { useNavigation } from '@react-navigation/native'

function MealCard({ item }: { item: mealType })
{

 const navigation = useNavigation();

 const handlePress = () =>
 {
  navigation.navigate("Meal", { mealID: item.id })
 }

 return (
  <Pressable
   onPress={handlePress}
   style={styles.cardContainer}
  >
   <Image
    source={{ uri: item.imageUrl }}
    resizeMode='cover'
    style={styles.image}
   />
   <View style={styles.descriptionContainer}>
    <Text style={styles.title}>{item.title}</Text>
    <View style={styles.detailsContainer}>
     <Text style={styles.detailsText}>{item.duration} min</Text>
     <Text style={styles.detailsText}>{item.complexity}</Text>
     <Text style={styles.detailsText}>{item.affordability}</Text>
    </View>
   </View>
  </Pressable>
 )
}

const styles = StyleSheet.create({
 cardContainer: {
  flex: 1,
  backgroundColor: "white",
  borderRadius: 10,
  margin: 15,
  overflow: "hidden",
 },
 image: {
  height: 240
 },
 descriptionContainer: {
  padding: 15,
  gap: 10
 },
 title: {
  textAlign: "center",
  fontSize: 22,
  fontWeight: "600",
  color: "black",
 },
 detailsContainer: {
  flexDirection: "row",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
 },
 detailsText: {
  fontWeight: '500'
 }
})

export default MealCard