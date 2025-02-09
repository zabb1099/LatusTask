const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');

mix.vue();

mix.sass('resources/sass/app.scss', 'public/css').options({
    processCssUrls: false,
    postCss: [
        require("tailwindcss")('tailwind.config.js')
    ]
});

mix.css('resources/css/app.css', 'public/css').options({
    postCss: [
        require("tailwindcss")('tailwind.config.js')
    ]
});
