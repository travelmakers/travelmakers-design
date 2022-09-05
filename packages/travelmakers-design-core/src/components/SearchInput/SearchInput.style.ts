import {
  CoRadius,
  TmFontSize,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

import { InputDescriptionType } from "../Input/Input";

interface InputStyles {
  roundness: boolean;
  multiline: boolean;
  invalid: boolean;
  width?: number;
  descriptionType?: InputDescriptionType;
}

const FONT_SIZES = {
  xsmall: 12,
  small: 14,
  medium: 14,
  large: 14,
  xlarge: 16,
};

export default createStyles(
  (
    theme,
    { multiline, roundness, invalid, width, descriptionType }: InputStyles
  ) => {
    const invalidColor = theme.colors.red2;

    return {
      wrapper: {
        position: "relative",
      },

      input: {
        ...defaultFontStyles(theme),
        height: multiline ? "auto" : 44,
        WebkitTapHighlightColor: "transparent",
        lineHeight: multiline ? theme.lineHeight : theme.lineHeights.b2,
        appearance: "none",
        resize: "none",
        boxSizing: "border-box",
        fontFamily: "Pretendard",
        fontSize: theme.fontSizes.b2,
        width: width ? `${width}px` : "100%",
        color: theme.colors.gray2,
        display: "block",
        textAlign: "left",
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: roundness ? theme.radius.round : 2,
        border: `1px solid ${theme.colors.gray5}`,
        backgroundColor: theme.colors.white,

        "&:focus, &:focus-within": {
          outline: "none",
          color: theme.colors.gray1,
          border: `1px solid ${theme.colors.gray1}`,
        },

        "&:disabled": {
          // backgroundColor: theme.colors.gray7,
          borderColor: theme.colors.gray5,
          color: theme.colors.gray5,
          opacity: 0.6,
          cursor: "not-allowed",

          "&::placeholder": {
            color: theme.colors.gray5,
          },
        },

        "&::placeholder": {
          opacity: 1,
          userSelect: "none",
          color: theme.colors.gray3,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        },

        "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
          {
            appearance: "none",
          },

        "&[type=number]": {
          MozAppearance: "textfield",
        },
      },

      withIcon: {
        paddingLeft: 48,
      },

      invalid: {
        borderColor: `${invalidColor}`,

        "&::placeholder": {
          opacity: 1,
        },
      },

      disabled: {
        borderColor: theme.colors.gray5,
        color: theme.colors.gray5,
        opacity: 0.6,
        cursor: "not-allowed",

        "&::placeholder": {
          color: theme.colors.gray5,
        },
      },

      fill: {
        backgroundColor: theme.colors.gray6,
        color: theme.colors.navy3,
        border: `0px solid ${theme.colors.gray5}`,

        "&:disabled": {
          backgroundColor: theme.colors.gray6,
          border: `1px solid ${theme.colors.gray5}`,
        },
      },

      icon: {
        pointerEvents: "none",
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "44px",
        color: theme.colors.gray1,

        svg: {
          width: "24px",
          height: "100%",
        },
      },

      rightSection: {
        cursor: "pointer",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      },
    };
  }
);
