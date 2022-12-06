import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

export const IconAngle = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#clip0_1922_7961)">
      <Path
        d="M4.84326 2.34314L10.5001 7.99999L4.84326 13.6568"
        stroke="#30373F"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1922_7961">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
