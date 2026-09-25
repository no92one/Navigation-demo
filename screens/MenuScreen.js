import {
  View,
  Text,
  FlatList,
  StyleSheet
} from "react-native";

import MealItem from "../components/MealItem";
import { meals } from "../data/meals";

export default function MenuScreen({ navigation }) {
  function selectMealHandler(mealId) {
    navigation.navigate("MealDetails", {
      mealId: mealId
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Vår meny
      </Text>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            meal={item}
            onPress={() => selectMealHandler(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16
  }
});