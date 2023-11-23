import React from "react";
import Svg, { Path } from 'react-native-svg';

function Icon({color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      fill="none"
      viewBox="0 0 10 16"
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M9.707.293a1 1 0 010 1.414L3.4 8l6.307 6.293a1 1 0 01-1.414 1.414L.6 8 8.293.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default Icon;
