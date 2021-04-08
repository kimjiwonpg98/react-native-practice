import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Btn from "./components/MyButton";
import Counter from "./components/Counter";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Btn component</Text>
      <Btn title='Button' onPress={() => alert("어서오고")} />
      <Btn title='Children' onPress={() => alert("반갑고")}>
        Children
      </Btn> */}
      {/* <Btn onPress={() => alert("하위")} /> */}
      <Counter />
      <EventButton />
      <EventInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});
