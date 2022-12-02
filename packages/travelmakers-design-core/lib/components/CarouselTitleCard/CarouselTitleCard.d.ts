import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./CarouselTitleCard.style";
export declare type CarouselTitleCardStylesNames = ClassNames<typeof useStyles>;
export interface CarouselTitleCardProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** CarouselTitleCard 컴포넌트의 newBadge 여부를 판단합니다. */
    newBadge?: boolean;
    /** CarouselTitleCard 컴포넌트의 서브헤드라인을 표시합니다. */
    subHeadline?: string;
    /** CarouselTitleCard 컴포넌트의 헤드라인을 표시합니다. */
    headline?: string;
    /** CarouselTitleCard 컴포넌트의 디스크립션을 표시합니다. */
    description?: string;
}
export declare const CarouselTitleCard: React.ForwardRefExoticComponent<CarouselTitleCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=CarouselTitleCard.d.ts.map