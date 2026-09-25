import {
  View,
  Text,
  Pressable,
  StyleSheet
} from "react-native";

import { meals } from "../data/meals";

export default function MealDetailsScreen({
  navigation,
  route
}) {
  const mealId = route.params.mealId;

  const meal = meals.find(
    (meal) => meal.id === mealId
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {meal.name}
      </Text>

      <Text style={styles.category}>
        {meal.category}
      </Text>

      <Text style={styles.price}>
        {meal.price} kr
      </Text>

      <Text style={styles.description}>
        {meal.description}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          Tillbaka
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 30,
    fontWeight: "bold"
  },

  category: {
    fontSize: 16,
    color: "#555555",
    marginTop: 5
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20
  },

  description: {
    fontSize: 16,
    marginTop: 20,
    lineHeight: 24
  },

  button: {
    marginTop: 30,
    backgroundColor: "#333333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});