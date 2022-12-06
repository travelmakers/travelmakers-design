import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";

export const IconResidence = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#clip0_3053_7869)">
      <Rect width={16} height={16} rx={4} fill="#979B9F" />
      <Path
        d="M4.92383 12H6.68164V8.98828H8.02344L9.64648 12H11.5918L9.78711 8.70117C10.7539 8.28516 11.2871 7.44141 11.2871 6.28125C11.2871 4.59961 10.1797 3.51562 8.25195 3.51562H4.92383V12ZM6.68164 7.55859V4.95703H7.92383C8.9668 4.96289 9.47656 5.42578 9.4707 6.28125C9.47656 7.13086 8.9668 7.55859 7.92383 7.55859H6.68164Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3053_7869">
        <Rect width={16} height={16} rx={4} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
