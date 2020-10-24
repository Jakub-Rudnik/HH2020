import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Interactive";
import { Block } from "../../components/Layout";

interface StartProps {}

const Start: React.FC<StartProps> = () => {
  return (
    <Block flexDirection={"column"} justifyContent={"center"}>
      <Text>Wybierz metodę szukania swoich produktów:</Text>
      <Button primmary text={"Zrób zdjęcie"} />
      <Button text={"Wybierz z listy"} />
    </Block>
  );
};

export default Start;
