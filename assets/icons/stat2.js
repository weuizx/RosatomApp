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
        d="M17 31.167c7.824 0 14.167-6.343 14.167-14.167S24.824 2.834 17 2.834 2.834 9.175 2.834 17c0 7.824 6.342 14.167 14.166 14.167z"
      ></Path>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.75 17l2.833 2.833 5.667-5.666"
      ></Path>
    </Svg>
  );
}

export default Icon;
