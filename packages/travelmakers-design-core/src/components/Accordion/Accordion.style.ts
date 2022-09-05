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
      width: "100%",
      backgroundColor: theme.colors.white,
      marginBottom: "4px",
      ["&:last-child"]: {
        marginBottom: 0,
      },
    },
    row: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      padding: "14px 24px 14px 24px",

      [`${theme.media.desktop}`]: {
        padding: "12px 16px 12px 16px",
      },
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
      [`${theme.media.desktop}`]: {
        fontSize: "16px",
      },
    },
    title: {
      display: "block",
      width: "100%",
      fontSize: "16px",
      fontWeight: "bold",
      color: theme.colors.navy1,
      lineHeight: "1.5",
      [`${theme.media.desktop}`]: {
        fontSize: "16px",
      },
    },
    icon: {
      width: "32px",
      height: "32px",
      cursor: "pointer",
      marginLeft: "4px",
      [`${theme.media.desktop}`]: {
        width: "24px",
        height: "24px",
      },
    },

    // NOTE: Content
    content: {
      padding: "0 24px 14px 24px",
      [`${theme.media.desktop}`]: {
        padding: "0 16px 12px 16px",
      },
    },

    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: theme.colors.navy1,
      marginBottom: "14px",
      [`${theme.media.desktop}`]: {
        marginBottom: "11px",
      },
    },

    answerText: {
      display: "flex",
      lineHeight: "1.5",
    },

    answer: {
      fontSize: "16px",
      color: theme.colors.navy1,
      lineHeight: "1.5",
      width: "100%",
      [`${theme.media.desktop}`]: {
        fontSize: "16px",
        marginTop: "3px",
      },
    },
  };
});
