function __spack_require__(mod) {
    var cache;
    if (cache) {
        return cache;
    }
    var module = {
        exports: {
        }
    };
    mod(module, module.exports);
    cache = module.exports;
    return cache;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var load = __spack_require__.bind(void 0, function(module, exports) {
    let warned = false;
    module.exports = {
        black: '#000',
        white: '#fff',
        rose: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48',
            700: '#be123c',
            800: '#9f1239',
            900: '#881337'
        },
        pink: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',
            600: '#db2777',
            700: '#be185d',
            800: '#9d174d',
            900: '#831843'
        },
        fuchsia: {
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#d946ef',
            600: '#c026d3',
            700: '#a21caf',
            800: '#86198f',
            900: '#701a75'
        },
        purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87'
        },
        violet: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95'
        },
        indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81'
        },
        blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a'
        },
        get lightBlue () {
            if (!warned) {
                console.log('warn - As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`.');
                console.log('warn - Please update your color palette to eliminate this warning.');
                warned = true;
            }
            return {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
                500: '#0ea5e9',
                600: '#0284c7',
                700: '#0369a1',
                800: '#075985',
                900: '#0c4a6e'
            };
        },
        sky: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e'
        },
        cyan: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63'
        },
        teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a'
        },
        emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b'
        },
        green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d'
        },
        lime: {
            50: '#f7fee7',
            100: '#ecfccb',
            200: '#d9f99d',
            300: '#bef264',
            400: '#a3e635',
            500: '#84cc16',
            600: '#65a30d',
            700: '#4d7c0f',
            800: '#3f6212',
            900: '#365314'
        },
        yellow: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12'
        },
        amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f'
        },
        orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12'
        },
        red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d'
        },
        warmGray: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917'
        },
        trueGray: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717'
        },
        gray: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b'
        },
        coolGray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827'
        },
        blueGray: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a'
        }
    };
});
var load1 = __spack_require__.bind(void 0, function(module, exports) {
    'use strict';
    module.exports = {
        "aliceblue": [
            240,
            248,
            255
        ],
        "antiquewhite": [
            250,
            235,
            215
        ],
        "aqua": [
            0,
            255,
            255
        ],
        "aquamarine": [
            127,
            255,
            212
        ],
        "azure": [
            240,
            255,
            255
        ],
        "beige": [
            245,
            245,
            220
        ],
        "bisque": [
            255,
            228,
            196
        ],
        "black": [
            0,
            0,
            0
        ],
        "blanchedalmond": [
            255,
            235,
            205
        ],
        "blue": [
            0,
            0,
            255
        ],
        "blueviolet": [
            138,
            43,
            226
        ],
        "brown": [
            165,
            42,
            42
        ],
        "burlywood": [
            222,
            184,
            135
        ],
        "cadetblue": [
            95,
            158,
            160
        ],
        "chartreuse": [
            127,
            255,
            0
        ],
        "chocolate": [
            210,
            105,
            30
        ],
        "coral": [
            255,
            127,
            80
        ],
        "cornflowerblue": [
            100,
            149,
            237
        ],
        "cornsilk": [
            255,
            248,
            220
        ],
        "crimson": [
            220,
            20,
            60
        ],
        "cyan": [
            0,
            255,
            255
        ],
        "darkblue": [
            0,
            0,
            139
        ],
        "darkcyan": [
            0,
            139,
            139
        ],
        "darkgoldenrod": [
            184,
            134,
            11
        ],
        "darkgray": [
            169,
            169,
            169
        ],
        "darkgreen": [
            0,
            100,
            0
        ],
        "darkgrey": [
            169,
            169,
            169
        ],
        "darkkhaki": [
            189,
            183,
            107
        ],
        "darkmagenta": [
            139,
            0,
            139
        ],
        "darkolivegreen": [
            85,
            107,
            47
        ],
        "darkorange": [
            255,
            140,
            0
        ],
        "darkorchid": [
            153,
            50,
            204
        ],
        "darkred": [
            139,
            0,
            0
        ],
        "darksalmon": [
            233,
            150,
            122
        ],
        "darkseagreen": [
            143,
            188,
            143
        ],
        "darkslateblue": [
            72,
            61,
            139
        ],
        "darkslategray": [
            47,
            79,
            79
        ],
        "darkslategrey": [
            47,
            79,
            79
        ],
        "darkturquoise": [
            0,
            206,
            209
        ],
        "darkviolet": [
            148,
            0,
            211
        ],
        "deeppink": [
            255,
            20,
            147
        ],
        "deepskyblue": [
            0,
            191,
            255
        ],
        "dimgray": [
            105,
            105,
            105
        ],
        "dimgrey": [
            105,
            105,
            105
        ],
        "dodgerblue": [
            30,
            144,
            255
        ],
        "firebrick": [
            178,
            34,
            34
        ],
        "floralwhite": [
            255,
            250,
            240
        ],
        "forestgreen": [
            34,
            139,
            34
        ],
        "fuchsia": [
            255,
            0,
            255
        ],
        "gainsboro": [
            220,
            220,
            220
        ],
        "ghostwhite": [
            248,
            248,
            255
        ],
        "gold": [
            255,
            215,
            0
        ],
        "goldenrod": [
            218,
            165,
            32
        ],
        "gray": [
            128,
            128,
            128
        ],
        "green": [
            0,
            128,
            0
        ],
        "greenyellow": [
            173,
            255,
            47
        ],
        "grey": [
            128,
            128,
            128
        ],
        "honeydew": [
            240,
            255,
            240
        ],
        "hotpink": [
            255,
            105,
            180
        ],
        "indianred": [
            205,
            92,
            92
        ],
        "indigo": [
            75,
            0,
            130
        ],
        "ivory": [
            255,
            255,
            240
        ],
        "khaki": [
            240,
            230,
            140
        ],
        "lavender": [
            230,
            230,
            250
        ],
        "lavenderblush": [
            255,
            240,
            245
        ],
        "lawngreen": [
            124,
            252,
            0
        ],
        "lemonchiffon": [
            255,
            250,
            205
        ],
        "lightblue": [
            173,
            216,
            230
        ],
        "lightcoral": [
            240,
            128,
            128
        ],
        "lightcyan": [
            224,
            255,
            255
        ],
        "lightgoldenrodyellow": [
            250,
            250,
            210
        ],
        "lightgray": [
            211,
            211,
            211
        ],
        "lightgreen": [
            144,
            238,
            144
        ],
        "lightgrey": [
            211,
            211,
            211
        ],
        "lightpink": [
            255,
            182,
            193
        ],
        "lightsalmon": [
            255,
            160,
            122
        ],
        "lightseagreen": [
            32,
            178,
            170
        ],
        "lightskyblue": [
            135,
            206,
            250
        ],
        "lightslategray": [
            119,
            136,
            153
        ],
        "lightslategrey": [
            119,
            136,
            153
        ],
        "lightsteelblue": [
            176,
            196,
            222
        ],
        "lightyellow": [
            255,
            255,
            224
        ],
        "lime": [
            0,
            255,
            0
        ],
        "limegreen": [
            50,
            205,
            50
        ],
        "linen": [
            250,
            240,
            230
        ],
        "magenta": [
            255,
            0,
            255
        ],
        "maroon": [
            128,
            0,
            0
        ],
        "mediumaquamarine": [
            102,
            205,
            170
        ],
        "mediumblue": [
            0,
            0,
            205
        ],
        "mediumorchid": [
            186,
            85,
            211
        ],
        "mediumpurple": [
            147,
            112,
            219
        ],
        "mediumseagreen": [
            60,
            179,
            113
        ],
        "mediumslateblue": [
            123,
            104,
            238
        ],
        "mediumspringgreen": [
            0,
            250,
            154
        ],
        "mediumturquoise": [
            72,
            209,
            204
        ],
        "mediumvioletred": [
            199,
            21,
            133
        ],
        "midnightblue": [
            25,
            25,
            112
        ],
        "mintcream": [
            245,
            255,
            250
        ],
        "mistyrose": [
            255,
            228,
            225
        ],
        "moccasin": [
            255,
            228,
            181
        ],
        "navajowhite": [
            255,
            222,
            173
        ],
        "navy": [
            0,
            0,
            128
        ],
        "oldlace": [
            253,
            245,
            230
        ],
        "olive": [
            128,
            128,
            0
        ],
        "olivedrab": [
            107,
            142,
            35
        ],
        "orange": [
            255,
            165,
            0
        ],
        "orangered": [
            255,
            69,
            0
        ],
        "orchid": [
            218,
            112,
            214
        ],
        "palegoldenrod": [
            238,
            232,
            170
        ],
        "palegreen": [
            152,
            251,
            152
        ],
        "paleturquoise": [
            175,
            238,
            238
        ],
        "palevioletred": [
            219,
            112,
            147
        ],
        "papayawhip": [
            255,
            239,
            213
        ],
        "peachpuff": [
            255,
            218,
            185
        ],
        "peru": [
            205,
            133,
            63
        ],
        "pink": [
            255,
            192,
            203
        ],
        "plum": [
            221,
            160,
            221
        ],
        "powderblue": [
            176,
            224,
            230
        ],
        "purple": [
            128,
            0,
            128
        ],
        "rebeccapurple": [
            102,
            51,
            153
        ],
        "red": [
            255,
            0,
            0
        ],
        "rosybrown": [
            188,
            143,
            143
        ],
        "royalblue": [
            65,
            105,
            225
        ],
        "saddlebrown": [
            139,
            69,
            19
        ],
        "salmon": [
            250,
            128,
            114
        ],
        "sandybrown": [
            244,
            164,
            96
        ],
        "seagreen": [
            46,
            139,
            87
        ],
        "seashell": [
            255,
            245,
            238
        ],
        "sienna": [
            160,
            82,
            45
        ],
        "silver": [
            192,
            192,
            192
        ],
        "skyblue": [
            135,
            206,
            235
        ],
        "slateblue": [
            106,
            90,
            205
        ],
        "slategray": [
            112,
            128,
            144
        ],
        "slategrey": [
            112,
            128,
            144
        ],
        "snow": [
            255,
            250,
            250
        ],
        "springgreen": [
            0,
            255,
            127
        ],
        "steelblue": [
            70,
            130,
            180
        ],
        "tan": [
            210,
            180,
            140
        ],
        "teal": [
            0,
            128,
            128
        ],
        "thistle": [
            216,
            191,
            216
        ],
        "tomato": [
            255,
            99,
            71
        ],
        "turquoise": [
            64,
            224,
            208
        ],
        "violet": [
            238,
            130,
            238
        ],
        "wheat": [
            245,
            222,
            179
        ],
        "white": [
            255,
            255,
            255
        ],
        "whitesmoke": [
            245,
            245,
            245
        ],
        "yellow": [
            255,
            255,
            0
        ],
        "yellowgreen": [
            154,
            205,
            50
        ]
    };
});
var load2 = __spack_require__.bind(void 0, function(module, exports) {
    /* MIT license */ /* eslint-disable no-mixed-operators */ const cssKeywords = load1();
    // NOTE: conversions should only return primitive values (i.e. arrays, or
    //       values that give correct `typeof` results).
    //       do not use box values types (i.e. Number(), String(), etc.)
    const reverseKeywords = {
    };
    for (const key of Object.keys(cssKeywords))reverseKeywords[cssKeywords[key]] = key;
    const convert = {
        rgb: {
            channels: 3,
            labels: 'rgb'
        },
        hsl: {
            channels: 3,
            labels: 'hsl'
        },
        hsv: {
            channels: 3,
            labels: 'hsv'
        },
        hwb: {
            channels: 3,
            labels: 'hwb'
        },
        cmyk: {
            channels: 4,
            labels: 'cmyk'
        },
        xyz: {
            channels: 3,
            labels: 'xyz'
        },
        lab: {
            channels: 3,
            labels: 'lab'
        },
        lch: {
            channels: 3,
            labels: 'lch'
        },
        hex: {
            channels: 1,
            labels: [
                'hex'
            ]
        },
        keyword: {
            channels: 1,
            labels: [
                'keyword'
            ]
        },
        ansi16: {
            channels: 1,
            labels: [
                'ansi16'
            ]
        },
        ansi256: {
            channels: 1,
            labels: [
                'ansi256'
            ]
        },
        hcg: {
            channels: 3,
            labels: [
                'h',
                'c',
                'g'
            ]
        },
        apple: {
            channels: 3,
            labels: [
                'r16',
                'g16',
                'b16'
            ]
        },
        gray: {
            channels: 1,
            labels: [
                'gray'
            ]
        }
    };
    module.exports = convert;
    // Hide .channels and .labels properties
    for (const model of Object.keys(convert)){
        if (!('channels' in convert[model])) throw new Error('missing channels property: ' + model);
        if (!('labels' in convert[model])) throw new Error('missing channel labels property: ' + model);
        if (convert[model].labels.length !== convert[model].channels) throw new Error('channel and label counts mismatch: ' + model);
        const { channels , labels  } = convert[model];
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], 'channels', {
            value: channels
        });
        Object.defineProperty(convert[model], 'labels', {
            value: labels
        });
    }
    convert.rgb.hsl = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h;
        let s;
        if (max === min) h = 0;
        else if (r === max) h = (g - b) / delta;
        else if (g === max) h = 2 + (b - r) / delta;
        else if (b === max) h = 4 + (r - g) / delta;
        h = Math.min(h * 60, 360);
        if (h < 0) h += 360;
        const l = (min + max) / 2;
        if (max === min) s = 0;
        else if (l <= 0.5) s = delta / (max + min);
        else s = delta / (2 - max - min);
        return [
            h,
            s * 100,
            l * 100
        ];
    };
    convert.rgb.hsv = function(rgb) {
        let rdif;
        let gdif;
        let bdif;
        let h;
        let s;
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const v = Math.max(r, g, b);
        const diff = v - Math.min(r, g, b);
        const diffc = function(c) {
            return (v - c) / 6 / diff + 0.5;
        };
        if (diff === 0) {
            h = 0;
            s = 0;
        } else {
            s = diff / v;
            rdif = diffc(r);
            gdif = diffc(g);
            bdif = diffc(b);
            if (r === v) h = bdif - gdif;
            else if (g === v) h = 1 / 3 + rdif - bdif;
            else if (b === v) h = 2 / 3 + gdif - rdif;
            if (h < 0) h += 1;
            else if (h > 1) h -= 1;
        }
        return [
            h * 360,
            s * 100,
            v * 100
        ];
    };
    convert.rgb.hwb = function(rgb) {
        const r = rgb[0];
        const g = rgb[1];
        let b = rgb[2];
        const h = convert.rgb.hsl(rgb)[0];
        const w = 1 / 255 * Math.min(r, Math.min(g, b));
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [
            h,
            w * 100,
            b * 100
        ];
    };
    convert.rgb.cmyk = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const k = Math.min(1 - r, 1 - g, 1 - b);
        const c = (1 - r - k) / (1 - k) || 0;
        const m = (1 - g - k) / (1 - k) || 0;
        const y = (1 - b - k) / (1 - k) || 0;
        return [
            c * 100,
            m * 100,
            y * 100,
            k * 100
        ];
    };
    function comparativeDistance(x, y) {
        /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
        const reversed = reverseKeywords[rgb];
        if (reversed) return reversed;
        let currentClosestDistance = Infinity;
        let currentClosestKeyword;
        for (const keyword of Object.keys(cssKeywords)){
            const value = cssKeywords[keyword];
            // Compute comparative distance
            const distance = comparativeDistance(rgb, value);
            // Check if its less, if so set as closest
            if (distance < currentClosestDistance) {
                currentClosestDistance = distance;
                currentClosestKeyword = keyword;
            }
        }
        return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
        return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
        let r = rgb[0] / 255;
        let g = rgb[1] / 255;
        let b = rgb[2] / 255;
        // Assume sRGB
        r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
        g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
        b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
        const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [
            x * 100,
            y * 100,
            z * 100
        ];
    };
    convert.rgb.lab = function(rgb) {
        const xyz = convert.rgb.xyz(rgb);
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [
            l,
            a,
            b
        ];
    };
    convert.hsl.rgb = function(hsl) {
        const h = hsl[0] / 360;
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        let t2;
        let t3;
        let val;
        if (s === 0) {
            val = l * 255;
            return [
                val,
                val,
                val
            ];
        }
        if (l < 0.5) t2 = l * (1 + s);
        else t2 = l + s - l * s;
        const t1 = 2 * l - t2;
        const rgb = [
            0,
            0,
            0
        ];
        for(let i = 0; i < 3; i++){
            t3 = h + 1 / 3 * -(i - 1);
            if (t3 < 0) t3++;
            if (t3 > 1) t3--;
            if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
            else if (2 * t3 < 1) val = t2;
            else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
            else val = t1;
            rgb[i] = val * 255;
        }
        return rgb;
    };
    convert.hsl.hsv = function(hsl) {
        const h = hsl[0];
        let s = hsl[1] / 100;
        let l = hsl[2] / 100;
        let smin = s;
        const lmin = Math.max(l, 0.01);
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v = (l + s) / 2;
        const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
        return [
            h,
            sv * 100,
            v * 100
        ];
    };
    convert.hsv.rgb = function(hsv) {
        const h = hsv[0] / 60;
        const s = hsv[1] / 100;
        let v = hsv[2] / 100;
        const hi = Math.floor(h) % 6;
        const f = h - Math.floor(h);
        const p = 255 * v * (1 - s);
        const q = 255 * v * (1 - s * f);
        const t = 255 * v * (1 - s * (1 - f));
        v *= 255;
        switch(hi){
            case 0:
                return [
                    v,
                    t,
                    p
                ];
            case 1:
                return [
                    q,
                    v,
                    p
                ];
            case 2:
                return [
                    p,
                    v,
                    t
                ];
            case 3:
                return [
                    p,
                    q,
                    v
                ];
            case 4:
                return [
                    t,
                    p,
                    v
                ];
            case 5:
                return [
                    v,
                    p,
                    q
                ];
        }
    };
    convert.hsv.hsl = function(hsv) {
        const h = hsv[0];
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const vmin = Math.max(v, 0.01);
        let sl;
        let l;
        l = (2 - s) * v;
        const lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l /= 2;
        return [
            h,
            sl * 100,
            l * 100
        ];
    };
    // http://dev.w3.org/csswg/css-color/#hwb-to-rgb
    convert.hwb.rgb = function(hwb) {
        const h = hwb[0] / 360;
        let wh = hwb[1] / 100;
        let bl = hwb[2] / 100;
        const ratio = wh + bl;
        let f;
        // Wh + bl cant be > 1
        if (ratio > 1) {
            wh /= ratio;
            bl /= ratio;
        }
        const i = Math.floor(6 * h);
        const v = 1 - bl;
        f = 6 * h - i;
        if ((i & 1) !== 0) f = 1 - f;
        const n = wh + f * (v - wh); // Linear interpolation
        let r;
        let g;
        let b;
        /* eslint-disable max-statements-per-line,no-multi-spaces */ switch(i){
            default:
            case 6:
            case 0:
                r = v;
                g = n;
                b = wh;
                break;
            case 1:
                r = n;
                g = v;
                b = wh;
                break;
            case 2:
                r = wh;
                g = v;
                b = n;
                break;
            case 3:
                r = wh;
                g = n;
                b = v;
                break;
            case 4:
                r = n;
                g = wh;
                b = v;
                break;
            case 5:
                r = v;
                g = wh;
                b = n;
                break;
        }
        /* eslint-enable max-statements-per-line,no-multi-spaces */ return [
            r * 255,
            g * 255,
            b * 255
        ];
    };
    convert.cmyk.rgb = function(cmyk) {
        const c = cmyk[0] / 100;
        const m = cmyk[1] / 100;
        const y = cmyk[2] / 100;
        const k = cmyk[3] / 100;
        const r = 1 - Math.min(1, c * (1 - k) + k);
        const g = 1 - Math.min(1, m * (1 - k) + k);
        const b = 1 - Math.min(1, y * (1 - k) + k);
        return [
            r * 255,
            g * 255,
            b * 255
        ];
    };
    convert.xyz.rgb = function(xyz) {
        const x = xyz[0] / 100;
        const y = xyz[1] / 100;
        const z = xyz[2] / 100;
        let r;
        let g;
        let b;
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.204 + z * 1.057;
        // Assume sRGB
        r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
        g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
        b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [
            r * 255,
            g * 255,
            b * 255
        ];
    };
    convert.xyz.lab = function(xyz) {
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [
            l,
            a,
            b
        ];
    };
    convert.lab.xyz = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let x;
        let y;
        let z;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z = y - b / 200;
        const y2 = y ** 3;
        const x2 = x ** 3;
        const z2 = z ** 3;
        y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
        z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z *= 108.883;
        return [
            x,
            y,
            z
        ];
    };
    convert.lab.lch = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let h;
        const hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) h += 360;
        const c = Math.sqrt(a * a + b * b);
        return [
            l,
            c,
            h
        ];
    };
    convert.lch.lab = function(lch) {
        const l = lch[0];
        const c = lch[1];
        const h = lch[2];
        const hr = h / 360 * 2 * Math.PI;
        const a = c * Math.cos(hr);
        const b = c * Math.sin(hr);
        return [
            l,
            a,
            b
        ];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
        const [r, g, b] = args;
        let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
        value = Math.round(value / 50);
        if (value === 0) return 30;
        let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
        if (value === 2) ansi += 60;
        return ansi;
    };
    convert.hsv.ansi16 = function(args) {
        // Optimization here; we already know the value and don't need to get
        // it converted for us.
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
        const r = args[0];
        const g = args[1];
        const b = args[2];
        // We use the extended greyscale palette here, with the exception of
        // black and white. normal palette only has 4 greyscale shades.
        if (r === g && g === b) {
            if (r < 8) return 16;
            if (r > 248) return 231;
            return Math.round((r - 8) / 247 * 24) + 232;
        }
        const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
        return ansi;
    };
    convert.ansi16.rgb = function(args) {
        let color = args % 10;
        // Handle greyscale
        if (color === 0 || color === 7) {
            if (args > 50) color += 3.5;
            color = color / 10.5 * 255;
            return [
                color,
                color,
                color
            ];
        }
        const mult = (~~(args > 50) + 1) * 0.5;
        const r = (color & 1) * mult * 255;
        const g = (color >> 1 & 1) * mult * 255;
        const b = (color >> 2 & 1) * mult * 255;
        return [
            r,
            g,
            b
        ];
    };
    convert.ansi256.rgb = function(args) {
        // Handle greyscale
        if (args >= 232) {
            const c = (args - 232) * 10 + 8;
            return [
                c,
                c,
                c
            ];
        }
        args -= 16;
        let rem;
        const r = Math.floor(args / 36) / 5 * 255;
        const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
        const b = rem % 6 / 5 * 255;
        return [
            r,
            g,
            b
        ];
    };
    convert.rgb.hex = function(args) {
        const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
        const string = integer.toString(16).toUpperCase();
        return '000000'.substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
        const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) return [
            0,
            0,
            0
        ];
        let colorString = match[0];
        if (match[0].length === 3) colorString = colorString.split('').map((__char)=>{
            return __char + __char;
        }).join('');
        const integer = parseInt(colorString, 16);
        const r = integer >> 16 & 255;
        const g = integer >> 8 & 255;
        const b = integer & 255;
        return [
            r,
            g,
            b
        ];
    };
    convert.rgb.hcg = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const max = Math.max(Math.max(r, g), b);
        const min = Math.min(Math.min(r, g), b);
        const chroma = max - min;
        let grayscale;
        let hue;
        if (chroma < 1) grayscale = min / (1 - chroma);
        else grayscale = 0;
        if (chroma <= 0) hue = 0;
        else if (max === r) hue = (g - b) / chroma % 6;
        else if (max === g) hue = 2 + (b - r) / chroma;
        else hue = 4 + (r - g) / chroma;
        hue /= 6;
        hue %= 1;
        return [
            hue * 360,
            chroma * 100,
            grayscale * 100
        ];
    };
    convert.hsl.hcg = function(hsl) {
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
        let f = 0;
        if (c < 1) f = (l - 0.5 * c) / (1 - c);
        return [
            hsl[0],
            c * 100,
            f * 100
        ];
    };
    convert.hsv.hcg = function(hsv) {
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const c = s * v;
        let f = 0;
        if (c < 1) f = (v - c) / (1 - c);
        return [
            hsv[0],
            c * 100,
            f * 100
        ];
    };
    convert.hcg.rgb = function(hcg) {
        const h = hcg[0] / 360;
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        if (c === 0) return [
            g * 255,
            g * 255,
            g * 255
        ];
        const pure = [
            0,
            0,
            0
        ];
        const hi = h % 1 * 6;
        const v = hi % 1;
        const w = 1 - v;
        let mg = 0;
        /* eslint-disable max-statements-per-line */ switch(Math.floor(hi)){
            case 0:
                pure[0] = 1;
                pure[1] = v;
                pure[2] = 0;
                break;
            case 1:
                pure[0] = w;
                pure[1] = 1;
                pure[2] = 0;
                break;
            case 2:
                pure[0] = 0;
                pure[1] = 1;
                pure[2] = v;
                break;
            case 3:
                pure[0] = 0;
                pure[1] = w;
                pure[2] = 1;
                break;
            case 4:
                pure[0] = v;
                pure[1] = 0;
                pure[2] = 1;
                break;
            default:
                pure[0] = 1;
                pure[1] = 0;
                pure[2] = w;
        }
        /* eslint-enable max-statements-per-line */ mg = (1 - c) * g;
        return [
            (c * pure[0] + mg) * 255,
            (c * pure[1] + mg) * 255,
            (c * pure[2] + mg) * 255
        ];
    };
    convert.hcg.hsv = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        let f = 0;
        if (v > 0) f = c / v;
        return [
            hcg[0],
            f * 100,
            v * 100
        ];
    };
    convert.hcg.hsl = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const l = g * (1 - c) + 0.5 * c;
        let s = 0;
        if (l > 0 && l < 0.5) s = c / (2 * l);
        else if (l >= 0.5 && l < 1) s = c / (2 * (1 - l));
        return [
            hcg[0],
            s * 100,
            l * 100
        ];
    };
    convert.hcg.hwb = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        return [
            hcg[0],
            (v - c) * 100,
            (1 - v) * 100
        ];
    };
    convert.hwb.hcg = function(hwb) {
        const w = hwb[1] / 100;
        const b = hwb[2] / 100;
        const v = 1 - b;
        const c = v - w;
        let g = 0;
        if (c < 1) g = (v - c) / (1 - c);
        return [
            hwb[0],
            c * 100,
            g * 100
        ];
    };
    convert.apple.rgb = function(apple) {
        return [
            apple[0] / 65535 * 255,
            apple[1] / 65535 * 255,
            apple[2] / 65535 * 255
        ];
    };
    convert.rgb.apple = function(rgb) {
        return [
            rgb[0] / 255 * 65535,
            rgb[1] / 255 * 65535,
            rgb[2] / 255 * 65535
        ];
    };
    convert.gray.rgb = function(args) {
        return [
            args[0] / 100 * 255,
            args[0] / 100 * 255,
            args[0] / 100 * 255
        ];
    };
    convert.gray.hsl = function(args) {
        return [
            0,
            0,
            args[0]
        ];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
        return [
            0,
            100,
            gray[0]
        ];
    };
    convert.gray.cmyk = function(gray) {
        return [
            0,
            0,
            0,
            gray[0]
        ];
    };
    convert.gray.lab = function(gray) {
        return [
            gray[0],
            0,
            0
        ];
    };
    convert.gray.hex = function(gray) {
        const val = Math.round(gray[0] / 100 * 255) & 255;
        const integer = (val << 16) + (val << 8) + val;
        const string = integer.toString(16).toUpperCase();
        return '000000'.substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
        const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [
            val / 255 * 100
        ];
    };
});
var load3 = __spack_require__.bind(void 0, function(module, exports) {
    const conversions = load2();
    /*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function buildGraph() {
        const graph = {
        };
        // https://jsperf.com/object-keys-vs-for-in-with-closure/3
        const models = Object.keys(conversions);
        for(let len = models.length, i = 0; i < len; i++)graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null
        };
        return graph;
    }
    // https://en.wikipedia.org/wiki/Breadth-first_search
    function deriveBFS(fromModel) {
        const graph = buildGraph();
        const queue = [
            fromModel
        ]; // Unshift -> queue -> pop
        graph[fromModel].distance = 0;
        while(queue.length){
            const current = queue.pop();
            const adjacents = Object.keys(conversions[current]);
            for(let len = adjacents.length, i = 0; i < len; i++){
                const adjacent = adjacents[i];
                const node = graph[adjacent];
                if (node.distance === -1) {
                    node.distance = graph[current].distance + 1;
                    node.parent = current;
                    queue.unshift(adjacent);
                }
            }
        }
        return graph;
    }
    function link(from, to) {
        return function(args) {
            return to(from(args));
        };
    }
    function wrapConversion(toModel, graph) {
        const path = [
            graph[toModel].parent,
            toModel
        ];
        let fn = conversions[graph[toModel].parent][toModel];
        let cur = graph[toModel].parent;
        while(graph[cur].parent){
            path.unshift(graph[cur].parent);
            fn = link(conversions[graph[cur].parent][cur], fn);
            cur = graph[cur].parent;
        }
        fn.conversion = path;
        return fn;
    }
    module.exports = function(fromModel) {
        const graph = deriveBFS(fromModel);
        const conversion = {
        };
        const models = Object.keys(graph);
        for(let len = models.length, i = 0; i < len; i++){
            const toModel = models[i];
            const node = graph[toModel];
            if (node.parent === null) continue;
            conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
    };
});
var load4 = __spack_require__.bind(void 0, function(module, exports) {
    const conversions = load2();
    const route = load3();
    const convert = {
    };
    const models = Object.keys(conversions);
    function wrapRaw(fn) {
        const wrappedFn = function(...args) {
            const arg0 = args[0];
            if (arg0 === undefined || arg0 === null) return arg0;
            if (arg0.length > 1) args = arg0;
            return fn(args);
        };
        // Preserve .conversion property if there is one
        if ('conversion' in fn) wrappedFn.conversion = fn.conversion;
        return wrappedFn;
    }
    function wrapRounded(fn) {
        const wrappedFn = function(...args) {
            const arg0 = args[0];
            if (arg0 === undefined || arg0 === null) return arg0;
            if (arg0.length > 1) args = arg0;
            const result = fn(args);
            // We're assuming the result is an array here.
            // see notice in conversions.js; don't use box types
            // in conversion functions.
            if (typeof result === 'object') for(let len = result.length, i = 0; i < len; i++)result[i] = Math.round(result[i]);
            return result;
        };
        // Preserve .conversion property if there is one
        if ('conversion' in fn) wrappedFn.conversion = fn.conversion;
        return wrappedFn;
    }
    models.forEach((fromModel)=>{
        convert[fromModel] = {
        };
        Object.defineProperty(convert[fromModel], 'channels', {
            value: conversions[fromModel].channels
        });
        Object.defineProperty(convert[fromModel], 'labels', {
            value: conversions[fromModel].labels
        });
        const routes = route(fromModel);
        const routeModels = Object.keys(routes);
        routeModels.forEach((toModel)=>{
            const fn = routes[toModel];
            convert[fromModel][toModel] = wrapRounded(fn);
            convert[fromModel][toModel].raw = wrapRaw(fn);
        });
    });
    module.exports = convert;
});
var load5 = __spack_require__.bind(void 0, function(module, exports) {
    'use strict';
    const wrapAnsi16 = (fn, offset)=>(...args)=>{
            const code = fn(...args);
            return `\u001B[${code + offset}m`;
        }
    ;
    const wrapAnsi256 = (fn, offset)=>(...args)=>{
            const code = fn(...args);
            return `\u001B[${38 + offset};5;${code}m`;
        }
    ;
    const wrapAnsi16m = (fn, offset)=>(...args)=>{
            const rgb = fn(...args);
            return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
        }
    ;
    const ansi2ansi = (n)=>n
    ;
    const rgb2rgb = (r, g, b)=>[
            r,
            g,
            b
        ]
    ;
    const setLazyProperty = (object, property, get)=>{
        Object.defineProperty(object, property, {
            get: ()=>{
                const value = get();
                Object.defineProperty(object, property, {
                    value,
                    enumerable: true,
                    configurable: true
                });
                return value;
            },
            enumerable: true,
            configurable: true
        });
    };
    /** @type {typeof import('color-convert')} */ let colorConvert;
    const makeDynamicStyles = (wrap, targetSpace, identity, isBackground)=>{
        if (colorConvert === undefined) colorConvert = load4();
        const offset = isBackground ? 10 : 0;
        const styles = {
        };
        for (const [sourceSpace, suite] of Object.entries(colorConvert)){
            const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
            if (sourceSpace === targetSpace) styles[name] = wrap(identity, offset);
            else if (typeof suite === 'object') styles[name] = wrap(suite[targetSpace], offset);
        }
        return styles;
    };
    function assembleStyles() {
        const codes = new Map();
        const styles = {
            modifier: {
                reset: [
                    0,
                    0
                ],
                // 21 isn't widely supported and 22 does the same thing
                bold: [
                    1,
                    22
                ],
                dim: [
                    2,
                    22
                ],
                italic: [
                    3,
                    23
                ],
                underline: [
                    4,
                    24
                ],
                inverse: [
                    7,
                    27
                ],
                hidden: [
                    8,
                    28
                ],
                strikethrough: [
                    9,
                    29
                ]
            },
            color: {
                black: [
                    30,
                    39
                ],
                red: [
                    31,
                    39
                ],
                green: [
                    32,
                    39
                ],
                yellow: [
                    33,
                    39
                ],
                blue: [
                    34,
                    39
                ],
                magenta: [
                    35,
                    39
                ],
                cyan: [
                    36,
                    39
                ],
                white: [
                    37,
                    39
                ],
                // Bright color
                blackBright: [
                    90,
                    39
                ],
                redBright: [
                    91,
                    39
                ],
                greenBright: [
                    92,
                    39
                ],
                yellowBright: [
                    93,
                    39
                ],
                blueBright: [
                    94,
                    39
                ],
                magentaBright: [
                    95,
                    39
                ],
                cyanBright: [
                    96,
                    39
                ],
                whiteBright: [
                    97,
                    39
                ]
            },
            bgColor: {
                bgBlack: [
                    40,
                    49
                ],
                bgRed: [
                    41,
                    49
                ],
                bgGreen: [
                    42,
                    49
                ],
                bgYellow: [
                    43,
                    49
                ],
                bgBlue: [
                    44,
                    49
                ],
                bgMagenta: [
                    45,
                    49
                ],
                bgCyan: [
                    46,
                    49
                ],
                bgWhite: [
                    47,
                    49
                ],
                // Bright color
                bgBlackBright: [
                    100,
                    49
                ],
                bgRedBright: [
                    101,
                    49
                ],
                bgGreenBright: [
                    102,
                    49
                ],
                bgYellowBright: [
                    103,
                    49
                ],
                bgBlueBright: [
                    104,
                    49
                ],
                bgMagentaBright: [
                    105,
                    49
                ],
                bgCyanBright: [
                    106,
                    49
                ],
                bgWhiteBright: [
                    107,
                    49
                ]
            }
        };
        // Alias bright black as gray (and grey)
        styles.color.gray = styles.color.blackBright;
        styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
        styles.color.grey = styles.color.blackBright;
        styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
        for (const [groupName, group] of Object.entries(styles)){
            for (const [styleName, style] of Object.entries(group)){
                styles[styleName] = {
                    open: `\u001B[${style[0]}m`,
                    close: `\u001B[${style[1]}m`
                };
                group[styleName] = styles[styleName];
                codes.set(style[0], style[1]);
            }
            Object.defineProperty(styles, groupName, {
                value: group,
                enumerable: false
            });
        }
        Object.defineProperty(styles, 'codes', {
            value: codes,
            enumerable: false
        });
        styles.color.close = '\x1b[39m';
        styles.bgColor.close = '\x1b[49m';
        setLazyProperty(styles.color, 'ansi', ()=>makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false)
        );
        setLazyProperty(styles.color, 'ansi256', ()=>makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false)
        );
        setLazyProperty(styles.color, 'ansi16m', ()=>makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false)
        );
        setLazyProperty(styles.bgColor, 'ansi', ()=>makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true)
        );
        setLazyProperty(styles.bgColor, 'ansi256', ()=>makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true)
        );
        setLazyProperty(styles.bgColor, 'ansi16m', ()=>makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true)
        );
        return styles;
    }
    // Make the export immutable
    Object.defineProperty(module, 'exports', {
        enumerable: true,
        get: assembleStyles
    });
});
var load6 = __spack_require__.bind(void 0, function(module, exports) {
    'use strict';
    module.exports = {
        stdout: false,
        stderr: false
    };
});
var load7 = __spack_require__.bind(void 0, function(module, exports) {
    'use strict';
    const stringReplaceAll = (string, substring, replacer)=>{
        let index = string.indexOf(substring);
        if (index === -1) return string;
        const substringLength = substring.length;
        let endIndex = 0;
        let returnValue = '';
        do {
            returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
            endIndex = index + substringLength;
            index = string.indexOf(substring, endIndex);
        }while (index !== -1)
        returnValue += string.substr(endIndex);
        return returnValue;
    };
    const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index)=>{
        let endIndex = 0;
        let returnValue = '';
        do {
            const gotCR = string[index - 1] === '\r';
            returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
            endIndex = index + 1;
            index = string.indexOf('\n', endIndex);
        }while (index !== -1)
        returnValue += string.substr(endIndex);
        return returnValue;
    };
    module.exports = {
        stringReplaceAll,
        stringEncaseCRLFWithFirstIndex
    };
});
var load8 = __spack_require__.bind(void 0, function(module, exports) {
    'use strict';
    const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    const ESCAPES = new Map([
        [
            'n',
            '\n'
        ],
        [
            'r',
            '\r'
        ],
        [
            't',
            '\t'
        ],
        [
            'b',
            '\b'
        ],
        [
            'f',
            '\f'
        ],
        [
            'v',
            '\v'
        ],
        [
            '0',
            '\x00'
        ],
        [
            '\\',
            '\\'
        ],
        [
            'e',
            '\x1b'
        ],
        [
            'a',
            '\x07'
        ]
    ]);
    function unescape(c) {
        const u = c[0] === 'u';
        const bracket = c[1] === '{';
        if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) return String.fromCharCode(parseInt(c.slice(1), 16));
        if (u && bracket) return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
        return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
        const results = [];
        const chunks = arguments_.trim().split(/\s*,\s*/g);
        let matches;
        for (const chunk of chunks){
            const number = Number(chunk);
            if (!Number.isNaN(number)) results.push(number);
            else if (matches = chunk.match(STRING_REGEX)) results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character)=>escape ? unescape(escape) : character
            ));
            else throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
        return results;
    }
    function parseStyle(style) {
        STYLE_REGEX.lastIndex = 0;
        const results = [];
        let matches;
        while((matches = STYLE_REGEX.exec(style)) !== null){
            const name = matches[1];
            if (matches[2]) {
                const args = parseArguments(name, matches[2]);
                results.push([
                    name
                ].concat(args));
            } else results.push([
                name
            ]);
        }
        return results;
    }
    function buildStyle(chalk, styles) {
        const enabled = {
        };
        for (const layer of styles)for (const style of layer.styles)enabled[style[0]] = layer.inverse ? null : style.slice(1);
        let current = chalk;
        for (const [styleName, styles1] of Object.entries(enabled)){
            if (!Array.isArray(styles1)) continue;
            if (!(styleName in current)) throw new Error(`Unknown Chalk style: ${styleName}`);
            current = styles1.length > 0 ? current[styleName](...styles1) : current[styleName];
        }
        return current;
    }
    module.exports = (chalk, temporary)=>{
        const styles = [];
        const chunks = [];
        let chunk = [];
        // eslint-disable-next-line max-params
        temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
            if (escapeCharacter) chunk.push(unescape(escapeCharacter));
            else if (style) {
                const string = chunk.join('');
                chunk = [];
                chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
                styles.push({
                    inverse,
                    styles: parseStyle(style)
                });
            } else if (close) {
                if (styles.length === 0) throw new Error('Found extraneous } in Chalk template literal');
                chunks.push(buildStyle(chalk, styles)(chunk.join('')));
                chunk = [];
                styles.pop();
            } else chunk.push(character);
        });
        chunks.push(chunk.join(''));
        if (styles.length > 0) {
            const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
            throw new Error(errMessage);
        }
        return chunks.join('');
    };
});
var load9 = __spack_require__.bind(void 0, function(module, exports) {
    'use strict';
    const ansiStyles = load5();
    const { stdout: stdoutColor , stderr: stderrColor  } = load6();
    const { stringReplaceAll , stringEncaseCRLFWithFirstIndex  } = load7();
    const { isArray  } = Array;
    // `supportsColor.level` → `ansiStyles.color[name]` mapping
    const levelMapping = [
        'ansi',
        'ansi',
        'ansi256',
        'ansi16m'
    ];
    const styles = Object.create(null);
    const applyOptions = (object, options = {
    })=>{
        if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) throw new Error('The `level` option should be an integer from 0 to 3');
        // Detect level if not set manually
        const colorLevel = stdoutColor ? stdoutColor.level : 0;
        object.level = options.level === undefined ? colorLevel : options.level;
    };
    class ChalkClass {
        constructor(options){
            // eslint-disable-next-line no-constructor-return
            return chalkFactory(options);
        }
    }
    const chalkFactory = (options)=>{
        const chalk = {
        };
        applyOptions(chalk, options);
        chalk.template = (...arguments_)=>chalkTag(chalk.template, ...arguments_)
        ;
        Object.setPrototypeOf(chalk, Chalk.prototype);
        Object.setPrototypeOf(chalk.template, chalk);
        chalk.template.constructor = ()=>{
            throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
        };
        chalk.template.Instance = ChalkClass;
        return chalk.template;
    };
    function Chalk(options) {
        return chalkFactory(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles))styles[styleName] = {
        get () {
            const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
            Object.defineProperty(this, styleName, {
                value: builder
            });
            return builder;
        }
    };
    styles.visible = {
        get () {
            const builder = createBuilder(this, this._styler, true);
            Object.defineProperty(this, 'visible', {
                value: builder
            });
            return builder;
        }
    };
    const usedModels = [
        'rgb',
        'hex',
        'keyword',
        'hsl',
        'hsv',
        'hwb',
        'ansi',
        'ansi256'
    ];
    for (const model of usedModels)styles[model] = {
        get () {
            const { level  } = this;
            return function(...arguments_) {
                const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
                return createBuilder(this, styler, this._isEmpty);
            };
        }
    };
    for (const model1 of usedModels){
        const bgModel = 'bg' + model1[0].toUpperCase() + model1.slice(1);
        styles[bgModel] = {
            get () {
                const { level  } = this;
                return function(...arguments_) {
                    const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model1](...arguments_), ansiStyles.bgColor.close, this._styler);
                    return createBuilder(this, styler, this._isEmpty);
                };
            }
        };
    }
    const proto = Object.defineProperties(()=>{
    }, {
        ...styles,
        level: {
            enumerable: true,
            get () {
                return this._generator.level;
            },
            set (level) {
                this._generator.level = level;
            }
        }
    });
    const createStyler = (open, close, parent)=>{
        let openAll;
        let closeAll;
        if (parent === undefined) {
            openAll = open;
            closeAll = close;
        } else {
            openAll = parent.openAll + open;
            closeAll = close + parent.closeAll;
        }
        return {
            open,
            close,
            openAll,
            closeAll,
            parent
        };
    };
    const createBuilder = (self, _styler, _isEmpty)=>{
        const builder = (...arguments_)=>{
            if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) // Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
            return applyStyle(builder, chalkTag(builder, ...arguments_));
            // Single argument is hot path, implicit coercion is faster than anything
            // eslint-disable-next-line no-implicit-coercion
            return applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
        };
        // We alter the prototype because we must return a function, but there is
        // no way to create a function with a different prototype
        Object.setPrototypeOf(builder, proto);
        builder._generator = self;
        builder._styler = _styler;
        builder._isEmpty = _isEmpty;
        return builder;
    };
    const applyStyle = (self, string)=>{
        if (self.level <= 0 || !string) return self._isEmpty ? '' : string;
        let styler = self._styler;
        if (styler === undefined) return string;
        const { openAll , closeAll  } = styler;
        if (string.indexOf('\x1b') !== -1) while(styler !== undefined){
            // Replace any instances already present with a re-opening code
            // otherwise only the part of the string until said closing code
            // will be colored, and the rest will simply be 'plain'.
            string = stringReplaceAll(string, styler.close, styler.open);
            styler = styler.parent;
        }
        // We can move both next actions out of loop, because remaining actions in loop won't have
        // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
        // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
        const lfIndex = string.indexOf('\n');
        if (lfIndex !== -1) string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
        return openAll + string + closeAll;
    };
    let template;
    const chalkTag = (chalk, ...strings)=>{
        const [firstString] = strings;
        if (!isArray(firstString) || !isArray(firstString.raw)) // If chalk() was called by itself or with a string,
        // return the string itself as a string.
        return strings.join(' ');
        const arguments_ = strings.slice(1);
        const parts = [
            firstString.raw[0]
        ];
        for(let i = 1; i < firstString.length; i++)parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
        if (template === undefined) template = load8();
        return template(chalk, parts.join(''));
    };
    Object.defineProperties(Chalk.prototype, styles);
    const chalk = Chalk(); // eslint-disable-line new-cap
    chalk.supportsColor = stdoutColor;
    chalk.stderr = Chalk({
        level: stderrColor ? stderrColor.level : 0
    }); // eslint-disable-line new-cap
    chalk.stderr.supportsColor = stderrColor;
    module.exports = chalk;
});
var load10 = __spack_require__.bind(void 0, function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = exports.cssColorNames = void 0;
    var cssColorNames = [
        'aliceblue',
        'antiquewhite',
        'aqua',
        'aquamarine',
        'azure',
        'beige',
        'bisque',
        'black',
        'blanchedalmond',
        'blue',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chartreuse',
        'chocolate',
        'coral',
        'cornflowerblue',
        'cornsilk',
        'crimson',
        'cyan',
        'darkblue',
        'darkcyan',
        'darkgoldenrod',
        'darkgray',
        'darkgreen',
        'darkgrey',
        'darkkhaki',
        'darkmagenta',
        'darkolivegreen',
        'darkorange',
        'darkorchid',
        'darkred',
        'darksalmon',
        'darkseagreen',
        'darkslateblue',
        'darkslategray',
        'darkslategrey',
        'darkturquoise',
        'darkviolet',
        'deeppink',
        'deepskyblue',
        'dimgray',
        'dimgrey',
        'dodgerblue',
        'firebrick',
        'floralwhite',
        'forestgreen',
        'fuchsia',
        'gainsboro',
        'ghostwhite',
        'goldenrod',
        'gold',
        'gray',
        'green',
        'greenyellow',
        'grey',
        'honeydew',
        'hotpink',
        'indianred',
        'indigo',
        'ivory',
        'khaki',
        'lavenderblush',
        'lavender',
        'lawngreen',
        'lemonchiffon',
        'lightblue',
        'lightcoral',
        'lightcyan',
        'lightgoldenrodyellow',
        'lightgray',
        'lightgreen',
        'lightgrey',
        'lightpink',
        'lightsalmon',
        'lightseagreen',
        'lightskyblue',
        'lightslategray',
        'lightslategrey',
        'lightsteelblue',
        'lightyellow',
        'lime',
        'limegreen',
        'linen',
        'magenta',
        'maroon',
        'mediumaquamarine',
        'mediumblue',
        'mediumorchid',
        'mediumpurple',
        'mediumseagreen',
        'mediumslateblue',
        'mediumspringgreen',
        'mediumturquoise',
        'mediumvioletred',
        'midnightblue',
        'mintcream',
        'mistyrose',
        'moccasin',
        'navajowhite',
        'navy',
        'oldlace',
        'olive',
        'olivedrab',
        'orange',
        'orangered',
        'orchid',
        'palegoldenrod',
        'palegreen',
        'paleturquoise',
        'palevioletred',
        'papayawhip',
        'peachpuff',
        'peru',
        'pink',
        'plum',
        'powderblue',
        'purple',
        'rebeccapurple',
        'red',
        'rosybrown',
        'royalblue',
        'saddlebrown',
        'salmon',
        'sandybrown',
        'seagreen',
        'seashell',
        'sienna',
        'silver',
        'skyblue',
        'slateblue',
        'slategray',
        'slategrey',
        'snow',
        'springgreen',
        'steelblue',
        'tan',
        'teal',
        'thistle',
        'tomato',
        'turquoise',
        'violet',
        'wheat',
        'white',
        'whitesmoke',
        'yellow',
        'yellowgreen', 
    ];
    exports.cssColorNames = cssColorNames;
    var _default = cssColorNames;
    exports.default = _default;
});
var load11 = __spack_require__.bind(void 0, function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.pickRandomArrayElement = pickRandomArrayElement;
    exports.getRandomNumberBetween = getRandomNumberBetween;
    function pickRandomArrayElement(array) {
        var randomIndex = getRandomNumberBetween(0, array.length);
        return array[randomIndex];
    }
    function getRandomNumberBetween(min, max, param) {
        var includeMax = param === void 0 ? false : param;
        if (min >= max) throw new Error('First parameter { min } must be less than second parameter { max }');
        var multiplier = max - min + (includeMax ? 1 : 0) + min;
        var random = Math.random() * multiplier;
        return Math.floor(random);
    }
});
var load12 = __spack_require__.bind(void 0, function(module, exports) {
    'use strict';
    const preserveCamelCase = (string, locale)=>{
        let isLastCharLower = false;
        let isLastCharUpper = false;
        let isLastLastCharUpper = false;
        for(let i = 0; i < string.length; i++){
            const character = string[i];
            if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
                string = string.slice(0, i) + '-' + string.slice(i);
                isLastCharLower = false;
                isLastLastCharUpper = isLastCharUpper;
                isLastCharUpper = true;
                i++;
            } else if (isLastCharUpper && isLastLastCharUpper && /[\p{Ll}]/u.test(character)) {
                string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
                isLastLastCharUpper = isLastCharUpper;
                isLastCharUpper = false;
                isLastCharLower = true;
            } else {
                isLastCharLower = character.toLocaleLowerCase(locale) === character && character.toLocaleUpperCase(locale) !== character;
                isLastLastCharUpper = isLastCharUpper;
                isLastCharUpper = character.toLocaleUpperCase(locale) === character && character.toLocaleLowerCase(locale) !== character;
            }
        }
        return string;
    };
    const preserveConsecutiveUppercase = (input)=>{
        return input.replace(/^[\p{Lu}](?![\p{Lu}])/gu, (m1)=>m1.toLowerCase()
        );
    };
    const postProcess = (input, options)=>{
        return input.replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1)=>p1.toLocaleUpperCase(options.locale)
        ).replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, (m)=>m.toLocaleUpperCase(options.locale)
        );
    };
    const camelCase = (input, options)=>{
        if (!(typeof input === 'string' || Array.isArray(input))) throw new TypeError('Expected the input to be `string | string[]`');
        options = {
            pascalCase: false,
            preserveConsecutiveUppercase: false,
            ...options
        };
        if (Array.isArray(input)) input = input.map((x)=>x.trim()
        ).filter((x)=>x.length
        ).join('-');
        else input = input.trim();
        if (input.length === 0) return '';
        if (input.length === 1) return options.pascalCase ? input.toLocaleUpperCase(options.locale) : input.toLocaleLowerCase(options.locale);
        const hasUpperCase = input !== input.toLocaleLowerCase(options.locale);
        if (hasUpperCase) input = preserveCamelCase(input, options.locale);
        input = input.replace(/^[_.\- ]+/, '');
        if (options.preserveConsecutiveUppercase) input = preserveConsecutiveUppercase(input);
        else input = input.toLocaleLowerCase();
        if (options.pascalCase) input = input.charAt(0).toLocaleUpperCase(options.locale) + input.slice(1);
        return postProcess(input, options);
    };
    module.exports = camelCase;
    // TODO: Remove this for the next major release
    module.exports.default = camelCase;
});
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pickRandomArrayElement", {
    enumerable: true,
    get: function() {
        return _utils.pickRandomArrayElement;
    }
});
Object.defineProperty(exports, "getRandomNumberBetween", {
    enumerable: true,
    get: function() {
        return _utils.getRandomNumberBetween;
    }
});
exports.default = exports.colorit = exports.$c = void 0;
var _colors = _interopRequireDefault(load());
var _chalk = _interopRequireDefault(load9());
var _colorNames = load10();
var _utils = load11();
var _camelcase = _interopRequireDefault(load12());
var Colorize = /*#__PURE__*/ function() {
    "use strict";
    function Colorize() {
        _classCallCheck(this, Colorize);
        this.chalk = new _chalk.default.Instance({
            level: 3
        });
    }
    _createClass(Colorize, [
        {
            key: "isTailwind",
            value: function isTailwind(name) {
                if (this.hasShade(name)) return true;
                var color = this.getColorName(name);
                return Object.keys(_colors.default).includes(color);
            }
        },
        {
            key: "isHex",
            value: function isHex(value) {
                return (value === null || value === void 0 ? void 0 : value.startsWith('#')) && [
                    3,
                    6,
                    8
                ].includes(value.slice(1).length);
            }
        },
        {
            key: "isNamedColor",
            value: function isNamedColor(name) {
                return _colorNames.cssColorNames.includes(name);
            }
        },
        {
            key: "getShade",
            value: function getShade(name) {
                var separator = '_';
                var found = name.split(separator).slice(-1);
                var shade = Number(found[0]);
                return shade;
            }
        },
        {
            key: "hasShade",
            value: function hasShade(color) {
                var shade = this.getShade(color);
                return !isNaN(shade);
            }
        },
        {
            key: "getColorName",
            value: function getColorName(name) {
                var separator = '_';
                if (this.hasShade(name)) {
                    var colorName = name.split(separator).slice(0, -1).join('_');
                    return (0, _camelcase).default(colorName);
                }
                return (0, _camelcase).default(name);
            }
        },
        {
            key: "colorize",
            value: function colorize(options, config) {
                var string = options.string;
                var color = options.color;
                var _shade;
                var shade = (_shade = options.shade) !== null && _shade !== void 0 ? _shade : 500;
                var _inverted;
                var inverted = (_inverted = config.inverted) !== null && _inverted !== void 0 ? _inverted : false;
                var _italic;
                var italic = (_italic = config.italic) !== null && _italic !== void 0 ? _italic : false;
                var _bold;
                var bold = (_bold = config.bold) !== null && _bold !== void 0 ? _bold : false;
                var _strikethrough;
                var strikethrough = (_strikethrough = config.strikethrough) !== null && _strikethrough !== void 0 ? _strikethrough : false;
                var _underline;
                var underline = (_underline = config.underline) !== null && _underline !== void 0 ? _underline : false;
                var _dim;
                var dim = (_dim = config.dim) !== null && _dim !== void 0 ? _dim : false;
                if (!string) throw new Error("Parameter {string} is required! Received ".concat(string));
                // is tailwind
                if (this.isTailwind(color)) {
                    var group = _colors.default[color];
                    var hex = group[shade];
                    var fn = this.chalk.hex(hex);
                    inverted && (fn = fn.inverse);
                    bold && (fn = fn.bold);
                    italic && (fn = fn.italic);
                    strikethrough && (fn = fn.strikethrough);
                    underline && (fn = fn.underline);
                    dim && (fn = fn.dim);
                    return fn(string);
                }
                // is named
                // console.log(this.isNamedColor(color), color);
                if (this.isNamedColor(color)) {
                    //   console.log(color);
                    var fn = this.chalk.keyword(color);
                    inverted && (fn = fn.inverse);
                    bold && (fn = fn.bold);
                    italic && (fn = fn.italic);
                    strikethrough && (fn = fn.strikethrough);
                    underline && (fn = fn.underline);
                    dim && (fn = fn.dim);
                    return fn(string);
                }
                // is hex
                if (this.isHex(color)) return this.chalk[inverted ? 'bgHex' : 'hex'](color)(string);
                //
                throw new Error('Color value does not match any that are accepted. Try (tailwind color name, css named color, hex code)');
            }
        },
        {
            key: "tailwind",
            value: function tailwind(param) {
                var shade = param.shade, color = param.color;
                var _this = this;
                return function(string, param) {
                    var cfg = param === void 0 ? {
                    } : param;
                    return _this.colorize({
                        color: color,
                        string: string,
                        shade: shade
                    }, cfg);
                };
            }
        },
        {
            key: "hex",
            value: function hex(color, string, param) {
                var cfg = param === void 0 ? {
                } : param;
                return this.hexColor(color)(string, cfg);
            }
        },
        {
            key: "hexColor",
            value: function hexColor(color) {
                var _this = this;
                return function(string, param) {
                    var cfg = param === void 0 ? {
                    } : param;
                    return _this.colorize({
                        color: color,
                        string: string
                    }, cfg);
                };
            }
        },
        {
            key: "css",
            value: function css(color) {
                var _this = this;
                return function(string, param) {
                    var cfg = param === void 0 ? {
                    } : param;
                    return _this.colorize({
                        color: color,
                        string: string
                    }, cfg);
                };
            }
        },
        {
            key: "random",
            value: function random(string, param) {
                var cfg = param === void 0 ? {
                } : param;
                var picks = [
                    'blueGray',
                    'coolGray',
                    'gray',
                    'trueGray',
                    'warmGray',
                    'red',
                    'orange',
                    'amber',
                    'yellow',
                    'lime',
                    'green',
                    'emerald',
                    'teal',
                    'cyan',
                    'sky',
                    'blue',
                    'indigo',
                    'violet',
                    'purple',
                    'fuschia',
                    'pink',
                    'rose', 
                ];
                var pick = (0, _utils).pickRandomArrayElement(picks);
                return this.colorize({
                    color: pick,
                    string: string
                }, cfg);
            }
        }
    ]);
    return Colorize;
}();
var instance = new Colorize();
var colorit = new Proxy(instance, {
    get: function(target, prop) {
        if (prop === 'chalk') return target.chalk;
        if (target.chalk[prop]) return target.chalk[prop];
        if (prop === 'colorize') return target.colorize;
        if (prop === 'random') return target.random;
        if (prop === 'hex') return target.hex;
        if (target.isTailwind(prop)) {
            var shade = target.getShade(prop);
            var name = target.getColorName(prop);
            return target.tailwind({
                color: name,
                shade: shade || undefined
            });
        }
        if (target.isNamedColor(prop)) return target.css(prop);
        if (target.isHex(prop)) return target.hexColor(prop);
        return target[prop];
    }
});
exports.colorit = colorit;
var $c = colorit;
exports.$c = $c;
var _default = $c;
exports.default = _default;
