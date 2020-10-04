import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.stateText}>
        {route.params?.id}: {route.params?.done ? "Done" : "Active"}
      </Text>
      <Text style={styles.todoText}>{route.params?.content}</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          let id = route.params?.id;
          navigation.navigate("Add", id);
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stateText: {
    fontSize: 25,
  },
  todoText: {
    fontSize: 30,
    width: "70%",
    textAlign: "center",
  },
  backButton: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "lightblue",
    margin: 10,
    width: 80,
    justifyContent: "center",
  },
});
