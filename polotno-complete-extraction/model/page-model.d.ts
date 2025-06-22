import { Instance } from 'mobx-state-tree';
import { NodeType } from './node-model';
import { ElementType } from './group-model';
export declare const Page: import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    children: import("mobx-state-tree").IArrayType<any>;
    width: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree/dist/internal").IUnionType<[import("mobx-state-tree").ISimpleType<number>, import("mobx-state-tree").ISimpleType<"auto">]>, [undefined]>;
    height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree/dist/internal").IUnionType<[import("mobx-state-tree").ISimpleType<number>, import("mobx-state-tree").ISimpleType<"auto">]>, [undefined]>;
    background: import("mobx-state-tree").IType<string, string, string>;
    bleed: import("mobx-state-tree").IType<number, number, number>;
    custom: import("mobx-state-tree").IType<any, any, any>;
    duration: import("mobx-state-tree").IType<number, number, number>;
    _exporting: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    _rendering: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    _forceMount: import("mobx-state-tree").IType<boolean, boolean, boolean>;
}, {
    readonly store: any;
} & {
    readonly startTime: number;
    readonly _exportingOrRendering: boolean;
} & {
    readonly computedWidth: any;
    readonly computedHeight: any;
} & {
    toJSON(): any;
    _forEachElementUp(ids: Array<string>, callback: Function): void;
    _forEachElementDown(ids: Array<string>, callback: Function): false;
} & {
    clone(attrs?: {}): any;
    setZIndex(zIndex: any): void;
    set(attrs: any): void;
    select(): void;
    addElement<T extends ElementType["type"] | (string & {})>(attrs: {
        type: T;
    } & (T extends ElementType["type"] ? Partial<Omit<Extract<ElementType, {
        type: T;
    }>, "type">> : Record<string, any>), { skipSelect }?: {
        skipSelect?: boolean;
    }): T extends ElementType["type"] ? Extract<ElementType, {
        type: T;
    }> : NodeType;
    canMoveElementsUp(ids: Array<string>): false;
    moveElementsUp(ids: Array<string>): void;
    canMoveElementsTop(ids: Array<string>): any;
    moveElementsTop(ids: Array<string>): void;
    canMoveElementsDown(ids: Array<string>): false;
    moveElementsDown(ids: Array<string>): void;
    canMoveElementsBottom(ids: Array<string>): any;
    moveElementsBottom(ids: Array<string>): void;
    setElementZIndex(id: any, zIndex: any): void;
    setSize({ width, height, useMagic, softChange, }: {
        width: number;
        height: number;
        useMagic?: boolean;
        softChange?: boolean;
    }): void;
} & {
    moveElementUp(id: any): void;
    moveElementDown(id: any): void;
    moveElementTop(id: any): void;
    moveElementBottom(id: any): void;
    play(): void;
}, import("mobx-state-tree")._NotCustomized, {}>;
export type PageType = Instance<typeof Page>;
