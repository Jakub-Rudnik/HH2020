import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 25,
    fontSize: 18,
  },
});

export default Loading;
