<template>
    <div>
        <div id="content_responseive">
            <div v-if="step == 1">
                <div id="appCapsule">
                    <div class="section mt-2 mb-2">

                        <div class="card comment-box no-box-shadow ">
                            <img src="menu_icons/account/money.svg" style="width:100%; height:200px;" />
                            <h4 class="card-title"> Selecciona tu método de retiro</h4>

                            <div class="text">
                                Esto nos servirá para saber donde debemos enviar tus Loolebucks ganados.
                            </div>
                        </div>
                        <div class="mt-5">
                            <button @click="nextStep" class="btn btn-primary bg-primary-loole btn-block btn-lg rounded"
                                type="submit">
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="" v-if="step==2">
                <div class="appHeader box-shw-profile-header">
                    <div class="left" id="back_arrow">
                        <a class="headerButton goBack hover_link" @click="backStep">
                            <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline"
                                role="img">
                            </ion-icon>
                        </a>
                    </div>
                    <div class="pageTitle">
                        Método de retiro
                    </div>
                </div>
                <div id="appCapsule">
                    <div id="metod_container_select">
                        <ul class="listview image-listview flush transparent ">
                            <li v-for="method in methods" class="hover_link">
                                <a @click="selectMethod(method.id)" class="item">
                                    <div class="icon-box">
                                        <ion-icon aria-label="browsers outline" class="md hydrated icon-22"
                                            name="key-outline" role="img">
                                        </ion-icon>
                                    </div>
                                    <div class="in">
                                        {{method.type}}
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="" v-if="step==3">
                <div class="appHeader box-shw-profile-header">
                    <div class="left" id="back_arrow">
                        <a class="headerButton goBack hover_link" @click="backStep">
                            <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline"
                                role="img">
                            </ion-icon>
                        </a>
                    </div>
                    <div class="pageTitle">
                        Método de retiro
                    </div>

                </div>
                <div id="appCapsule">
                    <div id="metod_container_select">
                        <div class="wide-block pb-1 pt-2 no-border-top-bottom  ">
                            <form>
                                <div class="form-group boxed" v-if="method_select_id == 1">
                                    <div class="input-wrapper">
                                        <label class="" for="bank">Banco </label>
                                        <select class="form-control form-select" id="bank" v-model="input.bank_id">
                                            <option v-for="bank in banks" :value="bank.id">{{bank.name}}</option>

                                        </select>
                                    </div>
                                    <div class="invalid-input" v-if="bank_success == false">
                                        Debes seleccionar un banco
                                    </div>
                                </div>
                                <div class="form-group boxed " v-if="method_select_id == 1">
                                    <div class="input-wrapper">
                                        <label class="" for="tipo_acccount">Tipo de cuenta </label>
                                        <select class="form-control form-select" id="tipo_account"
                                            v-model="input.type_account_id">
                                            <option :value="type_account.id" v-for="type_account in type_accounts">
                                                {{type_account.name}}</option>

                                        </select>
                                    </div>
                                    <div class="invalid-input" v-if="type_account_success == false">
                                        Debes seleccionar un tipo de cuenta
                                    </div>
                                </div>

                                <div class="form-group boxed">
                                    <div class="input-wrapper">
                                        <label class="" for="number_account">Número de cuenta</label>
                                        <input type="number" class="form-control" id="number_account"
                                            placeholder="xxxxxxxxxx" autocomplete="off" v-model="input.number_account">
                                        <i class="clear-input">
                                            <ion-icon name="close-circle" role="img" class="md hydrated"
                                                aria-label="close circle"></ion-icon>
                                        </i>
                                    </div>
                                    <div class="invalid-input" v-if="number_account_success == false">
                                        Debes ingresar un número de cuenta
                                    </div>
                                </div>




                            </form>
                            <div class="mt-5">
                                <button @click="saveAccountData()"
                                    class="btn btn-primary bg-primary-loole btn-block btn-lg rounded" type="submit">
                                    Continuar
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div v-if="step == 4">
                <div id="appCapsule">
                    <div class="section mt-2 mb-2">

                        <div class="card comment-box no-box-shadow ">
                            <img src="images/success/success.svg" style="width:100%; height:200px;" />
                            <h4 class="card-title" style="margin-top:30px;"> Cuenta vinculada con éxito</h4>

                            <div class="text" style="margin-top:40px">
                                Desde ahora todos tus retiros serán enviados a la cuenta vinculada.
                            </div>
                        </div>
                        <div class="mt-5">
                            <router-link :to="'/Wallet' " class="item">
                            <button  class="btn btn-primary bg-primary-loole btn-block btn-lg rounded"
                                type="submit">
                                Aceptar
                            </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                step: 1,
                methods: [{ id: 1, type: 'Cuenta bancaria' }, { id: 2, type: 'Mercadopago' }, { id: 3, type: 'Mach', img: '/menu_icons/metods/mach.svg' }],
                method_select_id: "",
                banks: [{ id: 1, name: 'Banco Bice' }, { id: 2, name: 'BBVA' }, { id: 3, name: 'Banco Consorcio' }, { id: 4, name: 'Banco de chile - Edwards Citi' }, { id: 5, name: 'Banco Del Desarrollo' }, { id: 6, name: 'Banco Estado' }, { id: 7, name: 'Banco Falabella' }, { id: 8, name: 'Banco Internacional' }, { id: 9, name: 'Banco Itaú' }, { id: 10, name: 'Banco Paris' }, { id: 11, name: 'Banco Ripley' }, { id: 12, name: 'Banco Santander - Banefe' }, { id: 13, name: 'Banco Security' }, { id: 14, name: 'Bci - Tbanc - Nova' }, { id: 15, name: 'Coopeuch' }, { id: 16, name: 'Corpbanca' }, { id: 17, name: 'HSBC Bank' }, { id: 18, name: 'Los Hérores' }, { id: 19, name: 'Scotibank' }, { id: 20, name: 'Transbank' }],
                type_accounts: [{ id: 1, name: 'Cuenta de Ahorro' }, { id: 2, name: 'Cuenta Vista' }, { id: 3, name: 'Cuenta Corriente' }],
                input: {
                    bank_id: "",
                    type_account_id: "",
                    number_account: ""
                },
                bank_success: null,
                type_account_success: null,
                number_account_success: null,
                formData: new FormData
            }
        },
        methods: {
            nextStep() {
                if (this.step == 1) {
                    this.step = 2;
                } else {
                    if (this.step == 2) {
                        this.step = 3;
                    }
                }
            },
            backStep: function () {
                if (this.step == 3) {
                    this.input.bank_id = "";
                    this.input.type_account_id = "";
                    this.input.number_account = "";
                    this.bank_success = null
                    this.type_account_success = null
                    this.number_account_success = null
                    this.step = 2;
                } else {
                    if (this.step == 2) {
                        this.step = 1;
                    }
                }
            },
            selectMethod(method) {
                this.nextStep();
                this.method_select_id = method
            },
            updateDataUser() {
                axios.get('/authenticate/getRefrescarUsuarioAutenticado').then(response => {
                    this.$eventBus.$emit('update-data-user-app', response.data)
                })
            },

            saveAccountData() {
                if (this.method_select_id == 1) {
                    if (this.input.bank_id == "") {
                        this.bank_success = false
                    } else {
                        this.type_account_success = true
                    }
                    if (this.input.type_account_id == "") {
                        this.type_account_success = false
                    } else {
                        this.type_account_success = true
                    }
                    if (this.input.number_account == "") {
                        this.number_account_success = false
                    } else {
                        this.number_account_success = true
                    }
                    if (this.input.bank_id != "" && this.input.type_account_id != '' && this.input.number_account != '') {
                        this.formData.append('bank_id', this.input.bank_id)
                        this.formData.append('type_account_id', this.input.type_account_id)
                        this.formData.append('number_account', this.input.number_account)
                        this.formData.append('method_select_id', this.method_select_id)
                        axios.post('/user/register/account', this.formData).then(resposne => {
                          
                            if (resposne.data.code == 200) {
                                this.updateDataUser()
                                this.step = 4
                            } else {

                            }
                        })
                    }
                } else {
                    if (this.method_select_id == 2 || this.method_select_id == 3) {
                        if (this.input.number_account == "") {
                            this.number_account_success = false
                        } else {
                            this.number_account_success = true
                        }
                        if (this.input.number_account != "") {
                            this.formData.append('bank_id', this.method_select_id == 2 ? 21 : (this.method_select_id == 3 ? 14 : ''))
                            this.formData.append('type_account_id', 2)
                            this.formData.append('number_account', this.input.number_account)
                            this.formData.append('method_select_id', this.method_select_id)
                            axios.post('/user/register/account', this.formData).then(resposne => {
                               
                                if (resposne.data.code == 200) {
                                    this.updateDataUser()
                                    this.step = 4
                                } else {

                                }
                            })



                        }
                    }

                }
            }

        },
    }
</script>

<style>

</style>