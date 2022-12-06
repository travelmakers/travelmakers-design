import * as React from "react";
import Svg, { SvgProps, G, Circle, Path } from "react-native-svg";

export const IconSearch = (props: SvgProps) => (
  <Svg width={15} height={15} viewBox="0 0 15 15" {...props}>
    <G transform="translate(1 1)" fill="none" fillRule="evenodd">
      <Circle
        stroke="#30373F"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx={4.875}
        cy={4.875}
        r={4.875}
      />
      <Path fill="#30373F" d="m7.672 8.379.707-.707 4.95 4.95-.708.706z" />
    </G>
  </Svg>
);
