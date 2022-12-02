import { createStyles } from '@travelmakers-design/styles';

var useStyles = createStyles((theme, {}) => {
  return {
    root: {
      width: "fit-content",
      maxWidth: "456px",
      [`${theme.media.mobile}`]: {
        maxWidth: "286px"
      }
    },
    reviewContainer: {
      padding: "29px 24px",
      backgroundColor: theme.colors.white,
      minHeight: "200px",
      width: "auto",
      display: "flex",
      [`${theme.media.mobile}`]: {
        padding: "16px"
      }
    },
    reviewImage: {
      width: "144px",
      height: "192px",
      marginLeft: "-40px",
      marginTop: "-41px",
      flexShrink: 0,
      ["& > img"]: {
        height: "100% !important"
      },
      [`${theme.media.mobile}`]: {
        width: "92px",
        height: "122px",
        marginTop: "0px",
        marginLeft: "-32px"
      }
    },
    descriptionWrapper: {
      marginLeft: "24px"
    },
    descriptionJob: {
      marginBottom: "16px"
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=MainReviewCard.style.js.map
