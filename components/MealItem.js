import {
  Pressable,
  Text,
  StyleSheet,
  View
} from "react-native";

export default function MealItem({ meal, onPress }) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <View>
        <Text style={styles.name}>
          {meal.name}
        </Text>

        <Text style={styles.category}>
          {meal.category}
        </Text>
      </View>

      <Text style={styles.price}>
        {meal.price} kr
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#eeeeee",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  name: {
    fontSize: 18,
    fontWeight: "bold"
  },

  category: {
    marginTop: 4,
    color: "#555555"
  },

  price: {
    fontSize: 16,
    fontWeight: "bold"
  }
});