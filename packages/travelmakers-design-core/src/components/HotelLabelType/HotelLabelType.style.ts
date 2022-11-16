import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface HotelLabelTypeStyles {}

export default createStyles((theme, {}: HotelLabelTypeStyles) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
    },
    textImage: {
      width: "16px",
      height: "16px",
      marginRight: "3px",
    },
    label: {
      width: "auto",
      marginRight: "4px",
    },
    textGray2: {
      color: theme.colors.gray2,
    },
  };
});
