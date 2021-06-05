import React from "react";
import { CalendarBox, CalendarList, CalendarTitle, Dates, DayName, Week } from "./calendar.style";
import { loadYYMM } from "../calendarDate";
import WeekPresenter from "./WeekPresenter";

function MonthsPresenter(props) {
  const { calendarQueue, x, transitionValue, changeValue } = props;

  return (
    <CalendarList x={x} transitionValue={transitionValue}>
      {calendarQueue.map((date) => {
        const dateTable = loadYYMM(date);
        const year = date.getFullYear(),
          month = date.getMonth() + 1;

        return (
          <CalendarBox>
            <CalendarTitle>
              {year}년 {month}월
            </CalendarTitle>
            <Week>
              {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                <DayName>{day}</DayName>
              ))}
            </Week>
            <Dates>
              {dateTable.map((days) => (
                <WeekPresenter {...{ days, year, month, changeValue }} />
              ))}
            </Dates>
          </CalendarBox>
        );
      })}
    </CalendarList>
  );
}

export default MonthsPresenter;
