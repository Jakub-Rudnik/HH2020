import React from "react";
import { View, StyleSheet } from "react-native";

interface BlockProps {
  children: React.ReactNode;
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  backgroundColor?: string;
  flex?: number;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

const Block: React.FC<BlockProps> = ({
  children,
  alignItems,
  backgroundColor,
  flex,
  flexDirection,
  justifyContent,
}) => {
  const handleAlignItems = alignItems ?? "center";
  const handleBackgroundColor = backgroundColor ?? "transparent";
  const handleFlex = flex ?? 1;
  const handleflexDirection = flexDirection ?? "row";
  const handleJustifyContent = justifyContent ?? "center";

  const handleStyles = StyleSheet.create({
    container: {
      alignItems: handleAlignItems,
      backgroundColor: handleBackgroundColor,
      flex: handleFlex,
      flexDirection: handleflexDirection,
      justifyContent: handleJustifyContent,
    },
  });

  return <View style={handleStyles.container}>{children}</View>;
};

export default Block;
