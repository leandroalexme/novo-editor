import React from 'react';
import { StoreType } from '../model/store';
type Props = {
    store: StoreType;
    components?: any;
};
export declare const GifToolbar: (({ store, components }: Props) => React.JSX.Element) & {
    displayName: string;
};
export default GifToolbar;
