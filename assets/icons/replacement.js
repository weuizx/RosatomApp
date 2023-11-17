import React from "react";
import Svg, { Path } from 'react-native-svg';

function Icon({color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.5 10A7.5 7.5 0 0010 2.5a8.125 8.125 0 00-5.617 2.283L2.5 6.667"
      ></Path>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.5 2.5v4.167h4.167M2.5 10a7.5 7.5 0 007.5 7.5 8.125 8.125 0 005.617-2.283l1.883-1.884"
      ></Path>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.333 13.334H17.5V17.5"
      ></Path>
    </Svg>
  );
}

export default Icon;
