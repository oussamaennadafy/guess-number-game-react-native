// Home.js
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Wrapper from '../components/shared/ScreenWrapper';
import Title from '../components/shared/Title';

type RootStackParamList = {
 Home: undefined,
 Guess: { misteriosNumber: string },
 GameOver: undefined,
}

type Props = NativeStackScreenProps<RootStackParamList, 'Guess'>;

const Guess = ({ navigation, route }: Props) =>
{
 const { misteriosNumber } = route.params

 return (
  <Wrapper>
   <View style={styles.container}>
    <Title title="Opponent's Guess" />
    <View style={styles.numberContainer} >
     <Text style={styles.numberContainer}>{misteriosNumber}</Text>
    </View>
   </View>
  </Wrapper>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingTop: 20,
  alignItems: "center",
  marginBottom: 16
 },
 numberContainer: {
  borderWidth: 3,
  borderColor: "#ddb52f"
 },
 numberText: {

 }
})

export default Guess;