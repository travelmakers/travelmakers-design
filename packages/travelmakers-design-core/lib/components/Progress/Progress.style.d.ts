import { TmTheme } from "@travelmakers-design/styles";
interface ProgressStyles {
    /** Progress 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
    /** Progress 컴포넌트의 색상을 정합니다. */
    size?: "small" | "large";
    /** Progress 컴포넌트의 indicator 표시 여부를 정합니다. */
    indicator?: boolean;
}
declare const _default: (params: ProgressStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"root" | "indicator" | "barContainer" | "barActive">) => {
    classes: Record<"root" | "indicator" | "barContainer" | "barActive", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Progress.style.d.ts.map