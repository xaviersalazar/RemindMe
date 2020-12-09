import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Layout, Text } from '@ui-kitten/components';
import { BottomTabNavigationBar } from './BottomTabNavigationBar';
import styled from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

const StyledScreenLayout = styled(Layout)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CalendarScreen = () => (
  <StyledScreenLayout>
    <Text category='h1'>Calendar Screen</Text>
  </StyledScreenLayout>
);

const BillsScreen = () => (
  <StyledScreenLayout>
    <Text category='h1'>Bills Screen</Text>
  </StyledScreenLayout>
);

const SettingsScreen = () => (
  <StyledScreenLayout>
    <Text category='h1'>Settings Screen</Text>
  </StyledScreenLayout>
);

const Navigation = () => (
  <Navigator tabBar={(props) => <BottomTabNavigationBar {...props} />}>
    <Screen name='Calendar' component={CalendarScreen} />
    <Screen name='Bills' component={BillsScreen} />
    <Screen name='Settings' component={SettingsScreen} />
  </Navigator>
);

export const TabNavigator = () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
);
