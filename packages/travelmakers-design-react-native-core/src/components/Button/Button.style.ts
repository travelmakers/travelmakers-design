import {
  TmPalette,
  TmSize,
  TmTheme,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

import { TM_HEIGHTS } from "../../constants";
import { addAlpha } from "../../utils";

interface ButtonStylesProps {
  variant?: TmPalette;
  size: TmSize;
  fullWidth: boolean;
  roundness?: boolean;
  line?: boolean;
}

const sizes = {
  xsmall: {
    height: TM_HEIGHTS.xsmall,
    paddingHorizontal: 24,
  },

  small: {
    height: TM_HEIGHTS.small,
    paddingHorizontal: 24,
  },

  medium: {
    height: TM_HEIGHTS.medium,
    paddingHorizontal: 24,
  },

  large: {
    height: TM_HEIGHTS.large,
    paddingHorizontal: 24,
  },
};

const getFontStyles = (theme: TmTheme) => ({
  xsmall: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption,
  },

  small: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3,
  },

  medium: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2,
  },

  large: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h5}px`,
    fontSize: theme.fontSizes.h5,
  },
});

export const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {} as Record<TmSize, number>);

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto",
});

export default createStyles(
  (
    theme,
    { variant: _variant, size, fullWidth, roundness, line }: ButtonStylesProps,
    getRef
  ) => {
    const loading = getRef("loading");
    const inner = getRef("inner");
    const spinner = getRef("spinner");
    const variant = _variant || theme.colors.navy1;

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

      // ANCHOR: line(solid)
      solid: {
        backgroundColor:
          theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0],
        color: variant === "white" ? theme.colors.navy1 : theme.colors.white,

        "&:not(:disabled):hover": {
          backgroundColor:
            theme.palettes[variant][theme.colorScheme === "light" ? 1 : 1],
        },

        "&:not(:disabled):active": {
          backgroundColor:
            theme.palettes[variant][theme.colorScheme === "light" ? 2 : 2],
        },

        "&:not(:disabled):focus-visible": {
          "&::before": {
            content: '""',
            position: "absolute",
            top: -2,
            bottom: -2,
            left: -2,
            right: -2,
            borderRadius: roundness ? theme.radius.round : 2,
            outline: `1px solid ${
              theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0]
            }`,
          },
        },

        [`&:disabled:not(.${loading})`]: {
          backgroundColor: theme.colors.gray5,
          color: line ? theme.colors.black : theme.colors.white,
        },
      },

      // ANCHOR: line(ghost)
      ghost: {
        backgroundColor: theme.colors.transparent,
        border: `1px solid ${
          theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0]
        }`,
        // color: theme.palettes[color][theme.colorScheme === "light" ? 0 : 0],
        color:
          variant === "white" ? theme.colors.white : theme.palettes[variant][0],

        "&:not(:disabled):focus-visible": {
          "&::before": {
            content: '""',
            position: "absolute",
            top: -2,
            bottom: -2,
            left: -2,
            right: -2,
            borderRadius: roundness ? theme.radius.round : 2,
            outline: `1px solid ${
              theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0]
            }`,
          },
        },

        [`&:disabled:not(.${loading})`]: {
          color: addAlpha(theme.palettes[variant][1], theme.opacity.opacity3),
          border: `1px solid ${addAlpha(
            theme.palettes[variant][1],
            theme.opacity.opacity3
          )}`,
        },
      },

      root: {
        ...sizes[size],
        ...getWidthStyles(fullWidth),
        ...defaultFontStyles(theme),
        ...getFontStyles(theme)[size],
        borderRadius: roundness ? theme.radius.round : theme.radius.small,
        position: "relative",
        lineHeight: `${1}px`,
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        boxSizing: "border-box",
        textDecoration: "none",
        cursor: "pointer",
        appearance: "none",
        WebkitAppearance: "none",
        outline: "none",
        border: "none",

        "&:not(:disabled):active": {
          transform: "translateY(1px)",
        },

        "&:disabled": {
          cursor: "not-allowed",
        },
      },

      icon: {
        display: "flex",
        alignItems: "center",
      },

      leftIcon: {
        marginRight: 10,
      },

      rightIcon: {
        marginLeft: 10,
      },

      inner: {
        ref: inner,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflow: "visible",
      },

      label: {
        whiteSpace: "nowrap",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      },

      spinnerWrapper: {
        ref: spinner,
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "none",
        alignItems: "center",
        justifyContent: "center",
      },
    };
  }
);
