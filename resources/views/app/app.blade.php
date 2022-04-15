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
   

    @include('app.icon')
    
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>

<body class="" id="body_element">
    <div id="app">
        @auth
          @if(Auth::user()->role_id== 2 || Auth::user()->role_id== 3 )
          <App ruta ="{{route('basepath')}}" :user='@json(auth()->user()->load(["country","gender"]))'></App>
          @elseif(Auth::user()->role_id== 1)
          <Admin ruta ="{{route('basepath')}}" :usuario='@json(auth()->user())'></App>
          @endif  
          

         @else
         <Auth ruta ="{{route('basepath')}}"></Auth>
         @endauth
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
