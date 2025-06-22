import React from 'react';
import { StoreType } from '../model/store';
import { UnitType } from '../utils/unit';
export declare const SIZE_CATEGORIES: Array<{
    name: string;
    icon?: JSX.Element;
    sizes: Array<[string, number, number, UnitType, JSX.Element]>;
}>;
export declare const SizePanel: (({ store }: {
    store: StoreType;
}) => React.JSX.Element) & {
    displayName: string;
};
