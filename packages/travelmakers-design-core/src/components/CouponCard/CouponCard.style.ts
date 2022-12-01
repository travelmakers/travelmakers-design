import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface CouponCardStyles {
  /** CouponCard 컴포넌트의 state를 판단합니다. */
  state?: "default" | "applied" | "checked";

  /** CouponCard 컴포넌트의 type을 판단합니다. */
  type?: "Week" | "Month" | "All";
}

const getLabelTheme = (theme: TmTheme) => ({
  Week: {
    backgroundColor: theme.colors.green2,
  },
  Month: {
    backgroundColor: theme.colors.green3,
  },
  All: {
    backgroundColor: theme.colors.navy1,
  },
});

export default createStyles(
  (theme, { state = "default", type = "Week" }: CouponCardStyles) => {
    return {
      root: {
        width: "296px",
        backgroundColor: theme.colors.white,
      },
      flex: {
        display: "flex",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
      labelContainer: {
        ...getLabelTheme(theme)[type],
        padding: "0px 8px",
        width: "80px",
      },
      contentContainer: {
        width: "100%",
        backgroundColor: theme.colors.gray8,
        padding: "12px",
      },
    };
  }
);
