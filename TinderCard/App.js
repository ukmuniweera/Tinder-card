import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./src/components/Card";
import Controls from "./src/components/Controls";
import people from "./src/data";

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
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Tinder</Text>

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

      <Text style={{ fontSize: 18 }}>Likes: {like}</Text>
      <Text style={{ fontSize: 18 }}>Nope: {nope}</Text>

      <Controls onLike={handleLike} onNope={handleNope} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
