import React from 'react';
import { StoreType } from '../model/store';
type PageProps = {
    store: StoreType;
    xPadding: number;
    yPadding: number;
    width: number;
    height: number;
};
export declare const TopRules: (({ store, width, height }: PageProps) => React.JSX.Element) & {
    displayName: string;
};
export declare function LeftRules(): React.JSX.Element;
export {};
