import * as React from "react";
import Svg, { SvgProps, G, Circle, Path } from "react-native-svg";

export const IconMobileMypage = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <G
      transform="translate(1 1)"
      stroke="#30373F"
      fill="none"
      fillRule="evenodd"
    >
      <Circle
        strokeLinecap="round"
        strokeLinejoin="round"
        cx={6}
        cy={3}
        r={3}
      />
      <Path d="M0 14.75v-.5C0 11.35 2.35 9 5.25 9h1.5C9.65 9 12 11.35 12 14.25v.682" />
    </G>
  </Svg>
);
