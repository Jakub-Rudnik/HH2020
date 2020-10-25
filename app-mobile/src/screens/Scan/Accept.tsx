import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Interactive";
import { BackgroundImage, Block } from "../../components/Layout";

interface AcceptProps {}

const Accept: React.FC<AcceptProps> = () => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage />
      <Block flexDirection={"column"}>
        <Text>Potwierdź!</Text>
        <Text>Czy napewno zeskanowałeś swoje produkty:</Text>
        <Button text={"Dalej"} small />
      </Block>
    </Block>
  );
};

export default Accept;
