import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar as RNCalendar } from "react-native-calendars";
import { Layout } from "@ui-kitten/components";
import { colors } from "../../../../../colors";
import allActions from "../../../../redux/actions";
import moment from "moment";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  flex: 1;
  height: 100%;
  width: 100%;
  background: transparent;
  padding: 8px;
`;

export const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.calendar.selectedDay);

  useEffect(() => {
    setCurrentDay();
  }, []);

  const setCurrentDay = () => {
    const now = new Date();
    const currDay = moment(now).format("YYYY-MM-DD");

    dispatch(allActions.calendarActions.setSelectedDay(currDay));
  };

  const setDay = (day) => {
    const formattedDay = moment(day.dateString).format("YYYY-MM-DD");

    dispatch(allActions.calendarActions.setSelectedDay(formattedDay));
  };

  return (
    <StyledLayout>
      <RNCalendar
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          width: "100%",
          backgroundColor: `${colors.primary.hex}`,
        }}
        onDayPress={(day) => setDay(day)}
        hideArrows={true}
        disableArrowLeft={true}
        disableArrowRight={true}
        markingType={"custom"}
        markedDates={{
          [selectedDay]: {
            customStyles: {
              container: {
                backgroundColor: "#ffffff",
              },
              text: {
                color: `${colors.fontColor.hex}`,
              },
            },
          },
        }}
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
          textDisabledColor: `${colors.fontColor.hex}`,
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
