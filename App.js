import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import CompleteScreen from "./screens/CompleteScreen";
import AddStackScreen from "./screens/AllStackScreen";
import ActiveScreen from "./screens/ActiveScreen";

const Tab = createBottomTabNavigator();

const routeIcons = {
  Add: "ios-add-circle-outline",
  Complete: "ios-done-all",
  Active: "ios-list",
};

const activity = [
  {
    id: 1,
    content: "run",
    done: false,
  },
  {
    id: 2,
    content: "walk rqegb qregbregq5e btewrbtywbe yw",
    done: false,
  },
  {
    id: 3,
    content: "sleep",
    done: false,
  },
  {
    id: 4,
    content: "wake up",
    done: false,
  },
  {
    id: 5,
    content: "eat",
    done: true,
  },
  {
    id: 6,
    content: "study",
    done: true,
  },
];

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        initialRouteName="Add"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={routeIcons[route.name]}
              size={24}
              color={focused ? "blue" : "grey"}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen name="Complete" component={CompleteScreen} />
        <Tab.Screen name="Add" component={AddStackScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
