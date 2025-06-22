import { StoreType } from '../model/store';
export declare const useDuplicateElement: ({ store }: {
    store: StoreType;
}) => {
    duplicate: () => void;
    disabled: boolean;
};
