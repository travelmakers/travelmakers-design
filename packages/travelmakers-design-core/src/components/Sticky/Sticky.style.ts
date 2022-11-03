import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface StickyStyles {
  /** Sticky 컴포넌트의 타입을 정합니다. */
  type?: "text" | "bullet";

  /** Sticky 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";
}

export default createStyles((theme, {}: StickyStyles) => {
  return {
    root: {
      position: "sticky",
    },
  };
});
