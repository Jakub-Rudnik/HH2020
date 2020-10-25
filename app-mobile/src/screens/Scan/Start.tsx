import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Interactive";
import { BackgroundImage, Block } from "../../components/Layout";
import { ScanStackNavProps } from "../../navigation/ScanParamList";

const Start = ({ navigation }: ScanStackNavProps<"Start">): JSX.Element => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage reversed />
      <Block flexDirection={"column"}>
        <Text>Wybierz metodę szukania swoich produktów:</Text>
        <Button
          handleOnClick={() => {
            navigation.navigate("Scan");
          }}
          primmary
          text={"Zrób zdjęcie"}
        />
        <Button text={"Wybierz z listy"} />
      </Block>
    </Block>
  );
};

export default Start;
