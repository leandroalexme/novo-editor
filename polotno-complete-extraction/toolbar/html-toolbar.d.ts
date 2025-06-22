import React from 'react';
import { StoreType } from '../model/store';
import { TextElementType } from '../model/text-model';
type PageProps = {
    store: StoreType;
    components?: any;
};
type InputProps = {
    element: TextElementType;
    store: StoreType;
    components?: any;
    elements: TextElementType[];
};
export declare const TextBold: (({ element, store }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const FontStyleGroup: (({ element, store, elements, components }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const FontColorInput: (({ element, store }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const DirectionInput: (({ element }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const HtmlToolbar: (({ store, components }: PageProps) => React.JSX.Element) & {
    displayName: string;
};
export {};
