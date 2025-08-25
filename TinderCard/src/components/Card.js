import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

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
    height: height * 0.65,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "75%",
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  address: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
});

export default Card;
