import {
  TmFontFamily,
  TmPalette,
  TmSize,
  TmTheme,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

interface ButtonStylesProps {
  color?: TmPalette;
  size: TmSize;
  fullWidth: boolean;
  family?: TmFontFamily;
  underline?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const getFontStyles = (theme: TmTheme) => ({
  xsmall: {
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h6}px`,
    fontSize: theme.fontSizes.h6,
  },

  small: {
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h4}px`,
    fontSize: theme.fontSizes.h4,
  },

  medium: {
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h2}px`,
    fontSize: theme.fontSizes.h2,
  },

  large: {
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h1}px`,
    fontSize: theme.fontSizes.h1,
  },
});

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto",
});

export default createStyles(
  (
    theme,
    {
      color: _color,
      size,
      fullWidth,
      family,
      underline,
      leftIcon,
      rightIcon,
    }: ButtonStylesProps,
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

      // ANCHOR: line(solid)
      solid: {
        color: color === "white" ? theme.colors.white : theme.colors.navy1,

        "&:not(:disabled):hover": {
          color: color === "white" ? theme.colors.white : theme.colors.navy1,
        },

        "&:not(:disabled):active": {
          color: color === "white" ? theme.colors.gray6 : theme.colors.navy2,
        },

        "&:not(:disabled):focus-visible": {
          "&::before": {
            content: '""',
            position: "absolute",
            top: -2,
            bottom: -2,
            left: -2,
            right: -2,
            borderRadius: 2,
          },
        },

        [`&:disabled:not(.${loading})`]: {
          color: theme.colors.gray5,
        },
      },

      root: {
        ...getWidthStyles(fullWidth),
        ...defaultFontStyles(theme),
        ...getFontStyles(theme)[size],
        fontFamily: `${family}`,
        borderRadius: theme.radius.small,
        backgroundColor: "transparent",
        position: "relative",
        lineHeight: 1,
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        textDecoration: underline ? "underline" : "none",
        textUnderlinePosition: "under",
        boxSizing: "border-box",
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
        // marginRight: 10,
      },

      rightIcon: {
        // marginLeft: 10,
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
        display: "flex",
        alignItems: "center",
      },
    };
  }
);
