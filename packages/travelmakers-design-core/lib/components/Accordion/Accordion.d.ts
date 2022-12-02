import { ClassNames, PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Accordion.style";
export declare type AccordionStylesNames = ClassNames<typeof useStyles>;
interface AccordionData {
    question: string;
    answer: string;
}
declare type AccordionType = "Default" | "Number" | "Checkbox";
export interface AccordionBaseProps extends TmComponentProps<AccordionStylesNames> {
    /** Accordion 컴포넌트의 type을 결정합니다. */
    type?: AccordionType;
    /** Accordion 컴포넌트 주제를 입력합니다. */
    data: AccordionData[];
    /** Accordion container에 대한 style을 설정합니다. */
    containerStyle?: React.CSSProperties;
    /** Icon에 대한 style을 설정합니다. */
    iconStyle?: React.CSSProperties;
}
export interface _AccordionProps extends AccordionBaseProps, TmComponentProps<AccordionStylesNames> {
    /** Static css selector base */
    __staticSelector?: string;
}
export declare type AccordionProps<C extends React.ElementType> = PolymorphicComponentProps<C, _AccordionProps>;
declare type AccordionComponent = <C extends React.ElementType = "div">(props: AccordionProps<C>) => React.ReactElement;
export declare const Accordion: AccordionComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Accordion.d.ts.map