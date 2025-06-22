import React from 'react';
import { TransformerConfig } from 'konva/lib/shapes/Transformer';
import { StoreType } from '../model/store';
import { ImageElementType } from '../model/image-model';
export declare const useSizeFixer: (src: string) => string;
export declare const setInnerImageCropTransformerStyle: (style: TransformerConfig) => void;
export declare const setOuterImageCropTransformerStyle: (style: TransformerConfig) => void;
export declare const useCornerRadiusAndCrop: (element: ImageElementType, image: HTMLImageElement | HTMLCanvasElement | undefined, crop: {
    x: number;
    y: number;
    width: number;
    height: number;
}, pixelRatio: number, cornerRadius?: number, skipDownscale?: boolean, isVector?: boolean) => HTMLCanvasElement | HTMLImageElement;
type ImageProps = {
    store: StoreType;
    element: ImageElementType;
};
export declare const setImageLoaderHook: (customImageLoaderHook: any) => void;
export declare const useImageLoader: (status: string, src?: string, id?: string) => void;
export declare const ImageElement: (({ element, store }: ImageProps) => React.JSX.Element) & {
    displayName: string;
};
export {};
