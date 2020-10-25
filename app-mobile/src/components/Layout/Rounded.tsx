import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface RoundedProps {
  children?: React.ReactNode;
}

const handleStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 115,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "green",
    shadowColor: "black",
    margin: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    color: "green",
  },
});

const Rounded: React.FC<RoundedProps> = ({ children }) => {
  return (
    <View style={handleStyles.container}>
      <Text style={handleStyles.text}>{children}</Text>
    </View>
  );
};

export default Rounded;
