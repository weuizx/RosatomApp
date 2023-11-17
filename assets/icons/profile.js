import React from "react";
import Svg, { Path } from 'react-native-svg';

function Icon({color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      viewBox="0 0 34 34"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25.5 28.334a8.5 8.5 0 10-17 0M17 19.833A5.667 5.667 0 1017 8.5a5.667 5.667 0 000 11.333z"
      ></Path>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 31.167c7.824 0 14.167-6.343 14.167-14.167S24.824 2.834 17 2.834 2.834 9.175 2.834 17c0 7.824 6.342 14.167 14.166 14.167z"
      ></Path>
    </Svg>
  );
}

export default Icon;
