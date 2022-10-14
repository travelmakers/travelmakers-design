import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
} from "@travelmakers-design/styles";

import { TM_HEIGHTS } from "../../constants";

interface SpinnerStyles {
  type?: "default" | "warning";
}

export default createStyles((theme, { type = "default" }: SpinnerStyles) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "20px 24px",
      gap: "8px",
      backgroundColor: `${theme.colors.gray6}`,
    },

    titleWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 0,
      gap: "8px",
    },
    title: {
      color: type === "default" ? theme.colors.green2 : theme.colors.red2,
      fontFamily: "Pretendard",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: theme.fontSizes.b2,
      lineHeight: `${theme.lineHeights.b2}px`,
    },
    content: {
      color: theme.colors.navy1,
      fontFamily: "Pretendard",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: theme.fontSizes.b2,
      lineHeight: `${theme.lineHeights.b2}px`,
    },
  };
});
