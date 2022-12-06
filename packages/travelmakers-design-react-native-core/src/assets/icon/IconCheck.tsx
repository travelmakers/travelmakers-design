import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

export const IconCheck = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Rect width={16} height={16} rx={8} fill="#D7D7D7" />
    <Path d="M3.5 7.0761L6.59038 11L12.5 5" stroke="white" strokeWidth={1.5} />
  </Svg>
);
