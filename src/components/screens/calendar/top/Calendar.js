import React from "react";
import { Calendar as RNCalendar } from "react-native-calendars";
import { Layout } from "@ui-kitten/components";
import { colors } from "../../../../../colors";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  flex: 1;
  height: 100%;
  width: 100%;
  background: transparent;
  padding: 8px;
`;

export const Calendar = () => {
  return (
    <StyledLayout>
      <RNCalendar
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          width: "100%",
          backgroundColor: `${colors.primary.hex}`,
        }}
        onDayPress={(day) => console.log(day)}
        hideArrows={true}
        disableArrowLeft={true}
        disableArrowRight={true}
        markingType={"custom"}
        theme={{
          backgroundColor: `${colors.primary.hex}`,
          calendarBackground: `${colors.primary.hex}`,
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 10,
          todayTextColor: "#ffffff",
          selectedDayBackgroundColor: "#ffffff",
          textSectionTitleColor: "#ffffff",
          dayTextColor: "#ffffff",
          monthTextColor: "#ffffff",
          textDisabledColor: `${colors.fontColor}`,
          arrowColor: "#ffffff",
          "stylesheet.calendar.header": {
            monthText: {
              display: "none",
            },
            week: {
              marginTop: 4,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: `${colors.primary.hex}`,
            },
          },
        }}
      />
    </StyledLayout>
  );
};
