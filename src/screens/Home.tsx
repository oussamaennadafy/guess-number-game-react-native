// Home.js
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Wrapper from '../components/shared/ScreenWrapper';
import Title from '../components/shared/Title';
import CardWrapper from '../components/shared/CardWrapper';
import Button from '../components/shared/Button';

type RootStackParamList = {
 Home: undefined,
 Guess: { misteriosNumber: string },
 GameOver: undefined,
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const { width, height } = Dimensions.get('window')


const Home = ({ navigation }: Props) =>
{
 const [misteriosNumber, setMisteriosNumber] = useState<string>("")

 const onConfirm = () =>
 {
  // validation
  if (!misteriosNumber || (parseInt(misteriosNumber) < 0 || parseInt(misteriosNumber) > 99))
   return Alert.alert('Invalid Number', 'the number should be between 0 and 99', [
    { text: 'OK' },
   ]);

  //navigate to Guess screen
  navigation.navigate('Guess', { misteriosNumber });
 }

 return (
  <Wrapper>
   <View style={styles.container}>
    <Title title="Guess my number" />
    <CardWrapper title="Enter a Number">
     <TextInput
      value={misteriosNumber}
      onChangeText={setMisteriosNumber}
      inputMode="numeric"
      style={styles.input}
      textAlign='center'
     />
     <View style={styles.inputAfter} />
     <View style={styles.flexRow}>
      <Button label="Reset" onPress={() => { setMisteriosNumber("") }} />
      <Button label="Confirm" onPress={onConfirm} />
     </View>
    </CardWrapper>
   </View>
  </Wrapper>
 );
};

const styles = StyleSheet.create({
 container: {
  width,
  alignItems: "center",
  marginTop: 100
 },
 input: {
  marginBottom: 10,
  color: "#ddb52f",
  fontSize: 26,
  width: "100%",
 },
 inputAfter: {
  backgroundColor: "#ddb52f",
  width: "14%",
  height: 4,
  marginBottom: 20,
 },
 flexRow: {
  flexDirection: "row",
  gap: 10,
  paddingHorizontal: 10,
 }
})

export default Home;