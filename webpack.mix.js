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

mix.js('resources/js/app-client.js', 'public/js')
    .js('resources/js/app-server.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .styles([
        // 'resources/css/bootstrap.css',
        'public/client/css/color/color-7.css',
        'public/client/plugin/bootstrap/css/bootstrap.min.css',
        'public/client/plugin/font-awesome/css/fontawesome-all.min.css',
        'public/client/plugin/themify-icons/themify-icons.css',
        'resources/css/styles.css',

    ], 'public/css/all.css');
