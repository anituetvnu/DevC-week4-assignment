import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddScreen from "./AllScreen";
import DetailScreen from "./DetailScreen";

const Stack = createStackNavigator();

const AddStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Add">
      <Stack.Screen name="Add" component={AddScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AddStackScreen;

const styles = StyleSheet.create({});
