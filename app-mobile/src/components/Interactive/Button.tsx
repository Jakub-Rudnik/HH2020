import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { theme } from "../../utilities/constants/theme";

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
  const { COLORS, SIZES } = theme;

  const bgColor = primmary ? COLORS.primmary : COLORS.white;
  const fontColor = primmary ? COLORS.white : COLORS.primmary;

  const handleWidth = small ? 180 : 218;
  const handleHeight = small ? 63 : 74;

  const handleStyles = StyleSheet.create({
    touchable: {
      height: handleHeight,
      width: handleWidth,
      margin: 5,
    },
    container: {
      flex: 0.95,
      justifyContent: "center",
      alignItems: "center",

      borderColor: COLORS.primmary,
      borderRadius: 25,
      borderWidth: 1,

      backgroundColor: bgColor,
    },
    text: {
      fontSize: SIZES.h3,
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
