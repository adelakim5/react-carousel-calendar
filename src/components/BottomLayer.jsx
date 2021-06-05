import React, { useEffect } from "react";
import styled from "styled-components";

const BottomLayer = ({ children, options, setShow }) => {
  const { top, left, width, height } = options;

  const closeAllLayer = (event) => {
    const $target = event.target;
    console.log($target);
    console.log("hi");
    const $layer = $target.closest(".layer");
    const $searcher = $target.closest(".searcher");
    if ($layer !== null || $searcher !== null) return;
    setShow(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAllLayer);
    return () => document.body.removeEventListener("click", closeAllLayer);
  }, []);

  return (
    <Layer className="layer" width={width} height={height}>
      {children}
    </Layer>
  );
};

const Layer = styled.ul`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: #fff;
  z-index: 10;
  border-radius: 40px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
`;

export default BottomLayer;
