import React from 'react';
import { StoreType } from '../model/store';
import { VideoElementType } from '../model/video-model';
export declare const useCornerRadiusAndCrop: (element: VideoElementType, image: HTMLVideoElement | HTMLCanvasElement | undefined, crop: {
    x: number;
    y: number;
    width: number;
    height: number;
}, pixelRatio: number, cornerRadius?: number, skipDownscale?: boolean) => readonly [HTMLCanvasElement | HTMLVideoElement, () => void];
type Props = {
    store: StoreType;
    element: VideoElementType;
};
export declare const setVideoLoaderHook: (customVideoLoaderHook: any) => void;
export declare const useLoader: (status: string, src: string, id: string) => void;
export declare const VideoElement: (({ element, store }: Props) => React.JSX.Element) & {
    displayName: string;
};
export {};
