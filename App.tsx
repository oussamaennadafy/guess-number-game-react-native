import { Text, View } from "react-native"
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./src/screens/Categories";
import MealsByCategory from "./src/screens/MealsByCategory";
import Meal from "./src/screens/Meal";
import COLORS from "./src/constants/color";
import Header from "./src/components/Categories/Header";
import RootStackParamList from "./types/RootStackParamList"
import { CATEGORIES } from "./data/dummy_data";


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            header: () => null
          }} />

        <Stack.Screen name="MealsByCategory" component={MealsByCategory} options={
          ({ route }) =>
          {
            const titleOfCategory = CATEGORIES.filter(category => category.id === route.params.categoryID)[0].title
            return { headerTitle: `${titleOfCategory} Meals` }
          }
        } />

        <Stack.Screen name="Meal" component={Meal} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App