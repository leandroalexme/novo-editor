import React from 'react';
import { StoreType } from '../model/store';
type Props = {
    store: StoreType;
    components?: any;
};
export declare const NumberInput: ({ value, onValueChange, ...props }: {
    [x: string]: any;
    value: any;
    onValueChange: any;
}) => React.JSX.Element;
export declare const PageToolbar: (({ store, components }: Props) => React.JSX.Element) & {
    displayName: string;
};
export default PageToolbar;
