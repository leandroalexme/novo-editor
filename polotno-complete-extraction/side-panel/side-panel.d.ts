import React from 'react';
import { StoreType } from '../model/store';
export { SectionTab } from './tab-button';
export { ImagesGrid } from './images-grid';
interface SectionTabProps {
    onClick: any;
    active: boolean;
}
export type Section = {
    name: string;
    Tab: React.ComponentType<SectionTabProps>;
    Panel: React.ComponentType<{
        store: StoreType;
    }>;
    visibleInList?: boolean;
};
export declare const TemplatesSection: Section;
export declare const TextSection: Section;
export declare const PhotosSection: Section;
export declare const ElementsSection: Section;
export declare const UploadSection: Section;
export declare const BackgroundSection: Section;
export declare const PagesSection: Section;
export declare const LayersSection: Section;
export declare const SizeSection: Section;
export declare const VideosSection: Section;
export declare const DEFAULT_SECTIONS: Section[];
export declare const INTERNAL_SECTIONS: Section[];
interface SidePanelProps {
    store: StoreType;
    sections?: Section[];
    defaultSection?: string;
}
export declare const SidePanel: (({ store, sections, defaultSection }: SidePanelProps) => React.JSX.Element) & {
    displayName: string;
};
export default SidePanel;
