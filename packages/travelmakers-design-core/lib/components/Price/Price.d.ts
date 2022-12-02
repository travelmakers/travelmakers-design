import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Price.style";
export declare type PriceStylesNames = ClassNames<typeof useStyles>;
export interface PriceProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** Price 컴포넌트의 타입을 정합니다. */
    type?: "primary" | "secondary";
    /** (secondary type 한정) Price 컴포넌트의 레이블을 표시합니다. */
    label?: string;
    /** Price 컴포넌트의 할인율을 표시합니다. */
    percentText?: string;
    /** Price 컴포넌트의 1박을 표시합니다. */
    nightText?: string;
    /** Price 컴포넌트의 가격을 표시합니다. */
    priceText?: number;
    /** Price 컴포넌트의 시작가격을 표시합니다. */
    priceStartText?: string;
    /** Price 컴포넌트의 할인율 표시여부를 결정합니다. */
    percentBool?: boolean;
    /** Price 컴포넌트의 1박 표시여부를 결정합니다.. */
    nightBool?: boolean;
    /** Price 컴포넌트의 가격 표시여부를 결정합니다.. */
    priceBool?: boolean;
    /** Price 컴포넌트의 시작가격 표시여부를 결정합니다. */
    priceStartBool?: boolean;
    /** (secondary type 한정) Price 컴포넌트의 쿠폰 표시여부를 결정합니다. */
    couponBool?: boolean;
}
export declare const Price: React.ForwardRefExoticComponent<PriceProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Price.d.ts.map