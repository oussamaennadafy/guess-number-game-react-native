import React, { PropsWithChildren } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window')

function CardWrapper({ children, title }: PropsWithChildren<{ title: string }>)
{
 return (
  <View style={styles.card}>
   <Text style={styles.title}>{title}</Text>
   {children}
  </View>
 )
}

const styles = StyleSheet.create({
 card: {
  width: "80%",
  backgroundColor: "#640233",
  marginHorizontal: 10,
  marginTop: 40,
  borderRadius: 5,
  padding: 20,
  alignItems: "center",
 },
 title: {
  textAlign: "center",
  fontSize: 26,
  color: "#ddb52f",
  marginBottom: 10
 }
})

export default CardWrapper