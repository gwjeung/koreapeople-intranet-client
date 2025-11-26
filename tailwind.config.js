import scrollbarHide from 'tailwind-scrollbar-hide';
import { withTV } from 'tailwind-variants/transformer';

/** @type {import('tailwindcss').Config} */

const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const zIndex0_9999 = { ...Array.from(Array(10000)).map((_, i) => `${i}`) };

const pxToRem = (px, base = 16) => `${px / base}rem`;
const rem1000 = Array.from({ length: 1001 }, (_, px) => px).reduce((acc, px) => {
  acc[px / 4] = pxToRem(px);
  return acc;
}, {});

export default withTV({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@korea-senior/koreapeople-components/dist/*.{js,cjs}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard Variable', 'sans-serif'],
      },
      fontSize: {
        '11_13': [pxToRem(11), { lineHeight: pxToRem(13) }],
        '11_16': [pxToRem(11), { lineHeight: pxToRem(16) }],
        '12_14': [pxToRem(12), { lineHeight: pxToRem(14) }],
        '13_16': [pxToRem(13), { lineHeight: pxToRem(16) }],
        '13_20': [pxToRem(13), { lineHeight: pxToRem(20) }],
        '14_17': [pxToRem(14), { lineHeight: pxToRem(17) }],
        '14_18': [pxToRem(14), { lineHeight: pxToRem(18) }],
        '14_21': [pxToRem(14), { lineHeight: pxToRem(21) }],
        '15_21': [pxToRem(15), { lineHeight: pxToRem(21) }],
        '15_23': [pxToRem(15), { lineHeight: pxToRem(23) }],
        '15_24': [pxToRem(15), { lineHeight: pxToRem(24) }],
        '16_19': [pxToRem(16), { lineHeight: pxToRem(19) }],
        '16_24': [pxToRem(16), { lineHeight: pxToRem(24) }],
        '18_21': [pxToRem(18), { lineHeight: pxToRem(21) }],
        '18_28': [pxToRem(18), { lineHeight: pxToRem(28) }],
        '20_24': [pxToRem(20), { lineHeight: pxToRem(24) }],
        '20_28': [pxToRem(20), { lineHeight: pxToRem(28) }],
        '22_22': [pxToRem(22), { lineHeight: pxToRem(22) }],
        '24_29': [pxToRem(24), { lineHeight: pxToRem(29) }],
        '30_38': [pxToRem(30), { lineHeight: pxToRem(38) }],
        '35_42': [pxToRem(35), { lineHeight: pxToRem(42) }],
        '40_48': [pxToRem(40), { lineHeight: pxToRem(48) }],
      },
      fontWeight: {
        parent: 'inherit',
      },
      spacing: {
        ...rem1000,
      },
      width: {
        75: pxToRem(300),
        309: pxToRem(1236),
        319: pxToRem(1276),
        364: pxToRem(1456),
      },
      minHeight: {
        inherit: 'inherit',
        ...rem1000,
      },
      minWidth: {
        inherit: 'inherit',
        ...rem1000,
        309: pxToRem(1236),
        319: pxToRem(1276),
        lg: '1280px',
        xl: '1366px',
        '2xl': '1440px',
        '3xl': '1536px',
        mobile: '769px',
        desktop: '1920px',
      },
      maxWidth: {
        ...rem1000,
      },
      maxHeight: {
        ...rem1000,
        500: pxToRem(2000)
      },
      lineHeight: px0_100,
      zIndex: {
        ...zIndex0_9999,
        10000: '10000',
        100001: '100001',
      },
      borderWidth: {
        0.77: '0.77px',
        6: '6px',
      },
      borderRadius: {
        ...rem1000,
      },
      boxShadow: {
        // x-y-blur-spread
        '0-3-8-0': '0px 3px 8px 0px #0000001f',
        '0-2-6-0': '0px 2px 6px 0px #191a2729',
        '0-0-10-3': '0px 0px 10px 3px #0000000d',
        '0-1-10-0': '0px 1px 10px 0px #18185138',
      },
      content: {
        contents: '""',
      },
      colors: {
        gray: {
          25: '#fafafa',
          40: '#f0f0f0',
          50: '#e2e2e2',
          100: '#cacaca',
          200: '#b2b2b2',
          300: '#9a9a9a',
          400: '#818181',
          500: '#696969',
          600: '#515151',
          700: '#393939',
          800: '#212121',
          900: '#161616',
        },
        'blue-gray': {
          25: '#fafaff',
          50: '#f0f0f6',
          100: '#e1e1e7',
          200: '#d1d1d9',
          300: '#c1c1ca',
          400: '#a7a7b1',
          500: '#8d8d99',
          600: '#727280',
          700: '#585868',
          800: '#393a48',
          900: '#191a27',
        },
        primary: {
          50: '#fbe8e6',
          100: '#ffcbba',
          200: '#ffa98e',
          300: '#ff8661',
          400: '#ff6c3e',
          500: '#ff501b',
          600: '#f44a17',
          700: '#e64311',
          800: '#d83c0d',
          900: '#bf2e03',
        },
        secondary: {
          50: '#e4f3ff',
          100: '#bde0ff',
          200: '#91ceff',
          300: '#60baff',
          400: '#39aaff',
          500: '#1e9aff',
          600: '#2c8bff',
          700: '#3376ff',
          800: '#3764ec',
          900: '#3a41cc',
          950: '#2e339c',
        },
        tertiary: {
          50: '#efebff',
          100: '#d3ceff',
          200: '#afa3ff',
          300: '#9385ff',
          400: '#705cff',
          500: '#5533ff',
          600: '#4725da',
          700: '#3b1eb3',
          800: '#331d90',
          900: '#2b1773',
        },
        red: {
          50: '#ffebee',
          100: '#ffc8c8',
          200: '#ffa4a2',
          300: '#ff817c',
          400: '#ff5e56',
          500: '#ff3b30',
          600: '#f11509',
          700: '#e00c00',
          800: '#d10b00',
          900: '#c2da00',
          950: '#6bd600',
        },
        yellow: {
          50: '#fff8e0',
          100: '#ffedb0',
          200: '#ffe17c',
          300: '#ffd743',
          400: '#ffcc00',
          500: '#ffc300',
          600: '#ffb500',
          700: '#ffa100',
          800: '#ff8f00',
          900: '#ff6d00',
          950: '#8a3b00',
        },
        green: {
          50: '#ebf7e8',
          100: '#c0ebc5',
          200: '#96dea0',
          300: '#64d278',
          400: '#34c759',
          500: '#00bc37',
          600: '#00ad2d',
          700: '#009a2d',
          800: '#0d8911',
          900: '#006900',
          950: '#003d00',
        },
        blue: {
          50: '#e3f4ff',
          100: '#bbe2ff',
          200: '#8dd0ff',
          300: '#56bdff',
          400: '#1dadff',
          500: '#009eff',
          600: '#008eff',
          700: '#007aff',
          800: '#1269ec',
          900: '#1f47cd',
          950: '#163392',
        },
      },
      screens: {
        lg: '1280px',
        xl: '1366px',
        '2xl': '1440px',
        '3xl': '1536px',
        mobile: '769px',
        desktop: '1920px',
        'under-mobile': { max: '768px' },
        'under-desktop': { max: '1919px' },
      },
      keyframes: {
        shadowPulse: {
          '33%': {
            background: '#E1E1E1',
            boxShadow: '-24px 0 #2962FF, 24px 0 #E1E1E1',
          },
          '66%': {
            background: '#2962FF',
            boxShadow: '-24px 0 #E1E1E1, 24px 0 #E1E1E1',
          },
          '100%': {
            background: '#E1E1E1',
            boxShadow: '-24px 0 #E1E1E1, 24px 0 #2962FF',
          },
        },
      },
      animation: {
        'shadow-pulse': 'shadowPulse 2s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    scrollbarHide,
    ({ addUtilities, matchUtilities, theme }) => {
      matchUtilities(
        {
          aspect: (value) => ({
            '@supports (aspect-ratio: 1 / 1)': {
              aspectRatio: value,
            },
            '@supports not (aspect-ratio: 1 / 1)': {
              '&::before': {
                content: '""',
                float: 'left',
                paddingTop: `calc(100% / (${value}))`,
              },
              '&::after': {
                clear: 'left',
                content: '""',
                display: 'block',
              },
            },
          }),
        },
        { values: theme('aspectRatio') },
      );
      const newUtilities = {
        '.display-unset': {
          display: 'unset',
        },
      };
      addUtilities(newUtilities);
    },
  ],
  corePlugins: {
    aspectRatio: false,
  },
});
