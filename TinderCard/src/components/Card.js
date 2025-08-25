import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={{ uri: card.image }} style={styles.cardImage} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>
        {card.name}, {card.age}
      </Text>
      {card.address && <Text style={styles.address}>{card.address}</Text>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    height: height * 0.6,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  address: {
    fontSize: 15,
    color: "#666",
    marginTop: 4,
  },
});

export default Card;
