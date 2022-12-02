import { createStyles } from '@travelmakers-design/styles';

var useStyles = createStyles((theme, {}) => {
  return {
    root: {
      display: "flex",
      alignItems: "center"
    },
    textImage: {
      width: "16px",
      height: "16px",
      marginRight: "3px"
    },
    label: {
      width: "auto",
      marginRight: "4px"
    },
    textGray2: {
      color: theme.colors.gray2
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=HotelLabelType.style.js.map
