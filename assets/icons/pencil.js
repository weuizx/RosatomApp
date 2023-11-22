import React from "react";
import Svg, { Path } from 'react-native-svg';

function Pencil(color) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <G
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_57_3120)"
      >
        <Path d="M10.625 1.875a1.78 1.78 0 011.29-.63 1.793 1.793 0 011.338.522 1.768 1.768 0 01.515 1.332 1.759 1.759 0 01-.643 1.276l-8.438 8.438-3.437.937.938-3.438 8.437-8.437zM9.375 3.125l2.5 2.5"></Path>
      </G>
      <Defs>
        <clipPath id="clip0_57_3120">
          <Path fill="#fff" d="M0 0H15V15H0z"></Path>
        </clipPath>
      </Defs>
    </Svg>
  );
}

export default Pencil;