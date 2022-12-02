import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./HotelLabelType.style";
export declare type HotelLabelTypeStylesNames = ClassNames<typeof useStyles>;
export interface HotelLabelTypeProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** HotelLabelType 컴포넌트의 type을 정합니다. */
    type?: "default" | "hotel-mini" | "residence";
    /** HotelLabelType 컴포넌트의 판매가능 여부를 표시합니다. */
    soldOut?: boolean;
}
export declare const HotelLabelType: React.ForwardRefExoticComponent<HotelLabelTypeProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HotelLabelType.d.ts.map