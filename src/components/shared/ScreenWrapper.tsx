import React, { PropsWithChildren } from 'react'
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native'

function Wrapper({ children }: PropsWithChildren)
{
 return (
  <View style={styles.container}>
   <StatusBar backgroundColor={"#ffffff00"} translucent={true}></StatusBar>
   <ImageBackground source={require('./../../../assets/images/background.png')} resizeMode='cover' style={styles.image}>
    {children}
   </ImageBackground>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 image: {
  flex: 1,
  paddingTop: StatusBar.currentHeight,
  alignItems: "center"
 }
})

export default Wrapper