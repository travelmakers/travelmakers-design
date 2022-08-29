export type TmFontSize =
  | "b3"
  | "b2"
  | "b1"
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1"
  | "caption";

export type TmSize = "xsmall" | "small" | "medium" | "large";

export type TmFontFamily = "Noto Serif KR" | "Pretendard" | "PT Serif";

export const deviceSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 450,
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  maxSize: 1200,
};

export type CoNumberSize = TmSize | TmFontSize | number;
