import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface PriceStyles {
  /** Price 컴포넌트의 타입을 정합니다. */
  type?: "primary" | "secondary";
}

export default createStyles((theme, { type = "primary" }: PriceStyles) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },

    percentText: {
      fontFamily: "Pretendard",
      fontSize: theme.fontSizes.h6,
      lineHeight: `${theme.lineHeights.h6}px`,
      fontWeight: "700",
      color: theme.colors.red2,
      width: "39px",
    },
    nightText: {
      fontFamily: "Pretendard",
      fontSize: theme.fontSizes.b3,
      lineHeight: `${theme.lineHeights.b3}px`,
      fontWeight: "700",
      color: theme.colors.navy1,
      textAlign: "right",
      width: "28px",
    },
    priceText: {
      fontFamily: "Pretendard",
      fontSize: theme.fontSizes.h4,
      lineHeight: `${theme.lineHeights.h4}px`,
      fontWeight: "700",
      color: theme.colors.navy1,
      marginLeft: "2px",
    },
    priceBeforeText: {
      fontFamily: "Pretendard",
      fontSize: theme.fontSizes.b2,
      lineHeight: `${theme.lineHeights.b2}px`,
      fontWeight: "700",
      color: theme.colors.navy1,
    },
    priceStartText: {
      fontFamily: "Pretendard",
      fontSize: theme.fontSizes.b3,
      lineHeight: `${theme.lineHeights.b3}px`,
      fontWeight: "400",
      color: theme.colors.gray2,
      marginLeft: "4px",
    },
  };
});
