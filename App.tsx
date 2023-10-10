import { Text, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Guess from "./src/screens/Guess";
import GameOver from "./src/screens/GameOver";

type RootStackParamList = {
  Home: undefined,
  Guess: { misteriosNumber: string },
  GameOver: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
        <Stack.Screen name="Guess" component={Guess} options={{ header: () => null }} />
        <Stack.Screen name="GameOver" component={GameOver} options={{ header: () => null }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App