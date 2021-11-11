import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enterGoals, setEnterGoals] = useState("");
  const addNewGoalHandler = () => {
    props.AddNewGoal(enterGoals);
    setEnterGoals("");
  };
  return (
    <Modal visible={props.visble} animationType="slide">
      <View style={styles.addTarget}>
        <TextInput
          style={styles.input}
          placeholder="Coures Goal"
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
});
export default GoalInput;
