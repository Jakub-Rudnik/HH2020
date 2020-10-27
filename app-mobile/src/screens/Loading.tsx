import React from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import { BackgroundImage, Block } from "../components/Layout";
import { theme } from "../utilities/constants/theme";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage reversed />
      <Block flexDirection={"column"}>
        <Text style={styles.text}>Ładowanie</Text>
        <ActivityIndicator size="large" color={theme.COLORS.primmary} />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 25,
    fontSize: theme.SIZES.regular,
  },
});

export default Loading;
