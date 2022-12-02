import React from "react";
import { EmotionCache, Options } from "@emotion/cache";
export declare const getCache: (options?: Options) => EmotionCache;
export declare function useCache(): EmotionCache;
interface CacheProviderProps {
    value: EmotionCache;
    children: React.ReactNode;
}
export declare function CacheProvider({ children, value }: CacheProviderProps): JSX.Element;
export {};
//# sourceMappingURL=CacheProvider.d.ts.map