import React from 'react';
import { StoreType } from '../model/store';
export type WorkspaceProps = {
    store: StoreType;
    pageControlsEnabled?: boolean;
    backgroundColor?: string;
    pageBorderColor?: string;
    activePageBorderColor?: string;
    bleedColor?: string;
    snapGuideStroke?: string;
    snapGuideStrokeWidth?: number;
    snapGuideDash?: number[];
    selectionRectFill?: string;
    selectionRectStroke?: string;
    selectionRectStrokeWidth?: number;
    transformLabelFill?: string;
    transformLabelTextFill?: string;
    components?: any;
    onKeyDown?: (e: KeyboardEvent, store: StoreType) => void;
    paddingX?: number;
    paddingY?: number;
    altCloneEnabled?: boolean;
    visiblePagesOffset?: number;
    renderOnlyActivePage?: boolean;
};
export declare const WorkspaceCanvas: (({ store, pageControlsEnabled, backgroundColor, pageBorderColor, activePageBorderColor, bleedColor, snapGuideStroke, snapGuideStrokeWidth, snapGuideDash, selectionRectFill, selectionRectStroke, selectionRectStrokeWidth, transformLabelFill, transformLabelTextFill, components, onKeyDown, paddingX, paddingY, altCloneEnabled, visiblePagesOffset, renderOnlyActivePage, }: WorkspaceProps) => React.JSX.Element) & {
    displayName: string;
};
export default WorkspaceCanvas;
