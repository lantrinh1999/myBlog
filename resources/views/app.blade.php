<html>

    <head>
        <title>My server side rendered app</title>
        <script defer src="{{ mix('js/app-client.js') }}"></script>
    </head>

    <body>
        <div id="app">
            {!! ssr('js/app-server.js')->fallback('')->render() !!}
        </div>

    </body>

</html>
