import { StoreType } from '../model/store';
import { AudioType } from '../model/audio-model';
type Props = {
    store: StoreType;
    audio: AudioType;
};
export declare const AudioElement: (({ audio, store }: Props) => any) & {
    displayName: string;
};
export {};
