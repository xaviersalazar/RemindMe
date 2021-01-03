import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Layout, Icon } from "@ui-kitten/components";
import { Screen } from "../../../common/Screen";
import { colors } from "../../../../colors";
import styled from "styled-components";

const StyledScreenLayout = styled(Layout)`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  padding: 0 16px;
`;

const StyledAddButtonLayout = styled(Layout)`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  background: transparent;
`;

const StyledIcon = styled(Icon)`
  height: 32px;
  width: 32px;
  margin: 64px 16px 0 0;
`;

export const BillsScreen = () => (
  <Screen bg={colors.white.hex}>
    <StyledScreenLayout>
      <StyledAddButtonLayout>
        <TouchableWithoutFeedback>
          <StyledIcon fill={colors.primary.hex} name="plus-outline" />
        </TouchableWithoutFeedback>
      </StyledAddButtonLayout>
    </StyledScreenLayout>
  </Screen>
);
