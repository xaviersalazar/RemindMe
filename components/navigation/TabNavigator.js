import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';
import styled from 'styled-components';
import { colors } from "../../colors";

const { Navigator, Screen } = createBottomTabNavigator();

const StyledScreenLayout= styled(Layout)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledTabLayout = styled(Layout)`
  position: absolute;
  bottom: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  margin-vertical: 8px;
`;

const StyledBottomNavigationTab = styled(BottomNavigationTab)`
  border-radius: 50px;
  box-shadow: 0 3px 13px rgba(${colors.primary.rgb}, 0.3);
  background: #ffffff;
  margin: 0 32px;
`;

const StyledIcon = styled(Icon)`
  color: ${colors.primary.hex};
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

const BottomTabNavigationBar = ({ navigation, state }) => {
  const CalendarIcon = (props) => (
    <StyledIcon {...props} name='calendar-outline' />
  );
  
  const BillsIcon = (props) => (
    <StyledIcon {...props} name='layers-outline' />
  );

  const SettingsIcon = (props) => (
    <StyledIcon {...props} name='options-2-outline' />
  )
  
  return (
    <StyledTabLayout>
      <StyledBottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
        appearance='noIndicator'
      >
        <StyledBottomNavigationTab icon={CalendarIcon} />
        <StyledBottomNavigationTab icon={BillsIcon} />
        <StyledBottomNavigationTab icon={SettingsIcon} />
      </StyledBottomNavigation>
    </StyledTabLayout>
  )
}

const Navigation = () => (
  <Navigator tabBar={props => <BottomTabNavigationBar {...props} />}>
    <Screen name='Calendar' component={CalendarScreen} />
    <Screen name='Bills' component={BillsScreen} />
    <Screen name='Settings' component={SettingsScreen} />
  </Navigator>
)

export const TabNavigator = () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
)