import React from "react";
import styled from "styled-components";
import { Layout } from "@ui-kitten/components";
import { colors } from "../../colors";

const StyledLayout = styled(Layout)`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${colors.primary.hex};
`;

export const Screen = ({ children }) => <StyledLayout>{children}</StyledLayout>;
