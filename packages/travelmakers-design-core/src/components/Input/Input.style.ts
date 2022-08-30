import {
  CoRadius,
  TmSize,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

import { TM_HEIGHTS } from "../../constants";
import { getFieldValue } from "../../utils";

interface InputStyles {
  radius: CoRadius | number;
  size: TmSize;
  multiline: boolean;
  invalid: boolean;
}

const FONT_SIZES = {
  xsmall: 12,
  small: 14,
  medium: 14,
  large: 14,
  xlarge: 16,
};

export default createStyles(
  (theme, { size, multiline, radius, invalid }: InputStyles) => {
    const invalidColor = theme.colors.red2;

    return {
      wrapper: {
        position: "relative",
      },

      input: {
        ...defaultFontStyles(theme),
        height: multiline ? "auto" : getFieldValue(size, TM_HEIGHTS),
        WebkitTapHighlightColor: "transparent",
        lineHeight: multiline
          ? theme.lineHeight
          : `${getFieldValue(size, TM_HEIGHTS) - 2}px`,
        appearance: "none",
        resize: "none",
        boxSizing: "border-box",
        fontSize: getFieldValue(size, FONT_SIZES),
        width: "100%",
        color: theme.colors.gray1,
        display: "block",
        textAlign: "left",
        minHeight: getFieldValue(size, TM_HEIGHTS),
        paddingLeft: getFieldValue(size, TM_HEIGHTS) / 3,
        paddingRight: getFieldValue(size, TM_HEIGHTS) / 3,
        borderRadius: getFieldValue(radius, theme.radius),
        border: `1px solid ${theme.colors.gray1}`,
        backgroundColor: theme.colors.white,

        "&:focus, &:focus-within": {
          outline: "none",
          borderColor: theme.colors.gray1,
        },

        "&:disabled": {
          backgroundColor: theme.colors.gray7,
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
        paddingLeft: `${getFieldValue(size, TM_HEIGHTS)}px !important`,
      },

      invalid: {
        // color: `${invalidColor} !important`,
        borderColor: `${invalidColor} !important`,

        "&::placeholder": {
          opacity: 1,
          // color: `${invalidColor} !important`,
        },
      },

      disabled: {
        backgroundColor: theme.colors.gray7,
        color: theme.colors.gray5,
        opacity: 0.6,
        cursor: "not-allowed",

        "&::placeholder": {
          color: theme.colors.gray5,
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
        justifyContent: "center",
        width: getFieldValue(size, TM_HEIGHTS),
        color: invalid ? theme.colors.red2 : theme.colors.gray1,

        svg: {
          width: "50%",
          height: "50%",
        },
      },

      rightSection: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    };
  }
);
