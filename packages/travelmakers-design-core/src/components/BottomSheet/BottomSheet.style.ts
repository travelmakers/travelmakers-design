import {
  createStyles,
  defaultFontStyles,
  TmTheme,
} from "@travelmakers-design/styles";

interface BottomSheetStyles {
  length?: number;
  popup?: boolean;
}

const optionBoxStyles = (theme: TmTheme, length: number) => {
  if (length > 1) {
    return {
      ["&:first-of-type"]: {
        padding: "10px 16px",
        backgroundColor: theme.colors.gray6,
        ["& > img"]: {
          width: "16px",
          height: "16px",
          marginRight: "8px",
        },
        ["& > span"]: {
          fontWeight: "700",
        },
      },
    };
  } else {
    return {};
  }
};

export default createStyles((theme, { length, popup }: BottomSheetStyles) => {
  return {
    container: {
      ...defaultFontStyles(theme),
      display: "block",
      width: "100%",
      border: "solid 1px #d7d7d7",
      borderRadius: theme.radius.small,
    },
    option: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: "12px 16px",
      borderBottom: "solid 1px #d7d7d7",
      backgroundColor: "white",
      cursor: "pointer",
      ["&:last-child"]: {
        borderBottom: 0,
      },
      [".transparent-agreement"]: {
        backgroundColor: "transparent",
      },
      ...optionBoxStyles(theme, length),
    },
    optionIcon: {
      width: "16px",
      height: "16px",
      marginRight: "12px",
      cursor: "pointer",
    },
    moreIcon: {
      width: "16px",
      height: "16px",
      transform: "rotate(-90deg)",
      cursor: "pointer",
    },
    labelContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    label: {
      fontSize: "12px",
      color: theme.colors.navy1,
      lineHeight: "20px",
      wordBreak: "keep-all",
      [".transparent-agreement &"]: {
        color: theme.colors.white,
      },
    },
    moteIcon: {
      width: "16px",
      height: "16px",
      transform: "rotate(-90deg)",
      marginLeft: "auto",
      cursor: "pointer",
    },
    modalContentText: {
      display: "block",
      width: "100%",
      maxHeight: "100%",
      lineHeight: "1.5",
      whiteSpace: "pre-wrap",
      color: "${colors.navy}",
      overflowY: "auto",
      paddingBottom: "16px",
      [`${theme.media.desktop}`]: {
        fontSize: "12px",
        padding: "12px 20px",
      },
      ["&.Agreement"]: {
        height: "calc(100% - 44px)",
        ["@media screen and (min-width: 768px)"]: {
          height: "calc(100% - 104px)",
          ["@media screen and (max-height: 640px)"]: {
            height: "calc(100% - 72px)",
          },
        },
      },
    },
  };
});
