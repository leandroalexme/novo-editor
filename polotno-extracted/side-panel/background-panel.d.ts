import React from 'react';
import { StoreType } from '../model/store';
export declare const setDefaultQuery: (query: string) => void;
export declare const setBackgroundColorsPreset: (newColors: string[]) => void;
export declare const BackgroundPanel: (({ store }: {
    store: StoreType;
}) => React.JSX.Element) & {
    displayName: string;
};
