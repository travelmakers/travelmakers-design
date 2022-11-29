import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface MainReviewCardStyles {
  /** MainReviewCard 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** MainReviewCard 컴포넌트의 색상을 정합니다. */
  size?: "small" | "large";

  /** MainReviewCard 컴포넌트의 indicator 표시 여부를 정합니다. */
  indicator?: boolean;
}

const getFontStyles = (theme: TmTheme) => ({
  small: {
    fontFamily: "PT Serif",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: theme.fontSizes.h4,
    lineHeight: `${theme.lineHeights.h4}px`,
  },

  large: {
    fontFamily: "PT Serif",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: theme.fontSizes.h1,
    lineHeight: `${theme.lineHeights.h1}px`,
  },
});
export default createStyles((theme, {}: MainReviewCardStyles) => {
  return {
    root: {
      width: "fit-content",
      maxWidth: "456px",
      [`${theme.media.mobile}`]: {
        maxWidth: "286px",
      },
    },
    reviewContainer: {
      padding: "29px 24px",
      backgroundColor: theme.colors.white,
      minHeight: "200px",
      width: "auto",
      display: "flex",
      [`${theme.media.mobile}`]: {
        padding: "16px",
      },
    },
    reviewImage: {
      width: "144px",
      height: "192px",
      marginLeft: "-40px",
      marginTop: "-41px",
      flexShrink: 0,
      ["& > img"]: {
        height: "100% !important",
      },
      [`${theme.media.mobile}`]: {
        width: "92px",
        height: "122px",
        marginTop: "0px",
        marginLeft: "-32px",
      },
    },
    descriptionWrapper: {
      marginLeft: "24px",
    },
    descriptionJob: {
      marginBottom: "16px",
    },
  };
});
