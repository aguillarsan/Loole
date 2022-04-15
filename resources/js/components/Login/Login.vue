<template>
  <div>
    <div class="appHeader no-border transparent position-absolute animated fadeIn" v-if="!load">
      <div class="left">
        <router-link to="/Landing" class="headerButton goBack">
          <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
          </ion-icon>
        </router-link>
      </div>


    </div>
    <div id="appCapsule" class="pt-0">
      <div class="login-form ">
        <div class="section" style="margin-bottom: 1.5rem !important">
          <img src="/images/logo/isotipo.svg" alt="image" class="form-image "
            style="max-width: 140px; width: 100%; margin-top: 100px;" />
        </div>
        <div class="section mt-5">
          <h4 class="white" style="text-align:center">
            Se parte de una comunidad exclusiva para creadores de contenido e
            interactúa con tus Loolers.
          </h4>
        </div>
        <div class="section mt-1" style="margin-top: 1rem !important">
          <form action="app-pages.html">
            <div class="form-group boxed">
              <div class="input-wrapper" style="text-align:left">
                <label class="label white" for="email1">Correo</label>
                <input type="email" class="form-control" id="email1" placeholder="Correo Electronico"
                  v-model="inputs.email" />
                <i class="clear-input" style="display: flex;" @click="clearInput" v-if="inputs.email">
                  <ion-icon name="close-circle" role="img" class="md hydrated hover_link" aria-label="close circle">
                  </ion-icon>
                </i>

              </div>
              <div class="invalid-input" v-if="email_validate.validate == false">
                {{
                email_validate.text_required_input != null
                ? email_validate.text_required_input
                : email_validate.text_error_format
                }}
              </div>
            </div>

            <div class="form-group boxed">
              <div class="input-wrapper" style="text-align:left">
                <label class="label white" for="email1">Contrseña</label>
                <input type="password" class="form-control" id="password1" placeholder="Ingrese su contraseña"
                  autocomplete="off" v-model="inputs.password" />
                <i class="clear-input " @click="seePassword" style="display: flex;">
                  <ion-icon name="eye-outline" role="img" class="md hydrated hover_link" aria-label="close circle">
                  </ion-icon>
                </i>

              </div>
              <div class="invalid-input" v-if="password_validate == false">
                La contraseña es requerida
              </div>
            </div>

            <div class="mt-2" @click="login()" style="margin-top: 2rem !important">
              <button type="button" style="width: 100%" class="btn btn-primary bg-primary-loole rounded me-1"
                :disabled="load ? true : false">
                <span class="spinner-border spinner-border-sm me-05" v-if="load" role="status"
                  aria-hidden="true"></span>
                Iniciar sesión
              </button>
              <div class="invalid-input" v-if="error_login == false">
                Correo electrónico o contraseña incorrectos
              </div>
            </div>
            <hr style="margin-top: 2rem" />
            <div class="section mt-1">
              <h5 class="white">¿Aún no tienes una cuenta?</h5>
            </div>
            <div class="register-btn-login mt-2">
              <div>
                <router-link to="/Register">
                  <button type="button" class="btn btn-secondary bg-secondary-loole rounded me-1">
                    Ser Fan
                  </button>
                </router-link>
              </div>
              <div>
                <router-link to="/SingUp">
                  <button type="button" class="btn btn-primary bg-primary-loole rounded me-1">
                    Ser looler
                  </button>
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade dialogbox" id="DialogIconedDanger" data-bs-backdrop="static" tabindex="-1"
      style="display: none;" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="max-width: 600px;max-height: 600px !important;" >
          <div class="modal-icon text-danger">
            <ion-icon name="person-remove-outline"></ion-icon>
            
          </div>
          <div class="modal-header">
            <h5 class="modal-title">Error</h5>
          </div>
          <div class="modal-body white">
            Su cuenta fue eliminada de Loole, Si deseas reactivar tu cuenta debes enviar un correo a
            concato@loolapp.com.
          </div>
          <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="btn" data-bs-dismiss="modal">Cerrar</a>
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
        inputs: {
          email: "",
          password: "",
        },
        email_validate: {
          validate: null,
          text_required_input: null,
          text_error_format: null,
        },
        password_validate: null,
        error_login: null,
        load: false,
      };
    },
    created: function () {
      
      document.getElementById("body_element").className =
        "bg-white dark-mode-active";
      document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;background-attachment:fixed !important;"

      addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.login();
        }
      });
    },
    methods: {

      login: function () {
        this.validateData();
        if (this.password_validate && this.email_validate.validate) {
          this.load = true;
          let formData = new FormData();
          formData.append("email", this.inputs.email);
          formData.append("password", this.inputs.password);
          axios.post("/authenticate/login", formData).then((response) => {
            console.log(response.data.code);
            if (response.data.code == 200) {

              this.loginSucces(response.data.authUser);
            }
            if (response.data.code == 500) {

              $("#DialogIconedDanger").modal("show")
              this.load = false;
            }
            if (response.data.code == 401) {
              this.loginFalied();
            }
          });
        }
      },
      validateData: function () {
        if (this.inputs.email != "") {
          let emailRegex =
            /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          if (emailRegex.test(this.inputs.email)) {
            this.email_validate.validate = true;
          } else {
            this.email_validate.validate = false;
            this.email_validate.text_error_format =
              "El correo electrónico no es valido";
            this.email_validate.text_required_input = null;
          }
        } else {
          this.email_validate.validate = false;
          this.email_validate.text_error_format = null;
          this.email_validate.text_required_input =
            "El correo electrónico es requerido";
        }
        if (this.inputs.password == "") {
          this.password_validate = false;
        } else {
          if (this.inputs.password != "") {
            this.password_validate = true;
          }
        }
      },
      loginSucces: function (authUser) {
        console.log(authUser.role_id)
        if (authUser.role_id == 1) {

          localStorage.setItem("authUser", JSON.stringify(authUser));
          window.location.replace('/Admin');
          location.reload();
        } else {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          window.location.replace('/Home');
          location.reload();
        }

      },
      loginFalied() {
        this.load = false;
        this.error_login = false;
      },
      clearInput() {
        let email = document.getElementById("email1")
        this.inputs.email = ""
      },
      seePassword() {
        let passInput = document.getElementById("password1")
        if (passInput.type == "password") {
          passInput.type = "text"
        } else {
          passInput.type = "password"
        }


      }
    },
  };
</script>