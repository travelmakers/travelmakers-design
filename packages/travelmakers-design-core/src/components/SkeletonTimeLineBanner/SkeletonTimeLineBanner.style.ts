import { createStyles } from "@travelmakers-design/styles";

interface SkeletonTimeLineBannerStyles {}

export default createStyles((theme, {}: SkeletonTimeLineBannerStyles) => {
  return {
    root: {
      backgroundColor: "rgba(200, 200, 200, 0.5)",
      // backgroundColor: theme.colors.green2,
      borderRadius: theme.radius.large,
      padding: theme.spacing.medium,
      position: "relative",
      overflow: "hidden",
      minWidth: "328px",
    },
    titleWrapper: {
      marginBottom: theme.spacing.small,
    },
    textMaxLength: {
      maxWidth: "220px",
      ["& > div > span > div"]: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
    labelWrapper: {
      display: "flex",
      alignItems: "center",
      width: "fit-content",
    },
    labelText: {
      width: "fit-content",
    },
    arrowImage: {
      width: "16px",
      height: "16px",
      marginLeft: "2px",
    },
    imageOval: {
      position: "absolute",
      width: "78.03px",
      height: "110.61px",
      right: -5,
      bottom: -25,
      background:
        "linear-gradient(149.99deg, rgba(255, 255, 255, 0.5) 0%, rgba(200, 200, 200, 0.5) 88.27%)",
      borderRadius: "7575.76px",
    },
  };
});
