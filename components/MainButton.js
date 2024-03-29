import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.75}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
