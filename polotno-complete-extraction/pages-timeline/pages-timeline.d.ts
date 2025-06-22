import React from 'react';
import { StoreType } from '../model/store';
export declare const Pages: (({ store, scale }: {
    store: StoreType;
    scale: number;
}) => React.JSX.Element) & {
    displayName: string;
};
export declare const PagesTimeline: (({ store, defaultOpened, }: {
    store: StoreType;
    defaultOpened?: boolean;
}) => React.JSX.Element) & {
    displayName: string;
};
