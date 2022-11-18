import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";
import { Image } from "../Image";
import { Typography } from "../Typography";

import { View } from "../View";
import useStyles from "./HotelLabelType.style";

export type HotelLabelTypeStylesNames = ClassNames<typeof useStyles>;

export interface HotelLabelTypeProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** HotelLabelType 컴포넌트의 type을 정합니다. */
  type?: "default" | "hotel-mini" | "residence";

  /** HotelLabelType 컴포넌트의 판매가능 여부를 표시합니다. */
  soldOut?: boolean;
}

export const HotelLabelType = forwardRef<HTMLDivElement, HotelLabelTypeProps>(
  (
    {
      type = "navy",
      soldOut = false,
      title,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      {},
      { overrideStyles, name: "HotelLabelType" }
    );

    const HotelLabelType = ({ type }) => {
      switch (type) {
        case "hotel-mini":
          return <MiniHotelImage />;
          break;
        case "residence":
          return <ResidenceHotelImage />;
          break;

        default:
          return <DefaultImage />;
          break;
      }
    };
    const DefaultImage = () => (
      <>
        <Image
          src={require("../../assets/svg/ic-star.svg")}
          className={cx(classes.textImage)}
          height={"16px"}
        />
        <Typography
          family="Pretendard"
          level="b3"
          color={soldOut ? theme.colors.gray4 : theme.colors.navy2}
        >
          5성급 | 호텔
        </Typography>
      </>
    );
    const MiniHotelImage = () => (
      <>
        <Image
          src={require("../../assets/svg/ic-mini.svg")}
          className={cx(classes.textImage)}
          height={"16px"}
        />
        <Typography
          family="Pretendard"
          level="b3"
          color={soldOut ? theme.colors.gray4 : theme.colors.navy2}
        >
          | 미니 호텔
        </Typography>
      </>
    );
    const ResidenceHotelImage = () => (
      <>
        <Image
          src={require("../../assets/svg/ic-residence.svg")}
          className={cx(classes.textImage)}
          height={"16px"}
        />
        <Typography
          family="Pretendard"
          level="b3"
          color={soldOut ? theme.colors.gray4 : theme.colors.navy2}
        >
          | 레지던스 호텔
        </Typography>
      </>
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <HotelLabelType type={type} />
      </View>
    );
  }
);

HotelLabelType.displayName = "@travelmakers-design/core/HotelLabelType";
