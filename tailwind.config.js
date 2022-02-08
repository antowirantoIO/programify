const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xxs: ['0.65rem', { lineHeight: '1.1rem' }]
            },
            // maxWidth : {
            //     '7xl': '85rem',
            // },
            colors: {
                'primary': {
                    '50': '#f2f8ff', 
                    '100': '#e6f0ff', 
                    '200': '#bfdaff', 
                    '300': '#99c3ff', 
                    '400': '#4d96ff', 
                    '500': '#0069ff', 
                    '600': '#005fe6', 
                    '700': '#004fbf', 
                    '800': '#003f99', 
                    '900': '#00337d'
                }
            }
        },
    },

    plugins: [
        require('@tailwindcss/forms'), 
        require('@tailwindcss/typography')
    ],
};
