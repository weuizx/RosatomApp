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
        d="M4.25 9.917V7.083A2.833 2.833 0 017.083 4.25h2.834M24.084 4.25h2.833a2.833 2.833 0 012.833 2.833v2.834M29.75 24.084v2.833a2.833 2.833 0 01-2.833 2.833h-2.834M9.917 29.75H7.083a2.833 2.833 0 01-2.833-2.833v-2.834M9.916 17h14.167"
      ></Path>
    </Svg>
  );
}

export default Icon;
