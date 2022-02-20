import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <path d="M13 159a87 87 0 0 1-4 1l-2 1a22 22 0 0 0-6 7l-1 1v62l1 1 1 1 5 6 2 1c0 1 18 2 22 1 4 0 6-4 3-9-1-2-2-3-11-3-12 0-11 2-11-29v-24l1-2 2-2 185-1h185l1 1c2 3 2 3 2 28s0 25-2 28l-1 1H218l-168 1c-5 3-5 10 1 11l169 1c175-1 171-1 171-2l2-1a22 22 0 0 0 6-7l1-1v-61l-1-2-1-2-2-2-1-1-2-2-2-1c0-1 5-1-190-1H13" fill="#040404"/><path d="m15 172-2 2-1 2v24c0 31-1 29 11 29 10 0 11 1 12 6l6 1h6v-1c0-2 1-4 3-5l1-1h334l1-1c2-3 2-3 2-28s0-25-2-28l-1-1H200l-185 1" fill="#f3841d"/>
    </Svg>
  );
};

export default Icon;
