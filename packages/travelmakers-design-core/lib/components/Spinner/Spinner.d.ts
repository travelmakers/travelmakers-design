import { ClassNames, TmColor, TmComponentProps, TmPalette, TmSize } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Spinner.style";
export declare type SpinnerStylesNames = ClassNames<typeof useStyles>;
export interface SpinnerProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** Spinner 컴포넌트의 크기를 정합니다. */
    size?: TmSize | number;
    /** Spinner 컴포넌트의 색상을 정합니다. */
    color?: TmPalette | TmColor | string;
}
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Spinner.d.ts.map