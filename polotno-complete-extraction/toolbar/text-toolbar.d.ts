import React from 'react';
import { StoreType } from '../model/store';
import { TextElementType } from '../model/text-model';
type PageProps = {
    store: StoreType;
    components?: any;
};
type InputProps = {
    elements: Array<TextElementType>;
    store: StoreType;
};
export declare const fetcher: (url: string) => Promise<any>;
export declare const TextFontFamily: (({ elements, store }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const TextFontSize: (({ elements, store }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const ALIGN_OPTIONS: string[];
export declare const TextFontVariant: (({ elements, store }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const TextFill: (({ elements, store }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const NumberInput: ({ value, onValueChange, ...props }: {
    [x: string]: any;
    value: any;
    onValueChange: any;
}) => React.JSX.Element;
export declare const TextSpacing: (({ elements, store }: InputProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const TextToolbar: (({ store, components }: PageProps) => React.JSX.Element) & {
    displayName: string;
};
export default TextToolbar;
