import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Title({ title }: { title: string })
{
 return (
  <View style={styles.container}>
   <Text style={styles.text}>{title}</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  borderWidth: 2,
  borderColor: "white",
  paddingHorizontal: 10,
  paddingVertical: 16,
 },
 text: {
  fontSize: 26,
  color: "white"
 }
})

export default Title