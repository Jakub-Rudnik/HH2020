/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AppParamList } from "./AppParamList";
import { TouchableIcon } from "../components/Interactive";
import AddRecipe from "./../screens/AddRecipe/AddRecipe";
import Profile from "./../screens/Profile/Profile";
import Scan from "./ScanStack";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

const iconAddRecipe = require("../../assets/icons/Border/AddRecipeBorder.svg");
const iconAddRecipeFilled = require("../../assets/icons/Filled/AddRecipe.svg");
const iconScan = require("../../assets/icons/Border/ScanBorder.svg");
const iconScanFilled = require("../../assets/icons/Filled/Scan.svg");
const iconProfile = require("../../assets/icons/Border/ProfileBorder.svg");
const iconProfileFilled = require("../../assets/icons/Filled/Profile.svg");

const AppTabs: React.FC<AppTabsProps> = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={"Scan"}
        tabBarOptions={{
          activeTintColor: "lightblue",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="AddRecipe" component={AddRecipe} />
        <Tabs.Screen name="Scan" component={Scan} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;
