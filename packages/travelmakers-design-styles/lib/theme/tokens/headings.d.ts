import { CSSProperties } from 'react';
export interface HeadingStyle {
    fontSize: CSSProperties['fontSize'];
    lineHeight: CSSProperties['lineHeight'];
}
export interface CoHeadings {
    h1: HeadingStyle;
    h2: HeadingStyle;
    h3: HeadingStyle;
    h4: HeadingStyle;
    h5: HeadingStyle;
    h6: HeadingStyle;
}
export declare const DEFAULT_HEADINGS: CoHeadings;
//# sourceMappingURL=headings.d.ts.map