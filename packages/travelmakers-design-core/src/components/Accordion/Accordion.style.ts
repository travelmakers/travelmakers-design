import {
  CoRadius,
  TmFontSize,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

interface AccordionStyles {
  open: boolean[];
}

export default createStyles((theme, { open }: AccordionStyles) => {
  return {
    container: {
      ...defaultFontStyles(theme),
      display: "flex",
      flexDirection: "column",
      borderRadius: "8px",
      width: "100%",
      backgroundColor: theme.colors.white,
      marginBottom: "8px",
      ["&:last-child"]: {
        marginBottom: 0,
      },
    },
    rowPadding: {
      padding: "12px 16px !important",
    },
    row: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      padding: "12px 16px",
    },
    titleWrap: {
      display: "flex",
      width: "100%",
    },
    titleIndex: {
      fontWeight: "bold",
      fontFamily: "pt serif",
      color: theme.colors.cover1,
      fontStyle: "italic",
      marginRight: "4px",
    },
    title: {
      display: "block",
      width: "100%",
      color: theme.colors.navy1,
      fontSize: theme.fontSizes.b2,
      lineHeight: `${theme.lineHeights.b2}px`,
      fontWeight: "400",
    },
    icon: {
      cursor: "pointer",
      marginLeft: "4px",
      width: "24px",
      height: "24px",
    },

    // NOTE: Content
    content: {
      padding: "0 16px 12px 16px",
    },

    contentPadding: {
      padding: "0 16px 12px 16px !important",
    },

    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: "#E8E8E8",
      marginBottom: "11px",
    },

    answerText: {
      display: "flex",
      lineHeight: "1.5",
    },

    answer: {
      color: theme.colors.navy1,
      width: "100%",
      fontSize: theme.fontSizes.b2,
      lineHeight: `${theme.lineHeights.b2}px`,
    },
  };
});
