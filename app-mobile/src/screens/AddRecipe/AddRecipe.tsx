import React from "react";
import { Text } from "react-native";
import { BackgroundImage, Block } from "../../components/Layout";

interface AddRecipeProps {}

const AddRecipe: React.FC<AddRecipeProps> = () => {
  return (
    <Block>
      <BackgroundImage reversed />
      <Text>123456789</Text>
    </Block>
  );
};

export default AddRecipe;
