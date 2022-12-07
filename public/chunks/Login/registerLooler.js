(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Login/registerLooler"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/RegisterLooler.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login/RegisterLooler.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
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
      icon_name: "eye-outline"
    }, _defineProperty(_ref, "load", false), _defineProperty(_ref, "inputs", {
      fullname: "",
      email: "",
      password: "",
      confirm_pass: "",
      terms_conditions: "",
      username: "",
      dni: "",
      sex: "",
      country: ""
    }), _ref;
  },
  created: function created() {
    document.getElementById("body_element").className = "bg-white dark-mode-active";
    document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;background-attachment: fixed !important;";
    this.getData();
  },
  methods: {
    registerLooler: function registerLooler() {
      var _this = this;

      this.load = true;
      this.formData.append("name", this.inputs.fullname);
      this.formData.append("email", this.inputs.email);
      this.formData.append("password", this.inputs.password);
      this.formData.append("dni", this.inputs.dni);
      this.formData.append("gender", this.inputs.sex);
      this.formData.append("country", this.inputs.country);
      this.formData.append("username", this.inputs.username);
      this.formData.append('cedula', this.file_one);
      this.formData.append('cedula_and_looler', this.file_two);
      axios.post('/auth/singup/register/looler', this.formData).then(function (response) {
        if (response.data.code == 200) {
          localStorage.setItem("authUser", JSON.stringify(response.data.authUser));
          window.location.replace('/home');
          location.reload();
        } else {
          if (response.data.code == 401) {
            var type = "error";
            var message = "Se produjo un error, contacta con soporte";

            _this.$eventBus.$emit('display-alert', type, message);

            _this.load = false;
          }
        }
      });
    },
    validateTernmconditions: function validateTernmconditions() {
      if (this.inputs.terms_conditions) {
        this.error_term_conditions = true;
      } else {
        if (!this.inputs.terms_conditions) {
          this.error_term_conditions = false;
        }
      }
    },
    validateName: function validateName() {
      if (this.inputs.fullname == "") {
        this.error_name = false;
      } else {
        this.error_name = true;
      }
    },
    validateGenero: function validateGenero() {
      var _this2 = this;

      if (this.inputs.sex == "") {
        this.error_genero = false;
      } else {
        var elementFindGenderName = this.form_data.gender.find(function (obj) {
          return obj.id == _this2.inputs.sex;
        });
        this.gender_name = elementFindGenderName.gender;
        this.error_genero = true;
      }
    },
    validateCountry: function validateCountry() {
      var _this3 = this;

      if (this.inputs.country == "") {
        this.error_country = false;
      } else {
        var elementFindCountryName = this.form_data.countries.find(function (obj) {
          return obj.id == _this3.inputs.country;
        });
        this.country_name = elementFindCountryName.country;
        this.error_country = true;
      }
    },
    validatePasswords: function validatePasswords() {
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
    validateEmail: function validateEmail() {
      var _this4 = this;

      if (this.inputs.email != "") {
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (emailRegex.test(this.inputs.email)) {
          axios.get("/validate-email-form?email=".concat(this.inputs.email)).then(function (response) {
            if (response.data) {
              _this4.error_mail = "Este correo electrónico ya está registrado en Loole";
              _this4.error_email = false;
              return false;
            } else {
              _this4.error_email = true;
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
    noSpaces: function noSpaces() {
      this.inputs.username = this.inputs.username.replace(/ /g, "");
    },
    validateUsername: function validateUsername() {
      var _this5 = this;

      if (this.inputs.username == "") {
        this.error_username = false;
        this.error_usr_msg = " El nombre de usuario es requerido";
      } else {
        if (this.inputs.username != "") {
          axios.get("/is-available-user-name?user_name=".concat(this.inputs.username)).then(function (response) {
            if (response.data == 1) {
              _this5.error_usr_msg = "El nombre de usuario ingresado ya existe";
              _this5.error_username = false;
            } else {
              _this5.error_usr_msg = "";
              _this5.error_username = true;
            }
          });
        }
      }
    },
    validateDni: function validateDni() {
      var _this6 = this;

      if (this.inputs.dni.length == 10 || this.inputs.dni.length == 9 || this.inputs.dni.length == 11) {
        if (this.inputs.dni.includes("-")) {
          axios.get("/validate-rut-form?dni=".concat(this.inputs.dni)).then(function (response) {
            if (response.data) {
              _this6.error_dni_msg = "El rut ingresado ya existe";
              _this6.error_rut = false;
            } else {
              if (_this6.validaRut(_this6.inputs.dni)) {
                _this6.error_rut = true;
              } else {
                _this6.error_dni_msg = "El rut ingresado no es correcto";
                _this6.error_rut = false;
              }
            }
          });
        } else {
          var dv = this.inputs.dni.substr(-1);
          var rt = this.inputs.dni.slice(0, -1);
          this.inputs.dni = rt + "-" + dv;
          axios.get("/validate-rut-form?dni=".concat(this.inputs.dni)).then(function (response) {
            if (response.data) {
              _this6.error_dni_msg = "El rut ingresado ya existe";
              _this6.error_rut = false;
            } else {
              if (_this6.validaRut(_this6.inputs.dni)) {
                _this6.error_rut = true;
              } else {
                _this6.error_dni_msg = "El rut ingresado no es correcto";
                _this6.error_rut = false;
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
    validaRut: function validaRut(rutCompleto) {
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];
      if (digv == "K") digv = "k";
      return this.dv(rut) == digv;
    },
    dv: function dv(T) {
      var M = 0,
          S = 1;

      for (; T; T = Math.floor(T / 10)) {
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
      }

      return S ? S - 1 : "k";
    },
    backStep: function backStep() {
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
    nextStep: function nextStep(step) {
      if (this.step == 1) {
        this.validateName();
        this.validateGenero();
        this.validateCountry();
        this.validatePasswords();
        this.validateEmail();
        this.validateUsername();
        this.validateDni();

        if (this.error_name == true && this.error_email == true && this.error_password == true && this.error_confirm_password == true && this.error_username == true && this.error_rut == true && this.error_genero == true && this.error_country == true) {
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
    getData: function getData() {
      var _this7 = this;

      axios.get("/form/data").then(function (response) {
        _this7.form_data = response.data;
      });
    },
    selectFileDni: function selectFileDni() {
      var inp = document.getElementById("file_cedula");
      inp.click();
    },
    selectFileDniWithLooler: function selectFileDniWithLooler() {
      var file = document.getElementById("file_cedula_and_looler_img");
      file.click();
    },
    onchangeFirstFile: function onchangeFirstFile(e) {
      this.error_img_one = true;
      this.file_one = e.target.files[0];
    },
    onchangeSecondtFile: function onchangeSecondtFile(e) {
      this.error_img_two = true;
      this.file_two = e.target.files[0];
    },
    removeFirstFile: function removeFirstFile() {
      this.file_one = [];
    },
    removeSecondFile: function removeSecondFile() {
      this.file_two = [];
    },
    whatIsThis: function whatIsThis() {
      $("#what_is_this").modal("show");
    },
    read: function read(file) {
      return URL.createObjectURL(file);
    },
    showFifle: function showFifle(file) {
      this.file_show = this.read(file);
      $("#preview_img").modal("show");
    },
    seePassword: function seePassword(input) {
      var passW1 = document.getElementById("password1");
      var passW2 = document.getElementById("password2");

      if (input == 1) {
        if (passW1.type == "password") {
          passW1.type = "text";
        } else {
          passW1.type = "password";
        }
      }

      if (input == 2) {
        if (passW2.type == "password") {
          passW2.type = "text";
        } else {
          passW2.type = "password";
        }
      }
    },
    clearInput: function clearInput(input) {
      if (input == 1) {
        this.inputs.fullname = "";
      }

      if (input == 2) {
        this.inputs.email = "";
      }

      if (input == 3) {
        this.inputs.username = "";
      }

      if (input == 4) {
        this.inputs.dni = "";
      }
    },
    shortName: function shortName(name) {
      if (name.length > 20) {
        var first_letters = name.substr(0, 17) + "...";
        return first_letters;
      } else {
        return name;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/RegisterLooler.vue?vue&type=template&id=a2db557e&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login/RegisterLooler.vue?vue&type=template&id=a2db557e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm.load ? _c("div", {
    staticClass: "logo-load-center"
  }, [_c("img", {
    staticClass: "animate-flicker",
    attrs: {
      src: "/images/img_0.png"
    }
  })]) : _vm._e(), _vm._v(" "), !_vm.load ? _c("div", {
    staticClass: "appHeader no-border animated fadeIn scrolled is-active",
    staticStyle: {
      "z-index": "9999"
    }
  }, [_c("div", {
    staticClass: "left"
  }, [_vm.step != 1 ? _c("a", {
    staticClass: "headerButton goBack hover_link",
    on: {
      click: _vm.backStep
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      name: "chevron-back-outline",
      role: "img",
      "aria-label": "chevron back outline"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "pageTitle"
  }), _vm._v(" "), _c("div", {
    staticClass: "right"
  }, [_c("router-link", {
    staticClass: "headerButton text-primary",
    attrs: {
      to: "/Login"
    }
  }, [_vm._v("\n        Login\n      ")])], 1)]) : _vm._e(), _vm._v(" "), !_vm.load ? _c("div", {
    attrs: {
      id: "content_responseive"
    }
  }, [_c("div", {
    staticClass: "extraHeader p-0 position-absolute",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c("div", {
    staticClass: "form-wizard-section"
  }, [_c("a", {
    staticClass: "button-item",
    "class": _vm.step == 1 ? "button-item active" : "button-item"
  }, [_c("strong", [_vm._v("1")]), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "11px"
    }
  }, [_vm._v("Datos Personales")])]), _vm._v(" "), _c("a", {
    staticClass: "button-item",
    "class": _vm.step == 2 ? "button-item active" : "button-item"
  }, [_c("strong", [_vm._v("2")]), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "11px"
    }
  }, [_vm._v("Imagen Cedúla")])]), _vm._v(" "), _c("a", {
    staticClass: "button-item",
    "class": _vm.step == 3 ? "button-item active" : "button-item"
  }, [_c("strong", [_vm._v("3")]), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "11px"
    }
  }, [_vm._v("Imagen Looler Cedúla")])]), _vm._v(" "), _c("a", {
    staticClass: "button-item",
    "class": _vm.step == 4 ? "button-item active" : "button-item"
  }, [_c("strong", [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      name: "checkmark-outline",
      role: "img",
      "aria-label": "checkmark outline"
    }
  })], 1), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "11px"
    }
  }, [_vm._v("Revisa tus datos")])])])]), _vm._v(" "), _c("div", {
    staticClass: "extra-header-active",
    attrs: {
      id: "appCapsule"
    }
  }, [_c("div", {
    staticClass: "section mt-5",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("img", {
    staticClass: "form-image",
    staticStyle: {
      "max-width": "130px",
      width: "100%"
    },
    attrs: {
      src: "/images/logo/isotipo.svg",
      alt: "image"
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "mt-2"
  }, [_vm._v("\n          " + _vm._s(_vm.step == 1 ? " Primero necesitamos conocerte" : _vm.step == 2 ? "Adjunta una foto de tu cédula de identidad" : _vm.step == 3 ? "Adjunta una foto tuya sosteniendo tu identificación" : _vm.step == 4 ? "Revisa que tus datos estén correctos" : "") + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "section mb-2 mt-2"
  }, [_c("div", {}, [_c("form", {
    attrs: {
      action: "app-components.html"
    }
  }, [_vm.step == 1 ? _c("div", [_c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper"
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "email1"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.fullname,
      expression: "inputs.fullname"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "name1",
      placeholder: "Nombre completo"
    },
    domProps: {
      value: _vm.inputs.fullname
    },
    on: {
      change: function change($event) {
        return _vm.validateName();
      },
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.inputs, "fullname", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.inputs.fullname ? _c("i", {
    staticClass: "clear-input",
    staticStyle: {
      display: "flex"
    },
    on: {
      click: function click($event) {
        return _vm.clearInput(1);
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated hover_link",
    attrs: {
      name: "close-circle",
      role: "img",
      "aria-label": "close circle"
    },
    on: {
      click: function click($event) {
        return _vm.clearInput(1);
      }
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.error_name == false ? _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                  El nombre es obligatorio\n                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper",
    staticStyle: {
      "text-align": "left"
    }
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "email1"
    }
  }, [_vm._v("Correo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.email,
      expression: "inputs.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      id: "email1",
      placeholder: "Correo"
    },
    domProps: {
      value: _vm.inputs.email
    },
    on: {
      change: function change($event) {
        return _vm.validateEmail();
      },
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.inputs, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.inputs.email ? _c("i", {
    staticClass: "clear-input",
    staticStyle: {
      display: "flex"
    },
    on: {
      click: function click($event) {
        return _vm.clearInput(2);
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated hover_link",
    attrs: {
      name: "close-circle",
      role: " img",
      "aria-label": "close circle"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.error_email == false ? _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                  " + _vm._s(_vm.error_mail) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper",
    staticStyle: {
      "text-align": "left"
    }
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "email1"
    }
  }, [_vm._v("Contraseña")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.password,
      expression: "inputs.password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      id: "password1",
      autocomplete: "off",
      placeholder: "Ingrese su contraseña"
    },
    domProps: {
      value: _vm.inputs.password
    },
    on: {
      change: function change($event) {
        return _vm.validatePasswords();
      },
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.inputs, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "clear-input",
    staticStyle: {
      display: "flex"
    },
    on: {
      click: function click($event) {
        return _vm.seePassword(1);
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated hover_link",
    attrs: {
      name: _vm.icon_name,
      role: "img",
      "aria-label": "close circle"
    }
  })], 1)]), _vm._v(" "), _vm.error_password == false ? _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                  La contraseña debe tener entre 8 y 16 caracteres\n                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper",
    staticStyle: {
      "text-align": "left"
    }
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "email1"
    }
  }, [_vm._v("Repita la Contraseña")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.confirm_pass,
      expression: "inputs.confirm_pass"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      id: "password2",
      autocomplete: "off",
      placeholder: "Confirmar contraseña"
    },
    domProps: {
      value: _vm.inputs.confirm_pass
    },
    on: {
      change: function change($event) {
        return _vm.validatePasswords();
      },
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.inputs, "confirm_pass", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "clear-input",
    staticStyle: {
      display: "flex"
    },
    on: {
      click: function click($event) {
        return _vm.seePassword(2);
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated hover_link",
    attrs: {
      name: _vm.icon_name,
      role: "img",
      "aria-label": "close circle"
    }
  })], 1)]), _vm._v(" "), _vm.error_confirm_password == false ? _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                  La contraseñas no coinciden\n                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper",
    staticStyle: {
      "text-align": "left"
    }
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "email1"
    }
  }, [_vm._v("Nombre de usuario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.username,
      expression: "inputs.username"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "username",
      autocomplete: "off",
      placeholder: "Ingrese su nombre de usuario",
      maxlength: "30"
    },
    domProps: {
      value: _vm.inputs.username
    },
    on: {
      keyup: _vm.noSpaces,
      change: function change($event) {
        return _vm.validateUsername();
      },
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.inputs, "username", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.inputs.username ? _c("i", {
    staticClass: "clear-input",
    staticStyle: {
      display: "flex"
    },
    on: {
      click: function click($event) {
        return _vm.clearInput(3);
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated hover_link",
    attrs: {
      name: "close-circle",
      role: "img",
      "aria-label": "close circle"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.error_username == false ? _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                  " + _vm._s(_vm.error_usr_msg) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper"
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "email1"
    }
  }, [_vm._v("Nacionalidad")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.country,
      expression: "inputs.country"
    }],
    staticClass: "form-control form-select",
    attrs: {
      id: "country"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.inputs, "country", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.validateCountry]
    }
  }, _vm._l(_vm.form_data.countries, function (country, key) {
    return _c("option", {
      key: key,
      domProps: {
        value: country.id
      }
    }, [_vm._v("\n                      " + _vm._s(country.country) + "\n                    ")]);
  }), 0), _vm._v(" "), _vm.error_country == false ? _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                    Debes seleccionar un país\n                  ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper",
    staticStyle: {
      "text-align": "left"
    }
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "rut"
    }
  }, [_vm._v("Rut/DNI")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.dni,
      expression: "inputs.dni"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "dni",
      autocomplete: "off",
      placeholder: "Ingresa tu rut sin puntos ni guion"
    },
    domProps: {
      value: _vm.inputs.dni
    },
    on: {
      change: function change($event) {
        return _vm.validateDni();
      },
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.inputs, "dni", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.inputs.dni ? _c("i", {
    staticClass: "clear-input",
    staticStyle: {
      display: "flex"
    },
    on: {
      click: function click($event) {
        return _vm.clearInput(4);
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated hover_link",
    attrs: {
      name: "close-circle",
      role: "img",
      "aria-label": "close circle"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.error_rut == false ? _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                  " + _vm._s(_vm.error_dni_msg) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper"
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "email1"
    }
  }, [_vm._v("Género")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.sex,
      expression: "inputs.sex"
    }],
    staticClass: "form-control form-select",
    attrs: {
      id: "sex"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.inputs, "sex", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.validateGenero]
    }
  }, _vm._l(_vm.form_data.gender, function (gender, key) {
    return _c("option", {
      key: key,
      domProps: {
        value: gender.id
      }
    }, [_vm._v("\n                      " + _vm._s(gender.gender) + "\n                    ")]);
  }), 0), _vm._v(" "), _vm.error_genero == false ? _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                    Debes seleccionar un género\n                  ")]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.step == 2 ? _c("div", [_c("input", {
    ref: "file_cedula",
    attrs: {
      accept: "image/*",
      hidden: "true",
      id: "file_cedula",
      name: "cedula",
      type: "file"
    },
    on: {
      change: _vm.onchangeFirstFile
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dv-btn-publish mt-5"
  }, [_c("button", {
    staticClass: "btn btn-icon btn-lg bg-gradient-white-looler-btn me-1 mb-1",
    staticStyle: {
      "border-radius": "100px",
      width: "75px",
      height: "75px",
      background: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectFileDni();
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    staticStyle: {
      padding: "0.7rem 0.7rem"
    },
    attrs: {
      "aria-label": "add outline",
      name: "camera-outline",
      role: "img"
    }
  })], 1), _vm._v(" "), _vm.error_img_one == false ? _c("div", {
    staticClass: "invalid-input",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                  Debes seleccionar un archivo\n                ")]) : _vm._e()]), _vm._v(" "), _vm.file_one.length != 0 ? _c("ul", {
    staticClass: "listview image-listview mt-5",
    staticStyle: {
      "border-radius": "5px"
    }
  }, [_c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon-box bg-primary"
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      name: "image-outline",
      role: "img",
      "aria-label": "image outline"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v(_vm._s(_vm.shortName(_vm.file_one.name)))]), _vm._v(" "), _c("ion-icon", {
    staticClass: "hover_link",
    staticStyle: {
      "font-size": "25px"
    },
    attrs: {
      name: "close-outline"
    },
    on: {
      click: _vm.removeFirstFile
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _c("a", {
    staticClass: "hover_link",
    on: {
      click: _vm.whatIsThis
    }
  }, [_c("div", {
    staticClass: "mt-5"
  }, [_c("p", {
    staticClass: "white",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                    ¿Que es esto?\n                    "), _c("ion-icon", {
    staticStyle: {
      "font-size": "20px"
    },
    attrs: {
      name: "help-circle-outline"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.step == 3 ? _c("div", [_c("input", {
    attrs: {
      accept: "image/*",
      hidden: "true",
      id: "file_cedula_and_looler_img",
      name: "cedula_and_looler",
      type: "file"
    },
    on: {
      change: _vm.onchangeSecondtFile
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dv-btn-publish mt-5"
  }, [_c("button", {
    staticClass: "btn btn-icon btn-lg bg-gradient-white-looler-btn me-1 mb-1",
    staticStyle: {
      "border-radius": "100px",
      width: "75px",
      height: "75px",
      background: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectFileDniWithLooler();
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    staticStyle: {
      padding: "0.7rem 0.7rem"
    },
    attrs: {
      "aria-label": "add outline",
      name: "camera-outline",
      role: "img"
    }
  })], 1), _vm._v(" "), _vm.error_img_two == false ? _c("div", {
    staticClass: "invalid-input",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                  Debes seleccionar un archivo\n                ")]) : _vm._e()]), _vm._v(" "), _vm.file_two.length != 0 ? _c("ul", {
    staticClass: "listview image-listview mt-5",
    staticStyle: {
      "border-radius": "5px"
    }
  }, [_c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon-box bg-primary"
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      name: "image-outline",
      role: "img",
      "aria-label": "image outline"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v(_vm._s(_vm.shortName(_vm.file_two.name)))]), _vm._v(" "), _c("ion-icon", {
    staticClass: "hover_link",
    staticStyle: {
      "font-size": "25px"
    },
    attrs: {
      name: "close-outline"
    },
    on: {
      click: _vm.removeSecondFile
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _c("a", {
    staticClass: "hover_link",
    on: {
      click: _vm.whatIsThis
    }
  }, [_c("div", {
    staticClass: "mt-5"
  }, [_c("p", {
    staticClass: "white",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                    ¿Que es esto?\n                    "), _c("ion-icon", {
    staticStyle: {
      "font-size": "20px"
    },
    attrs: {
      name: "help-circle-outline"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.step == 4 ? _c("div", [_c("ul", {
    staticClass: "listview image-listview"
  }, [_c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v("Nombre")]), _vm._v(" "), _c("span", {}, [_c("strong", [_vm._v(_vm._s(_vm.inputs.fullname))])])])])]), _vm._v(" "), _c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v("Nombre de usuario")]), _vm._v(" "), _c("span", {}, [_c("strong", [_vm._v(_vm._s(_vm.inputs.username))])])])])]), _vm._v(" "), _c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v("Rut/DNI")]), _vm._v(" "), _c("span", {}, [_c("strong", [_vm._v(_vm._s(_vm.inputs.dni))])])])])]), _vm._v(" "), _c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v("Género")]), _vm._v(" "), _c("span", {}, [_c("strong", [_vm._v(_vm._s(_vm.gender_name))])])])])]), _vm._v(" "), _c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v("Nacionalidad")]), _vm._v(" "), _c("span", {}, [_c("strong", [_vm._v(_vm._s(_vm.country_name))])])])])])]), _vm._v(" "), _vm.file_one.length != 0 ? _c("ul", {
    staticClass: "listview image-listview"
  }, [_c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon-box bg-primary hover_link"
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      name: "image-outline",
      role: "img",
      "aria-label": "image outline"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v(_vm._s(_vm.shortName(_vm.file_one.name)))]), _vm._v(" "), _c("ion-icon", {
    staticClass: "hover_link",
    staticStyle: {
      "font-size": "25px !important"
    },
    attrs: {
      name: "eye-outline"
    },
    on: {
      click: function click($event) {
        return _vm.showFifle(_vm.file_one);
      }
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.file_two.length != 0 ? _c("ul", {
    staticClass: "listview image-listview"
  }, [_c("li", [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon-box bg-primary"
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      name: "image-outline",
      role: "img",
      "aria-label": "image outline"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "in"
  }, [_c("div", [_vm._v(_vm._s(_vm.shortName(_vm.file_two.name)))]), _vm._v(" "), _c("ion-icon", {
    staticClass: "hover_link",
    staticStyle: {
      "font-size": "25px !important"
    },
    attrs: {
      name: "eye-outline"
    },
    on: {
      click: function click($event) {
        return _vm.showFifle(_vm.file_two);
      }
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-5 text-start"
  }, [_c("div", {
    staticClass: "form-check",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.terms_conditions,
      expression: "inputs.terms_conditions"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "customCheckb1"
    },
    domProps: {
      checked: Array.isArray(_vm.inputs.terms_conditions) ? _vm._i(_vm.inputs.terms_conditions, null) > -1 : _vm.inputs.terms_conditions
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.inputs.terms_conditions,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.inputs, "terms_conditions", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.inputs, "terms_conditions", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.inputs, "terms_conditions", $$c);
        }
      }, function ($event) {
        return _vm.validateTernmconditions();
      }]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "customCheckb1"
    }
  }, [_vm._v("Acepto\n                    "), _c("router-link", {
    attrs: {
      target: "_blank",
      to: "/Terms"
    }
  }, [_vm._v("\n                      Los Términos y Condiciones\n                    ")])], 1), _vm._v(" "), _vm.error_term_conditions == false ? _c("div", {
    staticClass: "invalid-input",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                    Debes aceptar los Términos y Condiciones\n                  ")]) : _vm._e()])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-lg btn-block rounded",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.nextStep
    }
  }, [_vm._v("\n              " + _vm._s(_vm.step != 4 ? "Siguiente" : _vm.step == 4 ? "Ser Looler" : "") + "\n            ")])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal fade dialogbox",
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "what_is_this",
      "data-bs-backdrop": "static",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content",
    staticStyle: {
      "max-width": "600px"
    }
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v("\n            " + _vm._s(_vm.step == 2 ? "Documento nacional de identidad" : _vm.step == 3 ? "Sosteniendo tu identificación" : "") + "\n          ")])]), _vm._v(" "), _c("form", [_c("div", {
    staticClass: "modal-body text-start mb-2"
  }, [_c("div", {
    staticClass: "py-3 text-center"
  }, [_c("img", {
    attrs: {
      src: _vm.step == 2 ? "/images/register/Cedula.svg" : _vm.step == 3 ? "/images/register/Cedula_Looler.svg" : ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-7 mx-auto"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("div", {
    staticClass: "mb-3 white"
  }, [_vm._v("\n                  " + _vm._s(_vm.step == 2 ? _vm.first_text : _vm.step == 3 ? _vm.second_text : "") + "\n                ")])])])]), _vm._v(" "), _vm._m(0)])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade dialogbox show",
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "preview_img",
      "data-bs-backdrop": "static",
      tabindex: "-1",
      role: "dialog",
      "aria-modal": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content",
    staticStyle: {
      "max-width": "600px",
      "max-height": "600px !important"
    }
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: _vm.file_show,
      alt: "image"
    }
  }), _vm._v(" "), _vm._m(1)])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("div", {
    staticClass: "btn-inline"
  }, [_c("button", {
    staticClass: "btn btn-text-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("\n                Entendido\n              ")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("div", {
    staticClass: "btn-inline"
  }, [_c("a", {
    staticClass: "btn btn-text-secondary",
    attrs: {
      href: "#",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cerrar")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Login/RegisterLooler.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Login/RegisterLooler.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterLooler_vue_vue_type_template_id_a2db557e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterLooler.vue?vue&type=template&id=a2db557e& */ "./resources/js/components/Login/RegisterLooler.vue?vue&type=template&id=a2db557e&");
/* harmony import */ var _RegisterLooler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterLooler.vue?vue&type=script&lang=js& */ "./resources/js/components/Login/RegisterLooler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterLooler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterLooler_vue_vue_type_template_id_a2db557e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterLooler_vue_vue_type_template_id_a2db557e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login/RegisterLooler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login/RegisterLooler.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Login/RegisterLooler.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterLooler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterLooler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/RegisterLooler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterLooler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Login/RegisterLooler.vue?vue&type=template&id=a2db557e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Login/RegisterLooler.vue?vue&type=template&id=a2db557e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterLooler_vue_vue_type_template_id_a2db557e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterLooler.vue?vue&type=template&id=a2db557e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/RegisterLooler.vue?vue&type=template&id=a2db557e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterLooler_vue_vue_type_template_id_a2db557e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterLooler_vue_vue_type_template_id_a2db557e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);