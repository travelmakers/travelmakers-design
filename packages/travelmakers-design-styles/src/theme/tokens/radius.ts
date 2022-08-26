import { TmSize } from "../types/TmSize";

export type CoRadius =
  | Extract<TmSize, "small" | "medium" | "large">
  | "round"
  | "circular";

export const DEFAULT_RADIUS: Record<CoRadius, number | "50%"> = {
  small: 2,
  medium: 4,
  large: 8,
  round: 100,
  circular: "50%",
};
