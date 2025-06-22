import React from 'react';
import { StoreType } from '../model/store';
export declare const NumberInput: ({ value, onValueChange, ...props }: {
    [x: string]: any;
    value: any;
    onValueChange: any;
}) => React.JSX.Element;
export declare const EffectsPanel: (({ store }: {
    store: StoreType;
}) => React.JSX.Element) & {
    displayName: string;
};
