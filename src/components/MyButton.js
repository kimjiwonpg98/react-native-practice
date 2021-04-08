import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Btn = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.onPress();
      }}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

Btn.defaultProps = {
  title: "Button",
};

Btn.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
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

export default Btn;
