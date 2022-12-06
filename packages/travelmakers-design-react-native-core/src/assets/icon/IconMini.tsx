import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";

export const IconMini = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#clip0_3053_7865)">
      <Rect width={16} height={16} rx={4} fill="#979B9F" />
      <Path
        d="M3.41797 3.51562V12H5.12891V6.42188H5.19922L7.41406 11.9648H8.58594L10.8008 6.44531H10.8711V12H12.582V3.51562H10.4023L8.04688 9.26953H7.95312L5.59766 3.51562H3.41797Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3053_7865">
        <Rect width={16} height={16} rx={4} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
