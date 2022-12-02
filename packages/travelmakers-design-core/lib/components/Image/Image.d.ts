import { ClassNames, CoRadius, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Image.style";
export declare type ImageStylesNames = ClassNames<typeof useStyles>;
export interface ImageProps extends TmComponentProps<ImageStylesNames>, Omit<React.ComponentPropsWithoutRef<"h1">, "placeholder"> {
    /** true일 경우 lazy load가 적용됩니다. */
    lazy?: boolean;
    /** lazy 속성이 true이고 Image 컴포넌트 크기 * threshold만큼 화면에 보일 경우 이미지가 로드됩니다. */
    threshold?: number;
    /** 이미지 src를 정합니다. */
    src: string;
    /** 이미지가 아직 로드되지 않은 경우 보여줄 요소를 정합니다. */
    placeholder?: React.ReactNode;
    /** Image 컴포넌트의 radius를 정합니다. */
    radius?: CoRadius | number;
    /** Image 컴포넌트의 너비를 정합니다. */
    width?: number | string;
    /** Image 컴포넌트의 높이를 정합니다. */
    height?: number | string;
    /** 이미지 설명을 추가합니다. */
    alt?: string;
    /** Image 컴포넌트와 이미지 컨텐츠의 크기를 어떻게 맞출 것인지 정합니다. */
    fit?: "cover" | "fill" | "contain";
}
export declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
//# sourceMappingURL=Image.d.ts.map