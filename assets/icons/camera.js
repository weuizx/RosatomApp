import React from "react";
import Svg, { Path } from 'react-native-svg';

function Camera(color) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.667 2.667H6.333l-1.666 2h-2A1.333 1.333 0 001.333 6v6a1.333 1.333 0 001.334 1.334h10.666A1.333 1.333 0 0014.667 12V6a1.333 1.333 0 00-1.334-1.333h-2l-1.666-2z"
      ></Path>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 10.667a2 2 0 100-4 2 2 0 000 4z"
      ></Path>
    </Svg>
  );
}

export default Camera;