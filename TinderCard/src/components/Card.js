import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={{ uri: card.image }} style={styles.cardImage} />
    <Text>{card.name}</Text>
    <Text>{card.age}</Text>
    <Text>{card.address}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 0.65,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  cardImage: {
    width: 160,
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
});

export default Card;
