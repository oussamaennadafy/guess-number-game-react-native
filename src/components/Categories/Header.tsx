import { Image, View, StyleSheet, Text, StatusBar } from 'react-native'
import React from 'react'
import COLORS from '../../constants/color'

function Header()
{
 return (
  <View style={styles.container}>
   <Image
    style={styles.icon}
    source={require('./../../../assets/icons/menu-icon.png')}
   />
   <Text style={styles.title}>All Categories</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: COLORS.brown600,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  padding: 13,
 },
 icon: {
  position: "absolute",
  left: "5%"
 },
 title: {
  fontSize: 18,
  color: "white"
 }
})

export default Header