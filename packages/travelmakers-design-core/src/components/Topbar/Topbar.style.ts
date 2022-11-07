import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface TopbarStyles {
  /** Topbar 컴포넌트의 타입을 정합니다. */
  type?: "primary" | "secondary";
}

export default createStyles((theme, { type = "primary" }: TopbarStyles) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: "100vh",
      ["@supports (-webkit-touch-callout: none)"]: {
        minHeight: "-webkit-fill-available",
      },
    },

    container: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      padding: "16px 0",
      [`${theme.media.mobile}`]: {
        padding: "14px 0",
      },
      backgroundColor: theme.colors.white,
    },

    section: {
      display: "flex",
      alignItems: "center",
    },

    wrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: deviceSizes.maxSize,
    },

    searchBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40px",
      padding: "8px 40px",
      borderRadius: "22px",
      backgroundColor: theme.colors.gray6,
      cursor: "pointer",
    },
    searchIcon: {
      width: "20px",
      height: "20px",
      marginRight: "4px",
      cursor: "pointer",
    },
    searchText: {
      fontSize: "16px",
      textAlign: "center",
      color: theme.colors.navy2,
    },
    divider: {
      display: "block",
      margin: "auto 12px",
      width: "1px",
      height: "16px",
      backgroundColor: theme.colors.navy3,
    },
    menuText: {},
  };
});
