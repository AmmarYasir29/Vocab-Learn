import React, { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Card from "./components/Card";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [visblity, setVisblity] = useState(false);
  const handleAddGoal = goalTitle => {
    setGoals(currentGoal => [
      ...currentGoal,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setVisblity(false);
  };

  const onDeleteHandler = goalId => {
    setGoals(curentGoal => {
      return curentGoal.filter(goal => goal.key != goalId);
    });
  };
  const cancelHandler = () => {
    setVisblity(false);
  };
  return (
    <View style={styles.screen}>
      <Button onPress={() => setVisblity(true)} title="Add New Goal" />
      <GoalInput
        AddNewGoal={handleAddGoal}
        visble={visblity}
        oncancel={cancelHandler}
      />
      {/* <Card /> */}
      <FlatList
        keyExtractor={item => item.key}
        data={goals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.key}
            onDelete={onDeleteHandler}
            title={itemData.item.value}
          />
        )}
      />
      {/* <ScrollView>
        {goals.map(goal => {
          return (
            <Text key={goal} style={styles.GoalList}>
              {goal}
            </Text>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
