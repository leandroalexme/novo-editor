import React from 'react';
import { SVGElementType } from '../model/svg-model';
import { ImageElementType } from '../model/image-model';
export declare const FlipButton: ({ element, elements, }: {
    element: ImageElementType | SVGElementType;
    elements: Array<ImageElementType | SVGElementType>;
}) => React.JSX.Element;
export default FlipButton;
