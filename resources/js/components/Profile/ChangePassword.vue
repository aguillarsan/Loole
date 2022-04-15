<template>
  <div>
    <div class="appHeader box-shw-profile-header">
      <div class="left" id="back_arrow">
        <router-link :to="'/Profile/Settings'" class="headerButton goBack">
          <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
          </ion-icon>
        </router-link>
      </div>
      <div class="pageTitle">Cambiar contraseña</div>
    </div>
    <div id="appCapsule">
      <div class="section full mt-2 mb-2" id="section_change_pass">
        <div class="wide-block pb-1 pt-2" style="border-top: none; border-bottom: none">
          <form>
            <div class="form-group boxed">
              <div class="input-wrapper">
                <label class="label " for="password">Contraseña actual</label>
                <input type="password" @change="comproveActualPass" class="form-control" v-model="input.password"
                  id="password1" placeholder="" autocomplete="off" />
                <i class="clear-input " @click="seePassword(1)" style="display: flex;">
                  <ion-icon name="eye-outline" role="img" class="md hydrated hover_link" aria-label="close circle">
                  </ion-icon>
                </i>
              </div>
              <div class="invalid-input" v-if="pass_check == false">
                {{error_text.txt_password}}
              </div>
            </div>

            <div class="form-group boxed">
              <div class="input-wrapper">
                <label class="label " for="newPassword">Nueva contraseña</label>
                <input type="password" maxlength="16" @change="comprobeNewPass()" class="form-control" id="password2"
                  placeholder="" v-model="input.newpassword" autocomplete="off" />
                <i class="clear-input " @click="seePassword(2)" style="display: flex;">
                  <ion-icon name="eye-outline" role="img" class="md hydrated hover_link" aria-label="close circle">
                  </ion-icon>
                </i>
              </div>
              <div class="invalid-input" v-if="new_pass_check == false">
                {{error_text.txt_newpassword}}
              </div>
            </div>

            <div class="form-group boxed">
              <div class="input-wrapper">
                <label class="label " for="newRepeatPassword">Repita la contraseña</label>
                <input type="password" @change="comprobeRepeatNewPass" class="form-control" id="password3"
                  placeholder="" v-model="input.repeatpassword" autocomplete="off" />
                <i class="clear-input " @click="seePassword(3)" style="display: flex;">
                  <ion-icon name="eye-outline" role="img" class="md hydrated hover_link" aria-label="close circle">
                  </ion-icon>
                </i>
              </div>

            </div>
            <div class="invalid-input" v-if="confirm_pass_check == false">
              {{error_text.txt_repeatpassword}}
            </div>
            <div class="mt-5">
              <button type="button" @click="changePassword"
                class="btn btn-primary bg-primary-loole rounded btn-block btn-lg" :disabled="load ? true : false">
                <span class="spinner-border spinner-border-sm me-05" v-if="load" role="status"
                  aria-hidden="true"></span>
                Guardar cambios
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
    props: ["usuario"],
    data() {
      return {
        input: {
          password: "",
          newpassword: "",
          repeatpassword: ""
        },
        error_text: {
          txt_password: "",
          txt_newpassword: "",
          txt_repeatpassword: ""
        },
        formData: new FormData,
        pass_check: null,
        new_pass_check: null,
        confirm_pass_check: null,
        load: false
      }
    },
    methods: {
      seePassword(input) {

        let passW1 = document.getElementById("password1")
        let passW2 = document.getElementById("password2")
        let passW3 = document.getElementById("password3")
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
        if (input == 3) {
          if (passW3.type == "password") {
            passW3.type = "text"
          } else {
            passW3.type = "password"
          }
        }



      },
      changePassword: function () {

        this.validateForm();
        this.comprobeRepeatNewPass();


        if (this.pass_check && this.new_pass_check && this.confirm_pass_check) {
          this.load = true;
          this.formData.append('old_password', this.input.password)
          this.formData.append('new_password', this.input.newpassword)

          axios.post('/setting/change/old/password', this.formData).then(response => {
            if (response.data) {
              this.load = false;
              let type = "success"
              let message = "Contraseña cambiada"
              this.$eventBus.$emit('display-alert-appp', type, message);
              this.cleanInputs()
            } else {
              let type = "error"
              let message = "Error al cambiar la contraseña"
              this.$eventBus.$emit('display-alert-appp', type, message);
              this.load = false;
            }
          })
        }
      },
      validateForm() {
        if (this.input.password == "") {
          this.pass_check = false

          this.error_text.txt_password = 'La contraseña es un campo requerido'
        }
        if (this.input.newpassword == "") {
          this.new_pass_check = false

          this.error_text.txt_newpassword = 'Debes ingresar la nueva contraseña'
        }
        if (this.input.repeatpassword == "") {
          this.confirm_pass_check = false

          this.error_text.txt_repeatpassword = 'Debes repetir la contraseña'
        }
      },
      comprobeNewPass() {
        if (this.input.newpassword.length < 8) {
          this.new_pass_check = false

          this.error_text.txt_newpassword = 'La contraseña debe tener entre 8 y 16 caracteres'
        } else {
          if (this.input.newpassword.length >= 8) {
            if (this.input.newpassword == this.input.password) {
              this.new_pass_check = false

              this.error_text.txt_newpassword = 'La nueva contraseña no puede ser igual a la anterior'
            } else {
              this.new_pass_check = true
            }

          }
        }
      },
      comprobeRepeatNewPass() {
        if (this.input.repeatpassword == "") {
          this.confirm_pass_check = false

          this.error_text.txt_repeatpassword = 'Debes repetir la contraseña'
        } else {
          if (this.input.repeatpassword != this.input.newpassword) {
            this.confirm_pass_check = false

            this.error_text.txt_repeatpassword = 'Las contraseñas no coinciden'
          } else {
            if (this.input.repeatpassword == this.input.newpassword) {
              this.confirm_pass_check = true

            }
          }
        }
      },
      comproveActualPass() {
        this.formData.append('password', this.input.password)
        axios.post('/profile/check/password', this.formData).then(response => {
          if (response.data) {
            this.pass_check = true
          } else {
            this.pass_check = false

            this.error_text.txt_password = 'La contraseña ingresada no es correcta'

          }
        })
      },
      cleanInputs() {
        this.input.password = "";
        this.input.newpassword = "";
        this.input.repeatpassword = "";
      }

    },
  };
</script>

<style>
</style>