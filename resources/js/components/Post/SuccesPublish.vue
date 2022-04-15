<template>
    <div>
        <div id="appCapsule">
            <div id="content_responseive">
                <div class="main-content position-relative " id="menssage_publish">
                    <div class="container no-box-shadow" id="main_container_content">
                        <div id="child">
                            <div>
                                <div class="text-center">
                                    <img src="/images/menu_icons/white/search-empty.svg"/>
                                </div>
                                <div id="feedback feedback-collect">
                                    <div class="title text-center " style="margin-top:1rem">
                                        <h4 class="text-black popins ">
                                            Publicación en revisión
                                        </h4>
                                    </div>
                                    <div class="text-center">
                                        <p class="popins">
                                            Estamos validando que tu publicación cumpla con las normas de Loole, esto puede tardar como máximo 24Hrs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div class="card mt-4 no-box-shadow">
                        <div class="card-body pt-0 text-center">
                            <router-link :to="'/home'">
                                <button class="btn bg-gradient-white-looler-btn me-1 mb-1" type="button">
                                    Aceptar
                                </button>
                            </router-link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    
};
</script>
<style>
</style>