import { FontConfig } from './css-optimizer';
export declare const resetStyleContent = "\n  p {\n    margin: 0;\n    padding: 0;\n    word-wrap: break-word; /* Required for Firefox */\n    /* a text may have several spaces, we need to preserve them */\n    white-space: pre-wrap;\n  }\n\n  /* Reset default list styles and setup counters */\n  ul, ol {\n    list-style: none; /* Remove default markers */\n    padding-inline-start: 0; /* Reset padding */\n    margin: 0;\n    display: block; /* Use block instead of inline-block for better text wrapping */\n    width: 100%;\n    text-decoration: inherit;\n    counter-reset: ol-counter; /* Initialize counter for ol */\n  }\n\n  li {\n    position: relative; /* Needed for absolute positioning of ::before */\n    padding-inline-start: 2.1em; /* Space for the marker (start side) */\n    margin: 0; /* Reset default li margins */\n    word-wrap: break-word; /* Required for Firefox text wrapping */\n    white-space: pre-wrap; /* Preserve spaces and allow wrapping */\n  }\n\n  li::before {\n    content: ''; /* Base content */\n    position: absolute;\n    /* Use logical properties for positioning */\n    inset-inline-start: 0; /* Position marker at the start edge (left in LTR, right in RTL) */\n    top: 0; /* Adjust vertical alignment */\n    /* Prevent letter-spacing from affecting the marker */\n    letter-spacing: normal;\n    /* Define width to ensure consistent spacing and alignment */\n    display: inline-block;\n    width: 2em; /* Width for the marker container */\n    /* Align multi-digit numbers to the end (right in LTR, left in RTL) */\n    text-align: end; \n    /* Space between marker and text (using logical property) */\n    margin-inline-end: 0.8em; /* Pushes text away from marker (2.5em total = 1.7em width + 0.8em margin)*/\n    /* Prevent marker style from inheriting list item styles */\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  /* Style for bullet points */\n  ul > li::before {\n    content: '\u2022'; /* Literal bullet character */\n    /* Center the bullet within its allocated width */\n    text-align: center; /* Override text-align: end for bullets */\n    font-size: 1.2em;\n    top: 0em; /* Re-adjust vertical alignment for bullet */\n    /* Bullets don't need number alignment, width can be tighter */\n    width: 2em;\n    /* Adjust margin to maintain overall padding */\n    margin-inline-end: 1.5em; /* 2.5em total padding = 1em width + 1.5em margin */\n  }\n\n  /* Style for numbers using counter */\n  ol > li {\n    counter-increment: ol-counter; /* Increment counter for each li in ol */\n  }\n\n  ol > li::before {\n    content: counter(ol-counter) \".\"; /* Display counter value + dot */\n  }\n\n  .ql-indent-1 {\n    margin-inline-start: 0.5em;\n  }\n  .ql-indent-2 {\n    margin-inline-start: 1em;\n  }\n  .ql-indent-3 {\n    margin-inline-start: 1.5em;\n  }\n";
export declare const prerenderFont: (fontFamily: string) => Promise<void>;
export declare function isContentWrapping({ html }: {
    html: any;
}): boolean;
export declare function detectSize(html: any): {
    width: number;
    height: number;
};
export declare function htmlToCanvas({ html, width, height, fontFamily, padding, font, pixelRatio, }: {
    html: string;
    width: number;
    height: number;
    fontFamily: string;
    padding: number;
    font?: FontConfig;
    pixelRatio: number;
}): Promise<HTMLCanvasElement>;
