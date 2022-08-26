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

export type TmSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export type CoNumberSize = TmSize | TmFontSize | number;
