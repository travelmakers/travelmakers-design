import {
  TmPalette,
  TmSize,
  TmTheme,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

import { TM_HEIGHTS } from "../../constants";
import { addAlpha } from "../../utils";

export type ButtonVariant = "solid" | "ghost";

interface ButtonStylesProps {
  color?: TmPalette;
  size: TmSize;
  fullWidth: boolean;
  radius?: boolean;
  variant?: ButtonVariant;
}

const sizes = {
  xsmall: {
    height: TM_HEIGHTS.xsmall,
    padding: "0 24px",
  },

  small: {
    height: TM_HEIGHTS.small,
    padding: "0 24px",
  },

  medium: {
    height: TM_HEIGHTS.medium,
    padding: "0 24px",
  },

  large: {
    height: TM_HEIGHTS.large,
    padding: "0 24px",
  },

  xlarge: {
    height: TM_HEIGHTS.xlarge,
    padding: "0 24px",
  },
};

const getFontStyles = (theme: TmTheme) => ({
  xsmall: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: theme.lineHeights.caption,
    fontSize: theme.fontSizes.caption,
  },

  small: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: theme.lineHeights.b3,
    fontSize: theme.fontSizes.b3,
  },

  medium: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: theme.lineHeights.b2,
    fontSize: theme.fontSizes.b2,
  },

  large: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: theme.lineHeights.h5,
    fontSize: theme.fontSizes.h5,
  },

  xlarge: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: theme.lineHeights.h5,
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
    { color: _color, size, fullWidth, radius, variant }: ButtonStylesProps,
    getRef
  ) => {
    const loading = getRef("loading");
    const inner = getRef("inner");
    const spinner = getRef("spinner");
    const color = _color || theme.colors.navy1;

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

      // ANCHOR: variant(solid)
      solid: {
        backgroundColor:
          theme.palettes[color][theme.colorScheme === "light" ? 0 : 0],
        color: color === "white" ? theme.colors.navy1 : theme.colors.white,

        "&:not(:disabled):hover": {
          backgroundColor:
            theme.palettes[color][theme.colorScheme === "light" ? 1 : 1],
        },

        "&:not(:disabled):active": {
          backgroundColor:
            theme.palettes[color][theme.colorScheme === "light" ? 2 : 2],
        },

        "&:not(:disabled):focus-visible": {
          "&::before": {
            content: '""',
            position: "absolute",
            top: -2,
            bottom: -2,
            left: -2,
            right: -2,
            borderRadius: radius ? theme.radius.round : 2,
            outline: `1px solid ${
              theme.palettes[color][theme.colorScheme === "light" ? 0 : 0]
            }`,
          },
        },

        [`&:disabled:not(.${loading})`]: {
          backgroundColor: theme.colors.gray5,
          // color: addAlpha(theme.colors.black, theme.opacity.opacity3),?
          color: variant === "solid" ? theme.colors.white : theme.colors.black,
        },
      },

      // ANCHOR: variant(ghost)
      ghost: {
        backgroundColor: theme.colors.transparent,
        border: `1px solid ${
          theme.palettes[color][theme.colorScheme === "light" ? 0 : 0]
        }`,
        // color: theme.palettes[color][theme.colorScheme === "light" ? 0 : 0],
        color:
          color === "white" ? theme.colors.white : theme.palettes[color][0],

        "&:not(:disabled):focus-visible": {
          "&::before": {
            content: '""',
            position: "absolute",
            top: -2,
            bottom: -2,
            left: -2,
            right: -2,
            borderRadius: radius ? theme.radius.round : 2,
            outline: `1px solid ${
              theme.palettes[color][theme.colorScheme === "light" ? 0 : 0]
            }`,
          },
        },

        [`&:disabled:not(.${loading})`]: {
          color: addAlpha(theme.palettes[color][1], theme.opacity.opacity3),
          border: `1px solid ${addAlpha(
            theme.palettes[color][1],
            theme.opacity.opacity3
          )}`,
        },
      },

      root: {
        ...sizes[size],
        ...getWidthStyles(fullWidth),
        ...defaultFontStyles(theme),
        ...getFontStyles(theme)[size],
        borderRadius: radius ? theme.radius.round : theme.radius.small,
        position: "relative",
        lineHeight: 1,
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
