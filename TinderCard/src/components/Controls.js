import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    marginTop: 10,
    gap: 40,
  },
  button: {
    width: 65,
    height: 65,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  like: {
    backgroundColor: "#27ae60",
  },
  nope: {
    backgroundColor: "#e74c3c",
  },
});

export default Controls;
