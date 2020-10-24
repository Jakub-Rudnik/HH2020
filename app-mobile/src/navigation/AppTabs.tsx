/* eslint-disable react/display-name */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AppParamList } from "./AppParamList";
import AddRecipe from "./../screens/AddRecipe/AddRecipe";
import Profile from "./../screens/Profile/Profile";
import Scan from "./ScanStack";
import IconAdd from "./../components/Layout/icons/IconAdd";
import IconScan from "./../components/Layout/icons/IconScan";
import IconProfile from "./../components/Layout/icons/IconProfile";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC<AppTabsProps> = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={"Scan"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === "AddRecipe") {
              return focused ? <IconAdd handleFill={"#C9EAC1"} /> : <IconAdd />;
            } else if (route.name === "Scan") {
              return focused ? (
                <IconScan handleFill={"#C9EAC1"} />
              ) : (
                <IconScan />
              );
            } else if (route.name === "Profile") {
              return focused ? (
                <IconProfile handleFill={"#C9EAC1"} />
              ) : (
                <IconProfile />
              );
            }
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#C9EAC1",
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
