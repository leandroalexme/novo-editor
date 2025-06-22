import React from 'react';
import { Vector2d } from 'konva/lib/types';
import { StoreType } from '../model/store';
import { PageType } from '../model/page-model';
import { NodeType } from '../model/node-model';
import { TransformerConfig } from 'konva/lib/shapes/Transformer';
export declare const setTransformerStyle: (style: TransformerConfig) => void;
export declare function registerTransformerAttrs(type: any, attrs: any): void;
export declare const useContextMenu: ({ store }: {
    store: StoreType;
}) => {
    open: (offset: {
        x: number;
        y: number;
    }) => void;
    close: () => void;
    props: {
        isOpen: boolean;
        offset: {
            x: number;
            y: number;
        };
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
};
type DropCallback = (pos: Vector2d, element?: NodeType, event?: {
    elements: Array<NodeType>;
    page: PageType;
}) => void;
declare let onDomDrop: DropCallback | null;
export declare const registerNextDomDrop: (callback: typeof onDomDrop) => void;
type PageProps = {
    store: StoreType;
    page: PageType;
    xPadding: number;
    yPadding: number;
    width: number;
    height: number;
    pageControlsEnabled?: boolean;
    backColor: string;
    pageBorderColor: string;
    activePageBorderColor: string;
    bleedColor: string;
    components: any;
    altCloneEnabled?: boolean;
    viewportSize: {
        width: number;
        height: number;
    };
    selectionRectFill?: string;
    selectionRectStroke?: string;
    selectionRectStrokeWidth?: number;
    snapGuideStroke?: string;
    snapGuideStrokeWidth?: number;
    snapGuideDash?: number[];
    transformLabelFill?: string;
    transformLabelTextFill?: string;
};
declare const _default: (({ store, page, width, height, pageControlsEnabled, backColor, pageBorderColor, activePageBorderColor, components, bleedColor, altCloneEnabled, viewportSize, selectionRectFill, selectionRectStroke, selectionRectStrokeWidth, snapGuideStroke, snapGuideStrokeWidth, snapGuideDash, transformLabelFill, transformLabelTextFill, }: PageProps) => React.JSX.Element) & {
    displayName: string;
};
export default _default;
