import {
  CoBreakpoints,
  CoOpacity,
  CoRadius,
  CoShadows,
  CoSpacing,
  CoZIndex,
  TmColor,
  TmFontSizes,
  TmPalette,
} from "../tokens";

import type { CSSProperties } from "react";
import type { DeepPartial } from "./DeepPartial";
import { TmSize } from "./TmSize";
import type { Tuple } from "./Tuple";

export interface HeadingStyle {
  fontSize: CSSProperties["fontSize"];
  lineHeight: CSSProperties["lineHeight"];
}

interface TmThemeFunctions {
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  smallerThan(breakpoint: TmSize | number): string;
  largerThan(breakpoint: TmSize | number): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  spacing(size: number): number;
}

export interface TmTheme {
  locale: string;
  colorScheme: "light" | "dark";
  fontFamily: CSSProperties["fontFamily"];
  lineHeight: CSSProperties["lineHeight"];
  fontFamilyMonospace: CSSProperties["fontFamily"];
  primaryColor: string;

  colors: Record<TmColor, string>;
  palettes: Record<TmPalette, Tuple<string, 3>>;
  fontSizes: Record<TmFontSizes, number>;
  lineHeights: Record<TmFontSizes, number>;
  radius: Record<CoRadius, number | string>;
  spacing: Record<CoSpacing, number>;
  breakpoints: Record<CoBreakpoints, number>;
  shadows: Record<CoShadows, string>;
  opacity: Record<CoOpacity, number>;
  zIndex: Record<CoZIndex, number>;

  headings: {
    h1: HeadingStyle;
    h2: HeadingStyle;
    h3: HeadingStyle;
    h4: HeadingStyle;
    h5: HeadingStyle;
    h6: HeadingStyle;
  };

  fn: TmThemeFunctions;
  extra: Record<string, any>;
}

export type TmThemeBase = Omit<TmTheme, "fn">;

export type TmThemeOverride = DeepPartial<Omit<TmTheme, "extra">> & {
  extra?: Record<string, any>;
};
