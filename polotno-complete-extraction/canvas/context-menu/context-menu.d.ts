import { StoreType } from '../../model/store';
import { ShapeType } from '../../model/shape-model';
import React from 'react';
type ContextMenuProps = {
    store: StoreType;
    element: ShapeType;
    offset: {
        x: number;
        y: number;
    };
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
};
export declare const ContextMenu: (({ store, isOpen, offset, setIsOpen }: ContextMenuProps) => React.JSX.Element) & {
    displayName: string;
};
export {};
