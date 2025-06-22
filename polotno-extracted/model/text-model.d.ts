import { Instance } from 'mobx-state-tree';
export declare const TextElement: import("mobx-state-tree").IModelType<{
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
} & {
    type: import("mobx-state-tree").IType<string, string, string>;
    text: import("mobx-state-tree").IType<string, string, string>;
    placeholder: import("mobx-state-tree").IType<string, string, string>;
    fontSize: import("mobx-state-tree").IType<number, number, number>;
    fontFamily: import("mobx-state-tree").IType<string, string, string>;
    fontStyle: import("mobx-state-tree").IType<string, string, string>;
    fontWeight: import("mobx-state-tree").IType<string, string, string>;
    textDecoration: import("mobx-state-tree").IType<string, string, string>;
    fill: import("mobx-state-tree").IType<string, string, string>;
    align: import("mobx-state-tree").IType<string, string, string>;
    width: import("mobx-state-tree").IType<number, number, number>;
    height: import("mobx-state-tree").IType<number, number, number>;
    verticalAlign: import("mobx-state-tree").IType<string, string, string>;
    strokeWidth: import("mobx-state-tree").IType<number, number, number>;
    stroke: import("mobx-state-tree").IType<string, string, string>;
    lineHeight: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree/dist/internal").IUnionType<[import("mobx-state-tree").ISimpleType<number>, import("mobx-state-tree").ISimpleType<string>]>, [undefined]>;
    letterSpacing: import("mobx-state-tree").IType<number, number, number>;
    _editModeEnabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    backgroundEnabled: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    backgroundColor: import("mobx-state-tree").IType<string, string, string>;
    backgroundOpacity: import("mobx-state-tree").IType<number, number, number>;
    backgroundCornerRadius: import("mobx-state-tree").IType<number, number, number>;
    backgroundPadding: import("mobx-state-tree").IType<number, number, number>;
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
} & {
    toggleEditMode(editing?: boolean): void;
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
export type TextElementType = Instance<typeof TextElement>;
