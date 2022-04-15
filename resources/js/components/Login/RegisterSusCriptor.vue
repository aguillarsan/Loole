<template>
  <div>
    <div class="logo-load-center " v-if="load">
      <img class="animate-flicker" src="/images/img_0.png" />
    </div>
    <div class="appHeader no-border transparent position-absolute animated fadeIn" v-if="!load">
      <div class="left">
        <router-link to="/Login" class="headerButton goBack">
          <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
          </ion-icon>
        </router-link>
      </div>
      <div class="pageTitle"></div>
      <div class="right">
        <router-link to="/Login" class="headerButton text-primary"> Login </router-link>
      </div>
    </div>
    <div id="appCapsule" v-if="!load">
      <div class="login-form">
        <div class="section">
          <img src="/images/logo/isotipo.svg" alt="image" class="form-image" style="max-width: 130px; width: 100%" />
          <h4 class="mt-2">Miles de Loolers están esperando por ti</h4>
        </div>
        <div class="section mt-2 mb-5">
          <form action="app-pages.html">
            <div class="form-group boxed">
              <div class="input-wrapper" style="text-align:left">
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
              <div class="input-wrapper" style="text-align:left">
                <label class="label white" for="email1">Correo</label>
                <input type="email" class="form-control" id="email1" placeholder="Correo" v-model="inputs.email"
                  @change="validateEmail()" />
                <i class="clear-input" style="display: flex;" @click="clearInput(2)" v-if="inputs.email">
                  <ion-icon name="close-circle" @click="clearInput(1)" role="img" class="md hydrated hover_link"
                    aria-label="close circle"></ion-icon>
                </i>

              </div>
              <div class="invalid-input" v-if="error_email == false">
                {{ error_mail }}
              </div>
            </div>

            <div class="form-group boxed">
              <div class="input-wrapper" style="text-align:left">
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
              <div class="input-wrapper " style="text-align:left">
                <label class="label white" for="email1">Repita la Contraseña</label>
                <input type="password" class="form-control" id="password2" autocomplete="off"
                  placeholder="Confirmar contraseña" v-model="inputs.confirm_pass" @change="validatePasswords()" />
                <i class="clear-input" style="display: flex;" @click="seePassword(2)">
                  <ion-icon :name="icon_name" role="img" class="md hydrated hover_link" aria-label="close circle">
                  </ion-icon>
                </i>

              </div>
              <div class="invalid-input" v-if="error_confirm_password == false">
                La contraseñas no coinciden
              </div>
            </div>

            <div class="mt-5 text-start">
              <div class="form-check">
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

            <div class="mt-5" @click.prevent="register()">
              <button type="submit" style="width: 100%" class="btn btn-primary rounded me-1"
                :disabled="load ? true:false">
                <span class="spinner-border spinner-border-sm me-05" v-if="load" role="status"
                  aria-hidden="true"></span>
                Inscribirse
              </button>
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
        error_name: null,
        error_email: null,
        error_password: null,
        error_confirm_password: null,
        error_term_conditions: null,
        inputs: {
          fullname: "",
          email: "",
          password: "",
          confirm_pass: "",
          terms_conditions: "",
        },
        error_mail: "",
        formData: new FormData(),
        load: false,
        icon_name: "eye-outline",
      };
    },
    created: function () {
      document.getElementById("body_element").className =
        "bg-white dark-mode-active";
      document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;background-attachment: fixed !important;"

    },
    methods: {
      register: function () {
        this.validateTernmconditions();
        this.validateEmail();
        this.validateName();
        this.validatePasswords();
        if (
          this.error_term_conditions &&
          this.error_name &&
          this.inputs.password &&
          this.inputs.confirm_pass &&
          this.error_email
        )
          this.load = true
        this.formData.append("name", this.inputs.fullname);
        this.formData.append("email", this.inputs.email);
        this.formData.append("password", this.inputs.password);

        axios.post("/register/suscriptor", this.formData).then((response) => {

          if (response.data.code == 200) {
            localStorage.setItem("authUser", JSON.stringify(response.data.authUser));
            window.location.replace('/home');
            location.reload();
          }
        });
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

      }
    },
  };
</script>

<style>
</style>