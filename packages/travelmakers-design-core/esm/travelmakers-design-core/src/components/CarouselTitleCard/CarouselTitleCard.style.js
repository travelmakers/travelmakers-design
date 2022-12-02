import { createStyles } from '@travelmakers-design/styles';
import { deviceSizes } from '../../../../travelmakers-design-styles/src/theme/types/TmSize.js';

var useStyles = createStyles((theme, {}) => {
  return {
    root: {
      display: "flex",
      position: "relative"
    },
    newBadge: {
      background: theme.colors.green2,
      borderRadius: theme.radius.small,
      width: "40px",
      height: "85px",
      padding: "2px 20px",
      [`${theme.media.mobile}`]: {
        width: "24px",
        height: "74px",
        padding: "20px 0px"
      },
      ["& > span"]: {
        transform: "rotate(90deg)",
        "-ms-transform": "rotate(90deg)",
        "-webkit-transform": "rotate(90deg)"
      }
    },
    headlineWrapper: {
      backgroundColor: theme.colors.white,
      boxShadow: "4px 4px 10px 10px rgba(163, 162, 161, 0.2)",
      width: "100%",
      maxWidth: deviceSizes.desktop,
      padding: "31px 40px",
      [`${theme.media.mobile}`]: {
        padding: "33px 24px"
      }
    },
    subHeadline: {
      marginBottom: "2px"
    },
    headline: {
      marginBottom: "19px"
    },
    description: {},
    goImageflexBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      width: "fit-content",
      borderBottom: `1px solid ${theme.colors.navy1}`,
      marginLeft: "41px",
      [`${theme.media.tablet}`]: {
        display: "none"
      }
    },
    arrowImage: {
      width: "21px",
      marginLeft: "9.5px"
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=CarouselTitleCard.style.js.map
