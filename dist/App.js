import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar";
import GlobalStyle from "./globalStyle";

function App({
  date,
  setDate,
  style,
  transitionDefault = 500
}) {
  const panelWidth = 375;
  const [show, setShow] = useState(false);

  const showCalendar = event => {
    event.stopPropagation();
    setShow(!show);
  };

  const changeValue = ({
    year,
    month,
    validDay,
    possibleDate
  }) => {
    if (!validDay || !possibleDate) return;
    setDate(`${year}년 ${month}월 ${validDay}일`);
  };

  return /*#__PURE__*/React.createElement(CalendarContainer, {
    style: style
  }, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: date,
    onClick: showCalendar
  }), show ? /*#__PURE__*/React.createElement(Calendar, {
    transitionDefault,
    panelWidth,
    changeValue,
    setShow
  }) : null);
}

const CalendarContainer = styled.div``;
export default App;