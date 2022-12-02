import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface OptionCardStyles {}

export default createStyles((theme, {}: OptionCardStyles) => {
  return {
    root: {
      width: "fit-content",
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    spaceBetween: {
      justifyContent: "space-between",
    },
    individualLabel: {
      marginRight: 0,
    },
    labelWrapper: {
      marginBottom: "2px",
      height: "24px",
    },
    optionWrapper: {
      marginBottom: "10px",
    },
    couponWrapper: {
      marginBottom: "6px",
    },
    divider: {
      backgroundColor: theme.colors.navy1,
      width: "100%",
      height: "1px",
      margin: "4px 0",
    },
    arrowImage: {
      width: "16px",
      height: "16px",
    },
    container: {
      backgroundColor: theme.colors.white,
      width: "280px",
      height: "395px",
      padding: "16px 24px",
    },
    optionText: {
      width: "74px",
      flexShrink: 0,
    },
    footer: {},
  };
});
