import { Instance } from 'mobx-state-tree';
export declare const Animation: import("mobx-state-tree").IModelType<{
    delay: import("mobx-state-tree").IType<number, number, number>;
    duration: import("mobx-state-tree").IType<number, number, number>;
    enabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    type: import("mobx-state-tree").ISimpleType<string>;
    name: import("mobx-state-tree").IType<string, string, string>;
    data: import("mobx-state-tree").IType<{}, {}, {}>;
}, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const getDiff: (obj1: Record<string, any>, obj2: Record<string, any>) => Record<string, any>;
export declare const ShapeFilter: import("mobx-state-tree").IModelType<{
    intensity: import("mobx-state-tree").IType<number, number, number>;
}, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const INDEPENDENT_FILTERS: string[];
export declare const Shape: import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    type: import("mobx-state-tree").IType<string, string, string>;
    name: import("mobx-state-tree").IType<string, string, string>;
    opacity: import("mobx-state-tree").IType<number, number, number>;
    custom: import("mobx-state-tree").IType<any, any, any>;
    visible: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    selectable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    removable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    alwaysOnTop: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    showInExport: import("mobx-state-tree").IType<boolean, boolean, boolean>;
} & {
    x: import("mobx-state-tree").IType<number, number, number>;
    y: import("mobx-state-tree").IType<number, number, number>;
    width: import("mobx-state-tree").IType<number, number, number>;
    height: import("mobx-state-tree").IType<number, number, number>;
    rotation: import("mobx-state-tree").IType<number, number, number>;
    opacity: import("mobx-state-tree").IType<number, number, number>;
    animations: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        delay: import("mobx-state-tree").IType<number, number, number>;
        duration: import("mobx-state-tree").IType<number, number, number>;
        enabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        type: import("mobx-state-tree").ISimpleType<string>;
        name: import("mobx-state-tree").IType<string, string, string>;
        data: import("mobx-state-tree").IType<{}, {}, {}>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    blurEnabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    blurRadius: import("mobx-state-tree").IType<number, number, number>;
    brightnessEnabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    brightness: import("mobx-state-tree").IType<number, number, number>;
    sepiaEnabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    grayscaleEnabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    filters: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        intensity: import("mobx-state-tree").IType<number, number, number>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    shadowEnabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    shadowBlur: import("mobx-state-tree").IType<number, number, number>;
    shadowOffsetX: import("mobx-state-tree").IType<number, number, number>;
    shadowOffsetY: import("mobx-state-tree").IType<number, number, number>;
    shadowColor: import("mobx-state-tree").IType<string, string, string>;
    shadowOpacity: import("mobx-state-tree").IType<number, number, number>;
    visible: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    draggable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    resizable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    selectable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    contentEditable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    styleEditable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    alwaysOnTop: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    showInExport: import("mobx-state-tree").IType<boolean, boolean, boolean>;
}, {
    readonly locked: boolean;
    readonly page: any;
    readonly store: any;
    readonly top: import("mobx-state-tree").ModelInstanceTypeProps<{
        id: import("mobx-state-tree").ISimpleType<string>;
        type: import("mobx-state-tree").IType<string, string, string>;
        name: import("mobx-state-tree").IType<string, string, string>;
        opacity: import("mobx-state-tree").IType<number, number, number>;
        custom: import("mobx-state-tree").IType<any, any, any>;
        visible: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        selectable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        removable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        alwaysOnTop: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        showInExport: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    }> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        type: import("mobx-state-tree").IType<string, string, string>;
        name: import("mobx-state-tree").IType<string, string, string>;
        opacity: import("mobx-state-tree").IType<number, number, number>;
        custom: import("mobx-state-tree").IType<any, any, any>;
        visible: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        selectable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        removable: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        alwaysOnTop: import("mobx-state-tree").IType<boolean, boolean, boolean>;
        showInExport: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    }, {}, import("mobx-state-tree").ModelCreationType<{
        id: string;
        type: string;
        name: string;
        opacity: number;
        custom: any;
        visible: boolean;
        selectable: boolean;
        removable: boolean;
        alwaysOnTop: boolean;
        showInExport: boolean;
    }>, {}>>;
    readonly parent: any;
    readonly zIndex: any;
} & {
    toJSON(): {};
} & {
    clone(attrs?: any, { skipSelect }?: {
        skipSelect?: boolean;
    }): import("./node-model").NodeType;
    set(attrs: any): void;
    moveUp(): void;
    moveTop(): void;
    moveDown(): void;
    moveBottom(): void;
    setZIndex(zIndex: number): void;
    beforeDestroy(): void;
} & {
    readonly a: {
        x: number;
        y: number;
        width: number;
        height: number;
        rotation: number;
        opacity: number;
        color: any;
        fontSize: any;
    };
    animated(attr: any): any;
} & {
    setAnimation(type: any, attrs: any): void;
    setFilter(type: any, value: any): void;
}, import("mobx-state-tree").ModelCreationType<{
    id: string;
    type: string;
    name: string;
    opacity: number;
    custom: any;
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    alwaysOnTop: boolean;
    showInExport: boolean;
}>, {}>;
export type ShapeType = Instance<typeof Shape>;
