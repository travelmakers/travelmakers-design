import { TmTheme } from "@travelmakers-design/styles";
interface CouponCardStyles {
    /** CouponCard 컴포넌트의 state를 판단합니다. */
    state?: "default" | "applied" | "checked";
    /** CouponCard 컴포넌트의 type을 판단합니다. */
    type?: "Week" | "Month" | "All";
}
declare const _default: (params: CouponCardStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"flex" | "root" | "labelContainer" | "spaceBetween" | "contentContainer">) => {
    classes: Record<"flex" | "root" | "labelContainer" | "spaceBetween" | "contentContainer", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=CouponCard.style.d.ts.map