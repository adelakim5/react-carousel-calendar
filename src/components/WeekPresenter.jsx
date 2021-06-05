import React from "react";
import { Day, Week } from "./calendar.style";
import { isPossibleToCheckDate } from "../calendarChecker";

export default function WeekPresenter(props) {
  const { days, year, month, changeValue } = props;
  return (
    <Week>
      {days.map((day) => {
        const { classNames, countDay, dataSets } = day;
        const possibleDate = isPossibleToCheckDate(dataSets);
        const validDay = countDay !== 0 && countDay;
        const className = classNames?.reduce((acc, val) => acc + ` ${val}`, ``);
        return (
          <Day
            onClick={() => changeValue({ year, month, validDay, possibleDate })}
            className={className}
            possible={possibleDate}
          >
            {validDay}
          </Day>
        );
      })}
    </Week>
  );
}
