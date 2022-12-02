export declare const fns: {
    readonly linearGradient: (deg: number, ...colors: string[]) => string;
    readonly radialGradient: (...colors: string[]) => string;
    readonly smallerThan: (theme: import("../..").TmThemeBase) => (breakpoint: number | import("../..").TmSize) => string;
    readonly largerThan: (theme: import("../..").TmThemeBase) => (breakpoint: number | import("../..").TmSize) => string;
    readonly rgba: (color: string, alpha: number) => string;
    readonly size: (props: import("./size").GetSize) => any;
    readonly darken: (color: string, alpha: number) => string;
    readonly lighten: (color: string, alpha: number) => string;
    readonly spacing: (size: number) => number;
};
//# sourceMappingURL=index.d.ts.map