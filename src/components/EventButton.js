import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const EventButton = () => {
  const _onPressIn = () => {
    alert("PressIn");
  };
  const _onPressOut = () => {
    alert("PressOut");
  };
  const _onPress = () => {
    alert("Press");
  };
  const _onLongPress = () => {
    alert("LongPress");
  };

  return (
    <TouchableOpacity style={styles.button} onPressIn={_onPressIn} onPressOut={_onPressOut} onLongPress={_onLongPress} onPress={_onPress}>
      <Text style={styles.text}>Press</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D9E5FF",
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});

export default EventButton;
