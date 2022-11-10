import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface TopbarStyles {
  /** Topbar 컴포넌트의 검색 타입을 정합니다. */
  mobileType?: "Expanded" | "Collapsed";
}

export default createStyles(
  (theme, { mobileType = "Expanded" }: TopbarStyles) => {
    return {
      root: {
        fontFamily: "Pretendard",
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

      logo: {
        width: "120px",
        height: "47px",
        cursor: "pointer",

        [`${theme.media.mobile}`]: {
          width: "73px",
          height: "28px",
        },
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

        [`${theme.media.mobile}`]: {
          height: "32px",
          flex: "1 0",
        },

        [`${theme.media.mobile}`]: {
          backgroundColor:
            mobileType === "Collapsed" ? "inherit" : theme.colors.gray6,
          padding: mobileType === "Collapsed" ? "0px" : "8px 40px",
        },
      },
      mobileSearchBox: {
        display: "none",
        [`${theme.media.mobile}`]: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        },
      },
      searchIcon: {
        width: "24px",
        height: "24px",
        marginRight: "4px",
        cursor: "pointer",
        [`${theme.media.mobile}`]: {
          width: mobileType === "Collapsed" ? "24px" : "16px",
          height: mobileType === "Collapsed" ? "24px" : "16px",
        },
      },
      mypageIcon: {
        width: "24px",
        height: "24px",
        marginLeft: "16px",
        cursor: "pointer",
      },
      searchText: {
        fontSize: theme.fontSizes.h6,
        lineHeight: `${theme.lineHeights.h6}px`,
        fontWeight: 400,
        textAlign: "center",
        color: theme.colors.navy2,
        [`${theme.media.mobile}`]: {
          fontSize: theme.fontSizes.b1,
          lineHeight: `${theme.lineHeights.b1}px`,
          display: mobileType === "Expanded" ? "block" : "none",
        },
      },
      divider: {
        display: "block",
        margin: "auto 12px",
        width: "1px",
        height: "16px",
        backgroundColor: theme.colors.navy3,
        [`${theme.media.mobile}`]: {
          display: "none",
        },
      },
      menuText: {
        position: "relative",
        fontSize: theme.fontSizes.h6,
        lineHeight: `${theme.lineHeights.h6}px`,
        fontWeight: 700,
        color: theme.colors.navy1,
        cursor: "pointer",
        ["&:hover"]: {
          color: theme.colors.beige4,
        },
        [`${theme.media.mobile}`]: {
          display: "none",
        },
      },
      newBadge: {
        display: "flex",
        position: "absolute",
        width: "16px",
        height: "16px",
        top: "-8px",
        right: "-8px",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        borderRadius: "6px",
        backgroundColor: theme.colors.red2,
        ["& > span"]: {
          color: "white",
          fontSize: theme.fontSizes.caption,
          fontWeight: "bold",
          marginLeft: "1px",
        },
        [`${theme.media.mobile}`]: {
          width: "5px",
          height: "5px",
        },
      },
    };
  }
);
