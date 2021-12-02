import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity>
      {/* TODO: onPress={ Go to detail page */}
      <View style={styles.GoalList}>
        <Text>{props.title}</Text>
        <Text onPress={props.onDelete.bind(this, props.id)}>Del</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  GoalList: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default GoalItem;
