import React from "react";
import { View, StyleSheet } from "react-native";
import { ClipPath, Defs, Svg, Path, Image } from "react-native-svg";

interface BackgroundImageProps {
  height?: number;
  reversed?: boolean;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  reversed,
  height,
}) => {
  const handleStyle = StyleSheet.create({
    container: {
      width: "120%",
      height: height ?? "30%",
      transform: reversed
        ? [
            { scaleX: -1 },
            { translateY: -75 },
            { scale: 1.1 },
            { translateX: 15 },
          ]
        : [{ translateY: -75 }, { scale: 1.1 }, { translateX: 15 }],
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const imageBg = require("./../../../assets/images/Image1.png");

  return (
    <View style={handleStyle.container}>
      <Svg width="993.537" height="275.579" viewBox="0 0 993.537 275.579">
        <Defs>
          <ClipPath id="clipPath">
            <Path
              fill="green"
              stroke="none"
              transform="translate(-5156.5 -3465.171)"
              strokeWidth="3"
              d="M5157,3517v80s17,101,373,127,542,13,542,13,179-220-7-260S5157,3517,5157,3517Z"
            />
          </ClipPath>
        </Defs>
        <Image clipPath="url(#clipPath)" x="0" y="0" href={imageBg} />
      </Svg>
    </View>
  );
};

export default BackgroundImage;
