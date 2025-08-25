import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./src/components/Card";
import Controls from "./src/components/Controls";
import people from "./src/data";

const { height } = Dimensions.get("window");

export default function App() {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);

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
      <Text style={styles.header}>Tinder Clone</Text>

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
        />
      </View>

      <Controls onLike={handleLike} onNope={handleNope} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  swiperContainer: {
    height: height * 0.65,
    width: "100%",
    marginBottom: 20,
  },
});
