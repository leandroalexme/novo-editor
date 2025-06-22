import React from 'react';
import { StoreType } from '../model/store';
import { ShapeType } from '../model/shape-model';
type ShapeProps = {
    store: StoreType;
    element: ShapeType;
    onClick: Function;
};
export declare function registerShapeComponent(type: string, component: JSX.Element): void;
declare const Element: ((props: ShapeProps) => React.JSX.Element) & {
    displayName: string;
};
export default Element;
