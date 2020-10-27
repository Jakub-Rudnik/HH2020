import React from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageURISource,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../utilities/constants/theme";

interface TouchableIconProps {
  icon: ImageURISource;

  handleOnClick?: () => void;
  primmary?: boolean;
  reversed?: boolean;
  height?: number;
  width?: number;
}

const TouchableIcon: React.FC<TouchableIconProps> = ({
  icon,
  handleOnClick,
  height,
  primmary,
  reversed,
  width,
}) => {
  const { COLORS } = theme;

  const bgColor = primmary ? COLORS.primmary : COLORS.white;
  const handleWidth = width ?? 75;
  const handleHeight = height ?? 55;

  const handleStyles = StyleSheet.create({
    touchable: {
      width: handleWidth,
      height: handleHeight,

      borderBottomRightRadius: reversed ? 0 : 25,
      borderBottomLeftRadius: reversed ? 25 : 0,
      borderTopLeftRadius: reversed ? 25 : 0,
      borderTopRightRadius: reversed ? 0 : 25,

      backgroundColor: bgColor,
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
