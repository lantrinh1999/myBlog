<!DOCTYPE html>

<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>My server side rendered app</title>
        <link rel="stylesheet" href="css/all.css">
        <script defer src="{{ mix('js/app-client.js') }}"></script>
    </head>

    <body data-spy="scroll" data-target="#navbarRyan" data-offset="100">
        {!! Ssr::entry('js/app-server.js')->fallback('<div id="app"></div>')->render() !!}

    </body>

</html>
