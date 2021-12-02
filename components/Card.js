import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <Text>The word</Text>
      <Text> translted word</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
export default Card;
