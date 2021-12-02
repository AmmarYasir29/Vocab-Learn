import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enterGoals, setEnterGoals] = useState("");
  const addNewGoalHandler = () => {
    props.AddNewGoal(enterGoals);
    setEnterGoals("");
  };
  return (
    <Modal visible={props.visble} animationType="slide">
      <View style={styles.addTarget}>
        <Text style={styles.haeder}> Vecabiulary remember </Text>
        <Text style={styles.paragraf}> Add new word to stay remember </Text>
        <TextInput
          style={styles.input}
          placeholder="New word"
          value={enterGoals}
          onChangeText={enterText => setEnterGoals(enterText)}
        />
        <View style={styles.button}>
          <View style={styles.btn}>
            <Button title="Add" onPress={addNewGoalHandler} />
          </View>
          <View style={styles.btn}>
            <Button title="CANCEL" onPress={props.oncancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addTarget: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
  },
  btn: {
    width: "40%",
  },
  haeder: {
    position: "absolute",
    top: 80,
    fontSize: 20,
  },
  paragraf: {
    position: "absolute",
    top: 110,
    fontSize: 18,
  },
});
export default GoalInput;
