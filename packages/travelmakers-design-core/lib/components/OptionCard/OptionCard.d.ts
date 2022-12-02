import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React, { MouseEventHandler } from "react";
import useStyles from "./OptionCard.style";
export declare type OptionCardStylesNames = ClassNames<typeof useStyles>;
export interface OptionCardProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** OptionCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
    labelItems?: string[];
    /** OptionCard 컴포넌트의 상단 Title Name을 표시합니다. */
    headTitle?: string;
    /** OptionCard 컴포넌트의 하단 Title Name을 표시합니다. */
    footerTitle?: string;
    /** OptionCard 컴포넌트의 Price 표시여부를 판단합니다. */
    isPrice?: boolean;
    /** OptionCard 컴포넌트의 Label 표시여부를 판단합니다. */
    isLabel?: boolean;
    /** OptionCard 컴포넌트의 Duration 표시여부를 판단합니다. */
    isDuration?: boolean;
    /** OptionCard 컴포넌트의 optionName을 표사합니다. */
    optionName?: string;
    /** OptionCard 컴포넌트의 최소 -박(night)을 표사합니다. */
    minNight?: number;
    /** OptionCard 컴포넌트의 최대 -박(night)을 표사합니다. */
    maxNight?: number;
    /** OptionCard 컴포넌트의 roomType을 표사합니다. */
    roomType?: string;
    /** OptionCard 컴포넌트의 benefitContent을 표사합니다. */
    benefitContent?: string;
    /** OptionCard 컴포넌트의 salePercent을 표사합니다. */
    salePercent?: number;
    /** OptionCard 컴포넌트의 price(정가)을 표사합니다. */
    price?: number;
    /** OptionCard 컴포넌트의 salePrice(할인된 가격)을 표사합니다. */
    salePrice?: number;
    /** OptionCard 컴포넌트의 buttonName을 표시합니다. */
    buttonName?: string;
    buttonClick?: MouseEventHandler<HTMLButtonElement>;
}
export declare const OptionCard: React.ForwardRefExoticComponent<OptionCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=OptionCard.d.ts.map