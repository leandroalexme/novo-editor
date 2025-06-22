import React from 'react';
import { StoreType } from '../model/store';
import { ShapeType } from '../model/shape-model';
export declare const NumberInput: ({ value, onValueChange, ...props }: {
    [x: string]: any;
    value: any;
    onValueChange: any;
}) => React.JSX.Element;
export declare const FiltersPicker: (({ element, store, elements, }: {
    elements?: Array<ShapeType>;
    element?: ShapeType;
    store: StoreType;
}) => React.JSX.Element) & {
    displayName: string;
};
export declare const EffectsPicker: React.FunctionComponent<object>;
export default EffectsPicker;
