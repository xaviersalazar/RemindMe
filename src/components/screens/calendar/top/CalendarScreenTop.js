import React, { useEffect } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Layout, Text } from "@ui-kitten/components";
import { Calendar } from "./Calendar";
import { colors } from "../../../../../colors";
import styled from "styled-components";
import moment from "moment";
import allActions from "../../../../redux/actions";

const StyledScreenLayout = styled(Layout)`
  width: 100%;
  flex: 1.15;
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
  color: ${colors.fontColor.hex};
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

export const CalendarScreenTop = () => {
  const dispatch = useDispatch();
  const selectedMonths = useSelector((state) => state.calendar.selectedMonths);
  const { prev, curr, next } = selectedMonths;

  useEffect(() => {
    setMonths();
  }, []);

  const setMonths = () => {
    const now = new Date();
    const monthPrev = moment(now).subtract(1, "month");
    const monthCurr = moment(now);
    const monthNext = moment(now).add(1, "month");
    const months = {
      prev: monthPrev,
      curr: monthCurr,
      next: monthNext,
    };

    dispatch(allActions.calendarActions.setSelectedMonths(months));
  };

  const onPrevMonthPressed = () => {
    const monthCurr = prev;
    const monthNext = curr;
    const monthPrev = moment(prev).subtract(1, "month");
    const months = {
      prev: monthPrev,
      curr: monthCurr,
      next: monthNext,
    };

    dispatch(allActions.calendarActions.setSelectedMonths(months));
  };

  const onNextMonthPressed = () => {
    const monthCurr = next;
    const monthPrev = curr;
    const monthNext = moment(next).add(1, "month");
    const months = {
      prev: monthPrev,
      curr: monthCurr,
      next: monthNext,
    };

    dispatch(allActions.calendarActions.setSelectedMonths(months));
  };

  return (
    <StyledScreenLayout>
      <StyledMonthsLayout>
        <StyledOtherMonthsLayout>
          <TouchableWithoutFeedback onPress={onPrevMonthPressed}>
            <StyledIcon fill={colors.fontColor.hex} name="arrow-back-outline" />
          </TouchableWithoutFeedback>
          <StyledOtherMonths category="h1">
            {moment(prev).format("MMM")}
          </StyledOtherMonths>
        </StyledOtherMonthsLayout>
        <StyledCurrMonth category="h1">
          {moment(curr).format("MMM")}
        </StyledCurrMonth>
        <StyledOtherMonthsLayout>
          <StyledOtherMonths category="h1">
            {moment(next).format("MMM")}
          </StyledOtherMonths>
          <TouchableWithoutFeedback onPress={onNextMonthPressed}>
            <StyledIcon
              fill={colors.fontColor.hex}
              name="arrow-forward-outline"
            />
          </TouchableWithoutFeedback>
        </StyledOtherMonthsLayout>
      </StyledMonthsLayout>
      <Calendar />
    </StyledScreenLayout>
  );
};
