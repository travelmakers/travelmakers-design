import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const IconStar = (props: SvgProps) => (
  <Svg width={10} height={11} viewBox="0 0 10 11" {...props}>
    <Path
      d="M5.135 8.692 2.244 10.12l.417-3.287L.457 4.427l3.15-.605L5.134.909l1.53 2.913 3.148.605L7.61 6.832l.417 3.287z"
      fill="#979B9F"
      fillRule="evenodd"
    />
  </Svg>
);
