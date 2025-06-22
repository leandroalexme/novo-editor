import React from 'react';
import { StoreType } from '../model/store';
import { LineElementType } from '../model/line-model';
type LineProps = {
    store: StoreType;
    element: LineElementType;
};
export declare function getMiddlePoints(element: any): {
    middleLeft: {
        x: any;
        y: any;
    };
    middleRight: {
        x: any;
        y: any;
    };
};
export declare function getLinePositionFromMiddlePoints(middleLeft: any, middleRight: any, height: any): {
    x: any;
    y: any;
    width: number;
    height: any;
    rotation: number;
};
export declare const LineElement: (({ element, store }: LineProps) => React.JSX.Element) & {
    displayName: string;
};
export {};
