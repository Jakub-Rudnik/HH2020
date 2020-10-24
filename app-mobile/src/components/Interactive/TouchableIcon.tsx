import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

interface TouchableIconProps {
  icon?: string;
  handleOnPress?: () => void;
  height?: number;
  width?: number;
  primmary?: boolean;
}

const TouchableIcon: React.FC<TouchableIconProps> = ({
  handleOnPress,
  height,
  primmary,
  width,
}) => {
  const bgColor = primmary ? "blue" : "red";
  //   const iconColor = primmary ? "red" : "blue";

  const handleWidth = width ?? 50;
  const handleHeight = height ?? 50;

  const handleStyles = StyleSheet.create({
    container: {
      width: handleWidth,
      height: handleHeight,
      backgroundColor: "red",
    },
    touchable: {
      backgroundColor: bgColor,
      flex: 1,
      alignSelf: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={handleStyles.container}>
      <TouchableOpacity
        style={handleStyles.touchable}
        onPress={() => {
          if (handleOnPress) {
            handleOnPress();
          }
        }}
      >
        <Text>123</Text>
        {/* svg */}
      </TouchableOpacity>
    </View>
  );
};

export default TouchableIcon;
