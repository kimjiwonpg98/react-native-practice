import React, { useState } from "react";
import { View, Text } from "react-native";
import MyButton from "./MyButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [triple, setTriple] = useState(0);

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 30, margin: 10 }}>count: {count}</Text>
      <Text style={{ fontSize: 30, margin: 10 }}>triple: {triple}</Text>
      <MyButton
        title='plus'
        onPress={() => {
          setCount(count + 1);
          setTriple(triple + count);
        }}
      />
      <MyButton
        title='minus'
        onPress={() => {
          setCount(count - 1);
          setTriple(triple - count);
        }}
      />
      <MyButton
        title='clear'
        onPress={() => {
          setCount(0);
          setTriple(0);
        }}
      />
    </View>
  );
};

export default Counter;
