import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import styled from "styled-components";

const StyledScreenLayout = styled(Layout)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

export const CalendarScreenBottom = () => (
  <StyledScreenLayout>
    <Text category="h1">Bottom Calendar</Text>
  </StyledScreenLayout>
);
