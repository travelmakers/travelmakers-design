import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Topbar.style";
export declare type TopbarStylesNames = ClassNames<typeof useStyles>;
export interface TopbarProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** Topbar 컴포넌트의 검색 타입을 정합니다. */
    mobileType?: "Expanded" | "Collapsed";
    /** Topbar 컴포넌트의 로그인여부를 정합니다. */
    isLogin?: boolean;
    /** Topbar 컴포넌트의 badge여부를 정합니다. */
    isBadge?: boolean;
    /** Topbar 컴포넌트의 가격을 표시합니다. */
    logoClick?: () => void;
    /** Topbar 컴포넌트의 가격을 표시합니다. */
    searchClick?: () => void;
    /** Topbar 컴포넌트의 가격을 표시합니다. */
    onClick?: () => void;
}
export declare const Topbar: React.ForwardRefExoticComponent<TopbarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Topbar.d.ts.map