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
            boxShadow: (theme) => ({
                'underprimary': theme('colors.gray.900') + ' 0px -0.166667em 0px 0px inset, ' + theme('colors.primary.800') + ' 0px -0.333333em 0px 0px inset',
                'underpurple': theme('colors.gray.900') + ' 0px -0.166667em 0px 0px inset, ' + theme('colors.purple.800') + ' 0px -0.333333em 0px 0px inset',
            }),
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
