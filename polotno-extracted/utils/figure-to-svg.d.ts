import { FigureElementType } from '../model/figure-model';
export declare const rectData: ({ width, height, cornerRadius, }: FigureElementType) => string;
export declare const triangleData: ({ width, height }: FigureElementType) => string;
export declare const rightTriangleData: ({ width, height }: FigureElementType) => string;
export declare const circleData: ({ width, height }: FigureElementType) => string;
export declare function starPath({ width, height }: FigureElementType): string;
export declare function diamondPath({ width, height }: FigureElementType): string;
export declare function pentagonPath({ width, height }: FigureElementType): string;
export declare function hexagonPath({ width, height }: FigureElementType): string;
export declare function speechBubblePath({ width, height }: {
    width: any;
    height: any;
}): string;
export declare function crossPath({ width, height }: {
    width: any;
    height: any;
}): string;
export declare const TYPES: {
    rect: ({ width, height, cornerRadius, }: FigureElementType) => string;
    circle: ({ width, height }: FigureElementType) => string;
    star: typeof starPath;
    triangle: ({ width, height }: FigureElementType) => string;
    rightTriangle: ({ width, height }: FigureElementType) => string;
    diamond: typeof diamondPath;
    pentagon: typeof pentagonPath;
    hexagon: typeof hexagonPath;
    speechBubble: typeof speechBubblePath;
    cross: typeof crossPath;
    arc: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    cloud: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    rightArrow: ({ width, height }: {
        width: any;
        height: any;
    }) => string;
    leftArrow: ({ width, height }: {
        width: any;
        height: any;
    }) => string;
    downArrow: ({ width, height }: {
        width: any;
        height: any;
    }) => string;
    upArrow: ({ width, height }: {
        width: any;
        height: any;
    }) => string;
    asterisk1: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    asterisk2: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    bookmark: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    butterfly: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    cylinder: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    diamond2: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    door: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    drop1: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    drop2: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    explosion: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    flag: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    flower: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    frame: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    heart1: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    home: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    home2: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    hourglass: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    house: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    keyhole: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    kiss: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    leaf: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    lightning1: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    lightning2: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    magnet: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    mithosis: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    orangeRicky: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    party: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    pillow: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    polygon: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    rainbow: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    rhodeIsland: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    shell: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    shield1: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    shield2: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    skewedRectangle: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    softFlower: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    softStar: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    stairs1: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    stairs2: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    teewee: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob1: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob10: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob11: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob12: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob13: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob14: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob15: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob16: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob17: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob18: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob19: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob2: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob20: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob21: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob22: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob23: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob24: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob25: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob26: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob27: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob28: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob29: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob3: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob30: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob31: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob32: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob4: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob5: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob6: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob7: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob8: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
    blob9: ({ width, height }: {
        width: any;
        height: any;
    }) => {
        path: any;
        scaleX: number;
        scaleY: number;
    };
};
export declare function subTypeToPathDataFunc(subType: string): any;
export declare function figureToSvg(element: FigureElementType): string;
