import React from "react";
import { SvgXml } from 'react-native-svg'

function Icon() {
  const xml =`<svg 
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  fill="none"
  viewBox="0 0 34 34"
>
  <path
    stroke="#15256D"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M25.5 28.333V14.167M17 28.333V5.667M8.5 28.334v-8.5"
  ></path>
</svg>`
  return (
    <SvgXml xml={xml} />
  );
}

export default Icon;