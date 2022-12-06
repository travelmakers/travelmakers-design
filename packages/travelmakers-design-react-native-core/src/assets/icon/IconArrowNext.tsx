import * as React from "react";
import Svg, { SvgProps, G, Path, Rect, Defs, ClipPath } from "react-native-svg";

export const IconArrowNext = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <G opacity={0.25}>
      <G clipPath="url(#clip0_472_1657)">
        <Path
          d="M12.8431 10.3431L18.5 16L12.8431 21.6568"
          stroke={props.color ?? "#30373F"}
        />
      </G>
      <Rect
        x={0.5}
        y={0.5}
        width={31}
        height={31}
        rx={15.5}
        stroke={props.color ?? "#30373F"}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_472_1657">
        <Rect width={16} height={16} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);
