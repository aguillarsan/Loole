<template>
    <div>
        <div class="appHeader text">

            <div class="pageTitle">Solictudes de retiro</div>
            <div class="right"></div>
        </div>
        <div id="appCapsule" class="extra-header-active">

            <div id="adm_responsive">
                <div class="tab-content mt-1">


                    <!-- pilled tab -->
                    <div class="tab-pane fade show active" id="pilled" role="tabpanel">

                        <div class="section full mt-1">

                            <div class="wide-block pt-2 pb-2">

                                <ul class="nav nav-tabs capsuled" role="tablist">
                                    <li class="nav-item" @click="getRequestMoney(1)">
                                        <a class="nav-link active" data-bs-toggle="tab" href="#home" role="tab"
                                            aria-selected="true">
                                            Solicitudes pendientes

                                            <h5 style="font-size:18px" class="text-primary"> {{wait_aprove}}</h5>
                                        </a>

                                    </li>
                                    <li class="nav-item" @click="getRequestMoney(2)">
                                        <a class="nav-link" data-bs-toggle="tab" href="#" role="tab"
                                            aria-selected="false">
                                            Solicitudes en proceso

                                            <h5 style="font-size:18px" class="text-primary"> {{process}}</h5>
                                        </a>

                                    </li>
                                    <li class="nav-item" @click="getRequestMoney(3)">
                                        <a class="nav-link" data-bs-toggle="tab" href="#home" role="tab"
                                            aria-selected="false">
                                            Solicitudes aprobadas

                                            <h5 style="font-size:18px" class="text-primary"> {{aprove}}</h5>
                                        </a>

                                    </li>
                                    <li class="nav-item" @click="getRequestMoney(4)">
                                        <a class="nav-link" data-bs-toggle="tab" href="#home" role="tab"
                                            aria-selected="false">
                                            Solicitudes finalizadas

                                            <h5 style="font-size:18px" class="text-primary"> {{finish}}</h5>
                                        </a>

                                    </li>
                                </ul>
                                <div class="tab-content mt-2">
                                    <div class="tab-pane fade active show" role="tabpanel" v-if="!load">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>
                                                        Nombre / DNI
                                                    </th>

                                                 
                                                    <th>
                                                        Banco
                                                    </th>
                                                    <th>
                                                        Tipo de cuenta
                                                    </th>
                                                    <th>
                                                        N° cuenta
                                                    </th>
                                                    <th>
                                                        Monto
                                                    </th>

                                                    <th v-if="modulo != 1">
                                                        Gestionador
                                                    </th>

                                                    <th>
                                                        Opciones
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="request in requests">
                                                        <td>
                                                            <div class="text">
                                                                {{request.user.name}}
                                                            </div>
                                                            <div class="text mt-1">
                                                                {{request.user.email}}
                                                            </div>
                                                            <div class="text-primary mt-1 hover_link"
                                                                v-clipboard:copy="request.user.dni">
                                                                <a>{{request.user.dni}}</a>
                                                            </div>
                                                        </td>

                                                      
                                                        <td>
                                                            <div class="text-primary mt-1 hover_link"
                                                                v-clipboard:copy="request.user.account.bank.bank">
                                                                <a>{{request.user.account.bank.bank}}</a>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="text-primary mt-1 hover_link"
                                                                v-clipboard:copy="request.user.account.type_account.type_account">
                                                                <a>{{request.user.account.type_account.type_account}}</a>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="text-primary mt-1 hover_link"
                                                                v-clipboard:copy="request.user.account.number_account">
                                                                <a>{{request.user.account.number_account}}</a>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            ${{formatPrice(request.amount)}}
                                                        </td>

                                                        <th v-if="modulo != 1">
                                                            {{request.manager}}
                                                        </th>
                                                        <td>
                                                            <a class="text-secondary hover_link"
                                                                @click.prevent="ApproveMoney(request)"  v-if="modulo != 4">
                                                                <ion-icon style="font-size:35px;"
                                                                    name="checkmark-circle-outline"></ion-icon>
                                                            </a>
                                                            <a @rejectedRequestMoney() class="text-danger hover_link" v-if="modulo != 4">
                                                                <ion-icon style="font-size:35px;"
                                                                    name="close-circle-outline"></ion-icon>
                                                            </a>

                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>



                                </div>

                            </div>
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

                modulo: 1,
                requests: [],
                wait_aprove: '',
                process: '',
                aprove: '',
                finish: '',
                load: false


            }
        },

        created: function () {


            this.getRequestMoney()


        },
        methods: {
            getRequestMoney: function (state) {
                if (state) {
                    this.modulo = state;
                } else {
                    this.modulo = 1;
                }
                var md5 = require('md5');

                axios.get(`/data-request-money?modulo=${md5(this.modulo)}`).then(response => {
                    this.requests = response.data.request_money
                    this.wait_aprove = response.data.wait_aprove
                    this.process = response.data.process
                    this.aprove = response.data.aprove
                    this.finish = response.data.finish
                })

            },
            formatPrice(value) {
                parseInt(value)
                if (value % 1 == 0) {

                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                } else {
                    let val = (value / 1).toFixed(2).replace('.', ',')
                    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }

            },
            ApproveMoney: function (money) {

                let formData = new FormData
                formData.append('id', money.id)

                axios.post('/update-witdrals', formData).then(response => {
                    this.getRequestMoney(this.modulo);
                    this.sendEmail(money, response.data)
                })
            },
            rejectedRequestMoney:function(){
                 axios.post('/reject/money/request').then(response=>{
                     
                 })
            },
            sendEmail: function (money, state) {

                let formData = new FormData
                formData.append('user_id', money.user_id)
                formData.append('state', state)
                axios.post('/send-mail-new', formData).then(response => {

                })
            }

        },
    }
</script>