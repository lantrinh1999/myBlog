const mix = require('laravel-mix');

mix.version().webpackConfig({
    output: {
        chunkFilename: '[name].[hash].js'
    }
})
if (mix.inProduction()) {
    mix.version().webpackConfig({
        output: {
            chunkFilename: '[name].[hash].js'
        }
    })
}

mix.js('resources/js/app-client.js', 'public/js')
    .js('resources/js/app-server.js', 'public/js')
    .js('resources/js/app-meta.js', 'public/js')
    // .js([
    //     'public/client/js/jquery-3.2.1.min.js',
    //     'public/client/js/jquery-migrate-3.0.0.min.js',
    //     'public/client/plugin/bootstrap/js/popper.min.js',
    //     'public/client/plugin/bootstrap/js/bootstrap.min.js',
    //     'public/client/plugin/isotope/isotope.pkgd.min.js',
    //     'public/client/plugin/owl-carousel/js/owl.carousel.min.js',
    //     'public/client/plugin/magnific/jquery.magnific-popup.min.js',
    //     'public/client/js/custom.js'
    // ], 'public/js/all.js')
    .styles([
        'https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,400i,500,500i,700,700i|Space+Mono:400,400i,700,700i&display=swap&subset=vietnamese',
        'public/client/css/color/color-7.css',
        'public/client/plugin/bootstrap/css/bootstrap.min.css',
        'public/client/plugin/font-awesome/css/fontawesome-all.min.css',
        'public/client/plugin/themify-icons/themify-icons.css',
        'resources/css/styles.css',
        'public/client/custom.css',

    ], 'public/css/all.css');
