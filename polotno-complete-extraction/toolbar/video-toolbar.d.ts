import React from 'react';
import { StoreType } from '../model/store';
import { VideoElementType } from '../model/video-model';
type Props = {
    store: StoreType;
    components?: any;
    element: VideoElementType;
};
export declare const VideoTrim: (({ store, components, element }: Props) => React.JSX.Element) & {
    displayName: string;
};
export declare const VideoClip: (({ element, store }: Props) => React.JSX.Element) & {
    displayName: string;
};
export declare const VideoToolbar: (({ store, components }: Props) => React.JSX.Element) & {
    displayName: string;
};
export default VideoToolbar;
