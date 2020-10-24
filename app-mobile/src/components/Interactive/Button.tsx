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
  const bgColor = primmary ? "blue" : "red";
  const fontColor = primmary ? "red" : "blue";

  const handleWidth = small ? 184 : 225;
  const handleHeight = small ? 55 : 67;

  const handleStyles = StyleSheet.create({
    touchable: {
      height: handleHeight + 15,
      width: handleWidth + 15,
    },
    container: {
      height: handleHeight,
      width: handleWidth,
      backgroundColor: bgColor,
      flex: 1,
      alignSelf: "center",
      alignItems: "center",
    },
    text: {
      color: fontColor,
    },
  });

  return (
    <TouchableOpacity style={handleStyles.container} onPress={handleOnClick}>
      <View style={handleStyles.container}>
        <Text style={handleStyles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
