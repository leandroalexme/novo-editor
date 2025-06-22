import React from 'react';
import { StoreType } from '../model/store';
import { FigureElementType } from '../model/figure-model';
type Props = {
    store: StoreType;
    components?: any;
};
type ButtonProps = {
    element?: FigureElementType;
    store: StoreType;
    elements: FigureElementType[];
};
export declare const FigureFill: (({ elements, store }: ButtonProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const FigureSettings: (({ store, elements, element }: ButtonProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const FigureStroke: (({ elements, store }: ButtonProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const FigureToolbar: (({ store, components }: Props) => React.JSX.Element) & {
    displayName: string;
};
export default FigureToolbar;
