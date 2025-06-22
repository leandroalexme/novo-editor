import React from 'react';
import { ShapeType } from '../model/shape-model';
type Props<ImageType> = {
    images: ImageType[] | undefined;
    onSelect: (image: ImageType, pos?: {
        x: number;
        y: number;
    }, element?: ShapeType | undefined, event?: any) => void;
    isLoading: boolean;
    getPreview: (image: ImageType) => string;
    loadMore?: false | undefined | null | (() => void);
    getCredit?: (image: ImageType) => any;
    getImageClassName?: (image: ImageType) => string;
    rowsNumber?: number;
    crossOrigin?: string;
    shadowEnabled?: boolean;
    itemHeight?: number;
    error?: any;
    hideNoResults?: boolean;
};
export declare const ImagesGrid: <ImageType>({ images, onSelect, isLoading, getPreview, loadMore, getCredit, getImageClassName, rowsNumber, crossOrigin, shadowEnabled, itemHeight, error, hideNoResults, }: Props<ImageType>) => React.JSX.Element;
export {};
