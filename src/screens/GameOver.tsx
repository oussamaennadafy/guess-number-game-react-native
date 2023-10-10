// Home.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Wrapper from '../components/shared/ScreenWrapper';

type RootStackParamList = {
 Home: undefined,
 Guess: { misteriosNumber: string },
 GameOver: undefined,
}

type Props = NativeStackScreenProps<RootStackParamList, 'GameOver'>;

const GameOver = ({ navigation }: Props) =>
{
 return (
  <Wrapper>
   {/* <View>
    <Pressable
     style={{ backgroundColor: "lightgreen", padding: 10, marginTop: 10 }}
     onPress={() => navigation.navigate('Guess')}
    >
     <Text style={{ color: "black" }}>go to guess page</Text>
    </Pressable>
   </View> */}
   <Text>hello world</Text>
  </Wrapper>
 );
};

export default GameOver;