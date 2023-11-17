import React from "react";
import Svg, { Path } from 'react-native-svg';

function Icon({color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zM1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16c0 8.1-6.567 14.667-14.667 14.667S1.333 24.1 1.333 16z"
        clipRule="evenodd"
      ></Path>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M16 14.666c.736 0 1.333.598 1.333 1.334v5.333a1.333 1.333 0 01-2.666 0V16c0-.736.597-1.334 1.333-1.334zM14.667 10.667c0-.737.597-1.333 1.333-1.333h.013a1.333 1.333 0 110 2.666H16a1.333 1.333 0 01-1.333-1.333z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default Icon;
