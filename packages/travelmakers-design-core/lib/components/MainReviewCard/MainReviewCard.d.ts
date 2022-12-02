import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./MainReviewCard.style";
export declare type MainReviewCardStylesNames = ClassNames<typeof useStyles>;
export interface MainReviewCardProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** MainReviewCard 컴포넌트의 이미지를 표시합니다. */
    image?: string;
    /** MainReviewCard 컴포넌트의 title 표시합니다. */
    title?: string;
    /** MainReviewCard 컴포넌트의 job 표시합니다. */
    job?: string;
    /** MainReviewCard 컴포넌트의 description 표시합니다. */
    description?: string;
}
export declare const MainReviewCard: React.ForwardRefExoticComponent<MainReviewCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MainReviewCard.d.ts.map