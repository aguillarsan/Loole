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
    <div class="appHeader ">
        <div class="left">
            <a href="/Home" class="headerButton goBack">
                <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
                </ion-icon>
            </a>
        </div>
        <div class="pageTitle">Detalle de la compra</div>

    </div>
    <div id="appCapsule">



        <!-- Discount Action Sheet -->
        <div id="content_pruchase">

            <!-- * Discount Action Sheet -->

            <div class="section mt-2 mb-2">
                <div class="card">
                    <ul class="listview flush transparent simple-listview">
                        <li class="text-muted">Looler <span class="text-black">@ {{$post->user->username}}</span></li>
                        <li class="text-muted">Contenido <span class="text-black">
                                {{$images}}
                                <ion-icon name="image-outline" role="img" style="font-size:18px" class="md hydrated"
                                    aria-label="people outline">

                                </ion-icon>
                                {{$videos}}
                                <ion-icon name="videocam-outline" role="img" style="font-size:18px" class="md hydrated"
                                    aria-label="bookmark outline">

                                </ion-icon>
                            </span></li>

                        <li class="text-muted">Total<span class="text-primary font-weight-bold" id="valor_total"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="section mb-2">
                <div class="cho-container">
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

<script>
    // Agrega credenciales de SDK
    const mp = new MercadoPago("APP_USR-b3aa0575-d407-49eb-9839-69f83c3abe84", {
        locale: 'es-AR'
    });

    // Inicializa el checkout
    mp.checkout({
        preference: {
            id: '{{$preference->id}}',
        },

        render: {
            container: '.cho-container', // Indica el nombre de la clase donde se mostrará el botón de pago
            label: 'Pagar', // Cambia el texto del botón de pago (opcional)
        },
        theme: {
            elementsColor: '#FC318B',
            headerColor: '#FC318B',
        }
    });
</script>
<script type="text/javascript">


    const value = '{{$post->price}}';


    if (value % 1 == 0) {

        var valorFinal = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        document.getElementById("valor_total").innerHTML = 'CLP' + ' ' + '$' + ' ' + valorFinal

    } else {
        let val = (value / 1).toFixed(2).replace('.', ',')
        var valorFinal = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        document.getElementById("valor_total").innerHTML = 'CLP' + ' ' + '$' + ' ' + valorFinal
    }





</script>