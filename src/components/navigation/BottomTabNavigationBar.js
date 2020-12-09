import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Icon,
} from "@ui-kitten/components";
import styled from "styled-components";
import allActions from "../../redux/actions";
import { colors } from "../../../colors";

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
  box-shadow: ${(props) =>
    props.isSelected
      ? `0 3px 13px rgba(${colors.primary.rgb}, 0.3)`
      : "0 0 0 rgba(0, 0, 0, 0)"};
  background: ${(props) => (props.isSelected ? "#ffffff" : "transparent")};
  margin: 0 32px;
`;

const StyledIcon = styled(Icon)`
  color: ${colors.primary.hex};
`;

export const BottomTabNavigationBar = ({ navigation, state }) => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(
    (reduxState) => reduxState.tabNavigation.selectedTab
  );

  const CalendarIcon = (props) => (
    <StyledIcon {...props} name="calendar-outline" />
  );

  const BillsIcon = (props) => <StyledIcon {...props} name="layers-outline" />;

  const SettingsIcon = (props) => (
    <StyledIcon {...props} name="options-2-outline" />
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
        />
        <StyledBottomNavigationTab
          icon={BillsIcon}
          isSelected={selectedIndex === 1}
        />
        <StyledBottomNavigationTab
          icon={SettingsIcon}
          isSelected={selectedIndex === 2}
        />
      </StyledBottomNavigation>
    </StyledTabLayout>
  );
};
