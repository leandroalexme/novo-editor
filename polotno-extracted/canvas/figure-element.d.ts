import React from 'react';
import { StoreType } from '../model/store';
import { FigureElementType } from '../model/figure-model';
type FigureProps = {
    store: StoreType;
    element: FigureElementType;
};
export declare const FigureElement: (({ element, store }: FigureProps) => React.JSX.Element) & {
    displayName: string;
};
export {};
