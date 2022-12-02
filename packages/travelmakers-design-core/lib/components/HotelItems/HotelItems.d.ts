import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./HotelItems.style";
export declare type HotelItemsStylesNames = ClassNames<typeof useStyles>;
export interface HotelItemsProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** HotelItems 컴포넌트의 레이블을 만들어줍니다. */
    items?: string[];
    /** HotelItems 컴포넌트의 fill 여부를 판단합니다. */
    fill?: boolean;
    /** HotelItems 컴포넌트의 판매가능 여부를 표시합니다. */
    soldOut?: boolean;
}
export declare const HotelItems: React.ForwardRefExoticComponent<HotelItemsProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HotelItems.d.ts.map