import React from "react";

function NavigateBeforeIcon({ handler }) {
  return (
    <div onClick={handler}>
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 13L1 7L7 1"
          stroke="#111111"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default NavigateBeforeIcon;
