import React from "react";
import Svg, { Path } from 'react-native-svg';

function Icon({color}) {
  return (
    <Svg 
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill={color}
      viewBox="0 0 34 34"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25.5 28.333V14.167M17 28.333V5.667M8.5 28.334v-8.5"
      ></Path>
    </Svg>
  );
}

export default Icon;
