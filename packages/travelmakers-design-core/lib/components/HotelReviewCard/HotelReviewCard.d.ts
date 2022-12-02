import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./HotelReviewCard.style";
export declare type HotelReviewCardStylesNames = ClassNames<typeof useStyles>;
export interface HotelReviewCardProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** HotelReviewCard 컴포넌트의 이미지를 표시합니다. */
    hotelImage?: string;
    /** HotelReviewCard 컴포넌트의 레이블을 표시합니다. */
    tags?: string[];
    /** HotelReviewCard 컴포넌트의 내용을 표시합니다. */
    content?: string;
    /** HotelReviewCard 컴포넌트의 리뷰어 이름을 표시합니다. */
    reviewName?: string;
    /** HotelReviewCard 컴포넌트의 상품옵션을 표시합니다. */
    hotelOption?: string;
}
export declare const HotelReviewCard: React.ForwardRefExoticComponent<HotelReviewCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HotelReviewCard.d.ts.map