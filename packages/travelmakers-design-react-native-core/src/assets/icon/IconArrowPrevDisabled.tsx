import * as React from "react";
import Svg, { SvgProps, G, Path, Rect, Defs, ClipPath } from "react-native-svg";

export const IconArrowPrevDisabled = (props: SvgProps) => (
  <Svg width={33} height={32} viewBox="0 0 33 32" fill="none" {...props}>
    <G opacity={0.25}>
      <G clipPath="url(#clip0_472_1614)">
        <Path d="M19.1569 21.3137L13.5 15.6569L19.1569 10" stroke="#30373F" />
      </G>
      <Rect x={1} y={0.5} width={31} height={31} rx={15.5} stroke="#30373F" />
    </G>
    <Defs>
      <ClipPath id="clip0_472_1614">
        <Rect
          width={16}
          height={16}
          fill="white"
          transform="translate(8.5 8)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
