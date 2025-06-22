import React from 'react';
import { Alignment } from '@blueprintjs/core';
import { StoreType } from '../model/store';
type Props = {
    store: StoreType;
    align?: Alignment;
};
export declare const ZoomGroup: (({ store }: Props) => React.JSX.Element) & {
    displayName: string;
};
export declare const ZoomButtons: (({ store }: Props) => React.JSX.Element) & {
    displayName: string;
};
export default ZoomButtons;
