import React from 'react';
import { Effects } from '../utils/filters';
type EffectCardProps = {
    title: string;
    imageSrc: string;
    effect: Effects;
    active?: boolean;
    onClick?: () => void;
};
export declare const EffectCard: React.FC<EffectCardProps>;
export {};
