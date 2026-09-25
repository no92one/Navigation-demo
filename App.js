import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Restaurangen"
          }}
        />

        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            title: "Meny"
          }}
        />

        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={{
            title: "Maträtt"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}