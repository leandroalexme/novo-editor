import React from 'react';
import { StoreType } from '../model/store';
import { PageType } from '../model/page-model';
export declare const PageControls: (({ store, page, xPadding, yPadding, }: {
    store: StoreType;
    page: PageType;
    xPadding: number;
    yPadding: number;
}) => React.JSX.Element) & {
    displayName: string;
};
