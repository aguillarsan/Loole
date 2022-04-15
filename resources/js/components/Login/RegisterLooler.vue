<template>
  <div>
    <div class="logo-load-center " v-if="load">
      <img class="animate-flicker" src="/images/img_0.png" />
    </div>
    <div class="appHeader no-border animated fadeIn scrolled is-active" v-if="!load" style="z-index: 9999">
      <div class="left">
        <a @click="backStep" class="headerButton goBack hover_link" v-if="step != 1">
          <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
          </ion-icon>
        </a>
      </div>
      <div class="pageTitle"></div>
      <div class="right">
        <router-link to="/Login" class="headerButton text-primary">
          Login
        </router-link>
      </div>
    </div>
    <div id="content_responseive" v-if="!load">
      <div class="extraHeader p-0 position-absolute" style="margin-top: 5px">
        <div class="form-wizard-section">
          <a class="button-item " :class="step == 1 ? 'button-item active' : 'button-item'">
            <strong>1</strong>
            <p style="font-size: 11px">Datos Personales</p>
          </a>
          <a class="button-item " :class="step == 2 ? 'button-item active' : 'button-item'">
            <strong>2</strong>
            <p style="font-size: 11px">Imagen Cedúla</p>
          </a>
          <a class="button-item " :class="step == 3 ? 'button-item active' : 'button-item'">
            <strong>3</strong>
            <p style="font-size: 11px">Imagen Looler Cedúla</p>
          </a>
          <a class="button-item " :class="step == 4 ? 'button-item active' : 'button-item'">
            <strong>
              <ion-icon name="checkmark-outline" role="img" class="md hydrated" aria-label="checkmark outline">
              </ion-icon>
            </strong>
            <p style="font-size: 11px">Revisa tus datos</p>
          </a>
        </div>
      </div>
      <div id="appCapsule" class="extra-header-active">
        <div class="section mt-5" style="text-align: center">
          <img src="/images/logo/isotipo.svg" alt="image" class="form-image" style="max-width: 130px; width: 100%" />
          <h4 class="mt-2">
            {{
            step == 1
            ? " Primero necesitamos conocerte"
            : step == 2
            ? "Adjunta una foto de tu cédula de identidad"
            : step == 3
            ? "Adjunta una foto tuya sosteniendo tu identificación"
            : step == 4
            ? "Revisa que tus datos estén correctos"
            : ""
            }}
          </h4>
        </div>

        <div class="section mb-2 mt-2">
          <div class="">
            <form action="app-components.html">
              <div v-if="step == 1">
                <div class="form-group boxed">
                  <div class="input-wrapper">
                    <label class="label white" for="email1">Nombre</label>
                    <input type="text" class="form-control" id="name1" placeholder="Nombre completo"
                      v-model="inputs.fullname" @change="validateName()" />
                    <i class="clear-input" style="display: flex;" @click="clearInput(1)" v-if="inputs.fullname">
                      <ion-icon name="close-circle" @click="clearInput(1)" role="img" class="md hydrated hover_link"
                        aria-label="close circle"></ion-icon>
                    </i>


                  </div>
                  <div class="invalid-input" v-if="error_name == false">
                    El nombre es obligatorio
                  </div>
                </div>
                <div class="form-group boxed">
                  <div class="input-wrapper" style="text-align: left">
                    <label class="label white" for="email1">Correo</label>
                    <input type="email" class="form-control" id="email1" placeholder="Correo" v-model="inputs.email"
                      @change="validateEmail()" />
                    <i class="clear-input" style="display: flex;" @click="clearInput(2)" v-if="inputs.email">
                      <ion-icon name="close-circle" role=" img" class="md hydrated hover_link"
                        aria-label="close circle">
                      </ion-icon>
                    </i>

                  </div>
                  <div class="invalid-input" v-if="error_email == false">
                    {{ error_mail }}
                  </div>
                </div>

                <div class="form-group boxed">
                  <div class="input-wrapper" style="text-align: left">
                    <label class="label white" for="email1">Contraseña</label>
                    <input type="password" class="form-control" id="password1" autocomplete="off"
                      placeholder="Ingrese su contraseña" v-model="inputs.password" @change="validatePasswords()" />
                    <i class="clear-input" style="display: flex;" @click="seePassword(1)">
                      <ion-icon :name="icon_name" role="img" class="md hydrated hover_link" aria-label="close circle">
                      </ion-icon>
                    </i>

                  </div>
                  <div class="invalid-input" v-if="error_password == false">
                    La contraseña debe tener entre 8 y 16 caracteres
                  </div>
                </div>

                <div class="form-group boxed">
                  <div class="input-wrapper" style="text-align: left">
                    <label class="label white" for="email1">Repita la Contraseña</label>
                    <input type="password" class="form-control" id="password2" autocomplete="off"
                      placeholder="Confirmar contraseña" v-model="inputs.confirm_pass" @change="validatePasswords()" />
                    <i class="clear-input " @click="seePassword(2)" style="display: flex;">
                      <ion-icon :name="icon_name" role="img" class="md hydrated hover_link" aria-label="close circle">
                      </ion-icon>
                    </i>

                  </div>
                  <div class="invalid-input" v-if="error_confirm_password == false">
                    La contraseñas no coinciden
                  </div>
                </div>
                <div class="form-group boxed">
                  <div class="input-wrapper" style="text-align: left">
                    <label class="label white" for="email1">Nombre de usuario</label>
                    <input type="text" class="form-control" id="username" autocomplete="off"
                      placeholder="Ingrese su nombre de usuario" v-model="inputs.username" maxlength="30"
                      @keyup="noSpaces" @change="validateUsername()" />
                    <i class="clear-input" style="display: flex;" @click="clearInput(3)" v-if="inputs.username">
                      <ion-icon name="close-circle" role="img" class="md hydrated hover_link" aria-label="close circle">
                      </ion-icon>
                    </i>

                  </div>
                  <div class="invalid-input" v-if="error_username == false">
                    {{ error_usr_msg }}
                  </div>
                </div>
                <div class="form-group boxed">
                  <div class="input-wrapper">
                    <label class="label white" for="email1">Nacionalidad</label>
                    <select @change="validateCountry" class="form-control form-select" id="country"
                      v-model="inputs.country">
                      <option :value="country.id" :key="key" v-for="(country, key) in form_data.countries">
                        {{ country.country }}
                      </option>
                    </select>
                    <div class="invalid-input" v-if="error_country == false">
                      Debes seleccionar un país
                    </div>
                  </div>
                </div>
                <div class="form-group boxed">
                  <div class="input-wrapper" style="text-align: left">
                    <label class="label white" for="rut">Rut/DNI</label>
                    <input type="text" class="form-control" id="dni" autocomplete="off"
                      placeholder="Ingresa tu rut sin puntos ni guion" v-model="inputs.dni" @change="validateDni()" />
                    <i class="clear-input" style="display: flex;" @click="clearInput(4)" v-if="inputs.dni">
                      <ion-icon name="close-circle" role="img" class="md hydrated hover_link" aria-label="close circle">
                      </ion-icon>
                    </i>

                  </div>
                  <div class="invalid-input" v-if="error_rut == false">
                    {{ error_dni_msg }}
                  </div>
                </div>
                <div class="form-group boxed">
                  <div class="input-wrapper">
                    <label class="label white" for="email1">Género</label>
                    <select @change="validateGenero" class="form-control form-select" id="sex" v-model="inputs.sex">
                      <option :value="gender.id" :key="key" v-for="(gender, key) in form_data.gender">
                        {{ gender.gender }}
                      </option>
                    </select>
                    <div class="invalid-input" v-if="error_genero == false">
                      Debes seleccionar un género
                    </div>
                  </div>
                </div>
                
              </div>
              <div v-if="step == 2">
                <input accept="image/*" hidden="true" id="file_cedula" name="cedula" ref="file_cedula" type="file"
                  @change="onchangeFirstFile" />
                <div class="dv-btn-publish mt-5">
                  <button class="
                      btn btn-icon btn-lg
                      bg-gradient-white-looler-btn
                      me-1
                      mb-1
                    " style="
                      border-radius: 100px;
                      width: 75px;
                      height: 75px;
                      background: white;
                    " type="button" @click="selectFileDni()">
                    <ion-icon aria-label="add outline" class="md hydrated" name="camera-outline" role="img"
                      style="padding: 0.7rem 0.7rem">
                    </ion-icon>
                  </button>
                  <div class="invalid-input" style="text-align: center" v-if="error_img_one == false">
                    Debes seleccionar un archivo
                  </div>
                </div>
                <ul class="listview image-listview mt-5" style="border-radius: 5px" v-if="file_one.length != 0">
                  <li>
                    <div class="item">
                      <div class="icon-box bg-primary">
                        <ion-icon name="image-outline" role="img" class="md hydrated" aria-label="image outline">
                        </ion-icon>
                      </div>
                      <div class="in">
                        <div>{{ shortName(file_one.name) }}</div>

                        <ion-icon name="close-outline" class="hover_link" @click="removeFirstFile"
                          style="font-size: 25px">
                        </ion-icon>
                      </div>
                    </div>
                  </li>
                </ul>
                <a @click="whatIsThis" class="hover_link">

                  <div class="mt-5">
                    <p style="text-align: center" class="white">
                      ¿Que es esto?
                      <ion-icon name="help-circle-outline" style="font-size: 20px"></ion-icon>
                    </p>
                  </div>

                </a>
              </div>
              <div v-if="step == 3">
                <input accept="image/*" hidden="true" id="file_cedula_and_looler_img" name="cedula_and_looler"
                  type="file" @change="onchangeSecondtFile" />

                <div class="dv-btn-publish mt-5">
                  <button class="
                      btn btn-icon btn-lg
                      bg-gradient-white-looler-btn
                      me-1
                      mb-1
                    " style="
                      border-radius: 100px;
                      width: 75px;
                      height: 75px;
                      background: white;
                    " @click="selectFileDniWithLooler()" type="button">
                    <ion-icon aria-label="add outline" class="md hydrated" name="camera-outline" role="img"
                      style="padding: 0.7rem 0.7rem">
                    </ion-icon>
                  </button>
                  <div class="invalid-input" style="text-align: center" v-if="error_img_two == false">
                    Debes seleccionar un archivo
                  </div>
                </div>

                <ul class="listview image-listview mt-5" style="border-radius: 5px" v-if="file_two.length != 0">
                  <li>
                    <div class="item">
                      <div class="icon-box bg-primary">
                        <ion-icon name="image-outline" role="img" class="md hydrated" aria-label="image outline">
                        </ion-icon>
                      </div>
                      <div class="in">
                        <div>{{ shortName(file_two.name) }}</div>

                        <ion-icon name="close-outline" class="hover_link" @click="removeSecondFile"
                          style="font-size: 25px">
                        </ion-icon>
                      </div>
                    </div>
                  </li>
                </ul>
                <a @click="whatIsThis" class="hover_link">
                  <div class="mt-5">
                    <p style="text-align: center" class="white">
                      ¿Que es esto?
                      <ion-icon name="help-circle-outline" style="font-size: 20px"></ion-icon>
                    </p>
                  </div>
                </a>
              </div>
              <div v-if="step == 4">
                <ul class="listview image-listview">
                  <li>
                    <div class="item">
                      <div class="in">
                        <div>Nombre</div>
                        <span class="">
                          <strong>{{ inputs.fullname }}</strong></span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <div class="in">
                        <div>Nombre de usuario</div>
                        <span class="">
                          <strong>{{ inputs.username }}</strong></span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <div class="in">
                        <div>Rut/DNI</div>
                        <span class="">
                          <strong>{{ inputs.dni }}</strong></span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <div class="in">
                        <div>Género</div>
                        <span class="">
                          <strong>{{ gender_name }}</strong></span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <div class="in">
                        <div>Nacionalidad</div>
                        <span class="">
                          <strong>{{ country_name }}</strong></span>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="listview image-listview" v-if="file_one.length != 0">
                  <li>
                    <div class="item">
                      <div class="icon-box bg-primary hover_link">
                        <ion-icon name="image-outline" role="img" class="md hydrated " aria-label="image outline">
                        </ion-icon>
                      </div>
                      <div class="in">
                        <div>{{ shortName(file_one.name) }}</div>

                        <ion-icon name="eye-outline" class="hover_link" @click="showFifle(file_one)"
                          style="font-size: 25px !important">
                        </ion-icon>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="listview image-listview" v-if="file_two.length != 0">
                  <li>
                    <div class="item">
                      <div class="icon-box bg-primary ">
                        <ion-icon name="image-outline" role="img" class="md hydrated " aria-label="image outline">
                        </ion-icon>
                      </div>
                      <div class="in">
                        <div>{{ shortName(file_two.name) }}</div>

                        <ion-icon name="eye-outline" class="hover_link" @click="showFifle(file_two)"
                          style="font-size: 25px !important">
                        </ion-icon>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="mt-5 text-start">
                  <div class="form-check" style="text-align: center">
                    <input type="checkbox" class="form-check-input" id="customCheckb1" v-model="inputs.terms_conditions"
                      @change="validateTernmconditions()" />
                    <label class="form-check-label" for="customCheckb1">Acepto
                      <router-link target="_blank" to="/Terms">
                        Los Términos y Condiciones
                      </router-link>
                    </label>
                    <div style="text-align: center" class="invalid-input" v-if="error_term_conditions == false">
                      Debes aceptar los Términos y Condiciones
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div class="mt-5">
              <button type="button" @click="nextStep" class="btn btn-primary btn-lg btn-block rounded">
                {{step != 4 ? 'Siguiente':(step==4 ? 'Ser Looler':'')}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade dialogbox" id="what_is_this" data-bs-backdrop="static" tabindex="-1" style="display: none"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="max-width: 600px">
          <div class="modal-header">
            <h5 class="modal-title">
              {{step == 2? "Documento nacional de identidad":( step == 3? "Sosteniendo tu identificación": "")}}
            </h5>
          </div>
          <form>
            <div class="modal-body text-start mb-2">
              <div class="py-3 text-center">
                <img
                  :src="step == 2? '/images/register/Cedula.svg':( step == 3? '/images/register/Cedula_Looler.svg': '')" />
              </div>
              <div class="col-lg-12 col-md-7 mx-auto">
                <div class="text-center">
                  <div class="mb-3 white">
                    {{step == 2 ? first_text:(step == 3 ? second_text:'')}}
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="btn-inline">
                <button class="btn btn-text-secondary" type="button" data-bs-dismiss="modal">
                  Entendido
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade dialogbox show" id="preview_img" data-bs-backdrop="static" tabindex="-1" role="dialog"
      aria-modal="true" style="display: none">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="max-width: 600px;max-height: 600px !important;">
          <img :src="file_show" alt="image" class="img-fluid" />
          <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="btn btn-text-secondary" data-bs-dismiss="modal">Cerrar</a>
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
        error_name: null,
        error_email: null,
        error_password: null,
        error_confirm_password: null,
        error_term_conditions: null,
        error_username: null,
        error_rut: null,
        error_genero: null,
        error_country: null,
        error_mail: "",
        formData: new FormData(),
        load: false,
        form_complete: false,
        form_data: [],
        file_one: [],
        file_two: [],
        file_show: [],
        error_usr_msg: "",
        error_dni_msg: "",
        error_img_one: null,
        error_img_two: null,
        first_text: "Adjunta una foto de tu documento nacional de identidad (CI, DNI, RG), Loole necesita de esta información por motivos de seguridad.",
        second_text: "Adjunta una foto sosteniendo tu documento de identidad, Loole necesita de esta información por motivos de seguridad.",
        gender_name: "",
        country_name: "",
        icon_name: "eye-outline",
        load: false,
        inputs: {
          fullname: "",
          email: "",
          password: "",
          confirm_pass: "",
          terms_conditions: "",
          username: "",
          dni: "",
          sex: "",
          country: "",
        },
      };
    },
    created: function () {
      document.getElementById("body_element").className =
        "bg-white dark-mode-active";
      document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;background-attachment: fixed !important;"

      this.getData();
    },
    methods: {
      registerLooler: function () {
        this.load = true
        this.formData.append("name", this.inputs.fullname);
        this.formData.append("email", this.inputs.email);
        this.formData.append("password", this.inputs.password);
        this.formData.append("dni", this.inputs.dni);
        this.formData.append("gender", this.inputs.sex);
        this.formData.append("country", this.inputs.country);
        this.formData.append("username", this.inputs.username);
        this.formData.append('cedula', this.file_one);
        this.formData.append('cedula_and_looler', this.file_two);
        axios.post('/auth/singup/register/looler', this.formData).then(response => {
          if (response.data.code == 200) {
            localStorage.setItem("authUser", JSON.stringify(response.data.authUser));
            window.location.replace('/home');
            location.reload();
          } else {
            if (response.data.code == 401) {
              let type = "error";
              let message = "Se produjo un error, contacta con soporte"
              this.$eventBus.$emit('display-alert', type, message)
              this.load = false

            }
          }
        })


      },

      validateTernmconditions() {
        if (this.inputs.terms_conditions) {
          this.error_term_conditions = true;
        } else {
          if (!this.inputs.terms_conditions) {
            this.error_term_conditions = false;
          }
        }
      },
      validateName() {
        if (this.inputs.fullname == "") {
          this.error_name = false;
        } else {

          this.error_name = true;
        }
      },
      validateGenero() {
        if (this.inputs.sex == "") {
          this.error_genero = false;
        } else {
          let elementFindGenderName = this.form_data.gender.find((obj => obj.id == this.inputs.sex));

          this.gender_name = elementFindGenderName.gender
          this.error_genero = true;
        }


      },
      validateCountry() {
        if (this.inputs.country == "") {
          this.error_country = false;
        } else {
          let elementFindCountryName = this.form_data.countries.find((obj => obj.id == this.inputs.country));

          this.country_name = elementFindCountryName.country
          this.error_country = true;
        }
      },
      validatePasswords() {
        if (this.inputs.password == "") {
          this.error_password = false;
        } else {
          if (this.inputs.password != "") {
            if (this.inputs.password.length >= 8) {
              this.error_password = true;
            } else {
              this.error_password = false;
            }
          }
        }
        if (this.inputs.confirm_pass == "") {
          this.error_confirm_password = false;
        } else {
          if (this.inputs.confirm_pass != "") {
            if (this.inputs.confirm_pass != this.inputs.password) {
              this.error_confirm_password = false;
            } else {
              if (this.inputs.confirm_pass == this.inputs.password) {
                this.error_confirm_password = true;
              }
            }
          }
        }
      },
      validateEmail() {
        if (this.inputs.email != "") {
          let emailRegex =
            /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          if (emailRegex.test(this.inputs.email)) {
            axios
              .get(`/validate-email-form?email=${this.inputs.email}`)
              .then((response) => {
                if (response.data) {
                  this.error_mail =
                    "Este correo electrónico ya está registrado en Loole";
                  this.error_email = false;
                  return false;
                } else {
                  this.error_email = true;
                  return true;
                }
              });
          } else {
            this.error_mail = " El correo electrónico ingresado es incorrecto";
            this.error_email = false;
            return false;
          }
        } else {
          this.error_mail = " El correo electrónico requerido";
          this.error_email = false;
          return false;
        }
      },
      noSpaces() {
        this.inputs.username = this.inputs.username.replace(/ /g, "");
      },
      validateUsername() {
        if (this.inputs.username == "") {
          this.error_username = false;
          this.error_usr_msg = " El nombre de usuario es requerido";
        } else {
          if (this.inputs.username != "") {
            axios
              .get(`/is-available-user-name?user_name=${this.inputs.username}`)
              .then((response) => {
                if (response.data == 1) {
                  this.error_usr_msg = "El nombre de usuario ingresado ya existe";
                  this.error_username = false;
                } else {
                  this.error_usr_msg = "";
                  this.error_username = true;
                }
              });
          }
        }
      },
      validateDni() {
        if (
          this.inputs.dni.length == 10 ||
          this.inputs.dni.length == 9 ||
          this.inputs.dni.length == 11
        ) {
          if (this.inputs.dni.includes("-")) {
            axios
              .get(`/validate-rut-form?dni=${this.inputs.dni}`)
              .then((response) => {
                if (response.data) {
                  this.error_dni_msg = "El rut ingresado ya existe";
                  this.error_rut = false;
                } else {
                  if (this.validaRut(this.inputs.dni)) {
                    this.error_rut = true;
                  } else {
                    this.error_dni_msg = "El rut ingresado no es correcto";

                    this.error_rut = false;
                  }
                }
              });
          } else {
            var dv = this.inputs.dni.substr(-1);
            var rt = this.inputs.dni.slice(0, -1);
            this.inputs.dni = rt + "-" + dv;
            axios
              .get(`/validate-rut-form?dni=${this.inputs.dni}`)
              .then((response) => {
                if (response.data) {
                  this.error_dni_msg = "El rut ingresado ya existe";
                  this.error_rut = false;
                } else {
                  if (this.validaRut(this.inputs.dni)) {
                    this.error_rut = true;
                  } else {
                    this.error_dni_msg = "El rut ingresado no es correcto";
                    this.error_rut = false;
                  }
                }
              });
          }
        } else {
          if (this.inputs.dni == "") {
            this.error_dni_msg = "El rut es un campo requerido";
            this.error_rut = false;
          } else {
            if (this.inputs.dni.length < 9) {
              this.error_dni_msg = "El rut ingresado no es correcto";

              this.error_rut = false;
            }
          }
        }
      },

      // Valida el rut con su cadena completa "XXXXXXXX-X"
      validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
        var tmp = rutCompleto.split("-");
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == "K") digv = "k";
        return this.dv(rut) == digv;
      },
      dv: function (T) {
        var M = 0,
          S = 1;
        for (; T; T = Math.floor(T / 10))
          S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
        return S ? S - 1 : "k";
      },

      backStep() {
        if (this.step == 4) {
          this.step = 3;
        } else {
          if (this.step == 3) {
            this.step = 2;
          } else {
            if (this.step == 2) {
              this.step = 1;
            }
          }
        }
      },
      nextStep(step) {
        if (this.step == 1) {
          this.validateName();
          this.validateGenero();
          this.validateCountry();
          this.validatePasswords();
          this.validateEmail();
          this.validateUsername();
          this.validateDni();
          if (
            this.error_name == true &&
            this.error_email == true &&
            this.error_password == true &&
            this.error_confirm_password == true &&
            this.error_username == true &&
            this.error_rut == true &&
            this.error_genero == true &&
            this.error_country == true
          ) {
            this.step = 2;
          }
        } else {
          if (this.step == 2) {
            if (this.file_one.length == 0) {
              this.error_img_one = false;
            } else {
              this.error_img_one = true;
              this.step = 3;
            }
          } else {
            if (this.step == 3) {
              if (this.file_two.length == 0) {
                this.error_img_two = false;
              } else {
                this.error_img_two = true;
                this.step = 4;
                this.form_complete = true;
              }
            } else {
              if (this.step == 4) {
                if (this.inputs.terms_conditions == true) {
                  this.registerLooler();
                } else {
                  if (this.inputs.terms_conditions != true) {
                    this.error_term_conditions = false;
                  }
                }
              }
            }
          }
        }
      },

      getData() {
        axios.get("/form/data").then((response) => {
          this.form_data = response.data;
        });
      },
      selectFileDni() {
        let inp = document.getElementById("file_cedula");
        inp.click();
      },
      selectFileDniWithLooler() {
        let file = document.getElementById("file_cedula_and_looler_img");
        file.click();
      },
      onchangeFirstFile(e) {
        this.error_img_one = true;
        this.file_one = e.target.files[0];
      },
      onchangeSecondtFile(e) {
        this.error_img_two = true;
        this.file_two = e.target.files[0];
      },
      removeFirstFile() {
        this.file_one = [];
      },
      removeSecondFile() {
        this.file_two = [];
      },
      whatIsThis() {
        $("#what_is_this").modal("show");
      },
      read(file) {
        return URL.createObjectURL(file);
      },
      showFifle(file) {
        this.file_show = this.read(file);
        $("#preview_img").modal("show");
      },
      seePassword(input) {
        let passW1 = document.getElementById("password1")
        let passW2 = document.getElementById("password2")
        if (input == 1) {
          if (passW1.type == "password") {
            passW1.type = "text"
          } else {
            passW1.type = "password"
          }
        }
        if (input == 2) {
          if (passW2.type == "password") {
            passW2.type = "text"
          } else {
            passW2.type = "password"
          }
        }


      },
      clearInput(input) {
        if (input == 1) {
          this.inputs.fullname = ""
        }
        if (input == 2) {
          this.inputs.email = ""
        }
        if (input == 3) {
          this.inputs.username = ""
        }
        if (input == 4) {
          this.inputs.dni = ""
        }
      },
      shortName(name) {
        if (name.length > 20) {
          let first_letters = name.substr(0, 17) + "...";
          return first_letters;
        } else {
          return name;
        }
      }

    },
  };
</script>

<style>
</style>