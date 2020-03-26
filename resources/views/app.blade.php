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
                margin: 10px 4px !important;
            }

        </style>
    </head>

    <body>
        <div id="app">
            <!------>
            {!! str_replace(" " . " ", " " ,ssr('js/app-server.js')->fallback('')->render()) !!}
            <!------>
        </div>
        <script src="client/js/jquery-3.2.1.min.js"></script>
        <script src="client/plugin/bootstrap/js/popper.min.js"></script>
        <script src="{{ ('js/all.js') }}"></script>
    </body>

</html>
