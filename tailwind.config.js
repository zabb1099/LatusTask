const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/@bridgewaterfinancegroup/bfg-vue-components/components/**/*.vue"
    ],
    theme: {
        colors: {
            'primary': '#063357',
            'success': '#068383',
            'red': '#81032E',
            'pink': '#DAA3CA',
            'green': '#00A6A7',
            'blue': '#0F8DC0',
            'white': colors.white,
            'neutral': colors.neutral,
            'transparent': colors.transparent,
            'slate': colors.slate,
            current: 'currentColor',
        },
        extend: {
            colors: {
                'transfer-btn': '#00609a',
                'next-btn': '#77b20b',
                'dead-btn': '#fa551b',
                'secured-btn': '',
                'highlight': '#6664A6',
                'warning-background': '#F1B749',
                'warning-text': '#C98505',
                'error': '#B12857',
                'light-green': '#79CCC8',
                'light-blue': {
                    'DEFAULT': '#f1f8f9',
                    '50': '#f1f8f9',
                    '100': '#e9f3f5',
                    '200': '#cee7e9',
                    '300': '#a3d3d6',
                    '400': '#72bcbe',
                    '500': '#50a4a7',
                    '600': '#3d878c',
                    '700': '#326d72',
                    '800': '#2d5c5f',
                    '900': '#294d51',
                },
                'grey': '#777',
                'green-dark': '#068383',
                'warning-background-dark': '#C98505',
                'error-dark': '#81032E',
                'notice-light': '#ffffff',
                'notice-dark': '#0F8DC0',
                'notice-warning-light': '#FFF1DA',
                'notice-warning-dark': '#9E7D4A',
                'red-tw': '#FF0000',
                'blue-tw': '#0000FF',
                'lighter-teal': '#c3e2e8',
                'light-teal': '#00a6a7',
                'dark-teal': '#068383',
                'slate-blue': '#6664a6',
                'plum': '#a5598f',
                'light-orchid': '#daa3ca',
                'medium-orchid': '#8b3e8c',
                'mustard': '#f1b749',
                'dark-mustard': '#c98505',
                'wine': '#b12857',
                'dark-wine': '#81032e',
                'navy': '#063357',
                'disabled-teal': '#78cfd0',
                'disabled-navy': '#7b96a8',
                'dark-grey': '#777777'
            },
            fontSize: {
                'xs-8': '0.5rem', // 8px
                'xs-10': '0.625rem', // 10px
                'xs': '.75rem', // 12px
                'sm': '.875rem', // 14px
                'base': '1rem', // 16px
                'lg': '1.125rem', // 18px
                'xl': '1.25rem', // 20px
                '2xl': '1.5rem', // 24px
                '3xl': '1.875rem', //30px
                '4xl': '2.25rem', // 36px
                '5xl': '3rem', // 48px
                '6xl': '4rem', // 60px
            }
        }
    },
    plugins: [],
}


