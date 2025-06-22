import React from 'react';
import { StoreType } from '../model/store';
import { LineElementType } from '../model/line-model';
type Props = {
    store: StoreType;
    components?: any;
};
type ButtonProps = {
    element?: LineElementType;
    store: StoreType;
    elements: LineElementType[];
};
export declare const LineSettings: (({ store, elements }: ButtonProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const LineColor: (({ elements, store }: ButtonProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const BasicHead: (({ elements, store, property }: ButtonProps & {
    property: string;
}) => React.JSX.Element) & {
    displayName: string;
};
export declare const LineHeads: (({ elements, store }: ButtonProps) => React.JSX.Element) & {
    displayName: string;
};
export declare const LineToolbar: (({ store, components }: Props) => React.JSX.Element) & {
    displayName: string;
};
export default LineToolbar;
