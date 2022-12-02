declare type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;
export declare const useResize: <T extends HTMLElement = any>() => readonly [import("react").MutableRefObject<T>, ObserverRect];
export {};
//# sourceMappingURL=useResize.d.ts.map