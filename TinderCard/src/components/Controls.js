import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Controls = ({ onLike, onNope }) => (
  <View style={styles.container}>
    <TouchableOpacity style={[styles.button, styles.nope]} onPress={onNope}>
      <Ionicons name="close" size={30} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, styles.like]} onPress={onLike}>
      <Ionicons name="heart" size={30} color="white" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 20,
    gap: 40,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  like: {
    backgroundColor: "green",
  },
  nope: {
    backgroundColor: "red",
  },
});

export default Controls;
