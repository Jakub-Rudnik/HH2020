import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  handleOnClick?: () => void;
  primmary?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  handleOnClick,
  primmary,
  small,
}) => {
  const bgColor = primmary ? "green" : "white";
  const fontColor = primmary ? "white" : "green";

  const handleWidth = small ? 184 : 225;
  const handleHeight = small ? 55 : 67;

  const handleStyles = StyleSheet.create({
    touchable: {
      height: handleHeight + 15,
      width: handleWidth + 15,
      margin: 5,
    },
    container: {
      flex: 0.95,
      borderRadius: 25,
      borderWidth: 3,
      borderColor: "green",
      backgroundColor: bgColor,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: fontColor,
    },
  });

  return (
    <TouchableOpacity
      style={handleStyles.touchable}
      onPress={() => {
        if (handleOnClick) {
          handleOnClick();
        }
      }}
    >
      <View style={handleStyles.container}>
        <Text style={handleStyles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
