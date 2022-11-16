import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface HotelItemsStyles {}

export default createStyles((theme, {}: HotelItemsStyles) => {
  const badgeColors = ["#03936e", "#1a749e", "#73327a", "#ab253e", "#b2622e"];
  return {
    root: {
      display: "flex",
    },
    item: {},
  };
});
