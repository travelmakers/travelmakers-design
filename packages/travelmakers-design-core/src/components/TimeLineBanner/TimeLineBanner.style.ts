import { createStyles } from "@travelmakers-design/styles";

interface TimeLineBannerStyles {
  /** 해당 호텔에 대한 구매 상태를 의미합니다.
   * (구매전, 투어확정전, 투어확정, 투어완료, 결제진행중, 예약확정전, 체크인전, 입주n일차, 연장결제전, 연장확정전, 예약변경중, 체크아웃전, 체크아웃n일차, 체크아웃, 투어취소, 예약취소완료)
   */
  status: "default" | "alert";
}

export default createStyles((theme, { status }: TimeLineBannerStyles) => {
  return {
    root: {
      backgroundColor:
        status === "default"
          ? theme.colors.green2
          : theme.colors.custom_orange1,
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
      cursor: "pointer",
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
        status === "default"
          ? "linear-gradient(149.99deg, rgba(19, 134, 104, 0.8) 0%, rgba(127, 102, 16, 0.8) 88.27%)"
          : "linear-gradient(103.18deg, rgba(222, 148, 80, 0.48) 40.51%, rgba(217, 59, 59, 0.8) 100%)",
      borderRadius: "7575.76px",
    },
  };
});
