import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../utilities/constants/theme";

interface RoundedProps {
  children?: React.ReactNode;
}

const handleStyles = StyleSheet.create({
  container: {
    height: 35,
    width: 115,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.COLORS.primmary,
    backgroundColor: theme.COLORS.white,

    // Shadow
    shadowColor: theme.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    fontSize: theme.SIZES.small,
    color: theme.COLORS.black,
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
