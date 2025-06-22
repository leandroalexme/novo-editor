import { StoreType } from '../model/store';
import { NodeType } from '../model/node-model';
type Props = {
    store: StoreType;
    src: string;
    droppedPos?: {
        x: number;
        y: number;
    };
    targetElement?: NodeType;
};
export declare const selectSvg: ({ src, droppedPos, targetElement, store, }: Props) => Promise<void>;
export {};
