import { createStyles } from "@travelmakers-design/styles";

interface StatusCardStyles {
  isArrow: boolean;
  isLabel: boolean;
  titleDisable?: boolean;
  messageDisable?: boolean;
  messageUnderline?: boolean;
}

export default createStyles(
  (
    theme,
    {
      isArrow = true,
      isLabel = true,
      titleDisable = false,
      messageDisable = false,
      messageUnderline = false,
    }: StatusCardStyles
  ) => {
    return {
      root: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.radius.large,
        padding: "12px",
      },
      container: {
        display: "flex",
        gap: "12px",
        cursor: isArrow ? "pointer" : "auto",
      },
      image: {
        width: "98px",
        height: "98px",
        ["& > img"]: {
          height: "100% !important",
          borderRadius: theme.radius.large,
        },
      },
      textContainer: {
        width: "100%",
      },
      description: {
        marginTop: "7px",
      },
      footerWrapper: {
        marginTop: "7px",

        // isLabel is false
        height: isLabel
          ? `${theme.lineHeights.b3}px`
          : `${theme.lineHeights.b3 * 2}px`,
        alignItems: !isLabel && "flex-end !important",
      },
      footer: {},
      textBreak: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: `${theme.lineHeights.b3}px`,
        wordWrap: "break-word",
        display: "-webkit-box",
        ["-webkit-line-clamp"]: "1",
        ["-webkit-box-orient"]: "vertical",
      },
      textRoomBreak: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        display: "-webkit-box",
        ["-webkit-line-clamp"]: isLabel ? "1" : "2",
        ["-webkit-box-orient"]: "vertical",
      },
      flex: {
        display: "flex",
        alignItems: "center",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
      arrowImage: {
        width: "16px",
        height: "16px",
      },
    };
  }
);
