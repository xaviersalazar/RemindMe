import React from "react";
import { Screen } from "../../../common/Screen";
import { CalendarScreenTop } from "./top/CalendarScreenTop";
import { CalendarScreenBottom } from "./bottom/CalendarScreenBottom";
import { colors } from "../../../../colors";

export const CalendarScreen = () => (
  <Screen bg={colors.primary.hex}>
    <CalendarScreenTop />
    <CalendarScreenBottom />
  </Screen>
);
