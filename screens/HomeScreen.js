import {
  View,
  Text,
  Pressable,
  StyleSheet
} from "react-native";

export default function HomeScreen({ navigation }) {
  function openMenuHandler() {
    navigation.navigate("Menu");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bella Italia
      </Text>

      <Text style={styles.description}>
        Välkommen till vår italienska restaurang!
      </Text>

      <Pressable
        style={styles.button}
        onPress={openMenuHandler}
      >
        <Text style={styles.buttonText}>
          Visa menyn
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10
  },

  description: {
    fontSize: 16,
    textAlign: "center"
  },

  button: {
    marginTop: 30,
    backgroundColor: "#333333",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});