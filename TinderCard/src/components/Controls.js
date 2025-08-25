import React from "react";
import { View, Button } from "react-native";

const Controls = ({ onLike, onNope }) => (
  <View style={{ flexDirection: "row", marginTop: 20, gap: 10 }}>
    <Button title="Nope" onPress={onNope} />
    <Button title="Like" onPress={onLike} />
  </View>
);

export default Controls;
