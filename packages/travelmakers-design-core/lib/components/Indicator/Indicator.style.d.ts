import { TmTheme } from "@travelmakers-design/styles";
interface IndicatorStyles {
    /** Indicator 컴포넌트의 타입을 정합니다. */
    type?: "text" | "bullet";
    /** Indicator 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
    /** Indicator 컴포넌트의 크기를 정합니다. */
    size?: "small" | "large";
}
declare const _default: (params: IndicatorStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"root" | "indicator">) => {
    classes: Record<"root" | "indicator", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Indicator.style.d.ts.map