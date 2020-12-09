import React from "react";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import { Layout } from "@ui-kitten/components";
import { CalendarScreenTop } from "./top/CalendarScreenTop";
import { CalendarScreenBottom } from "./bottom/CalendarScreenBottom";
import { colors } from "../../../../colors";

const StyledLayout = styled(Layout)`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.65);
`;

const StyledLinearGradient = styled(LinearGradient)`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const CalendarScreen = () => (
  <StyledLinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    colors={[colors.linearGradient.one, colors.linearGradient.two]}
  >
    <StyledLayout>
      <CalendarScreenTop />
      <CalendarScreenBottom />
    </StyledLayout>
  </StyledLinearGradient>
);
