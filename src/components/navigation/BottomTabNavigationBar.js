import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Icon,
  Text,
} from "@ui-kitten/components";
import styled from "styled-components";
import allActions from "../../redux/actions";
import { colors } from "../../../colors";

const StyledTabLayout = styled(Layout)`
  position: absolute;
  bottom: 16px;
  margin: 0;
  padding: 0 16px;
  width: 100%;
  background: transparent;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  margin-vertical: 8px;
  border-radius: 50px;
  border-color: transparent;
  border: none;
  box-shadow: ${(props) =>
    props.selectedIndex === 0
      ? "0 0 0 rgba(0,0,0,0)"
      : `0 3px 13px rgba(81, 150, 255, 0.3)`};
  background: #ffffff;
`;

const StyledBottomNavigationTab = styled(BottomNavigationTab)`
  flex: 1;
  flex-direction: row;
`;

const StyledTabText = styled(Text)`
  margin-left: 8px;
`;

export const BottomTabNavigationBar = ({ navigation, state }) => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(
    (reduxState) => reduxState.tabNavigation.selectedTab
  );

  const CalendarIcon = (props) => (
    <Icon
      {...props}
      fill={selectedIndex === 0 ? colors.primary.hex : colors.fontColor.hex}
      name="calendar-outline"
    />
  );

  const BillsIcon = (props) => (
    <Icon
      {...props}
      fill={selectedIndex === 1 ? colors.primary.hex : colors.fontColor.hex}
      name="layers-outline"
    />
  );

  const SettingsIcon = (props) => (
    <Icon
      {...props}
      fill={selectedIndex === 2 ? colors.primary.hex : colors.fontColor.hex}
      name="settings-2-outline"
    />
  );

  const onSelectTab = (index) => {
    dispatch(allActions.tabNavigationActions.setSelectedTab(index));
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <StyledTabLayout>
      <StyledBottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => onSelectTab(index)}
        appearance="noIndicator"
      >
        <StyledBottomNavigationTab
          icon={CalendarIcon}
          isSelected={selectedIndex === 0}
          title={(evaProps) =>
            selectedIndex === 0 && (
              <StyledTabText {...evaProps}>Calendar</StyledTabText>
            )
          }
        />
        <StyledBottomNavigationTab
          icon={BillsIcon}
          isSelected={selectedIndex === 1}
          title={(evaProps) =>
            selectedIndex === 1 && (
              <StyledTabText {...evaProps}>Bills</StyledTabText>
            )
          }
        />
        <StyledBottomNavigationTab
          icon={SettingsIcon}
          isSelected={selectedIndex === 2}
          title={(evaProps) =>
            selectedIndex === 2 && (
              <StyledTabText {...evaProps}>Settings</StyledTabText>
            )
          }
        />
      </StyledBottomNavigation>
    </StyledTabLayout>
  );
};
