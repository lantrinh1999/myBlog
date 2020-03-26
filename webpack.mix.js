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
    .js('resources/js/app-meta.js', 'public/js')
    .js([
        // 'public/client/js/jquery-3.2.1.min.js',
        'public/client/js/jquery-migrate-3.0.0.min.js',
        // 'public/client/plugin/bootstrap/js/popper.min.js',
        'public/client/plugin/bootstrap/js/bootstrap.min.js',
        'public/client/plugin/isotope/isotope.pkgd.min.js',
        'public/client/plugin/owl-carousel/js/owl.carousel.min.js',
        'public/client/plugin/magnific/jquery.magnific-popup.min.js',
        'public/client/js/custom.js'
    ], 'public/js/all.js')
    .styles([
        // 'resources/css/bootstrap.css',
        'public/client/css/color/color-7.css',
        'public/client/plugin/bootstrap/css/bootstrap.min.css',
        'public/client/plugin/font-awesome/css/fontawesome-all.min.css',
        'public/client/plugin/themify-icons/themify-icons.css',
        'resources/css/styles.css',

    ], 'public/css/all.css');
