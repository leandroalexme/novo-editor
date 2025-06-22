import * as mobx from 'mobx';
export declare function isGoogleFontChanged(): boolean;
export declare function setGoogleFonts(list: string[] | 'default'): void;
export declare function getFontsList(): mobx.IObservableArray<string>;
export declare const globalFonts: mobx.IObservableArray<FONT>;
export declare function addGlobalFont(font: FONT): void;
export declare function removeGlobalFont(fontFamily: string): void;
export declare function replaceGlobalFonts(fonts: Array<FONT>): void;
export declare const isFontLoaded: (fontName: string) => boolean;
export declare function loadFont(fontName: string, fontStyle: string, fontWeight: string): Promise<void>;
export declare function setGoogleFontsVariants(variants: string): void;
export declare function getGoogleFontsVariants(): string;
export declare function getGoogleFontsUrl(fontName: string): string;
export declare function injectGoogleFont(fontName: string): void;
export type FONT = {
    fontFamily: string;
    url?: string;
    styles?: Array<{
        src: string;
        fontStyle?: string;
        fontWeight?: string;
    }>;
};
export declare function injectCustomFont(font: FONT): void;
