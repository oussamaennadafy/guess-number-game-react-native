import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type ButtonPropsType = {
 label: string,
 onPress: () => void
}


function Button({ label, onPress }: ButtonPropsType)
{
 return (
  <Pressable
   style={styles.button}
   onPress={onPress}
  >
   <Text style={styles.text}>{label}</Text>
  </Pressable>
 )
}

const styles = StyleSheet.create({
 button: {
  backgroundColor: "#72063c",
  justifyContent: "center",
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 99,
  flex: 1,
 },
 text: {
  color: "#fff",
  textAlign: "center",
 }
})

export default Button