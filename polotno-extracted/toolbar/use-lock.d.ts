import { StoreType } from '../model/store';
export declare const useLock: ({ store }: {
    store: StoreType;
}) => {
    disabled: boolean;
    lock: () => void;
    locked: boolean;
};
