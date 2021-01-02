import React from "react";
import { Text } from "@ui-kitten/components";
import { Screen } from "../../../common/Screen";
import { colors } from "../../../../colors";

export const BillsScreen = () => (
  <Screen bg={colors.white.hex}>
    <Text category="h1">Bills</Text>
  </Screen>
);
