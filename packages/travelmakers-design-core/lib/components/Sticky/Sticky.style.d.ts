import { TmTheme } from "@travelmakers-design/styles";
interface StickyStyles {
    /** Sticky 컴포넌트의 타입을 정합니다. */
    type?: "text" | "bullet";
    /** Sticky 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
}
declare const _default: (params: StickyStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"root">) => {
    classes: Record<"root", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Sticky.style.d.ts.map