import React from "react";
import { Text } from "react-native";
import { BackgroundImage, Block } from "../../components/Layout";

interface ResultsProps {}

const Results: React.FC<ResultsProps> = () => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage reversed />
      <Block flexDirection={"column"}>
        <Text>Oto co dla ciebie znaleźmismy!</Text>
      </Block>
    </Block>
  );
};

export default Results;
