import { createStyles } from "@travelmakers-design/styles";

interface StatusCardStyles {
  /** 해당 호텔에 대한 구매 상태를 의미합니다.
   * (구매전, 투어확정전, 투어확정, 투어완료, 결제진행중, 예약확정전, 체크인전, 입주n일차, 연장결제전, 연장확정전, 예약변경중, 체크아웃전, 체크아웃n일차, 체크아웃, 투어취소, 예약취소완료)
   */
  status: "default" | "alert";
}

export default createStyles((theme, { status }: StatusCardStyles) => {
  return {
    root: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.large,
      padding: theme.spacing.medium,
    },
    container: {
      display: "flex",
      gap: "12px",
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
