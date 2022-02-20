import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <path d="M194.6 19.3A50.5 50.5 0 0 0 152.8 53a50.5 50.5 0 0 0 4.8 41.8c3 5 9 11.3 15 15.5 2.2 1.5 8.6 4.6 11.6 5.6a41 41 0 0 0 16 2.3c6.1 0 7.7-.2 10.8-1a54.8 54.8 0 0 0 19.6-9.4 52.6 52.6 0 0 0 16.5-23.2l1.8-6.4c.7-2.8.7-15.6 0-18.8a59.3 59.3 0 0 0-6.2-16.2 52.4 52.4 0 0 0-26-21.2c-.3 0-.8-.2-.9-.4a105 105 0 0 1-4.2-1.2 49.1 49.1 0 0 0-17-1.1m-18.8 25 4 .8c.5 0 1.1.4 1.2.5.1.2.6.4 1 .4 3 0 11.5 6.3 17 12.6l1 1.2 1-1.2c5.5-6.3 14-12.6 17-12.6.4 0 .9-.2 1-.4a165.4 165.4 0 0 0 5.2-1.4c10.4-2.3 13.4 0 13.4 10.4a38.2 38.2 0 0 1-30.2 38.6h-1v13.2h-12.8V93.2h-1l-1.9-.3-2.5-.9c-15.8-5-25.8-19.4-25.8-37.5 0-10.3 3-12.6 13.4-10.3" fill="#d7ad88"/><path d="M31.6 50v6h53c59.2 0 54.2.2 54.2-2.7 0-.7.2-1.4.4-1.5.2-.1.4-.8.4-1.4 0-.7.2-1.2.4-1.2s.4-.4.4-1c0-.5.2-1 .4-1.2.2-.1.4-.6.4-1 0-.5.2-.8.4-.8s.4-.3.4-.6c0-.5-6.4-.6-55.2-.6H31.6v6M258 44.2l.4 1 .8 1.6.4 1.6c0 .4.2.8.4.8s.4.5.4 1.2c0 .6.2 1.3.4 1.4.2.1.4.8.4 1.5 0 3-5 2.7 54.1 2.7h53.1V44h-55.2c-30.4 0-55.2 0-55.2.2m-95.4 9.6v2.3a49 49 0 0 0 0-2.3m74.8 0v2.3a49 49 0 0 0 0-2.3M18.8 106.2v37.4h362.4V68.8H322c-47 0-59.3.1-59.4.5a47 47 0 0 0-.2 7.5c.2-.5.3-2.5.4-4.3v-3.3h118v74H19.2v-74h118v3.5c0 2 .2 3.9.4 4.3.3.8.1-6.7-.2-7.7-.1-.4-12.4-.5-59.4-.5H18.8v37.4M261.7 79l-.3 2.2c-.2.9-.2 1 .2.3.2-.4.4-1.4.3-2.2-.1-1.3-.2-1.3-.2-.3m-123.7.6c0 .8.2 1.7.4 2 .3.4.3 0 .2-1.2-.4-2.2-.6-2.6-.6-.8m.8 4c0 .6.2 1.3.4 1.4.2.1.3-.3.1-1-.3-1.8-.5-2-.5-.5m122-.4c0 .4-.1 1.2-.3 1.6-.2.5-.1.6.3.2.2-.2.4-1 .3-1.6-.1-.8-.2-.8-.2-.2m-121.3 3.4c0 .6.2 1.2.4 1.3.3.2.3-.1.2-.9-.4-1.5-.6-1.6-.6-.4m120.5-.4-.4 1.4c-.2.5-.1.6.3.2.2-.2.4-.8.3-1.4-.1-.5-.2-.6-.2-.2m-119.7 3c0 .5.2 1 .4 1.1.5.3.5 0 0-1.2-.3-.8-.3-.8-.4 0m53.2 10.5.2 6.7h12.4l.2-6.7a34 34 0 0 0-.1-6.4c-.2 0-.3 3-.3 6.5v6.4h-12v-6.4c0-3.5-.1-6.4-.3-6.5a34 34 0 0 0-.1 6.4m-49.2-1.2c0 .2.4.8.8 1.3l.8 1-.6-1.3c-.6-1.2-1-1.7-1-1m110.2 1-.6 1.3.8-1c.8-1 1-1.6.6-1.6 0 0-.5.6-.8 1.3M146 101a68 68 0 0 0 12.7 15.2 47 47 0 0 0 9.1 6.5c.1 0-1.3-1.2-3-2.4a56.4 56.4 0 0 1-16-15.9c-2.3-3.3-2.8-4-2.8-3.4m105.5 3c-2.3 3.6-5.2 7-8.5 10-5.5 5.2-5.9 5.7-.9 1.4A63.7 63.7 0 0 0 254 101c0-.1-1.2 1.3-2.4 3m-16.8 16.7c-1.5 1-2.6 2-2.5 2 .2.2 4.8-3 5.2-3.5.4-.6.3-.5-2.7 1.5M170 124c0 .2.2.4.5.4s1 .4 1.4.8c.5.4 1.1.8 1.5.8.3 0 .6.2.6.4s.4.4 1 .4c.5 0 1 .2 1.2.4.1.2.6.4 1 .4.5 0 .8.2.8.4s.4.4 1 .4c.5 0 1 .2 1.2.4.1.2.8.4 1.4.4.6 0 1.3.2 1.4.4.1.2.9.4 1.6.4.7 0 1.5.2 1.6.4.1.2 1 .4 2 .4s1.9.2 2 .4c.2.2 3.9.4 9.8.4a53.4 53.4 0 0 0 13.8-1.2c.1-.2.9-.4 1.6-.4.7 0 1.5-.2 1.6-.4.1-.2.8-.4 1.4-.4.6 0 1.3-.2 1.4-.4.1-.2.7-.4 1.2-.4.6 0 1-.2 1-.4s.4-.4 1-.4c.5 0 1-.2 1.2-.4.1-.2.6-.4 1-.4.5 0 .8-.2.8-.4s.3-.4.6-.4c.4 0 1-.4 1.5-.8 1-1 .7-1-.6-.2-12.7 8.2-40.6 8-55.4-.3-1.2-.6-2.1-1-2.1-.7m-82.1 57.5c-.2.1-.3 3-.3 6.2v5.9h43.7l43.7-.2-43.5-.1-43.5-.1v-11.6l43.5-.1 43.5-.1-43.4-.1c-24 0-43.6 0-43.7.2m12.5 31.1v5.8H162v-11.6h-61.6v5.8m-12.6 19.1c-.1.3-.2 8.7-.1 18.7l.1 18.2H175h-43.5l-43.5-.2v-36.8l43.5-.1 43.5-.1-43.5-.1c-34.5 0-43.6 0-43.7.4m12 12c-.1.3-.2 3.3-.1 6.7l.1 6.2h12.8v-13.2l-6.3-.1c-5 0-6.4 0-6.5.4m50 0c-.1.3-.2 3.3-.1 6.7l.1 6.2h12.8v-13.2l-6.3-.1c-5 0-6.4 0-6.5.4m-37.4 6.3v6.4H100v-12.8h12.4v6.4m50 0v6.4H150v-12.8h12.4v6.4m62.6 37.7v18.5h87.2-43.5l-43.5-.2-.1-18.4-.1-18.4v18.5m12.4-.2v6.3H250h-6.2l-6.2-.2-.1-6.2-.1-6.2v6.3m50 0v6.3H300h-6.2l-6.2-.2-.1-6.2-.1-6.2v6.3M19.2 331.2v49.6h192.7l.2-13.9c.2-7.6.3-18 .3-23v-9l1.3-1.5c1.8-2.1 3.3-2.6 7.5-2.6h3.6v-11.6h-3.6c-4.2 0-5.7-.5-7.5-2.6l-1.3-1.4v-33.6H19.2v49.6m306-32.8c0 9.5-.2 16.8-.4 16.8-.1 0-.4.3-.5.7-.5 2-3 3-7.4 3.2l-4.1.2v11.5h3.1c4.6 0 5.6.3 7.6 2.3l1.7 1.7v46h55.6v-99.2h-55.6v16.8M237.6 325v6.2h31.1l31.1-.2v-12l-31.1-.1-31.1-.1v6.2m62 0v5.8H238v-11.6h61.6v5.8M225 344.1c-.1.3-.2 8.7-.1 18.7l.1 18.2.1-18.5.1-18.5 43.7-.1 43.7-.1-43.7-.1c-34.7 0-43.8 0-44 .4m12.5 12.4c-.1.3-.2 3.2-.1 6.5l.1 6 .1-6.3.1-6.3 6.3-.1 6.3-.1-6.3-.1c-4.9 0-6.4 0-6.5.4m50 0c-.1.3-.2 3.2-.1 6.5l.1 6 .1-6.3.1-6.3 6.3-.1 6.3-.1-6.3-.1c-4.9 0-6.4 0-6.5.4" fill="#7a5431"/><path d="M19.2 106.2v37h361.6v-74h-118l-.1 3.9a69.2 69.2 0 0 1-2 12c-.1 0-.3.6-.3 1.1 0 .6-.2 1.4-.4 1.8l-.8 1.6c-.2.4-.4 1.1-.4 1.6 0 .4-.2.9-.4 1-.2.1-.4.6-.4 1 0 .5-.2.8-.4.8s-.4.3-.4.6c0 .5-1.2 3-3.2 6.5a67.3 67.3 0 0 1-25.3 23.7c-.6.3-1.1.7-1.1.9 0 .1-.4.3-.8.3s-.8.2-.8.4-.3.4-.8.4c-.4 0-.9.2-1 .4-.1.2-.7.4-1.2.4-.6 0-1 .2-1 .4s-.4.4-1 .4c-.5 0-1 .2-1.2.4-.1.2-.8.4-1.4.4-.6 0-1.3.2-1.4.4-.1.2-.9.4-1.6.4-.7 0-1.5.2-1.6.4-.1.2-1 .4-2 .4s-1.9.2-2 .4c-.2.2-3.9.4-9.8.4a53.4 53.4 0 0 1-13.8-1.2c-.1-.2-.9-.4-1.6-.4-.7 0-1.5-.2-1.6-.4-.1-.2-.8-.4-1.4-.4-.6 0-1.3-.2-1.4-.4-.1-.2-.7-.4-1.2-.4-.6 0-1-.2-1-.4s-.3-.4-.8-.4c-.4 0-.9-.2-1-.4-.1-.2-.7-.4-1.2-.4-.6 0-1-.2-1-.4s-.3-.4-.6-.4c-.4 0-1-.4-1.5-.8s-1-.8-1.4-.8c-.3 0-.5-.1-.5-.3a64 64 0 0 1-27.2-29.5c0-.3-.2-.6-.4-.6s-.4-.3-.4-.6l-.4-1.4-.8-1.6c-.2-.4-.4-1.1-.4-1.6 0-.4-.2-.9-.4-1-.2-.1-.4-.8-.4-1.4 0-.6-.2-1.3-.4-1.4a160.4 160.4 0 0 0-1.3-5.6l-.6-6.3-.2-3.9H19.2v37m18.4 106.2v56H50v-55.9l-.2-55.9-6.1-.1-6.1-.1v56m312.7-55.7c-.2.1-.3 25.3-.3 56v55.7h12.4v-112h-6c-3.2 0-6 .1-6.1.3M88 187.4v5.8h86.8v-11.6H88v5.8m0 62.6v18.4h86.8v-36.8H88V250m24.6 0v6.6H99.8l-.1-6.2c-.2-8-.9-7.2 6.6-7.1l6.3.1v6.6m50 0v6.6h-12.8l-.1-6.2c-.2-8-.9-7.2 6.6-7.1l6.3.1v6.6m62.6 37.4V306h87.2v-18.5l-.2-18.5-43.5-.1-43.5-.1v18.6m24.8.2v6.4h-6.3l-6.3-.2-.1-6.3-.1-6.3H250v6.4m50 0v6.4h-6.3l-6.3-.2-.1-6.3-.1-6.3H300v6.4M238 325v5.8h61.6v-11.6H238v5.8m-12.8 37.6v18.6h43.5l43.5-.2.1-18.5.1-18.5h-87.2v18.6m24.8-.2v6.4h-12.8v-6.1c0-3.4.1-6.3.3-6.4.1-.2 3-.3 6.4-.3h6.1v6.4m50 0v6.4h-12.8v-6.1c0-3.4.1-6.3.3-6.4.1-.2 3-.3 6.4-.3h6.1v6.4" fill="#ab7c5b"/><path d="M189.6 6.4c0 .2-.9.4-2 .4s-2 .2-2 .4-.7.4-1.6.4c-.9 0-1.6.1-1.6.3 0 .2-1 .5-2.1.8-2.4.4-6 1.8-6.2 2.2-.1.2-.5.3-1 .3-.4 0-.7.2-.7.4s-.4.4-.8.4-.8.2-.8.4-.4.4-.8.4-.8.2-.8.4-.3.4-.7.4c-.4 0-1 .4-1.3.8-.3.4-.9.8-1.2.8-.3 0-.9.4-1.2.8-.3.4-.8.8-1 .8-.7 0-2 1.2-6.2 5.2l-5.2 5c-1 1-2 2-2 2.2 0 1.6 1.9 1.6-65 1.6-35 0-63.8.1-63.8.3 0 .2-.4.5-.9.7a3 3 0 0 0-1.3 1.3c-.2.5-.5.9-.7.9-.2 0-.3 5-.3 11v11H14c-5 0-6.2.4-7.5 2.7-.6 1.1-.7 94.9-.1 94.9.2 0 .4.3.4.6 0 .4.5 1 1.2 1.3.7.4 1.2.8 1.2 1 0 .2 3.5.3 7.8.3h7.8v111.6h-7.6c-7.5 0-8.4.1-9.9 1.5-.3.2-.5.7-.5 1 0 .4-.2.7-.4.7-.6 0-.5 118.6.1 119.7a5 5 0 0 0 2.2 2.2c1.3.7 381.3.7 382.6 0a5 5 0 0 0 2.2-2.2c.6-1.1.7-119.7.1-119.7-.2 0-.4-.3-.4-.6 0-.4-.2-.9-.5-1.1-1.5-1.4-2.4-1.5-9.9-1.5h-7.6V156.8h7.6c5.6 0 7.8-.1 8.2-.5a5 5 0 0 1 1.4-1c.4-.4.8-1 .8-1.2 0-.3.2-.5.4-.5.6 0 .5-93.8-.1-94.9-1.3-2.3-2.4-2.7-7.5-2.7h-4.4V45c0-6-.1-11-.3-11-.2 0-.5-.4-.7-.9a3 3 0 0 0-1.3-1.3c-.5-.2-.9-.5-.9-.7 0-.2-28.7-.3-63.8-.3-66.9 0-65 0-65-1.6 0-.2-1-1.2-2-2.3l-5.2-4.9c-4.2-4-5.5-5.2-6.1-5.2-.3 0-.8-.4-1.1-.8-.3-.4-.8-.8-1.1-.8-.3 0-1-.4-1.4-.8-.5-.4-1-.8-1.4-.8-.3 0-.5-.2-.5-.4s-.4-.4-.8-.4-.8-.2-.8-.4-.4-.4-.8-.4-.8-.2-.8-.4-.3-.4-.8-.4c-.4 0-.8-.1-.9-.3-.2-.5-3.8-1.8-6.2-2.2-1.2-.3-2.1-.6-2.1-.8 0-.2-.7-.3-1.6-.3-.9 0-1.6-.2-1.6-.4s-.9-.4-2-.4-2-.2-2-.4c0-.3-3.7-.4-10.4-.4s-10.4.1-10.4.4m20 12.6c1 .2 2 .4 2.2.6.2.2 1 .4 1.7.4s1.4.2 1.5.4c.1.2.7.4 1.2.4.6 0 1 .2 1 .4s.5.4 1 .4c.6 0 1 .2 1 .4s.3.4.8.4c.4 0 .9.2 1 .4.1.2.6.4 1 .4.5 0 .8.1.8.3 0 .2 1 .7 2 1.3 1.1.5 2 1.1 2 1.3a45.6 45.6 0 0 1 16 16c.1-.1.7.8 1.2 1.8.6 1 1.1 2 1.3 2 .2.1.3.4.3.7 0 .3.4 1.2.8 2s.8 1.8.8 2.2c0 .4.2.9.4 1 .2.1.4.7.4 1.2s.2 1 .4 1.2c.2.1.4.8.4 1.4a75 75 0 0 1 .1 26.3c0 .7-.3 1.4-.5 1.5-.2.1-.4.6-.4 1 0 .5-.2 1.1-.4 1.5l-.7 1.7a64.6 64.6 0 0 1-7.6 12.8 54 54 0 0 1-22.2 16c-.4.2-1 .4-1.5.4-.4 0-.9.2-1 .4a144.5 144.5 0 0 0-5.2 1.3c-3.3.6-15.7.7-18.8 0l-3.7-.8c-.7 0-1.4-.3-1.5-.5-.1-.2-.6-.4-1-.4-.5 0-1.1-.2-1.5-.4l-1.7-.7a64.6 64.6 0 0 1-12-7A54 54 0 0 1 152.4 86c-.2-.4-.4-1-.4-1.5 0-.4-.2-.9-.4-1-.2-.1-.4-.8-.4-1.4a77.7 77.7 0 0 1-.1-26.7c0-.7.3-1.4.5-1.5.2-.1.4-.6.4-1l.3-1.5c1.5-3 2.1-4.3 2.1-4.7 0-.3.2-.6.4-.6.1 0 .4-.3.5-.7.2-.7 1.5-3 2-3.3l.7-1.3c.3-.6.7-1.1.9-1.1a56.5 56.5 0 0 1 21-17.2c.7-.4 1.7-.8 2.1-.8.4 0 .8-.2.8-.4s.4-.4 1-.4c.5 0 1-.2 1.2-.4.2-.3.7-.4 4.9-1.1l2.4-.6c.3-.4 14.7-.1 17.3.3M142.8 44c0 .3-.3 1-.6 1.6-.3.7-.6 1.5-.6 2 0 .3-.2.8-.4.9-.2.1-.4.7-.4 1.2s-.2 1-.4 1.2c-.2.1-.4.6-.4 1.1 0 .5-.3 1.6-.6 2.5l-.5 1.6-53.9.1-53.8.1V43.6H87c44.4 0 55.8.1 55.8.5m226 6v6.3H315l-53.9-.2-.5-1.6c-.3-.9-.6-2-.6-2.5s-.2-1-.4-1.1c-.2-.1-.4-.7-.4-1.2s-.2-1-.4-1.2c-.2-.1-.4-.6-.4-1s-.3-1.2-.6-1.9c-.3-.6-.6-1.3-.6-1.6 0-.4 11.4-.5 55.8-.5h55.8V50m-201-5.6c-.1.2-.6.4-1 .4-1.1 0-3 2.2-3.6 4.2a47.3 47.3 0 0 0 2.3 20.5l1.7 3.3a36 36 0 0 0 18 17.2c0 .2.3.4.8.4.4 0 .9.2 1 .4.1.2.7.4 1.2.4s1 .2 1.2.4c.1.2.7.4 1.3.4.6 0 1.6.2 2.2.5l1 .5v6.5l.1 6.5h12V93l1-.5c.7-.3 1.7-.5 2.3-.5.6 0 1.2-.2 1.3-.4.1-.2.7-.4 1.2-.4s1-.2 1.2-.4c.1-.2.6-.4 1-.4.5 0 .8-.2.8-.4s.2-.4.5-.4c.8 0 2.7-1 2.7-1.3 0-.2.2-.3.5-.3 2.7 0 11.2-9 14.3-15.2l1.7-3.3.3-1.5c0-.4.2-.9.4-1 .2-.1.4-.7.4-1.3a49.1 49.1 0 0 0 1.2-16.7c-.6-2-2.5-4.2-3.6-4.2-.4 0-.9-.2-1-.4-.2-.3-1-.4-2-.2l-4 .5a8 8 0 0 0-2.8.5c-.2.2-.9.4-1.5.4s-1.4.2-1.8.4l-1.7.7A36.3 36.3 0 0 0 202.8 58c-2.7 3.6-3 3.6-5.6 0a36.3 36.3 0 0 0-19.1-12.3c-.6 0-1.3-.2-1.5-.4a8 8 0 0 0-2.8-.5l-4-.5c-1-.2-1.8-.1-2 .2m9.3 12.8 3.5 1.7a26.4 26.4 0 0 1 12.6 15.7c0 .5.2 1 .4 1.2.5.3.5 4.5 0 4.8-.6.4-3.4-.7-6.8-2.7a27.5 27.5 0 0 1-11.2-15c0-.5-.2-1-.4-1.2-.2-.1-.4-1.3-.4-2.6 0-2.5.5-3 2.3-2m48.1 1.6c0 1-.2 2.4-.4 2.9l-.8 2.7a25.8 25.8 0 0 1-14.3 15.3c-3.8 1.7-4.4.9-3.1-4.7a23.7 23.7 0 0 1 3.4-7.4c0-.4.6-1.2 2.8-3.7 1.3-1.5 6-4.9 8-5.8 4.2-1.8 4.4-1.8 4.4.7m-87.4 10.5.6 5.3a81 81 0 0 0 2 11.6c.2.1.4.7.4 1.2s.2 1 .4 1.2c.2.1.4.7.4 1.2s.2 1 .4 1.2c.2.1.4.6.4 1 0 .5.2.8.4.8s.4.2.4.5c0 1.5 5.3 10.3 8.8 14.7a64.3 64.3 0 0 0 33.6 21.1 48 48 0 0 0 14.4 1.5 49 49 0 0 0 18.5-2.5c.6-.1 1.2-.4 1.3-.5.1-.2.6-.4 1-.4.5 0 1.1-.2 1.5-.4l4.3-2a64 64 0 0 0 30.2-31.5c0-.3.2-.5.4-.5s.4-.3.4-.8c0-.4.2-.9.4-1 .2-.1.4-.7.4-1.2s.2-1 .4-1.2c.2-.1.4-.7.4-1.2s.2-1 .4-1.2c.2-.1.4-.8.4-1.5 0-.8.2-1.5.4-1.7.4-.5.7-2.4 1.2-8.4l.6-5.3.2-1 59.5.2 59.5.1v75.2H18.6l-.1-37.2V68.9c.2-.4 12.5-.5 59.7-.5h59.4l.2.9M50.2 212.6V269H37.4l-.1-56.5-.1-56.5h6.5l6.5.2v56.4m312.5-.1-.1 56.5h-12.8l-.1-56v-56.5c.2-.4 2-.5 6.7-.5h6.4v56.5m-25.6.1v55.8h-12V264c0-4.9-.8-7.2-2.4-7.2-.2 0-.4-.2-.4-.4s-2-.4-5.2-.4H312v-1.2c0-.7-.2-1.2-.4-1.2s-.4-.3-.4-.8c0-.9-1.6-4-2-4-.3 0-.4-.3-.4-.6 0-1.2-5.7-7-7-7-.2 0-.7-.4-1-.8-.3-.4-.9-.8-1.3-.8s-.7-.2-.7-.4-.5-.4-1.2-.4-1.2-.2-1.2-.4-.5-.4-1.2-.4-1.2-.2-1.2-.4-.7-.4-1.5-.5c-1.2 0-1.6-.4-2.2-1.5-1-1.8-6.5-7.2-7.3-7.2-.3 0-.6-.1-.6-.3 0-.5-2.5-1.6-5.4-2.5a42.2 42.2 0 0 0-16.6 0c-2.9 1-5.2 2-5.2 2.5 0 .2-.3.3-.6.3a36 36 0 0 0-7.4 7.2c0 .8-1.1 1.6-2.3 1.6-.7 0-1.4.2-1.5.4-.1.2-.7.4-1.2.4-.6 0-1 .2-1 .4s-.5.4-1.2.4-1.2.2-1.2.4-.3.4-.7.4c-.4 0-1 .4-1.3.8-.3.4-.8.8-1.1.8-1 0-7.3 6-7.3 7 0 .3-.1.6-.3.6-.4 0-1.8 3-2.6 5.5l-.5 1.7h-4.9c-2.7 0-4.9.1-4.9.3 0 .2-.4.5-.9.7a3 3 0 0 0-1.3 1.3c-.2.5-.5.9-.7.9-.2 0-.3 2-.3 4.6v4.6h-24V245c0-12.9-.1-23.4-.3-23.4-.2 0-.5-.4-.7-.9a3 3 0 0 0-1.3-1.3c-.5-.2-.9-.5-.9-.7 0-.2-2.2-.3-4.8-.3h-4.8v-11.6h9.2l1.8-1.7 1.8-1.7v-16c0-8.7-.1-15.8-.3-15.8-.2 0-.5-.4-.7-.9a3 3 0 0 0-1.3-1.3c-.5-.2-.9-.5-.9-.7 0-.2-24.1-.3-53.6-.3-35.5 0-53.6.1-53.6.4 0 .2-.2.4-.4.4-.6 0-1.3.8-2 1.9-.3.6-.4 5.4-.4 16.7v15.8l1.6 1.6 1.6 1.6h9.2v11.6h-4.8c-3 0-4.8.2-4.8.4s-.2.4-.4.4c-.6 0-1.3.8-2 1.9-.3.6-.4 7.2-.4 24v23.3h-12V156.8h274.4v55.8m-162-25.1v6.5h-88v-6.3c0-3.5.1-6.5.3-6.6.1-.2 19.9-.3 43.9-.2l43.6.1.1 6.5m-12.4 25 .1 6.3h-31.5l-31.5-.2-.1-5.4v-6.3l.3-1 31.3.2 31.3.1.1 6.3M175 250v19H87.4l-.1-18.6v-19.1c.2-.4 9.2-.5 44-.4l43.7.1v19m97.8-12.3c.9.3 1.6.6 1.6.8 0 .2.2.3.5.3 1.1 0 4.4 3.6 5.8 6.5 1.8 3.5 3.1 4.3 6.7 4.3 4.4 0 11 3.8 11 6.3 0 .6-59 .8-59.4.1-1-1.8 6.8-6.4 11-6.4 3.6 0 6.8-2.2 6.8-4.6 0-.3.2-.6.4-.6s.4-.3.4-.6c0-.8 4-4.7 5.4-5.3.7-.3 1.5-.7 1.8-1 1-.4 6.2-.4 8 .2M100.4 250v6h12v-12h-12v6m50 0v6h12v-12h-12v6m162.3 37.5.1 18.9h-88v-38h43.9l43.9.2.1 18.9m-99.9 10c0 20.7 0 20.5 8.2 20.9l4 .2v12.8l-4 .2c-8.4.5-8-1.1-8.2 27l-.2 22.8h-194l-.1-50.1-.1-50.1h194.4v16.2m168.6 34v50H325l-.2-22.6c-.2-28 .2-26.8-8.2-27.2l-4-.2v-12.8l4-.2c8.2-.4 8.2-.4 8.2-21.2v-16h28.3l28.3.2v50M238 287.6v6h11.6v-12H238v6m50 0v6h11.6v-12H288v6m12.2 37.4v6.4h-62.8l-.1-6V319c.2-.4 6.2-.5 31.6-.4l31.3.1v6.4m12.5 37.5-.1 18.9-43.9.1-43.9.1v-38h88v18.9m-74.8-.1v6h11.6v-12H238v6m50 0v6h11.6v-12H288v6" fill="#040404"/><path d="M175.2 58.1c0 1.9 1.5 7 2.7 9.3a26.2 26.2 0 0 0 14.5 12.4c1.6.3 1.6-.2 0-5.8-2.2-7.2-8-13.4-15.1-16l-2.1-.7v.8m47 .3c-.1.2-.6.4-1 .4-.5 0-.8.2-.8.4s-.2.4-.4.4c-2 0-10.4 8.4-10.4 10.4 0 .2-.2.4-.4.4s-.4.3-.4.8c0 .4-.2.9-.4 1-.2.1-.4.7-.4 1.1 0 .5-.2 1.1-.3 1.3-.7.8-1 5-.3 5 4.7 0 15.8-11 15.8-15.6 0-.4.2-.9.4-1 .2-.1.4-1 .4-1.9 0-.8.2-2 .4-2.3.5-.9-1.7-1.2-2.2-.4m43.6 179.7c-2.6 1-4 1.6-5.4 3-1.3 1.1-2 2.1-3.8 6-.8 1.8-3 3-6 3-5 .4-10.6 3.3-10.6 5.6 0 .2 13 .3 28.8.3s28.8-.1 28.8-.3c0-2.2-6-5.2-11.1-5.5-3.3-.2-4.7-1.2-6.5-4.7-1.5-3-3.2-5-5-6-3.5-1.8-6.7-2.3-9.2-1.4" fill="#68bb3a"/><path d="M203.3 19c.4.2 1 .2 1.4 0l-.7-.1c-.8 0-1 0-.7.2M189 20c-.5.2-.6.3-.2.3.3 0 1-.1 1.4-.3.5-.2.6-.3.2-.3a4 4 0 0 0-1.4.3m20.8 0c.4.2 1 .3 1.4.3.4 0 .3 0-.2-.3-.4-.2-1-.3-1.4-.3-.4 0-.3 0 .2.3m-45.2 13.7-3.2 3.3 3.3-3.2c3-3 3.5-3.4 3.2-3.4l-3.3 3.3m68.8-1.7 1.8 1.6a7 7 0 0 0-1.4-1.6l-1.8-1.6a7 7 0 0 0 1.4 1.6m-61.3 11.9h1.4c.4-.1 0-.2-.7-.2-.8 0-1 0-.7.2m54.4 0h1.4c.4-.1 0-.2-.7-.2-.8 0-1 0-.7.2M151 58.2c-.1.6-.2 1.2 0 1.3l.4-1c.1-.5.2-1 0-1.2l-.4 1m97.5-.3c0 .3.1 1 .3 1.4.2.5.3.6.3.2 0-.3-.1-1-.3-1.4-.2-.5-.3-.6-.3-.2M199 59.2l.9 1 .9-1 .9-1-.9.8c-.9.7-1 .7-1.8 0l-.9-.8.9 1m-49 6.2c0 1.1 0 1.5.2.9v-2c-.1-.5-.2 0-.2 1.1m99.7 3.2v2c.2-1.2.2-3.2 0-4.3v2.3M150 71.8c0 1.1 0 1.5.2.9v-2c-.1-.5-.2 0-.2 1.1m18 4.2c.4.7 1 1.7 1.6 2.3.5.6.3 0-.5-1.2-1.6-2.4-2.4-3.2-1.1-1m63.1 1c-.8 1.3-1 1.8-.5 1.2 1-1.2 2.4-3.5 2.2-3.5-.1 0-.9 1-1.7 2.3m-60.2 3 1.3 1.3 1.3 1.2-1.2-1.3c-1-1.2-1.4-1.5-1.4-1.2m57 1.2-1.2 1.3 1.3-1.2a10 10 0 0 0 1.3-1.3c0-.3-.3 0-1.4 1.2m-54.2 1.6 1.3 1.3 1.3 1.2-1.2-1.3c-1-1.2-1.4-1.5-1.4-1.2m51.4 1.2-1.2 1.3 1.3-1.2a10 10 0 0 0 1.3-1.3c0-.3-.3 0-1.4 1.2M164.6 104l3 2.8s-1-1.3-2.6-2.8a31.5 31.5 0 0 0-3-2.8s1 1.3 2.6 2.8m70.6-.1-2.2 2.3 2.3-2.2c2.1-2 2.5-2.4 2.2-2.4l-2.3 2.3m-45.8 13.7c.4.2 1.2.3 1.6.3.6 0 .6 0-.2-.3-1.4-.4-2.4-.4-1.4 0m8.7 1c1 .2 2.8.2 3.8 0h-3.8" fill="#a09189"/><path d="m234.4 32.1 1.3 1.3 1.3 1.2-1.2-1.3c-1-1.2-1.4-1.5-1.4-1.2M31.4 50v3.1a85.5 85.5 0 0 0 0-3.1m226.2-6 1.2 3.5c.7 1.8 1.5 4.5 1.8 5.9a10 10 0 0 0 1 2.6c.5 0 .5-.7 0-1-.2-.1-.4-.9-.4-1.6 0-.7-.2-1.5-.4-1.6-.2-.1-.4-.8-.4-1.4 0-.7-.2-1.2-.4-1.2s-.4-.4-.4-1c0-.5-.2-1-.4-1.2-.2-.1-.4-.6-.4-1 0-.5-1.2-2.5-1.2-2m111 6v3.1a85.5 85.5 0 0 0 0-3.1m-227.4-4c0 .4-.2.9-.4 1-.2.1-.4.7-.4 1.2 0 .6-.2 1-.4 1s-.4.5-.4 1.2c0 .6-.2 1.3-.4 1.4-.2.1-.4.9-.4 1.6 0 .7-.2 1.5-.4 1.6-.5.3-.5 1 0 1 .2 0 .5-1 .8-2.1.5-1.9 1.8-6.1 2.6-8 .2-.4.1-.7-.2-.7-.2 0-.4.3-.4.8m95.3 16.4c0 .8 0 1 .2.7v-1.4c-.1-.4-.2 0-.2.7m-86.7 6.4v2.3a44.7 44.7 0 0 0 0-2.3m100.3-.2c0 2.2.1 3 .2 1.9v-4c0-1-.2-.1-.2 2.1m-112.4 5.8c0 .8 0 1 .2.7v-1.4c-.1-.4-.2 0-.2.7m124.1 1a8.3 8.3 0 0 0 0 2.5l.4-2.1c.1-1.3.2-2.3 0-2.5l-.4 2.1m-123.7 1.8c0 .8 0 1 .2.7v-1.4c-.1-.4-.2 0-.2.7M261 80.8c-.2.7-.2 1.3 0 1.4l.4-1c.3-1.7 0-2-.4-.4m-87.4 1.7c1.6 1.8 2 2 2 1.8l-1.9-2-1.9-1.7 1.8 1.9m52.4.1a9 9 0 0 0-1.6 1.8l2-1.8a9 9 0 0 0 1.6-1.8l-2 1.8m-76 23.8 1.3 1.5c.2.1 0-.4-.7-1.2-1.3-1.8-1.8-2-.6-.3m99.4.3c-.6.8-1 1.3-.7 1.2.5-.4 2.3-2.7 2-2.7l-1.3 1.5M153 110l1.8 1.6a7 7 0 0 0-1.4-1.6l-1.8-1.6a7 7 0 0 0 1.4 1.6m93.6.1-1.6 1.7 1.7-1.6c1.6-1.5 1.9-1.8 1.6-1.8l-1.7 1.7m-89.4 4 1.3 1.3 1.3 1.2-1.2-1.3c-1-1.2-1.4-1.5-1.4-1.2m84.2 1.2-1.2 1.3 1.3-1.2a10 10 0 0 0 1.3-1.3c0-.3-.3 0-1.4 1.2m-80.5 2.2c.4.5 2.7 2.3 2.7 2l-1.5-1.3c-.8-.6-1.3-1-1.2-.7m76.7 1c-1.4 1.2-1.4 1.2-.1.3l1.5-1.2c.4-.6 0-.4-1.4.8m-70 3.8s.5.5 1.2.8l1.2.4s-.5-.5-1.2-.8l-1.2-.4m4.4 2.4c0 .3 2.4 1.5 2.6 1.3.1 0-.4-.5-1.2-.8-.8-.4-1.4-.6-1.4-.5m54 .8c-.6.3-.8.6-.6.6l1.4-.6c.5-.3.8-.6.6-.6l-1.4.6m-43.2 3.5 1.4.5c.9.2 1 .1.6-.2-.5-.3-2.4-.6-2-.3m32.4.3c-.4.3-.3.4.6.2 1.5-.4 1.8-.6.8-.6a3 3 0 0 0-1.4.4m-28.4.8c.5.2 1.4.3 1.8.3.6 0 .6 0-.2-.3l-1.8-.3c-.6 0-.6 0 .2.3m24.8 0c-.8.3-.8.3-.2.3.4 0 1.3-.1 1.8-.3.8-.3.8-.3.2-.3-.4 0-1.3.1-1.8.3m-19.8.8c.9.2 2.1.3 2.8.3.9 0 .8 0-.6-.3-2.4-.5-4.3-.4-2.2 0m14 0c-1.4.2-1.4.3-.4.3.7 0 2 0 2.8-.3 2-.4 0-.4-2.4 0M37.4 156.5c-.1.3-.2 25.6-.1 56.3l.1 55.8.1-56 .1-56.2 6.3-.1 6.3-.1-6.3-.1c-4.8 0-6.4 0-6.5.4m318.8-.2 6.2.1.1 56.1.1 56.1V156.2H350h6.2M87.4 181.8c-.1.3-.2 3-.1 6.1l.1 5.6.2-6.1c.2-6 .2-6.6-.2-5.6m87.5 5.8-.1 6-43.7.2-43.7.1 43.7.1c35.5 0 43.8 0 44-.4v-6.3l-.1-5.8-.1 6M100 212.6l.1 6.1 31.1.1 31.1.1v-12.4H100v6.1m62 .1v5.8h-61.6v-11.6H162v5.8m-74.5 18.9c-.4.3-.4 36.8 0 37a2693.6 2693.6 0 0 0 .3-37.3l-.3.3M175 250c0 10.2 0 14.4.1 9.3a915.3 915.3 0 0 0-.1-9.3m50 18.7c-.2.3 30.5.3 71.5 0 8.6 0-4-.2-27.9-.2s-43.5 0-43.6.2m87.5 18.7c0 10.3 0 14.6.1 9.5a935 935 0 0 0-.1-9.5M18.8 331.2v50h193.6v-9.5l-.2-9.5-.1 9.3-.1 9.3H19.2v-99.2l96.7-.1 96.7-.1-96.9-.1-96.9-.1v50m334.3-49.7 27.7.1v99.2l-27.9.1-27.9.1 28.1.1 28.1.1v-49.9l-.2-49.9h-55.6 27.7m-28.4 32.2c-.2 1.4-.1 2 .3 1.5.2-.1.2-.8.1-1.6l-.1-1.3-.3 1.4m-112.3.9c0 2.7 4.2 4.8 9.2 4.6l3.4-.1-3.8-.1c-4.5-.1-6.5-1-7.9-3.5-.5-1-.9-1.3-.9-1m111.4 1.7a5 5 0 0 1-2 1.7c-.9.5-1.3 1-1 1 .9 0 3.9-2.6 3.5-3-.2-.2-.4 0-.5.3m-11.4 8.9v6.2h3.9l3.9-.2h-3.7l-3.7-.2v-11.6l3.7-.1 3.7-.1-3.9-.1-3.9-.1v6.2m-75 0v2.9a80 80 0 0 0 0-2.9m-21.2 6.4c-1.5.6-3.8 3.2-3.8 4.1 0 .4.4 0 1-.9 1.3-2.4 3-3.2 7.6-3.4l4-.3h-3.8a14 14 0 0 0-5 .5m105.5.7a5.8 5.8 0 0 1 3 4.2l.4 1.5v-1.5c.1-1.7-2.8-5.1-4.2-5-.4 0-.2.2.8.8m-9.1 30.5c0 10.3 0 14.6.1 9.5a935 935 0 0 0-.1-9.5M225 381.3c.2.2 19.9.3 43.7.2l43.4-.1-43.7-.2c-24-.1-43.5 0-43.4.1" fill="#3e3d28"/><path d="M175 57c-.5.6 0 4.1 1.2 7.6a28 28 0 0 0 11.7 13.7c1.4.8 2.7 1.3 2.8 1.2 0-.2-.6-.6-1.6-1A25.8 25.8 0 0 1 175.2 58v-.8l2 .7c7.2 2.6 13 8.8 15.1 16 1.7 5.7 1.7 6.1 0 5.8-1-.2-1.1-.1-.7.2 2.2 1.5 2.8 0 1.8-4-2-8.6-7.5-15-15.4-18.2l-2.2-.9c-.3 0-.6 0-.7.2m47.6.5a25.7 25.7 0 0 0-16.1 19.2c-.8 4-.6 4.1 3 2.6a25.5 25.5 0 0 0 15.2-19.2c.7-3.2.4-3.5-2.1-2.6m1.7 1.2a7 7 0 0 0-.4 2.4c0 .8-.2 1.7-.4 1.8-.2.1-.4.6-.4 1 0 4.6-11.1 15.6-15.8 15.6-.6 0-.4-4.2.3-5 .1-.2.3-.8.3-1.3 0-.4.2-1 .4-1.1.2-.1.4-.6.4-1 0-.5.2-.8.4-.8s.4-.2.4-.4c0-2 8.4-10.4 10.4-10.4.2 0 .4-.2.4-.4s.3-.4.8-.4c.4 0 .9-.2 1-.4.5-.8 2.7-.5 2.2.4m41 179a14 14 0 0 0-8.2 7.2 8.4 8.4 0 0 1-3.7 4.4c-.7.3-1 .5-.7.6 1 0 3.3-1.8 3.9-2.8 1.8-4 2.4-5 3.7-6.2 6.5-5.9 15.4-3.8 19.6 4.5 1.4 2.6 3.3 4.5 4.6 4.5.5 0 .1-.3-.9-.8-1.4-.7-2-1.4-3.3-4-3.3-6.3-9.4-9.3-15-7.4m-21 13.3c-2.2 1.1-5.4 4.3-5 5 .3.3 58.3.5 58.7 0 .5-.4-2.1-3.3-4-4.4-1-.5-1.8-.9-2-.8-.1.2.3.5.8.7a15 15 0 0 1 4.7 4c0 .2-12.7.4-28.8.4-15.8 0-28.8-.1-28.8-.3 0-1.4 4-4.2 7.2-5.1 1.6-.5 1.6-.5.6-.5-.7 0-2.2.4-3.3 1m44.7-.7c1.5.5 2.8.5 2 0a4 4 0 0 0-1.8-.4c-1.2 0-1.2 0-.2.4" fill="#2c5414"/><path d="M192 18.8c-.4.3-.2.3.8.1 1.7-.3 2-.5.8-.5-.6 0-1.3.2-1.6.4m13.6-.3 1.6.4c1 .2 1.2.2.8 0-.5-.4-2.8-.7-2.4-.4m-39.4 12.8-1.6 1.7 1.7-1.6 1.7-1.7c0-.3-.3 0-1.8 1.6m65.8-1.6 1.3 1.3 1.3 1.2-1.2-1.3c-1-1.2-1.4-1.5-1.4-1.2M162.6 35l-1.2 1.3 1.3-1.2c1.2-1 1.5-1.4 1.2-1.4l-1.3 1.3m-75.9 9c30.6 0 55.7.2 55.7.3l-.4 1.3c-.3.7-.3 1 0 .7.2-.2.5-.9.6-1.5l.3-1.1h-56l-55.9.2 55.7.1m170.7.8c.1.6.4 1.3.7 1.5.2.2.2 0 0-.7l-.5-1.3 55.7-.3 55.7-.1-56-.1-55.9-.1.3 1.1m-86.2-.3c.3.2 1 .4 1.6.4h1l-1-.4c-1.5-.5-2.4-.5-1.6 0m56 0-1 .3h1c.6 0 1.3 0 1.6-.3.8-.5 0-.5-1.6 0m-86 2.7-.3 1.2c-.2.5-.1.6.3.2.3-.2.4-.7.3-1.2-.1-.4-.2-.5-.3-.2m117.2.4c0 .5.2 1 .4 1.1.5.3.5 0 0-1.2-.3-.8-.3-.8-.4 0m-118 2c0 .3-.1.9-.3 1.3-.2.5-.1.6.3.2.3-.2.4-.7.3-1.2-.1-.4-.2-.5-.3-.2m118.8.4c0 .5.2 1 .4 1.1.5.3.5 0 0-1.2-.3-.8-.3-.8-.4 0M139.6 52l-.2 1.6c-.2.9-.2 1 .2.3.2-.4.4-1.1.3-1.6-.1-.5-.2-.6-.3-.3m120.4.4c0 .6.2 1.3.4 1.6.5.8.5 0 0-1.6l-.3-1v1m-121.3 3c0 .5-4 .6-53.9.7l-53.9.1 54 .1c56.1.1 55.6.1 54-1.4 0-.1-.2 0-.2.4m122.1.1c.1.8.4.8 54.1.8h54-53.9c-50.8-.2-53.9-.2-54-1-.2-.4-.2-.4-.2.2M150.6 57l-.2 1.3c0 .4.2.2.4-.5.4-1.2.3-1.9-.2-.8m47 1.4a4277.7 4277.7 0 0 1 1.6 1.8c0-.2-.7-1.1-1.4-2l-1.5-1.6 1.3 1.8m4.4 0c-.7 1-1.2 1.7-1.1 1.8l1.4-1.6c1.7-2.3 1.4-2.4-.3-.2m-39.1 0c0 .6.1 1.5.3 2.2.3 1 .3 1 .3.2 0-.5-.1-1.5-.3-2.2-.3-1-.3-1-.3-.2m73.7.8c-.2 1-.2 1.7 0 1.9l.4-1.5c.2-1 .2-1.7 0-1.9l-.4 1.5m-11.8.9-.2 1.4c-.2.7-.2.7.2 0 .2-.4.4-1 .3-1.4-.2-.6-.2-.6-.3 0m-75 1c0 .3-.2 1.2-.1 2 0 1.3 0 1.3.3-.5.3-2.1.3-2.6-.2-1.6m63.4 2.4a9 9 0 0 0-1.6 1.8l2-1.8a9 9 0 0 0 1.6-1.8l-2 1.8m37-.2v.9c.2-.5.2-1.3 0-1.8v.9M18.6 68.7c-.4.3-.4 74.8 0 75 .2.1.3-16.7.2-37.3l-.1-37.6 59.5-.1 59.5-.1-59.4-.1c-32.7 0-59.6 0-59.7.2m303.1 0 59.4.1v37.6c-.2 20.6 0 37.4.1 37.3.2-.2.3-17.2.2-37.7l-.1-37.4h-119 59.4m-184.2 2.2c0 1 .2 2.6.4 3.6.2 1.3.3.9.1-1.6-.2-3.7-.5-4.9-.5-2M262 72.2a17 17 0 0 0-.1 3.3c.2.2.7-4.9.5-5.7 0-.5-.3.6-.4 2.4m-80 1.9 2 1.9c.3 0 0-.4-1.8-2l-1.9-1.8 1.8 1.9m68-.2-.2 2.4c-.2.7-.2.7.2 0 .2-.4.4-1.5.3-2.4l-.2-1.7v1.7m-82.5.5a7 7 0 0 0 1.2 1.8c.2.1-.1-.6-.7-1.6-1.2-2.2-1.6-2.4-.5-.2m64.3.2c-.6 1-.9 1.7-.7 1.6.4-.3 2.1-3.4 1.8-3.4l-1.1 1.8m-82.2 0c0 .9 0 1.2.2.7v-1.6c-.1-.4-.2 0-.2.9m56.5 1.6L206 78c0 .8.2.7.4-.5.3-1.7.3-2.3-.2-1.2m-67.6 3.6c.4 1.5.6 1.8.6.8 0-.5-.2-1-.4-1.4-.3-.4-.4-.3-.2.6m67.4.1c0 .8 1 1 1.9.5.6-.4.6-.4-.3-.2-.6.2-1 0-1.2-.3-.3-.4-.4-.4-.4 0m-59.4 21 3.6 5.1c.1 0-.6-1.3-1.7-2.8l-2-2.8.1.5m105.2 1.8a106.3 106.3 0 0 1-4.6 6.6c1-.8 6.7-8.9 6.3-8.9-.1 0-.9 1-1.7 2.3m-88 1.3 2.6 2.4-2.2-2.4a23.6 23.6 0 0 0-2.6-2.4l2.2 2.4m72 .1-2.4 2.5 2.5-2.4 2.5-2.5c0-.3-.4 0-2.6 2.4m-84.2 3.9c.7.9 1.4 1.6 1.5 1.6L152 108a8.5 8.5 0 0 0-1.5-1.6l1.1 1.6m4.2 4.8c.6.7 1.2 1.1 1.3 1 .2-.2-1.7-2.2-2.2-2.2l.9 1.2m87.9-.1c-.6.5-1 1-.8 1.1 0 .1.7-.3 1.3-1 .6-.7 1-1.2.8-1.2-.2 0-.8.5-1.3 1m-85 2.7a17 17 0 0 0 3.7 3l-2.1-2c-1.2-.9-1.8-1.4-1.5-1m80.6 1.4c-1.7 1.5-1.8 1.6-.4.6 1.5-1.2 3-2.5 2.5-2.5l-2.1 1.9m-76.6 1.9s1 .9 2.3 1.7c2.8 1.9 3.3 2.2 3.3 2l-2.8-2-2.8-1.7m71.7 1.6c-2.4 1.6-3.7 2.7-2.5 2a45 45 0 0 0 5.2-3.6c0-.3 0-.3-2.7 1.6m-46.1 9.8c.5.2 1.4.3 1.8.3.6 0 .6 0-.2-.3l-1.8-.3c-.6 0-.6 0 .2.3m21.6 0c-.8.3-.8.3-.2.3.4 0 1.3-.1 1.8-.3.8-.3.8-.3.2-.3-.4 0-1.3.1-1.8.3m-15.6.9a50.8 50.8 0 0 0 11.2 0c1-.2-1.5-.3-5.6-.3-4 0-6.6.1-5.6.3M50.1 212.5l-.1 56.3h-6.4c-3.5-.1-6.2 0-6.1.1.3.5 12.5.4 12.7-.2.1-.3.2-25.7.1-56.5l-.1-56-.1 56.3m299.7.2V269l6.2.1c3.4 0 6.3 0 6.4-.2.2-.2-2.5-.2-6-.2l-6.4.1-.1-56.2-.1-56.2v56.3M87.5 181.1c-.1.2 19.5.3 43.7.3 24.2 0 43.8-.1 43.7-.3 0-.2-19.7-.3-43.7-.3-24 0-43.6.1-43.7.3m43.8 25.2 31 .1.2 6.3.1 6.3v-12.8h-62.4 31m-31.5 6.3c0 3.2 0 6 .2 6 .2.1.3-1.6.2-3.8-.2-7.4-.4-8.2-.4-2.2M87.5 231c-.1.2 19.5.3 43.7.3 24.2 0 43.8-.1 43.7-.3 0-.2-19.7-.3-43.7-.3-24 0-43.6.1-43.7.3m12.7 18.9v3.1a85.5 85.5 0 0 0 0-3.1m50 0v3.1a85.5 85.5 0 0 0 0-3.1m98-.1h2.9c.8 0 .2-.2-1.3-.2s-2.2.1-1.5.2m38 0h2.8c.8 0 .2-.2-1.3-.2s-2.2.1-1.5.2m-198.8 19c0 .2 19.7.3 43.7.3 24 0 43.6-.1 43.7-.3.1-.2-19.5-.3-43.7-.3-24.2 0-43.8.1-43.7.3m-69 62.3.1 50.2h194l.2-22.8c.2-28.1-.2-26.5 8.2-27l4-.2v-12.8l-4-.2c-8.1-.4-8 0-8.2-20.8l-.2-16.6-.1 16.4c-.1 21 0 21.4 8.6 21.4h3.7v12.4h-3.7c-4.4 0-6.3.9-7.8 3.4l-.9 1.6v45H18.8l-.1-50.1-.1-50.1v50.2M325 296.8c0 8.7 0 12.2.1 7.9a650.1 650.1 0 0 0-.1-7.9m56.1 34.4.1 50h-56l-.1-21.9-.1-21.9v44h56.4l.1-49.8c0-27.4 0-49.9-.2-50-.2-.2-.3 22.1-.2 49.6m-143.3-43.6v3.1a85.5 85.5 0 0 0 0-3.1m12-.2v2.9a80 80 0 0 0 0-2.9m38 .2v3.1a85.5 85.5 0 0 0 0-3.1m12-.2v2.9a80 80 0 0 0 0-2.9m24 27.7c-1 2.3-2.5 3-7.2 3.3l-4 .3h3.8c3.3 0 4 0 5.4-.9 1.5-.9 3.4-3.5 3-4-.2-.1-.6.5-1 1.3m-86.3 3.6c-.1.2 13.9.3 31.1.2l31.4-.1v12.4h-31.4c-17.2-.2-31.2 0-31 .1.1.2 14.3.3 31.4.2l31.2-.1v-12.8l-31.3-.1c-17.2 0-31.3 0-31.4.2m79.1 12.9c4.7.2 6.3 1 7.3 3.3.4.8.7 1.4.8 1.3.5-.5-1.4-3.1-2.9-4-1.5-.9-2-1-5.4-1l-3.8.1 4 .3m-78.8 30.8v3.1a85.5 85.5 0 0 0 0-3.1m50 0v3.1a85.5 85.5 0 0 0 0-3.1m-38 .2v2.9a80 80 0 0 0 0-2.9m50 0v2.9a80 80 0 0 0 0-2.9" fill="#1c1c1c"/>
    </Svg>
  );
};

export default Icon;
