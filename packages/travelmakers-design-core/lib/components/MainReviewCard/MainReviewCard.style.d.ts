import { TmTheme } from "@travelmakers-design/styles";
interface MainReviewCardStyles {
    /** MainReviewCard 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
    /** MainReviewCard 컴포넌트의 색상을 정합니다. */
    size?: "small" | "large";
    /** MainReviewCard 컴포넌트의 indicator 표시 여부를 정합니다. */
    indicator?: boolean;
}
declare const _default: (params: MainReviewCardStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"root" | "reviewContainer" | "reviewImage" | "descriptionWrapper" | "descriptionJob">) => {
    classes: Record<"root" | "reviewContainer" | "reviewImage" | "descriptionWrapper" | "descriptionJob", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=MainReviewCard.style.d.ts.map