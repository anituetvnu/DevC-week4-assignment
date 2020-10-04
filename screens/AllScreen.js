import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

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

const AddScreen = ({ navigation, route }) => {
  const [todoList, setTodoList] = useState(Array.from(activity));
  let tempList = Array.from({});
  const [todoBody, setTodoBody] = useState();
  const createTwoButtonAlert = (item) =>
    Alert.alert(
      "Delete",
      'Delete "' + item.content + '"',
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteAction(item.id) },
      ],
      { cancelable: false }
    );

  const deleteAction = (id) => {
    todoList.map(
      (element) => {
        if (element.id !== id) tempList.push(element);
      },
      id,
      tempList
    );
    setTodoList(tempList);
  };

  const addAction = () => {
    if (todoBody == "") return;
    const newTodo = {
      content: todoBody,
      done: false,
      id: todoList.length + 1,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody("");
  };

  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.done = todo.done === true ? false : true;
    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {todoList.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.todoItem,
                { backgroundColor: item.done ? "green" : "red" },
              ]}
              onPress={() => {
                onToggleTodo(item.id);
                navigation.navigate("Detail", item);
              }}
              onLongPress={() => createTwoButtonAlert(item)}
              key={index}
            >
              <Text style={styles.todoText}>
                {item.id}: {item.content}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View style={styles.addActionArea}>
          <TextInput
            style={styles.textInput}
            placeholder="Add activity"
            value={todoBody}
            onChangeText={(text) => setTodoBody(text)}
          />
          <TouchableOpacity style={styles.submit} onPress={() => addAction()}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: "70%",
    minHeight: 20,
    color: "white",
    borderRadius: 5,
    backgroundColor: "red",
  },
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 250,
    padding: 10,
  },
  submit: {
    backgroundColor: "lightblue",
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    width: 100,
    alignSelf: "center",
    alignItems: "center",
  },
  submitText: {
    fontSize: 20,
  },
});
