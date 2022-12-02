import { ClassNames, PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./BottomSheet.style";
export declare type BottomSheetStylesNames = ClassNames<typeof useStyles>;
interface BottomSheetAgreement {
    key: string;
    label: string;
    content: string;
}
export interface BottomSheetBaseProps extends TmComponentProps<BottomSheetStylesNames> {
    transparent?: boolean;
    defaultSelect?: string[];
    /** 팝업 여부 */
    popup?: boolean;
    /** BottomSheet 들어갈 내용 정의 */
    options?: Array<BottomSheetAgreement>;
    value: {
        [key: string]: boolean;
    };
    setValue?: React.Dispatch<React.SetStateAction<{
        [key: string]: boolean;
    }>>;
    containerStyle?: React.CSSProperties;
}
export interface _BottomSheetProps extends BottomSheetBaseProps, TmComponentProps<BottomSheetStylesNames> {
    /** Static css selector base */
    __staticSelector?: string;
}
export declare type BottomSheetProps<C extends React.ElementType> = PolymorphicComponentProps<C, _BottomSheetProps>;
declare type TagComponent = <C extends React.ElementType = "div">(props: BottomSheetProps<C>) => React.ReactElement;
export declare const BottomSheet: TagComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=BottomSheet.d.ts.map