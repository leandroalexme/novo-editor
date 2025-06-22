import React from 'react';
import { StoreType } from '../model/store';
type ToolbarProps = {
    store: StoreType;
    downloadButtonEnabled?: boolean;
    components?: any;
};
export declare function registerToolbarComponent(type: string, reactComponent: any): void;
export declare const Toolbar: (({ store, downloadButtonEnabled, components }: ToolbarProps) => React.JSX.Element) & {
    displayName: string;
};
export default Toolbar;
