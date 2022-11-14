const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': {  DEFAULT: '#0068DF',  '50': '#98C8FF',  '100': '#83BDFF',  '200': '#5AA7FF',  '300': '#3291FF',  '400': '#097CFF',  '500': '#1c86ff    ',  '600': '#0068df',  '700': '#00346F',  '800': '#001A37',  '900': '#000000'},
                'slate': {
                    1000: '#0b1120',
                }
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
