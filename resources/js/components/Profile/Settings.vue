<template>
    <div>
        <div class="logo-load-center " v-if="loadDeleteAccount">
            <img class="animate-flicker" src="/images/img_0.png" />
        </div>

        <div class="appHeader box-shw-profile-header" v-if="!loadDeleteAccount">
            <div class="left" id="back_arrow">
                <router-link :to="{ path:`/`+usuario.username, params: {usermane:usuario.username}}"
                    class="headerButton goBack">
                    <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline"
                        role="img">
                    </ion-icon>
                </router-link>
            </div>
            <div class="pageTitle">
                Adminstrar perfil
            </div>
        </div>
        <div id="appCapsule"v-if="!loadDeleteAccount"> 
            <div id="setting_options_user">
                <ul class="listview image-listview flush transparent">
                    <li>
                        <router-link :to="'/Profile/Settings/ChangePassword'" class="item">
                            <div class="icon-box">
                                <ion-icon aria-label="browsers outline" class="md hydrated icon-22" name="key-outline"
                                    role="img">
                                </ion-icon>
                            </div>
                            <div class="in">
                                Cambiar contraseña
                            </div>
                        </router-link>
                    </li>
                    <li v-if="usuario.role_id  == 2">
                        <router-link :to="'/Profile/Settings/Account'" class="item">
                            <div class="icon-box">
                                <ion-icon aria-label="add outline" class="md hydrated icon-22" name="wallet-outline"
                                    role="img">
                                </ion-icon>
                            </div>
                            <div class="in">
                                Editar datos bancarios
                            </div>
                        </router-link >
                    </li>
                    <li>
                        <a class="item" href="#DialogForm" data-bs-toggle="modal" data-bs-target="#DialogForm">
                            <div class="icon-box">
                                <ion-icon aria-label="layers outline" class="md hydrated icon-22" name="person-outline"
                                    role="img">
                                </ion-icon>
                            </div>
                            <div class="in">
                                Suspender Cuenta
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="item" href="#deleteAccount" data-bs-toggle="modal" data-bs-target="#deleteAccount">
                            <div class="icon-box">
                                <ion-icon aria-label="tablet portrait outline" class="md hydrated text-red icon-22"
                                    name="person-remove-outline" role="img">
                                </ion-icon>
                            </div>
                            <div class="in">
                                Eliminar cuenta
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <div class="modal fade dialogbox" id="DialogForm" data-bs-backdrop="static" tabindex="-1" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="max-width: 600px;">
                    <div class="modal-header">
                        <h5 class="modal-title">Suspender cuenta</h5>
                    </div>
                    <form>
                        <div class="modal-body text-start mb-2">
                            <div class="col-lg-12 col-md-7 mx-auto">
                                <div class=" text-center ">
                                    <div class="mb-3 text">
                                        Una vez realizada la acción, se cerrará tu sesión. Puedes reactivar tu cuenta
                                        solo iniciando sesión.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="btn-inline">
                                <button type="button" class="btn btn-text-outline"
                                    data-bs-dismiss="modal">Cancelar</button>
                                <button class="btn btn-text-secondary" @click="suspendAccount" type="button"
                                    :disabled="load ? true:false">
                                    <span class="spinner-border spinner-border-sm me-05" v-if="load" role="status"
                                        aria-hidden="true"></span>
                                    Aceptar
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade dialogbox" id="deleteAccount" data-bs-backdrop="static" tabindex="-1"
            style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="max-width: 600px;">
                    <div class="modal-header">
                        <h5 class="modal-title"> Eliminar cuenta</h5>
                    </div>
                    <form>
                        <div class="modal-body text-start mb-2">
                            <div class="col-lg-12 col-md-7 mx-auto">
                                <div class=" text-center ">
                                    <div class="mb-3 text">
                                        Una vez realizada la acción, se cerrará tu sesión y tu cuenta sera eliminada. Si
                                        deseas reactivar tu cuenta debes enviar un correo a concato@loolapp.com.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="btn-inline">
                                <button type="button" class="btn btn-text-outline"
                                    data-bs-dismiss="modal">Cancelar</button>
                                <button class="btn btn-text-secondary" @click="deleteAccount"    data-bs-dismiss="modal" type="button"
                                    :disabled="load ? true:false">
                                    <span class="spinner-border spinner-border-sm me-05" v-if="load" role="status"
                                        aria-hidden="true"></span>
                                    Aceptar
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["usuario"],
        data() {
            return {
                load: false,
                loadDeleteAccount:false,
            }
        },
        methods: {
            suspendAccount() {
                this.load = true
                axios.post('/suspendAccount').then(response => {
                    localStorage.clear();
                    window.location.replace('/Login');
                    location.reload();
                })
            },
            deleteAccount() {
                this.loadDeleteAccount = true;
                axios.post('/deleteAccount').then(response => {
                    window.location.replace('/login');
                })
            }
        }

    };
</script>
<style>
</style>