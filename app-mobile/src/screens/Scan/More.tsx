import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Interactive";
import { BackgroundImage, Block } from "../../components/Layout";

interface MoreProps {}

const More: React.FC<MoreProps> = () => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage reversed />
      <Block flexDirection={"column"}>
        <Text>Czy chcesz coś jeszcze dodać?</Text>
        <Button primmary text={"Tak"} />
        <Button text={"Nie, szukaj przepisu"} />
      </Block>
    </Block>
  );
};

export default More;
