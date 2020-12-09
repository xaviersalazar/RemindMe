import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import styled from "styled-components";

const StyledScreenLayout = styled(Layout)`
  flex: 1;
  height: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const CalendarScreenTop = () => {
  return (
    <StyledScreenLayout>
      <Text category="h1">Top Calendar</Text>
    </StyledScreenLayout>
  );
};
