<!DOCTYPE html>
<html lang="es" class="hydrated">

<head>
    <base href="/" />
    <meta http-equiv="Content-Type" content="charset=utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#000000">
    <title>Loole</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/style_loole.css">

    <script src="https://sdk.mercadopago.com/js/v2">
    </script>
    @include('app.icon')



    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>

<body class="" id="body_element">
    <div id="appCapsule">

        <div class="error-page">
            <div class="icon-box text-danger">
                <ion-icon name="alert-circle" role="img" class="md hydrated" aria-label="alert circle"></ion-icon>
            </div>
            <h1 class="title">Se produjo un error al procesar su pago</h1>
        

            <div class="fixed-footer">
                <div class="row">
                   
                    <div class="col-6">
                        <a href="/Home" class="btn btn-primary btn-lg btn-block">Volver al home</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</body>

</html>


<!-- ============== Js Files ==============  -->
<!-- Bootstrap -->
<script src="assets/js/lib/bootstrap.min.js"></script>
<!-- Ionicons -->
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<!-- Splide -->
<script src="assets/js/plugins/splide/splide.min.js"></script>
<!-- ProgressBar js -->
<script src="assets/js/plugins/progressbar-js/progressbar.min.js"></script>
<!-- Base Js File -->
<script src="assets/js/base.js"></script>