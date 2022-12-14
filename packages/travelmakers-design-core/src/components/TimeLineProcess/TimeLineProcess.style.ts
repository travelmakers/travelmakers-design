import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface TimeLineProcessStyles {}

export default createStyles((theme, {}: TimeLineProcessStyles) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: theme.colors.gray8,
      borderRadius: "28px",
      padding: theme.spacing.xsmall,
      height: "52px",
    },
    textWrapper: {},
    text: {
      width: "fit-content",
      padding: "12px",
      color: theme.colors.navy1,
      ["& > div > span"]: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
    process: {
      color: theme.colors.white,
      backgroundColor: theme.colors.green2,
      borderRadius: "22px",
      lineHeight: "14px",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
  };
});
