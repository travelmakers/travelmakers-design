import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./CouponCard.style";
export declare type CouponCardStylesNames = ClassNames<typeof useStyles>;
export interface CouponCardProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** CouponCard 컴포넌트의 state를 판단합니다. */
    state?: "default" | "applied" | "checked";
    /** CouponCard 컴포넌트의 type을 판단합니다. */
    type?: "Week" | "Month" | "All";
    /** CouponCard 컴포넌트의 day를 표시합니다. (단, type이 All일 경우는 표시하지 않습니다.) */
    day?: number;
    /** CouponCard 컴포넌트의 할인률을 표시합니다. */
    saleMoney?: string;
    /** CouponCard 컴포넌트의 쿠폰명칭을 표시합니다. */
    couponName?: string;
    /** CouponCard 컴포넌트의 쿠폰 적용 상품을 표시합니다. */
    couponObject?: string;
    /** CouponCard 컴포넌트의 상세내용을 표시합니다. */
    description?: string;
}
export declare const CouponCard: React.ForwardRefExoticComponent<CouponCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=CouponCard.d.ts.map