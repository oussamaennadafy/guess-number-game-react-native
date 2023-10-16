import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, FlatList, Pressable, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { MealsByCategoryProps } from "./../../screens/MealsByCategory"


const CategoryCard = ({ item }: { item: { id: string, title: string, color: string } }) =>
{
 const navigation = useNavigation();

 const handlePress = () =>
 {
  navigation.navigate<MealsByCategoryProps>(
   "MealsByCategory",
   { categoryID: item.id }
  )
 }

 return (
  <View style={styles.gridItem}>
   <Pressable
    onPress={handlePress}
    android_ripple={{ color: '#ccc' }}
    style={({ pressed }) => [
     styles.button,
     pressed ? styles.buttonPressed : null,
    ]}
   >
    <View style={[styles.innerContainer, { backgroundColor: item.color }]}>
     <Text style={styles.title}>{item.title}</Text>
    </View>
   </Pressable>
  </View>
 )

}

const styles = StyleSheet.create({
 gridItem: {
  flex: 1,
  margin: 16,
  height: 150,
  borderRadius: 8,
  elevation: 4,
  backgroundColor: 'white',
  shadowColor: 'black',
  shadowOpacity: 0.25,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 8,
  overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
 },
 button: {
  flex: 1,
 },
 buttonPressed: {
  opacity: 0.5,
 },
 innerContainer: {
  flex: 1,
  padding: 16,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
 },
 title: {
  fontWeight: 'bold',
  fontSize: 18,
 },
})



export default CategoryCard