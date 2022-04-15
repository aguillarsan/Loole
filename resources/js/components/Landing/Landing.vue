<template>
    <div>
        <div class="appHeader no-border animated fadeIn scrolled is-active no-box-shadow balck-back-loole no-boreder-bottom"
            style="z-index: 9999">
            <div class="left">
                <img src="/images/landing/loole-logo.svg" alt="image" class="form-image"
                    style="max-width: 100px; width: 100%" />

            </div>
           
            <div class="right" id="btn_rigth_w_m_l">
                <router-link to="/Login" class="headerButton text-primary">
                    <div class="white">Ingresar</div>

                </router-link>
                <router-link to="/SingUp" class="headerButton text-primary">
                    <button class="btn btn-primary rounded">Ser Looler</button>
                </router-link>
                <router-link to="/Register" class="headerButton text-primary">
                    <button class="btn btn-secondary rounded">Ser Fan</button>

                </router-link>
               
            </div>
            <div class="right" id="burger_menu_landing" style="display: none">

                <a href="#" class="headerButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <ion-icon name="menu-outline" role="img" style="color:white" class="md hydrated"
                        aria-label="menu outline"></ion-icon>
                </a>
                <div class="dropdown-menu dropdown-menu-end" style="">
                    <router-link to="/Login">
                        <a class="dropdown-item" href="#">Ingresar</a>
                    </router-link>
                    <router-link to="/SingUp">
                        <a class="dropdown-item" href="#">Comenzar</a>
                    </router-link>
                    <router-link to="/Landing">
                        <a class="dropdown-item" href="#">Be a looler</a>
                    </router-link>
                    <a class="dropdown-item" href="#">Suscriptor</a>
                    <a class="dropdown-item" href="#">Ayuda</a>
                </div>
            </div>
        </div>

        <section class="lo-hero-container-main">
            <div class="lo-hero-container lo-h-space-between">
                <div class="lo-hero-info-wrap">
                    <h1 class="lo-hero-title">Tu contenido, <br>
                        Tu tiempo, <br>
                        Tu dinero.</h1>
                    <p class="lo-parragraph" > Bienvenido a Loole, una plataforma exclusiva para <span style="font-weight: 600px;">creadores de contenido.</span>  </p>
                    <router-link to="/SingUp">
                        <button class="lo-primary-button">Convertirme en Looler</button>
                    </router-link>

                </div>

                <img class="lo-login-phone-img" src="/images/landing/login-phone.png" alt="">
            </div>
        </section>
        <section class="lo-howork-container-main">
            <div class="lo-howork-container">
                <h2 class="lo-howork-title" style="text-align: center;">¿Cómo funciona?</h2>
                <div class="lo-howrok-steps-container">

                    <div class="lo-howork-step">
                        <img class="lo-howork-step-img" src="/images/landing/lo-account.svg" alt="">
                        <h4 class="lo-howork-step-title">Crea tu cuenta</h4>
                        <p class="lo-howork-step-parragraph">Solo tienes que completar algunos detos necesarios.</p>
                    </div>

                    <div class="lo-howork-step">
                        <img class="lo-howork-step-img" src="/images/landing/lo-post.svg" alt="">
                        <h4 class="lo-howork-step-title">Publica tu contenido</h4>
                        <p class="lo-howork-step-parragraph">Selecciona tus mejores fotos y videos, y agregales el
                            valor.</p>
                    </div>

                    <div class="lo-howork-step">
                        <img class="lo-howork-step-img" src="/images/landing/lo-collection.svg" alt="">
                        <h4 class="lo-howork-step-title">Encanta a tus seguidores</h4>
                        <p class="lo-howork-step-parragraph">Tus followers comenzarán a comprar tu contenido</p>
                    </div>

                    <div class="lo-howork-step">
                        <img class="lo-howork-step-img" src="/images/landing/lo-money.svg" alt="">
                        <h4 class="lo-howork-step-title">¡Retira tu dinero!</h4>
                        <p class="lo-howork-step-parragraph">Solo ingresas donde quieres que te lo enviemos y listo.</p>
                    </div>

                </div>
            </div>
        </section>
        <section class="lo-section-container-main" style="margin-bottom: 0px;">
            <div class="lo-section-container lo-h-space-between">
                <img class="lo-section1-img" src="/images/landing/movements.svg" alt="">
                <div class="lo-section-info1-container">
                    <h2 class="lo-howork-title">Controla tu dinero</h2>
                    <p class="lo-section-parragraph">En loole® tu dinero siempre estará protegido y disponible para
                        cuando quieras sacarlo. Contamos con diferentes métodos para retirar tu dinero, elige el que más
                        te acomode.</p>
                    <button class="lo-primary-button">¿Cuánto son los límites de retiro?</button>
                </div>
            </div>
        </section>
        <section class="lo-section-container-main" style="padding-top: 184px; padding-bottom: 184px;">
            <div class="lo-section-container lo-h-space-between">
                <img class="lo-section2-img" src="/images/landing/iPhone.png" alt="">
                <div class="lo-section-info2-container">
                    <h2 class="lo-howork-title">Lo hacemos simple</h2>
                    <p class="lo-section-parragraph">Nos preocupamos de que dedicarse a esto sea lo más fácil posible,
                        es por eso que contamos con una interfaz sencilla e intuitiva para que puedas publicar tu
                        contenido y ver el de los demás de una forma más sencilla.</p>
                    <router-link to="/SingUp">
                        <button class="lo-primary-button">Crear una cuenta Looler®</button>
                    </router-link>
                </div>
            </div>
        </section>
        <!-- <section class="lo-cotizador-container-main">
            <div class="lo-cotizador-container">
                <h2 class="lo-howork-title" style="text-align: center;">Los números hablan solos</h2>
                <p class="lo-section-parragraph" style="text-align: center;">Ingresa el número de seguidores que tienes
                </p>
                <img src="/images/landing/cotizador.png" alt="" style="width: 60%;">
                <p class="lo-section-parragraph" style="text-align: center; line-height: 40px;">Tus ganancias rondarían
                    entre <br>
                    <span class="lo-cotizador-mount">7.500 y 35.000 USD</span> por contenido publicado
                </p>
                <p class="lo-cotizador-legal">*El resultado lo basamos entre el 1% y 5% de tus suscriptores que compren
                    contenido, con un valor de 5 USD en promedio por publicación. No incluye el costo por el servicio de
                    Loole®.</p>
                <router-link to="/SingUp">
                    <button class="lo-primary-button">Quiero ser Looler®</button>
                </router-link>
            </div>
        </section> -->
        <section class="lo-footer-container-main">
            <div class="lo-footer-container">
                <img class="lo-footer-logo-loole" src="/images/landing/loole-logo.svg" alt="">
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        props: ["usuario"],
        created: function () {
            document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;"

        },
        computed: {
            currentRoute() {
                return this.$route.name;
            },
        },

    };

</script>

<style>
  
  
</style>