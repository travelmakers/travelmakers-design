import { createStyles } from '@travelmakers-design/styles';

var useStyles = createStyles((theme, { type = "default" }) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "20px 24px",
      gap: "8px",
      backgroundColor: `${theme.colors.gray6}`
    },
    titleWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 0,
      gap: "8px"
    },
    title: {
      color: type === "default" ? theme.colors.green2 : theme.colors.red2,
      fontFamily: "Pretendard",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: theme.fontSizes.b2,
      lineHeight: `${theme.lineHeights.b2}px`
    },
    content: {
      color: theme.colors.navy1,
      fontFamily: "Pretendard",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: theme.fontSizes.b2,
      lineHeight: `${theme.lineHeights.b2}px`
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=Callout.style.js.map
