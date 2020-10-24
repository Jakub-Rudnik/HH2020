import React from "react";
import Scan from "../screens/Scan/Scan";
import { ScanParamList } from "./ScanParamList";
import { createStackNavigator } from "@react-navigation/stack";

interface HomeStackNavigationProps {}

const Stack = createStackNavigator<ScanParamList>();

const HomeStackNavigation: React.FC<HomeStackNavigationProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Scan"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"Scan"} component={Scan} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
