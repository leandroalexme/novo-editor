import React from 'react';
import { StoreType } from '../model/store';
export { ImageRemoveBackground } from './image-remove-background-button';
type Props = {
    store: StoreType;
    components?: any;
};
export declare const ImageFitToBackground: ({ element }: {
    element: any;
}) => React.JSX.Element;
export declare const ImageClip: React.FunctionComponent<object>;
export declare const ImageCrop: React.FunctionComponent<object>;
export declare const ImageRemoveClip: React.FunctionComponent<object>;
export declare const ImageToolbar: (({ store, components }: Props) => React.JSX.Element) & {
    displayName: string;
};
export default ImageToolbar;
