import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Interactive";
import { BackgroundImage, Block } from "../../components/Layout";
import { ScanStackNavProps } from "../../navigation/ScanParamList";

const Accept = ({ route }: ScanStackNavProps<"Accept">): JSX.Element => {
  const predictionItems = route.params;

  console.log("predictionItems");
  console.log(predictionItems);

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
