import React from "react";
import { Screen } from "../../../common/Screen";
import { CalendarScreenTop } from "./top/CalendarScreenTop";
import { CalendarScreenBottom } from "./bottom/CalendarScreenBottom";

export const CalendarScreen = () => (
  <Screen>
    <CalendarScreenTop />
    <CalendarScreenBottom />
  </Screen>
);
