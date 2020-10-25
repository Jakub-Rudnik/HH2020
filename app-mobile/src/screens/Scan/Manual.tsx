import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Interactive";
import { BackgroundImage, Block } from "../../components/Layout";

interface ManualProps {}

const Manual: React.FC<ManualProps> = () => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage />
      <Block flexDirection={"column"}>
        <Text>Zaznacz składniki, które posiadasz:</Text>
        <Button text={"Dalej"} small />
      </Block>
    </Block>
  );
};

export default Manual;
