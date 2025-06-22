import { Instance } from 'mobx-state-tree';
import * as fonts from '../utils/fonts';
import { PageType } from './page-model';
import { ElementsArray, ElementType } from './group-model';
import { NodeType } from './node-model';
type ElementOrPage = ElementType | (PageType & {
    type?: never;
});
export declare const Font: import("mobx-state-tree").IModelType<{
    fontFamily: import("mobx-state-tree").ISimpleType<string>;
    url: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    styles: import("mobx-state-tree").IType<any, any, any>;
}, {}, any, import("mobx-state-tree")._NotCustomized>;
export interface ExportOptions {
    pixelRatio?: number;
    ignoreBackground?: boolean;
    pageId?: string;
    includeBleed?: boolean;
    mimeType?: 'image/png' | 'image/jpeg';
    quality?: number;
    _skipTimeout?: boolean;
    quickMode?: boolean;
    onProgress?: (progress: number) => void;
}
export interface GifExportOptions extends ExportOptions {
    fps?: number;
}
export interface PDFExportOptions extends ExportOptions {
    dpi?: number;
    parallel?: number;
    pageIds?: Array<string>;
    unit?: 'pt' | 'mm' | 'cm' | 'in';
    pixelUnitRatio?: number;
    cropMarkSize?: number;
}
export declare const Store: import("mobx-state-tree").IModelType<{
    role: import("mobx-state-tree").IType<string, string, string>;
    pages: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
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
    }, import("mobx-state-tree")._NotCustomized, {}>>;
    fonts: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        fontFamily: import("mobx-state-tree").ISimpleType<string>;
        url: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        styles: import("mobx-state-tree").IType<any, any, any>;
    }, {}, any, import("mobx-state-tree")._NotCustomized>>;
    audios: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        src: import("mobx-state-tree").IType<string, string, string>;
        duration: import("mobx-state-tree").IType<number, number, number>;
        startTime: import("mobx-state-tree").IType<number, number, number>;
        endTime: import("mobx-state-tree").IType<number, number, number>;
        volume: import("mobx-state-tree").IType<number, number, number>;
        delay: import("mobx-state-tree").IType<number, number, number>;
    }, {
        toJSON(): {
            id: string;
            src: string;
            duration: number;
            startTime: number;
            endTime: number;
            volume: number;
            delay: number;
        };
    } & {
        set(attrs: any): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    width: import("mobx-state-tree").IType<number, number, number>;
    height: import("mobx-state-tree").IType<number, number, number>;
    currentTime: import("mobx-state-tree").IType<number, number, number>;
    isPlaying: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    scale: import("mobx-state-tree").IType<number, number, number>;
    scaleToFit: import("mobx-state-tree").IType<number, number, number>;
    unit: import("mobx-state-tree").IType<string, string, string>;
    dpi: import("mobx-state-tree").IType<number, number, number>;
    schemaVersion: import("mobx-state-tree").IType<number, number, number>;
    bleedVisible: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    rulesVisible: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    openedSidePanel: import("mobx-state-tree").IType<string, string, string>;
    previousOpenedSidePanel: import("mobx-state-tree").IType<string, string, string>;
    custom: import("mobx-state-tree").IType<any, any, any>;
    selectedElementsIds: import("mobx-state-tree").IArrayType<import("mobx-state-tree").ISimpleType<string>>;
    animatedElementsIds: import("mobx-state-tree").IArrayType<import("mobx-state-tree").ISimpleType<string>>;
    history: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        history: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<any, any, any>>;
        undoIdx: import("mobx-state-tree").IType<number, number, number>;
        targetPath: import("mobx-state-tree").IType<string, string, string>;
    }, {
        readonly canUndo: boolean;
        readonly canRedo: boolean;
    } & {
        startTransaction(): void;
        endTransaction(skipSave?: boolean): void;
        ignore(func: any, skipStateReplacement?: boolean, delayed?: boolean): Promise<void>;
        transaction(func: any): Promise<void>;
        requestAddState(state: any): void;
        addUndoState(): void;
        afterCreate(): void;
        clear(): void;
        beforeDestroy(): void;
        undo(): void;
        redo(): void;
        replaceState(): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    _elementsPixelRatio: import("mobx-state-tree").IType<number, number, number>;
    _activePageId: import("mobx-state-tree").IType<string, string, string>;
    _forceShowCredit: import("mobx-state-tree").IType<boolean, boolean, boolean>;
    _key: import("mobx-state-tree").IType<string, string, string>;
    _validated: import("mobx-state-tree").IType<boolean, boolean, boolean>;
}, {
    readonly _idsMap: Record<string, ElementType>;
} & {
    readonly _bleedVisible: boolean;
    readonly selectedElements: ElementsArray;
    readonly children: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
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
    }, import("mobx-state-tree")._NotCustomized, {}>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
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
    }, import("mobx-state-tree")._NotCustomized, {}>>>;
    readonly selectedShapes: (import("mobx-state-tree").ModelInstanceTypeProps<{
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
    }> & {
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
        }): NodeType;
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
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
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
        }): NodeType;
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
    }>, {}>>)[];
    readonly activePage: import("mobx-state-tree").ModelInstanceTypeProps<{
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
    }> & {
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
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
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
    }, import("mobx-state-tree")._NotCustomized, {}>>;
    readonly duration: number;
    readonly _hasCroppedImages: any;
    find(callback: (element: ElementOrPage) => boolean): ElementOrPage | undefined;
    getElementById(id: string): ElementType | undefined;
} & {
    afterCreate(): void;
    setCurrentTime(time: any): void;
    _togglePlaying(playing?: boolean): void;
    play({ animatedElementsIds, startTime, currentTime, endTime, repeat, }?: {
        animatedElementsIds?: any[];
        startTime?: number;
        currentTime?: number;
        endTime?: number;
        repeat?: boolean;
    }): void;
    checkActivePage(): void;
    seek(): void;
    stop(): void;
} & {
    __(): void;
    set(attrs: any): void;
    setUnit({ unit, dpi }: {
        unit: any;
        dpi: any;
    }): void;
    setRole(role: string): void;
    addPage(attrs?: any): import("mobx-state-tree").ModelInstanceTypeProps<{
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
    }> & {
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
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
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
    }, import("mobx-state-tree")._NotCustomized, {}>>;
    selectPage(id: any): void;
    selectElements(ids: Array<string>): void;
    toggleBleed(bleedVisible?: boolean): void;
    toggleRulers(rulesVisible?: boolean): void;
    openSidePanel(panelName: string): void;
    setScale(scale: number): void;
    _setScaleToFit(scale: number): void;
    setElementsPixelRatio(ratio: number): void;
    setSize(width: number, height: number, useMagic?: boolean): void;
    setPageZIndex(id: any, zIndex: any): void;
    deletePages(ids: Array<string>): void;
    groupElements(ids: Array<string>, attrs?: any): any;
    ungroupElements(ids: Array<string>): void;
    deleteElements(ids: Array<string>): void;
    on(event: any, callback: any): import("mobx-state-tree").IDisposer;
    _toCanvas({ pixelRatio, ignoreBackground, pageId, mimeType, includeBleed, _skipTimeout, quickMode, }?: ExportOptions): Promise<HTMLCanvasElement>;
    toDataURL({ mimeType, quality, ...rest }?: ExportOptions): Promise<string>;
    toBlob({ mimeType, quality, ...rest }?: ExportOptions): Promise<Blob>;
    saveAsImage({ fileName, ...exportProps }?: ExportOptions & {
        fileName?: string;
    }): Promise<void>;
    _toPDF(exportProps: PDFExportOptions): Promise<any>;
    toPDFDataURL(exportProps: PDFExportOptions): Promise<any>;
    toGIFDataURL(exportProps?: GifExportOptions): Promise<unknown>;
    saveAsGIF({ fileName, ...exportProps }?: GifExportOptions & {
        fileName?: string;
    }): Promise<void>;
    toHTML({ elementHook }?: {
        elementHook: any;
    }): Promise<string>;
    saveAsHTML({ fileName }?: {
        fileName?: string;
    }): Promise<void>;
    toSVG({ elementHook, pageId }?: {
        elementHook: any;
        pageId: any;
    }): Promise<string>;
    saveAsSVG({ fileName, elementHook, pageId, }?: {
        fileName?: string;
        elementHook?: Function;
        pageId?: string;
    }): Promise<void>;
    saveAsPDF({ fileName, ...exportProps }?: ExportOptions & {
        fileName?: string;
        dpi?: number;
    }): Promise<void>;
    waitLoading({ _skipTimeout }?: {
        _skipTimeout?: boolean;
    }): Promise<void>;
    toJSON(): {
        width: number;
        height: number;
        fonts: import("mobx-state-tree").ModelSnapshotType<{
            fontFamily: import("mobx-state-tree").ISimpleType<string>;
            url: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            styles: import("mobx-state-tree").IType<any, any, any>;
        }>[];
        pages: {}[];
        audios: import("mobx-state-tree").ModelSnapshotType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            src: import("mobx-state-tree").IType<string, string, string>;
            duration: import("mobx-state-tree").IType<number, number, number>;
            startTime: import("mobx-state-tree").IType<number, number, number>;
            endTime: import("mobx-state-tree").IType<number, number, number>;
            volume: import("mobx-state-tree").IType<number, number, number>;
            delay: import("mobx-state-tree").IType<number, number, number>;
        }>[];
        unit: string;
        dpi: number;
        custom: any;
        schemaVersion: number;
    };
    loadJSON(json: any, keepHistory?: boolean): void;
    clear({ keepHistory }?: {
        keepHistory?: boolean;
    }): void;
    addFont(font: fonts.FONT): void;
    removeFont(fontFamily: string): void;
    addAudio(data: any): void;
    removeAudio(audioId: string): void;
    loadFont(fontFamily: any): Promise<void[]>;
    validate(json: any): {
        path: string;
        message: string;
    }[];
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export type StoreType = Instance<typeof Store>;
export interface StoreProps {
    key: string;
    showCredit: boolean;
}
export declare function createStore({ key, showCredit }?: StoreProps): StoreType;
export default createStore;
