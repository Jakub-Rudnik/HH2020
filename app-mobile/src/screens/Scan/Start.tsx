import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Interactive";
import { BackgroundImage, Block } from "../../components/Layout";

interface StartProps {}

const Start: React.FC<StartProps> = () => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage reversed />
      <Block flexDirection={"column"}>
        <Text>Wybierz metodę szukania swoich produktów:</Text>
        <Button primmary text={"Zrób zdjęcie"} />
        <Button text={"Wybierz z listy"} />
      </Block>
    </Block>
  );
};

export default Start;
