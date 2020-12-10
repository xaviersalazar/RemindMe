import React, { useEffect, useState } from "react";
import { Icon, Layout, Text } from "@ui-kitten/components";
import { Calendar } from "./Calendar";
import { colors } from "../../../../../colors";
import styled from "styled-components";
import moment from "moment";

const StyledScreenLayout = styled(Layout)`
  height: 50%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
`;

const StyledMonthsLayout = styled(Layout)`
  flex-direction: row;
  justify-content: center;
  background: transparent;
  margin-top: 48px;
`;

const StyledMonth = styled(Text)`
  flex: 2;
  text-align: center;
  color: #ffffff;
`;

const StyledCurrMonth = styled(StyledMonth)`
  font-size: 64px;
`;

const StyledOtherMonths = styled(StyledMonth)`
  flex: 1;
  font-size: 24px;
  margin: auto 0;
  color: ${colors.fontColor};
`;

const StyledOtherMonthsLayout = styled(Layout)`
  flex: 1;
  flex-direction: row;
  background: transparent;
  padding: 0 8px;
`;

const StyledIcon = styled(Icon)`
  flex: 1;
  height: 24px;
  width: 24px;
  margin: auto 0;
`;

const StyledYear = styled(Text)`
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 10px;
  color: #ffffff;
`;

export const CalendarScreenTop = () => {
  const [prevMonth, setPrevMonth] = useState(null);
  const [currMonth, setCurrMonth] = useState(null);
  const [nextMonth, setNextMonth] = useState(null);
  const [year, setYear] = useState(null);

  useEffect(() => {
    setMonthAndYear();
  });

  const setMonthAndYear = () => {
    const now = new Date();
    const monthPrev = moment(now).subtract(1, "month").format("MMM");
    const monthCurr = moment(now).format("MMM");
    const monthNext = moment(now).add(1, "month").format("MMM");
    const currYear = moment(now).get("year").toString();

    setPrevMonth(monthPrev);
    setCurrMonth(monthCurr);
    setNextMonth(monthNext);
    setYear(currYear);
  };

  return (
    <StyledScreenLayout>
      <StyledMonthsLayout>
        <StyledOtherMonthsLayout>
          <StyledIcon fill={colors.fontColor} name="arrow-back-outline" />
          <StyledOtherMonths category="h1">{prevMonth}</StyledOtherMonths>
        </StyledOtherMonthsLayout>
        <StyledCurrMonth category="h1">{currMonth}</StyledCurrMonth>
        <StyledOtherMonthsLayout>
          <StyledOtherMonths category="h1">{nextMonth}</StyledOtherMonths>
          <StyledIcon fill={colors.fontColor} name="arrow-forward-outline" />
        </StyledOtherMonthsLayout>
      </StyledMonthsLayout>
      <StyledYear category="h1">{year}</StyledYear>
      <Calendar />
    </StyledScreenLayout>
  );
};
