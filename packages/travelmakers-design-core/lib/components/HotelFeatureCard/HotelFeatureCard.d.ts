import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./HotelFeatureCard.style";
export declare type HotelFeatureCardStylesNames = ClassNames<typeof useStyles>;
export interface HotelFeatureCardProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** HotelFeatureCard 컴포넌트의 호텔타입을 정합니다. */
    type?: "default" | "hotel-mini" | "residence";
    /** HotelFeatureCard 컴포넌트의 이미지를 표시합니다. */
    hotelImage?: string;
    /** HotelFeatureCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
    hotelItems?: string[];
    /** HotelFeatureCard 컴포넌트의 이미지 부분에 표시되는 주소를 표시합니다. */
    addressText?: string;
    /** HotelFeatureCard 컴포넌트의 호텔명을 표시합니다. */
    hotelName?: string;
    /** HotelFeatureCard 컴포넌트의 할인되는 퍼센트를 표시합니다. */
    percentText?: string;
    /** HotelFeatureCard 컴포넌트의 정가를 표시합니다. */
    beforePrice?: string;
    /** HotelFeatureCard 컴포넌트의 시작가를 표시합니다. */
    startPrice?: string;
    /** HotelFeatureCard 컴포넌트의 가격을 표시합니다. */
    priceText?: number;
    /** HotelFeatureCard 컴포넌트의 쿠폰여부를 정합니다. */
    couponBoolean?: boolean;
    /** HotelFeatureCard 컴포넌트의 쿠폰데이터를 가져옵니다. */
    coupons?: {
        coupon: {
            discounted: number;
        };
    }[];
    /** HotelFeatureCard 컴포넌트의 몇주살기에 대한 레이블을 표시합니다. */
    timelineTags?: string[];
    /** HotelFeatureCard 컴포넌트의 판매가능 여부를 표시합니다. */
    soldOut?: boolean;
}
export declare const HotelFeatureCard: React.ForwardRefExoticComponent<HotelFeatureCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HotelFeatureCard.d.ts.map