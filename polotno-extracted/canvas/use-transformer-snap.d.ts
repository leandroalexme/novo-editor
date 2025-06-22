import Konva from 'konva';
import { StoreType } from '../model/store';
export type SnapGuideStyle = {
    stroke?: string;
    strokeWidth?: number;
    dash?: number[];
};
export declare const setSnapGuideStyle: ({ stroke, strokeWidth, dash, }: {
    stroke?: string;
    strokeWidth?: number;
    dash?: number[];
}) => void;
declare let snapFilterFunc: ({ targetKonvaNodes, guideKonvaNode, distance, snapDirection, }: {
    targetKonvaNodes: any;
    guideKonvaNode: any;
    distance: any;
    snapDirection: any;
}) => boolean;
export declare const setSnapFilterFunc: (func: typeof snapFilterFunc) => void;
export declare function useSnap(ref: {
    current: Konva.Transformer | null;
}, store: StoreType, style?: SnapGuideStyle): void;
type ShapeRef = {
    current: Konva.Shape | null;
};
export declare function useAnchorSnap(ref: ShapeRef, skipRefs: Array<ShapeRef>, deps: any): void;
export {};
