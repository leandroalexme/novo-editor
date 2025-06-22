import { StoreType } from '../model/store';
export declare const copy: (store: StoreType) => void;
export declare const cut: (store: StoreType) => void;
export declare const paste: (store: StoreType) => void;
export declare const isClipboardEmpty: () => boolean;
