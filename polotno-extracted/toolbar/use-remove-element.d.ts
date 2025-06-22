import { StoreType } from '../model/store';
export declare const useRemoveElement: ({ store }: {
    store: StoreType;
}) => {
    disabled: boolean;
    remove: () => void;
};
