import React from 'react'
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, FlatList, Pressable } from 'react-native'
import { CATEGORIES } from './../../data/dummy_data'
import COLORS from '../constants/color'
import Header from '../components/Categories/Header'
import CategoryCard from "./../components/Categories/CategoryCard"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList'
import { useNavigation } from '@react-navigation/native';


export type CategoriesScreenProps = NativeStackScreenProps<RootStackParamList>; ("Categories");

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) =>
{

 return (
  <>
   <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
    <Header></Header>
    <StatusBar backgroundColor={COLORS.brown600}></StatusBar>
    <FlatList
     data={CATEGORIES}
     renderItem={({ item }) => <CategoryCard item={item} />}
     numColumns={2}
     style={styles.flatListStyle}
    />
   </SafeAreaView>
  </>
 )
}

const styles = StyleSheet.create({
 text: {
  fontSize: 30,
  color: "#000",
  backgroundColor: "white",
  textAlign: "center"
 },
 container: {
  flexDirection: "row",
  flexWrap: "wrap",
 },
 flatListStyle: {
  // flex: 1
  // padding: 10,
  // gap: 10
  // alignItems: "center"
 },
 outerContainer: {
  flex: 1,
  borderRadius: 8,
 },
 innerContainer: {
  overflow: "hidden",
  flex: 1,
  margin: 16,
  height: 150,
  alignItems: "center",
  justifyContent: "center",
  elevation: 10,
  shadowColor: "balck",
  shadowOffset: { height: 2, width: 0 },
  shadowOpacity: 0.25,
 },
 categoryText: {
  fontWeight: "bold",
  fontSize: 20
 },
})

export default CategoriesScreen