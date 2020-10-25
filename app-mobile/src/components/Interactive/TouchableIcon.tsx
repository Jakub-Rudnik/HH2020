import React from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageURISource,
  TouchableOpacity,
} from "react-native";

interface TouchableIconProps {
  icon: ImageURISource;
  handleOnClick?: () => void;
  height?: number;
  width?: number;
  primmary?: boolean;
  reversed?: boolean;
}

const TouchableIcon: React.FC<TouchableIconProps> = ({
  icon,
  handleOnClick,
  height,
  primmary,
  reversed,
  width,
}) => {
  const bgColor = primmary ? "blue" : "white";
  const handleWidth = width ?? 75;
  const handleHeight = height ?? 55;

  const handleStyles = StyleSheet.create({
    touchable: {
      borderBottomLeftRadius: reversed ? 25 : 0,
      borderTopLeftRadius: reversed ? 25 : 0,
      borderTopRightRadius: reversed ? 0 : 25,
      borderBottomRightRadius: reversed ? 0 : 25,
      backgroundColor: bgColor,
      width: handleWidth,
      height: handleHeight,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
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
        <Image source={icon} />
      </View>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
