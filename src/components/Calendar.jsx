import React, { useEffect, useState } from "react";
import { getInitialDate } from "../calendarDate";
import BottomLayer from "./BottomLayer";
import MonthsPresenter from "./MonthsPresenter";
import NavigateAfterIcon from "./NavigateAfterIcon";
import NavigateBeforeIcon from "./NavigateBeforeIcon";
import { LayerContentContainer, CalendarContainer, CarouselBox } from "./calendar.style";

function Calendar({ transitionDefault, panelWidth, changeValue, setShow }) {
  const [calendarQueue, setCalendarQueue] = useState(getInitialDate());

  const [x, setX] = useState(-panelWidth);
  const [, setMoving] = useState(false);
  const [transitionValue, setTransitionValue] = useState(`${transitionDefault}ms`);
  const [addedDate, setAddedDate] = useState(null);
  const [lastDirection, setLastDirection] = useState(0);

  useEffect(() => {
    if (addedDate === null) return;

    const timer = setTimeout(() => {
      const currDate =
        lastDirection < 0 ? calendarQueue[0] : calendarQueue[calendarQueue.length - 1];
      const newCalendarQueue = [...calendarQueue];
      const newDate = new Date();
      newDate.setFullYear(currDate.getFullYear(), currDate.getMonth() + lastDirection, 1);

      if (lastDirection < 0) {
        newCalendarQueue.unshift(newDate);
        newCalendarQueue.pop();
      } else {
        newCalendarQueue.push(newDate);
        newCalendarQueue.shift();
      }

      setCalendarQueue(newCalendarQueue);
      setX(-panelWidth);
      setTransitionValue("0");
    }, transitionDefault);

    return () => clearTimeout(timer);
  }, [addedDate]);

  const handleCalendarButton = (direction) => {
    setX((prevX) => prevX - direction * panelWidth);
    setMoving(true);
    setLastDirection(direction);
    if (transitionValue === "0") setTransitionValue(`${transitionDefault}ms`);
    const currDate = direction < 0 ? calendarQueue[0] : calendarQueue[calendarQueue.length - 1];
    const newDate = new Date();
    newDate.setFullYear(currDate.getFullYear(), currDate.getMonth() + direction, 1);
    setAddedDate(currDate);
  };

  // const handleCheckDate = (event, dataSets, possibleDate) => {

  // }

  return (
    <BottomLayer
      setShow={setShow}
      options={{
        width: 916,
        top: 90,
        left: 0,
        height: 538,
      }}
    >
      <LayerContentContainer>
        <CalendarContainer>
          <div>
            <NavigateBeforeIcon handler={() => handleCalendarButton(-1)} />
          </div>
          <CarouselBox>
            <MonthsPresenter {...{ x, calendarQueue, transitionValue, changeValue }} />
          </CarouselBox>
          <div>
            <NavigateAfterIcon handler={() => handleCalendarButton(1)} />
          </div>
        </CalendarContainer>
      </LayerContentContainer>
    </BottomLayer>
  );
}

export default Calendar;
