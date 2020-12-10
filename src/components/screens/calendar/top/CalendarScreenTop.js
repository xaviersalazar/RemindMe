import React, { useEffect, useState } from "react";
import { Layout, Text } from "@ui-kitten/components";
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
  flex: 1;
  text-align: center;
`;

const StyledCurrMonth = styled(StyledMonth)`
  font-size: 64px;
`;

const StyledOtherMonths = styled(StyledMonth)`
  font-size: 24px;
  margin: auto 0;
`;

export const CalendarScreenTop = () => {
  const [prevMonth, setPrevMonth] = useState(null);
  const [currMonth, setCurrMonth] = useState(null);
  const [nextMonth, setNextMonth] = useState(null);

  useEffect(() => {
    getMonths();
  });

  const getMonths = () => {
    const now = new Date();
    const prevMonth = moment(now).subtract(1, "month").format("MMM");
    const currMonth = moment(now).format("MMM");
    const nextMonth = moment(now).add(1, "month").format("MMM");

    setPrevMonth(prevMonth);
    setCurrMonth(currMonth);
    setNextMonth(nextMonth);
  };

  return (
    <StyledScreenLayout>
      <StyledMonthsLayout>
        <StyledOtherMonths category="h1">{prevMonth}</StyledOtherMonths>
        <StyledCurrMonth category="h1">{currMonth}</StyledCurrMonth>
        <StyledOtherMonths category="h1">{nextMonth}</StyledOtherMonths>
      </StyledMonthsLayout>
    </StyledScreenLayout>
  );
};
