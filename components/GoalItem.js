import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.GoalList}>
        <Text>{props.title}</Text>
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
  },
});
export default GoalItem;
