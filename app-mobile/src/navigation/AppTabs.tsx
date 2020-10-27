/* eslint-disable react/display-name */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AppParamList } from "./AppParamList";
import AddRecipe from "./../screens/AddRecipe/AddRecipe";
import Profile from "./../screens/Profile/Profile";
import Scan from "./ScanStack";
import { IconAdd, IconScan, IconProfile } from "./../components/Layout/icons/";
import { theme } from "../utilities/constants/theme";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC<AppTabsProps> = () => {
  const {
    COLORS: { primmary },
  } = theme;

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={"Scan"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === "AddRecipe") {
              return focused ? <IconAdd handleFill={primmary} /> : <IconAdd />;
            } else if (route.name === "Scan") {
              return focused ? (
                <IconScan handleFill={primmary} />
              ) : (
                <IconScan />
              );
            } else if (route.name === "Profile") {
              return focused ? (
                <IconProfile handleFill={primmary} />
              ) : (
                <IconProfile />
              );
            }
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: primmary,
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
