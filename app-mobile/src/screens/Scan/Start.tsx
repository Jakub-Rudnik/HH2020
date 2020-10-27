import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "../../components/Interactive";
import { BackgroundImage, Block } from "../../components/Layout";
import { ScanStackNavProps } from "../../navigation/ScanParamList";
import { theme } from "../../utilities/constants/theme";

const handleStyles = StyleSheet.create({
  text: {
    fontSize: theme.SIZES.h2,
    textAlign: "center",
    margin: 10,
  },
});

const Start = ({ navigation }: ScanStackNavProps<"Start">): JSX.Element => {
  return (
    <Block flexDirection={"column"} justifyContent={"space-between"}>
      <BackgroundImage reversed />
      <Block flexDirection={"column"} padding={10}>
        <Text style={handleStyles.text}>
          Wybierz metodę szukania swoich produktów:
        </Text>

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
