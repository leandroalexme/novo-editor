import React from 'react';
import { StoreType } from '../model/store';
import { TextElementType } from '../model/text-model';
export declare const quillRef: {
    enabled: boolean;
    currentFormat: {};
    editor: {
        instance: any;
    };
};
type ShapeProps = {
    store: StoreType;
    element: TextElementType;
    onClick: Function;
};
export declare const setQuillFormats: (formats: string[]) => void;
export declare const createQuill: (node: any) => any;
export declare const setQuillContent: (quill: any, html: any) => void;
export declare const HTMLElement: (({ element, store }: ShapeProps) => React.JSX.Element) & {
    displayName: string;
};
export declare function setCursorFromCoords(quill: any, coords: {
    x: number;
    y: number;
} | null): void;
export {};
