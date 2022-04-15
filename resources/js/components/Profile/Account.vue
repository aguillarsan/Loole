<template>
    <div>
        <div class="appHeader box-shw-profile-header">
            <div class="left" id="back_arrow">
                <router-link :to="'/Profile/Settings'" class="headerButton goBack">
                    <ion-icon name="chevron-back-outline" role="img" class="md hydrated"
                        aria-label="chevron back outline">
                    </ion-icon>
                </router-link>
            </div>
            <div class="pageTitle">Editar datos bancarios</div>
        </div>
        <div id="appCapsule">

            <div class="error-page" v-if="usuario.account_id == null">
                <div class="icon-box text-warning">
                    <ion-icon name="information-circle-outline"></ion-icon>
                </div>
                <h1 class="title">Cuenta no regsitrada</h1>
                <div class="text mb-5">
                   Aún no seleccionas tu metodo de retiro.
                </div>


                <div class="row">
                    
                    <div class="col-12">
                        
                        <router-link :to="'/RegisterAccount'" href="app-components.html" class="btn btn-primary btn-lg btn-block rounded">Registar Cuenta</router-link>
                    </div>
                </div>

            </div>

        </div>


    </div>

</template>

<script>




    export default {
        props: ['usuario'],

        data() {
            return {
                account: []
            };
        },
        created: function () {
            if (this.usuario.account_id != null) {
                this.getAccountData();
            }
        },
        methods: {

            getAccountData() {
                axios.get('/account/data/looler').then(response => {
                    this.account = response.data;
                })
            }

        },
    };
</script>

<style>
</style>