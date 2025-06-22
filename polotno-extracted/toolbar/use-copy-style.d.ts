import { ElementType } from '../model/group-model';
import { StoreType } from '../model/store';
export declare const useCopyStyle: (store: StoreType) => {
    elementToCopy: ElementType;
    disabled: boolean;
    setElementToCopy: import("react").Dispatch<import("react").SetStateAction<ElementType>>;
};
