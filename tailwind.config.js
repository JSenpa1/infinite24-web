import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import textShadowPlugin from '@designbycode/tailwindcss-text-shadow';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'dark-red': '#780000',
                'light-red': '#C1121F',
                'cream': '#FDF0D5',
                'black': '#292929',
                'white': '#FAFAFA',
                'dark-blue': '#003049',
                'light-blue': '#669BBC',
                'dark': '#000000',
            },
            backgroundImage: {
                'grid-hero': "url('/public/assets/grid.svg')",
              }
        },
    },

    plugins: [
        forms,
        textShadowPlugin({
            shadowColor: 'rgba(0, 0, 0, 0.95)',
            shadowBlur: '0px',
            shadowOffsetX: '4px',
            shadowOffsetY: '3px',
        }),
    ],
};
