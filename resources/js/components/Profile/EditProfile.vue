<template>
    <div>
        <div class="appHeader box-shw-profile-header">
            <div class="left" id="back_arrow">
                <router-link :to="{ path:`/`+usuario.username, params: {usermane:usuario.username}}"
                    class="headerButton goBack">
                    <ion-icon name="chevron-back-outline" role="img" class="md hydrated"
                        aria-label="chevron back outline">
                    </ion-icon>
                </router-link>
            </div>
            <div class="pageTitle">Editar Perfil</div>
        </div>
        <div id="appCapsule">
            <a type="hidden" id="modal_click" href="#preview_img_modal" data-bs-toggle="modal"
                data-bs-target="#preview_img_modal">

            </a>

            <div id="container_profile"></div>

            <div class="login-form">
                <div class="section">
                    <h1>
                        <img :src="usuario.profile_image" alt="image" class="imaged w100 rounded">

                    </h1>
                    <h4><button class="btn btn-outline-secondary btn-sm rounded" @click="selectImg">Cambiar
                            foto</button></h4>
                    <input accept="image/*" hidden="true" id="new_profile_img" type="file" @change="getNewImg" />
                </div>
                <div class="wide-block pb-1 pt-2 no-border-top-bottom" style="background: transparent;">

                    <form>
                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="form-label" style="font-size:15px" for="name5">Nombre</label>
                                <input type="text" class="form-control" autocomplete="off" v-model="name"
                                    maxlength="30">

                                <i class="clear-input">
                                    <ion-icon name="close-circle" role="img" class="md hydrated"
                                        aria-label="close circle"></ion-icon>
                                </i>
                            </div>
                            <div class="invalid-input" style="text-align: left;" v-if="error_name == false">
                                {{ error_name_msg }}
                            </div>
                        </div>

                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="form-label" style="font-size:15px" for="name5">Nombre de usuario</label>
                                <input type="text" @keyup="validateUsername()" class="form-control" autocomplete="off"
                                    v-model="username" maxlength="30">
                                <i class="clear-input">
                                    <ion-icon name="close-circle" role="img" class="md hydrated"
                                        aria-label="close circle"></ion-icon>
                                </i>
                            </div>
                            <div class="invalid-input" style="text-align: left;" v-if="error_username == false">
                                {{ error_usr_msg }}
                            </div>
                        </div>

                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="form-label" style="font-size:15px" for="name5">Correo</label>
                                <ul class="listview simple-listview no-border-top-bottom">
                                    <li style="margin-top: -12px;">{{usuario.email}}</li>

                                </ul>
                            </div>
                        </div>

                        <div class="form-group boxed" v-if="usuario.role_id == 2">
                            <div class="input-wrapper">
                                <label class="form-label" style="font-size:15px" for="name5">Rut/DNI</label>
                                <ul class="listview simple-listview no-border-top-bottom">
                                    <li style="margin-top: -12px;">{{usuario.dni}}</li>

                                </ul>
                                <i class="clear-input">
                                    <ion-icon name="close-circle" role="img" class="md hydrated"
                                        aria-label="close circle"></ion-icon>
                                </i>
                            </div>
                        </div>

                        <div class="form-group boxed" v-if="usuario.role_id == 2">
                            <div class="input-wrapper">
                                <label class="form-label" style="font-size:15px" for="name5">Género</label>
                                <ul class="listview simple-listview no-border-top-bottom">
                                    <li style="margin-top: -12px;">{{usuario.gender.gender}}</li>

                                </ul>
                                <i class="clear-input">
                                    <ion-icon name="close-circle" role="img" class="md hydrated"
                                        aria-label="close circle"></ion-icon>
                                </i>
                            </div>
                        </div>

                        <div class="form-group boxed" v-if="usuario.role_id == 2">
                            <div class="input-wrapper">
                                <label class="form-label" style="font-size:15px" for="name5">Nacionalidad</label>
                                <ul class="listview simple-listview no-border-top-bottom">
                                    <li style="margin-top: -12px;">{{usuario.country.country}}</li>

                                </ul>
                                <i class="clear-input">
                                    <ion-icon name="close-circle" role="img" class="md hydrated"
                                        aria-label="close circle"></ion-icon>
                                </i>
                            </div>
                        </div>
                        <div class="form-group boxed" v-if="usuario.role_id == 2">
                            <div class="input-wrapper">
                                <label class="form-label" style="font-size:15px" for="name5">Descripción</label>
                                <textarea id="address5" rows="6" maxlength="300" v-model="description"
                                    class="form-control"></textarea>
                                <i class="clear-input">
                                    <ion-icon name="close-circle" role="img" class="md hydrated"
                                        aria-label="close circle"></ion-icon>
                                </i>
                            </div>
                            <div class="invalid-input" style="text-align: left;" v-if="error_description == false">
                                {{ error_desc_msg }}
                            </div>
                            <p style="text-align: left;" class="mt-1">{{description?description.length:0}}/300</p>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-primary bg-primary-loole btn-block btn-lg rounded"
                                @click="saveChanges" type="button">
                                Guardar cambios
                            </button>

                        </div>
                        <div class="mt-2" style="margin-bottom:70px;">
                            <router-link :to="{ path:`/`+usuario.username, params: {usermane:usuario.username}}">
                                <button class="btn btn-light  btn-block btn-lg rounded" style="    box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%) !important;
                    " type="button">
                                    Cancelar
                                </button>
                            </router-link>
                        </div>
                    </form>


                </div>
            </div>


        </div>


        <div class="modal fade dialogbox" id="preview_img_modal" data-bs-backdrop="static" tabindex="-1"
            aria-hidden="true">
            <div class="modal-dialog" role="document">

                <div class="modal-content" style="max-width: 600px;max-height: 600px !important;">
                    <img :src="readImg(new_img)" v-if="new_img" alt="image" class="img-fluid" />
                    <div class="modal-footer">
                        <div class="btn-inline">
                            <a href="#" class="btn btn-text-black" @click="clean" data-bs-dismiss="modal">Cancelar</a>
                            <a href="#" class="btn btn-text-secondary" @click="saveNewImngProfile"
                                data-bs-dismiss="modal">Aceptar</a>
                        </div>
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
                username: this.usuario.username,
                description: this.usuario.description ? this.usuario.description : "",
                name: this.usuario.name,
                new_img: null,
                formData: new FormData,

                error_username: "",
                error_usr_msg: null,
                error_description: null,
                error_name: null,
                error_desc_msg: "",
                error_name_msg:""
            }
        },
        created: function () {

        },
        methods: {
            getNewImg(e) {
                this.new_img = e.target.files[0];
                let modal = document.getElementById("modal_click")
                modal.click();


            },
            clean() {
                this.new_img = "",
                    $("#new_profile_img").val('')
            },
            selectImg() {
                let img = document.getElementById("new_profile_img")
                img.click();
            },
            readImg(file) {
                return URL.createObjectURL(file);
            },
            saveNewImngProfile() {
                this.formData.append('profile_img_rezise', this.new_img);
                this.formData.append('profile_img_real', this.new_img);
                axios.post('/edit/profile/img', this.formData).then(response => {
                    if (response.data.code == 200) {
                        this.updateDataUser();
                        // this.clean();
                        let type = 'success'
                        let message = 'Foto de perfil editada'
                        this.$eventBus.$emit('display-alert-appp', type, message)
                    }
                })

            },
            updateDataUser() {
                axios.get('/authenticate/getRefrescarUsuarioAutenticado').then(response => {
                    this.$eventBus.$emit('update-data-user-app', response.data)
                })
            },
            validateUsername() {
                this.username = this.username.replace(/ /g, "");
                if (this.username == "") {
                    this.error_username = false;
                    this.error_usr_msg = " El nombre de usuario es requerido";
                    return;
                } else {
                    if (this.username != "") {
                        if (this.username == this.usuario.username) {
                            this.error_usr_msg = "";
                            this.error_username = true;
                            return;
                        } else {
                            if (this.username.length > 30) {
                                this.error_username = false;
                                this.error_usr_msg = " El nombre de usuario excede el maxímo de caracteres";
                                return;
                            } else {
                                axios
                                    .get(`/is-available-user-name?user_name=${this.username}`)

                                    .then((response) => {
                                        if (response.data == 1) {
                                            this.error_usr_msg = "El nombre de usuario ingresado ya existe";
                                            this.error_username = false;
                                            return;
                                        } else {
                                            this.error_usr_msg = "";
                                            this.error_username = true;
                                            return;
                                        }
                                    });
                            }
                        }

                    }

                }
            },

            validateDescription() {
                if (this.description == "") {
                    this.error_description = false;
                    this.error_desc_msg = "Debes ingresar una descripción";
                    return;
                } else {
                    if (this.description.length > 300) {
                        this.error_description = false;
                        this.error_desc_msg = "La descripción es muy larga";
                        return;
                    } else {
                        if (this.description != "" || this.description.length <= 300) {
                            this.error_description = true;
                            this.error_desc_msg = "";
                            return;
                        }
                    }
                }
            },
            noSpaces() {
                this.username = this.username.replace(/ /g, "");
            },
            validateName() {
                if (this.name == "") {
                    this.error_name = false;
                    this.error_name_msg = "El nombre es requerido"
                } else {
                    if (this.name != "") {
                        if (this.name.length > 30) {
                            this.error_name = false;
                            this.error_name_msg = "El nombre no puede ser mayor a 30 caracteres"
                        } else {
                            if (this.name.length <= 30) {
                                this.error_name = true;
                                this.error_name_msg = ""
                            }
                        }
                    }

                }
            },
            saveChanges: function () {
                this.validateUsername();
                this.validateName();

                if (this.usuario.role_id == 2) {
                    this.validateDescription()
                    if (this.error_description && this.error_username && this.error_name) {
                        this.formData.append('description', this.description)
                        this.formData.append('username', this.username)
                        this.formData.append('name', this.name)
                        axios.post('/user/edit/profile/data/personal', this.formData).then(response => {
                            if (response.data.code == 200) {
                                this.updateDataUser();

                                let type = 'success'
                                let message = 'Perfil editado'
                                this.$eventBus.$emit('display-alert-appp', type, message)

                                setTimeout(() => {
                                    this.backProfile()
                                }, 500);
                            }
                        })
                    }
                }
                if (this.usuario.role_id == 3) {

                    if (this.error_username) {

                        this.formData.append('username', this.username)
                        axios.post('/user/edit/profile/data/personal', this.formData).then(response => {
                            if (response.data.code == 200) {
                                this.updateDataUser();

                                let type = 'success'
                                let message = 'Perfil editado'
                                this.$eventBus.$emit('display-alert-appp', type, message)

                                setTimeout(() => {
                                    this.backProfile()
                                }, 500);



                            }
                        })
                    }
                }



            },
            backProfile: function () {
                window.location.replace('/' + this.usuario.username);
            }


        }
    }
</script>

<style>

</style>