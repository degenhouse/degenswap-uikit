import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <path d="m4 170-1 1-2 1-1 1v54l1 1 2 1 1 1h19a191 191 0 0 0 21-1c4 0 4-7 0-10l-1-1H12v-36h364l12 1v34l-9 1H63l-2 1c-3 3-3 10 0 10l1 1a13158 13158 0 0 0 337-2l1-1v-54l-1-1-2-1-1-1a18147 18147 0 0 0-392 0" fill="#040404"/><path d="M12 183v35h31l1 1 2 3 1 2h12v-2l2-3 2-1h316l9-1v-34l-9-1-367 1" fill="#f3841d"/>
    </Svg>
  );
};

export default Icon;
