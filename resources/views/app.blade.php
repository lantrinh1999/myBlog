<!DOCTYPE html>
<html>

    <head>
        {!! ssr('js/app-meta.js')->render() !!}
        <link rel="stylesheet" href="{{ mix('css/all.css') }}">
        <script defer src="{{ mix('js/app-client.js') }}">
        </script>
        <style>
            .navbar-nav {
                display: -webkit-box !important;

            }

            .navbar-nav li {
                margin: 10px 6px !important;
            }

            @media (max-width: 991px) {
                .header-nav {
                    top: 0;
                    padding: 5px 15px !important;
                }

                .header-nav.fixed-header {
                    padding: 5px 15px !important;
                }
            }

        </style>
    </head>

    <body>
        <div id="app">
            <!------>
            {!! str_replace(" " . " ", " " ,ssr(mix('js/app-server.js'))->fallback('')->render()) !!}
            <!------>
        </div>
        {{-- <script src="client/js/jquery-3.2.1.min.js"></script>
        <script src="client/plugin/bootstrap/js/popper.min.js"></script>
        <script src="client/js/jquery-migrate-3.0.0.min.js"></script>

        <script src="client/plugin/bootstrap/js/bootstrap.min.js"></script>
        <script src="client/plugin/isotope/isotope.pkgd.min.js"></script>
        <script src="client/plugin/owl-carousel/js/owl.carousel.min.js"></script>
        <script src="client/plugin/magnific/jquery.magnific-popup.min.js"></script>
        <script src="client/js/custom.js"></script> --}}
    </body>

</html>
