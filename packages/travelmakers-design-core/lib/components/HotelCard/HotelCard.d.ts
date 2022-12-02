import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./HotelCard.style";
export declare type HotelCardStylesNames = ClassNames<typeof useStyles>;
export interface HotelCardProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** HotelCard 컴포넌트의 호텔타입을 정합니다. */
    type?: "default" | "hotel-mini" | "residence";
    /** HotelCard 컴포넌트의 이미지를 표시합니다. */
    hotelImage?: string;
    /** HotelCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
    hotelItems?: string[];
    /** HotelCard 컴포넌트의 이미지 부분에 표시되는 주소를 표시합니다. */
    addressText?: string;
    /** HotelCard 컴포넌트의 호텔명을 표시합니다. */
    hotelName?: string;
    /** HotelCard 컴포넌트의 할인되는 퍼센트를 표시합니다. */
    percentText?: string;
    /** HotelCard 컴포넌트의 정가를 표시합니다. */
    beforePrice?: string;
    /** HotelCard 컴포넌트의 시작가를 표시합니다. */
    startPrice?: string;
    /** HotelCard 컴포넌트의 가격을 표시합니다. */
    priceText?: number;
    /** HotelCard 컴포넌트의 쿠폰여부를 정합니다. */
    couponBoolean?: boolean;
    /** HotelCard 컴포넌트의 쿠폰데이터를 가져옵니다. */
    coupons?: {
        coupon: {
            discounted: number;
        };
    }[];
    /** HotelCard 컴포넌트의 몇주살기에 대한 레이블을 표시합니다. */
    timelineTags?: string[];
    /** HotelCard 컴포넌트의 판매가능 여부를 표시합니다. */
    soldOut?: boolean;
}
export declare const HotelCard: React.ForwardRefExoticComponent<HotelCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HotelCard.d.ts.map