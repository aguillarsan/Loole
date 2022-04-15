<template>
    <div>
        <div class="appHeader text">
            
            <div class="pageTitle">Cuentas por aprobar</div>
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
                                    <li class="nav-item">
                                        <a class="nav-link active" @click.prevent="getCuentas(1)" data-bs-toggle="tab"
                                            href="#home" role="tab" aria-selected="true">
                                            Cuentas pendientes

                                            <h5 style="font-size:18px" class="text-primary">{{pendientes}}</h5>
                                        </a>

                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" @click.prevent="getCuentas(5)" data-bs-toggle="tab" href="#"
                                            role="tab" aria-selected="false">
                                            Cuentas Rechazadas

                                            <h5 style="font-size:18px" class="text-primary">{{total_rechazadas}}</h5>
                                        </a>

                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" @click.prevent="getCuentas(3)" data-bs-toggle="tab"
                                            href="#home" role="tab" aria-selected="false">
                                            Cuentas Aprobadas

                                            <h5 style="font-size:18px" class="text-primary">{{total_users}}</h5>
                                        </a>

                                    </li>
                                </ul>
                                <div class="tab-content mt-2">
                                    <div class="tab-pane fade active show" role="tabpanel" v-if="!load">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>

                                                        <th scope="col">
                                                            Nombre/ País
                                                        </th>
                                                        <th scope="col">
                                                            Rut/DNI
                                                        </th>



                                                        <th scope="col">
                                                            Fotos
                                                        </th>
                                                        <th v-if="modulo == 5">Motivo rechazo</th>

                                                        <th scope="col">
                                                            opciones
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="cuenta in cuentas">

                                                        <td>
                                                            <div>{{cuenta.name}}</div>
                                                            <div style="margin-top: 5px;;">{{cuenta.country.country}}
                                                            </div>
                                                        </td>
                                                        <td>{{cuenta.dni}}</td>
                                                        <td>
                                                            <div>
                                                                <a @click.prevent="getImageDni(cuenta.id,1)"
                                                                    data-bs-toggle="modal" href="#modal_foto_cedula
                                                            " v-if="cuenta.role_id == 2">
                                                                    Imagen 1
                                                                </a>
                                                            </div>
                                                            <div style="margin-top:8px;">
                                                                <a @click.prevent="getImageDni(cuenta.id,2)"
                                                                    data-bs-toggle="modal" href="#modal_foto_cedula
                                                            " v-if="cuenta.role_id == 2">
                                                                    Imagen 2
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td v-if="modulo == 5">
                                                            {{cuenta.reason_rejection? cuenta.reason_rejection.reason:''}}
                                                        </td>
                                                        <td><a class="text-secondary hover_link"
                                                                @click.prevent="ApproveAccount(cuenta.id)">
                                                                <ion-icon style="font-size:35px;"
                                                                    name="checkmark-circle-outline"></ion-icon>
                                                            </a>
                                                            <a @click="modalReachazo(cuenta.id)" class="text-danger hover_link">
                                                                <ion-icon style="font-size:35px;"
                                                                    name="close-circle-outline"></ion-icon>
                                                            </a>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div style="text-align: center;" v-if="load">
                                        <div class="spinner-border text-primary"
                                            style="height:100px;width:100px;margin-top: 50px;text-align: center !important;"
                                            role="status">
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>



                    </div>





                </div>
            </div>




        </div>
        <div class="modal fade dialogbox" id="DialogImage" data-bs-backdrop="static" tabindex="-1"
            style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="max-width: 600px;max-height: 600px !important;">
                    <img :src="imagen" alt="image" class="img-fluid">
                    <div class="modal-footer">
                        <div class="btn-inline">

                            <a href="#" class="btn btn-text-primary" data-bs-dismiss="modal">Cerrar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade dialogbox" id="DialogForm" data-bs-backdrop="static" tabindex="-1" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Rechzar cuenta</h5>
                    </div>
                    <form>
                        <div class="modal-body text-start mb-2">
                            <div class="form-group ">
                                <div class="input-wrapper">
                                    <label class="form-label" for="email1">Motivo</label>
                                    <select class="form-control form-select" v-model="motivo_id">
                                        <option value="1">
                                            Falta de información
                                        </option>
                                        <option value="2">
                                            No cumple los requisitos de edad
                                        </option>
                                        <option value="3">
                                            La foto de carnet no es legible
                                        </option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <div class="btn-inline">
                                <button type="button" class="btn btn-text-secondary"
                                    data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" @click="DenyAccount" class="btn btn-text-primary" data-bs-dismiss="modal">Aceptar
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
        data() {
            return {
                cuentas: [],
                pendientes: 0,
                total_users: 0,
                total_rechazadas: 0,
                modulo: 1,
                load: false,
                imagen: null,
                motivo_id: ""
            }
        },
        created: function () {

            this.getCuentas()
        },
        methods: {
            getCuentas: function (state) {

                if (state) {
                    this.modulo = state;
                } else {
                    this.modulo = 1;
                }



                axios.get(`/get-cuentas-usuarios-revision?modulo=${this.modulo})`).then(response => {
                    this.cuentas = response.data.users;
                    this.pendientes = response.data.total_pendientes;
                    this.total_users = response.data.total_usuarios;
                    this.total_rechazadas = response.data.total_rechazadas;
                    console.log(this.cuentas)
                })
            },
            ApproveAccount: function (user_id) {
                this.load = true
                let formData = new FormData();
                formData.append('user_id', user_id);
                axios.post('/approve-account-looler', formData).then(response => {
                    this.getCuentas()
                    this.load = false
                })
            },
            getImageDni: function (user, identified) {
                let formData = new FormData();
                formData.append('user_id', user);
                formData.append('identified', identified);
                axios.post('/get-image-dni', formData).then(response => {
                    this.imagen = response.data;
                    $("#DialogImage").modal("show");
                })
            },
            DenyAccount: function () {
                this.load= true
                let formData = new FormData();
                formData.append('user_id', this.account_id);
                formData.append('motivo_rechazo_id', this.motivo_id);
                if (this.motivo_id == '') {
                    document.getElementById("error_rechazar_cuenta").innerHTML = this.txt_error_cuenta_rechazo;
                } else {
                    axios.post('/deny-account-looler', formData).then(response => {

                        this.getCuentas()
                        this.account_id = '';
                        this.motivo_id = '';
                        this.load= false
                    })
                }

            },
            modalReachazo: function (id) {
                this.account_id = id
                $("#DialogForm").modal("show");
            }


        }
    }
</script>