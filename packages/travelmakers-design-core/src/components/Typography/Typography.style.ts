import {
  TmFontFamily,
  TmFontSize,
  TmSize,
  TmTheme,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

import { TypographyTextAlign } from "./Typography";
import { addAlpha } from "../../utils";

interface TypographyStylesProps {
  family: TmFontFamily;
  level: TmFontSize;
  mobile?: TmFontSize;
  tablet?: TmFontSize;
  textAlign?: TypographyTextAlign;
  disabled?: boolean;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
}

const sizes = {
  h1: {
    // height: TM_HEIGHTS.small,
  },

  small: {
    // height: TM_HEIGHTS.small,
  },

  medium: {
    // height: TM_HEIGHTS.medium,
  },

  large: {
    // height: TM_HEIGHTS.large,
  },
};

const getFontStyles = (theme: TmTheme) => ({
  caption: {
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption,
  },

  b3: {
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3,
  },

  b2: {
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2,
  },

  b1: {
    lineHeight: `${theme.lineHeights.b1}px`,
    fontSize: theme.fontSizes.b1,
  },

  h6: {
    lineHeight: `${theme.lineHeights.h6}px`,
    fontSize: theme.fontSizes.h6,
  },

  h5: {
    lineHeight: `${theme.lineHeights.h5}px`,
    fontSize: theme.fontSizes.h5,
  },

  h4: {
    lineHeight: `${theme.lineHeights.h4}px`,
    fontSize: theme.fontSizes.h4,
  },

  h3: {
    lineHeight: `${theme.lineHeights.h3}px`,
    fontSize: theme.fontSizes.h3,
  },

  h2: {
    lineHeight: `${theme.lineHeights.h2}px`,
    fontSize: theme.fontSizes.h2,
  },

  h1: {
    lineHeight: `${theme.lineHeights.h1}px`,
    fontSize: theme.fontSizes.h1,
  },
});

export const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {} as Record<TmSize, number>);

const getWidthStyles = (fullWidth?: boolean) => ({
  display: "block",
  width: "100%",
});

export default createStyles(
  (
    theme,
    {
      family,
      level,
      textAlign,
      disabled,
      strong,
      italic,
      underline,
      mobile,
      tablet,
    }: TypographyStylesProps,
    getRef
  ) => {
    const loading = getRef("loading");
    const inner = getRef("inner");
    const spinner = getRef("spinner");

    return {
      loading: {
        ref: loading,
        pointerEvents: "none",

        "&::before": {
          content: '""',
          position: "absolute",
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          cursor: "not-allowed",
        },

        [`.${inner}`]: {
          opacity: 0,
        },

        [`.${spinner}`]: {
          display: "flex",
        },
      },

      solid: {
        fontWeight: strong ? (family === "Noto Serif KR" ? 600 : 700) : 400,
        fontStyle: italic ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",
        textUnderlinePosition: "under",
      },

      root: {
        ...sizes[level],
        ...getWidthStyles(),
        ...getFontStyles(theme)[level],
        fontFamily: `${family}`,
        color: disabled ? theme.colors.gray5 : theme.colors.black,
        position: "relative",
        WebkitTapHighlightColor: "transparent",
        appearance: "none",
        textAlign: `${textAlign}`,
        WebkitAppearance: "none",
        outline: "none",
        border: "none",

        [`${theme.media.mobile}`]: {
          ...getFontStyles(theme)[mobile],
        },

        [`${theme.media.tablet}`]: {
          ...getFontStyles(theme)[tablet],
        },
      },

      inner: {
        ref: inner,
        height: "100%",
        overflow: "visible",
      },

      label: {
        height: "100%",
      },
    };
  }
);
