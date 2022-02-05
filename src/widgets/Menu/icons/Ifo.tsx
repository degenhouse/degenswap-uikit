import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
    <path id="path0" d="M64.564 1.483 C 58.900 5.216,59.386 -6.873,59.380 130.553 L 59.375 253.684 63.986 256.530 C 70.542 260.577,79.052 269.980,82.533 277.024 L 85.394 282.813 89.963 282.813 L 94.531 282.813 94.538 268.164 C 94.550 241.890,96.277 230.898,102.384 218.216 C 112.031 198.185,131.311 182.758,152.539 178.084 L 157.031 177.095 157.025 173.118 C 157.019 169.192,156.957 169.092,152.296 165.375 C 120.092 139.694,117.839 87.945,147.613 57.808 C 188.982 15.936,258.976 36.551,272.302 94.531 C 273.467 99.603,273.696 106.437,274.003 145.350 L 274.357 190.308 279.017 194.037 C 298.215 209.400,305.445 229.663,305.462 268.164 L 305.469 282.813 310.037 282.813 L 314.606 282.813 317.467 277.024 C 320.948 269.980,329.458 260.577,336.014 256.530 L 340.625 253.684 340.620 130.553 C 340.614 -6.873,341.100 5.216,335.436 1.483 C 331.939 -0.823,68.061 -0.823,64.564 1.483 M189.648 59.132 C 187.329 59.738,188.119 60.570,191.992 61.603 C 202.548 64.417,215.976 75.936,221.271 86.719 C 226.785 97.948,226.775 97.858,227.149 138.813 L 227.485 175.672 232.688 176.133 C 239.343 176.722,247.920 177.975,249.531 178.594 C 251.401 179.311,251.425 103.923,249.557 96.597 C 245.081 79.039,230.336 64.294,212.778 59.818 C 208.274 58.669,193.136 58.221,189.648 59.132 M167.002 83.178 C 140.396 93.274,143.945 133.570,173.158 153.071 C 180.169 157.751,180.043 157.211,180.326 183.789 L 180.573 207.031 192.256 207.031 L 203.938 207.031 203.727 154.102 L 203.516 101.172 201.596 97.266 C 195.679 85.225,179.245 78.533,167.002 83.178 M227.217 210.352 C 226.679 230.270,227.020 230.078,192.188 230.078 C 157.501 230.078,157.683 230.178,157.151 210.829 L 156.859 200.174 154.015 200.930 C 142.324 204.040,128.695 215.401,123.266 226.563 C 118.409 236.549,117.969 239.531,117.969 262.417 L 117.969 282.813 134.242 282.813 L 150.516 282.813 153.544 276.758 C 159.800 264.250,173.797 253.180,187.859 249.617 C 210.053 243.995,236.104 256.061,246.456 276.758 L 249.484 282.813 265.758 282.813 L 282.031 282.813 282.031 262.417 C 282.031 246.467,281.765 240.976,280.807 237.222 C 275.280 215.545,254.902 199.219,233.373 199.219 L 227.518 199.219 227.217 210.352 M24.789 272.984 C 1.941 282.380,-0.085 316.043,21.575 326.373 L 24.219 327.633 24.219 352.098 L 24.219 376.563 16.211 376.568 C 4.761 376.575,0.792 379.590,0.792 388.281 C 0.792 399.453,2.403 399.990,35.938 399.990 C 69.472 399.990,71.083 399.453,71.083 388.281 C 71.083 379.590,67.114 376.575,55.664 376.568 L 47.656 376.563 47.656 360.156 C 47.656 351.133,47.827 343.750,48.035 343.750 C 48.244 343.750,50.122 344.801,52.209 346.085 C 90.853 369.863,146.415 369.666,184.513 345.616 C 186.139 344.590,187.652 343.750,187.875 343.750 C 188.098 343.750,188.281 351.133,188.281 360.156 L 188.281 376.563 180.273 376.568 C 168.823 376.575,164.854 379.590,164.854 388.281 C 164.854 399.453,166.466 399.990,200.000 399.990 C 233.534 399.990,235.146 399.453,235.146 388.281 C 235.146 379.590,231.177 376.575,219.727 376.568 L 211.719 376.563 211.719 360.156 C 211.719 351.133,211.889 343.750,212.098 343.750 C 212.306 343.750,214.184 344.801,216.271 346.085 C 254.916 369.863,310.478 369.666,348.576 345.616 C 350.201 344.590,351.714 343.750,351.938 343.750 C 352.161 343.750,352.344 351.133,352.344 360.156 L 352.344 376.563 344.336 376.568 C 332.886 376.575,328.917 379.590,328.917 388.281 C 328.917 399.453,330.528 399.990,364.063 399.990 C 397.597 399.990,399.208 399.453,399.208 388.281 C 399.208 379.590,395.239 376.575,383.789 376.568 L 375.781 376.563 375.781 352.006 C 375.781 328.166,375.827 327.435,377.338 326.955 C 395.984 321.037,398.922 288.888,381.941 276.587 C 355.047 257.105,320.893 290.034,339.676 317.335 L 342.089 320.842 336.084 324.458 C 302.022 344.963,262.040 344.963,227.979 324.458 L 221.973 320.842 224.386 317.335 C 238.024 297.513,224.091 271.094,200.000 271.094 C 175.909 271.094,161.976 297.513,175.614 317.335 L 178.027 320.842 172.021 324.458 C 137.960 344.963,97.978 344.963,63.916 324.458 L 57.911 320.842 60.324 317.335 C 76.843 293.325,51.684 261.925,24.789 272.984 " stroke="none" fill-rule="evenodd"></path>
    </Svg>
  );
};

export default Icon;
