import { TagColor, TagSize } from "./Tag";
import {
  TmTheme,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

interface TagStyles {
  color?: TagColor;
  fill?: boolean;
  roundness?: "default" | "full" | "half";
  size?: TagSize;
  disabled?: boolean;
}

const getFontStyles = (theme: TmTheme) => ({
  small: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption,
  },

  medium: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3,
  },

  large: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2,
  },
});

const getPaddingStyles = (theme: TmTheme, fill: boolean) => ({
  small: {
    padding: fill ? "2px 8px" : "0px 8px",
  },

  medium: {
    padding: fill ? "2px 12px" : "0px 12px",
  },

  large: {
    padding: fill ? "3px 12px" : "0px 16px",
  },
});

export default createStyles(
  (theme, { color, roundness, size, fill, disabled = false }: TagStyles) => {
    return {
      container: {
        ...defaultFontStyles(theme),
        ...getFontStyles(theme)[size],
        ...getPaddingStyles(theme, fill)[size],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",

        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: disabled
          ? theme.colors.gray4
          : color === "gray"
          ? theme.colors.navy1
          : theme.colors.white,

        marginRight: "6px",
        gap: "8px",
        borderRadius:
          roundness === "full"
            ? theme.radius.round
            : roundness === "half"
            ? "2px"
            : "0px",
        backgroundColor:
          color === "green"
            ? theme.colors.green3
            : color === "blue"
            ? theme.colors.point_sky1
            : color === "purple"
            ? theme.colors.point_purple1
            : theme.colors.gray6,

        ["&:last-child"]: {
          marginRight: 0,
        },
      },
      line: {
        color:
          color === "green"
            ? theme.colors.green3
            : color === "blue"
            ? theme.colors.point_sky1
            : color === "purple"
            ? theme.colors.point_purple1
            : theme.colors.gray3,
        background: "inherit",
        border: "1px solid",
      },
      inner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflow: "visible",

        // "& > *": {
        //   width: sizes[size].width - paddings[size],
        //   height: sizes[size].height - paddings[size],
        // },
      },
    };
  }
);
