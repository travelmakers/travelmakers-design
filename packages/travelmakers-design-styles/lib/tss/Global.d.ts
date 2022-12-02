import { CSSObject } from "@emotion/react";
import type { TmTheme } from "../theme/types";
interface GlobalStylesProps {
    styles(theme: TmTheme): CSSObject;
}
export declare const Global: ({ styles }: GlobalStylesProps) => JSX.Element;
export {};
//# sourceMappingURL=Global.d.ts.map