import React from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import { BackgroundImage, Block } from "../components/Layout";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage reversed />
      <Block flexDirection={"column"}>
        <Text style={styles.text}>Ładowanie</Text>
        <ActivityIndicator size="large" color={"green"} />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 25,
    fontSize: 18,
  },
});

export default Loading;
