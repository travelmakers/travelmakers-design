import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./ControlPagination.style";
export declare type ProgressStylesNames = ClassNames<typeof useStyles>;
export declare function getCurrentPage(): number;
export interface ControlPaginationProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** ControlPagination 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
    /** ControlPagination 컴포넌트의 색상을 정합니다. */
    size?: "small" | "large";
    /** ControlPagination 컴포넌트의 토탈 page 수를 정합니다. */
    totalPage?: number;
    /** ControlPagination 컴포넌트의 현재 page 를 정합니다. */
    currentPage?: number;
    /** ControlPagination 컴포넌트의 무한루프 여부를 정합니다. */
    infinity?: boolean;
    /** ControlPagination 컴포넌트의 이전 버튼을 눌렀을때 이벤트를 지정합니다. */
    previousClick?: () => void;
    /** ControlPagination 컴포넌트의 다음 버튼을 눌렀을때 이벤트를 지정합니다. */
    nextClick?: () => void;
}
export declare const ControlPagination: React.ForwardRefExoticComponent<ControlPaginationProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ControlPagination.d.ts.map