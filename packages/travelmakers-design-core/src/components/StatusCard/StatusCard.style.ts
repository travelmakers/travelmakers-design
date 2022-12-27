import { createStyles } from "@travelmakers-design/styles";

interface StatusCardStyles {
  isArrow: boolean;
}

export default createStyles((theme, { isArrow = true }: StatusCardStyles) => {
  return {
    root: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.large,
      padding: theme.spacing.medium,
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
});
