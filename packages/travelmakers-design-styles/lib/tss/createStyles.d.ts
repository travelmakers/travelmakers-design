import type { Co, TmTheme } from "../theme";
import type { CSSObject } from "./types";
export interface UseStylesOptions<Key extends string> {
    co?: Co;
    overrideStyles?: Partial<Record<Key, CSSObject>> | ((theme: TmTheme) => Partial<Record<Key, CSSObject>>);
    name: string;
}
export declare function createStyles<Key extends string = string, Params = void>(getCssObjectOrCssObject: ((theme: TmTheme, params: Params, createRef: (refName: string) => string) => Record<Key, CSSObject>) | Record<Key, CSSObject>): (params: Params, options?: UseStylesOptions<Key>) => {
    classes: Record<Key, string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
//# sourceMappingURL=createStyles.d.ts.map