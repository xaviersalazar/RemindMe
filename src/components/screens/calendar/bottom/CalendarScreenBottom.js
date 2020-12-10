import React from "react";
import { useSelector } from "react-redux";
import { Layout, Text } from "@ui-kitten/components";
import moment from "moment";
import styled from "styled-components";
import { colors } from "../../../../../colors";

const StyledScreenLayout = styled(Layout)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

const StyledMonth = styled(Text)`
  margin-top: 12px;
  color: rgba(${colors.fontColor.rgb}, 0.2);
`;

export const CalendarScreenBottom = () => {
  const selectedDay = useSelector((state) => state.calendar.selectedDay);

  return (
    <StyledScreenLayout>
      <StyledMonth category="h1">
        {moment(selectedDay).format("Do")}
      </StyledMonth>
    </StyledScreenLayout>
  );
};
