import React from 'react';
import { StoreType } from '../model/store';
import { TextElementType } from '../model/text-model';
type ShapeProps = {
    store: StoreType;
    element: TextElementType;
};
export declare function isRTLText(string: string): boolean;
export declare function getDir(string: string): "ltr" | "rtl";
export declare const useFontLoader: (store: StoreType, fontFamily: string) => boolean[];
export declare const getLineHeight: ({ fontLoaded, fontFamily, fontSize, lineHeight, }: {
    fontLoaded: any;
    fontFamily: any;
    fontSize: any;
    lineHeight: any;
}) => number;
export declare function usePrevious(value: any): any;
export declare const TextElement: (({ element, store }: ShapeProps) => React.JSX.Element) & {
    displayName: string;
};
export {};
