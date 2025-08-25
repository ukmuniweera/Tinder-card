import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./src/components/Card";
import Controls from "./src/components/Controls";
import people from "./src/data";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function App() {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [like, setLike] = useState(0);
  const [nope, setNope] = useState(0);

  const handleLike = () => {
    swiperRef.current.swipeRight();
    setIndex((prev) => prev + 1);
  };

  const handleNope = () => {
    swiperRef.current.swipeLeft();
    setIndex((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tinder</Text>

      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={people}
          cardIndex={index}
          renderCard={(card) => <Card card={card} />}
          stackSize={3}
          backgroundColor="transparent"
          verticalSwipe={false}
          onSwiped={(cardIndex) => setIndex(cardIndex + 1)}
          onSwipedRight={() => setLike((prev) => prev + 1)}
          onSwipedLeft={() => setNope((prev) => prev + 1)}
        />
      </View>

      <View style={styles.badgesContainer}>
        <View style={styles.badge}>
          <Ionicons name="heart" size={22} color="green" />
          <Text style={styles.badgeText}>{like}</Text>
        </View>
        <View style={styles.badge}>
          <Ionicons name="close" size={22} color="red" />
          <Text style={styles.badgeText}>{nope}</Text>
        </View>
      </View>

      <View style={styles.controlsWrapper}>
        <Controls onLike={handleLike} onNope={handleNope} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 15,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 6,
  },
  swiperContainer: {
    height: height * 0.55,
    width: "100%",
  },
  badgesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 10,
    gap: 20,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  badgeText: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 5,
  },
  controlsWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
});
