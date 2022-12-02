'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');

var useStyles = styles.createStyles((theme, {}) => {
  return {
    root: {
      width: "fit-content"
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    spaceBetween: {
      justifyContent: "space-between"
    },
    individualLabel: {
      marginRight: 0
    },
    labelWrapper: {
      marginBottom: "2px",
      height: "24px"
    },
    optionWrapper: {
      marginBottom: "10px"
    },
    couponWrapper: {
      marginBottom: "6px"
    },
    divider: {
      backgroundColor: theme.colors.navy1,
      width: "100%",
      height: "1px",
      margin: "4px 0"
    },
    arrowImage: {
      width: "16px",
      height: "16px"
    },
    container: {
      backgroundColor: theme.colors.white,
      width: "280px",
      height: "395px",
      padding: "16px 24px"
    },
    optionText: {
      width: "74px",
      flexShrink: 0
    },
    footer: {}
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=OptionCard.style.js.map
