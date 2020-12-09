import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationBar } from "./BottomTabNavigationBar";
import { CalendarScreen } from "../screens/calendar/CalendarScreen";
import { BillsScreen } from "../screens/bills/BillsScreen";
import { SettingsScreen } from "../screens/settings/SettingsScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const Navigation = () => (
  <Navigator tabBar={(props) => <BottomTabNavigationBar {...props} />}>
    <Screen name="Calendar" component={CalendarScreen} />
    <Screen name="Bills" component={BillsScreen} />
    <Screen name="Settings" component={SettingsScreen} />
  </Navigator>
);

export const TabNavigator = () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
);
