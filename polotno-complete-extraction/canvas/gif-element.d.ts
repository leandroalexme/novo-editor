import React from 'react';
import { StoreType } from '../model/store';
import { VideoElementType } from '../model/video-model';
type Props = {
    store: StoreType;
    element: VideoElementType;
};
export declare const GifElement: (({ element, store }: Props) => React.JSX.Element) & {
    displayName: string;
};
export {};
