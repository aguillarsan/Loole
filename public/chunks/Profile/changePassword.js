(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Profile/changePassword"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["usuario"],
  data: function data() {
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
      formData: new FormData(),
      pass_check: null,
      new_pass_check: null,
      confirm_pass_check: null,
      load: false
    };
  },
  methods: {
    seePassword: function seePassword(input) {
      var passW1 = document.getElementById("password1");
      var passW2 = document.getElementById("password2");
      var passW3 = document.getElementById("password3");

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

      if (input == 3) {
        if (passW3.type == "password") {
          passW3.type = "text";
        } else {
          passW3.type = "password";
        }
      }
    },
    changePassword: function changePassword() {
      var _this = this;

      this.validateForm();
      this.comprobeRepeatNewPass();

      if (this.pass_check && this.new_pass_check && this.confirm_pass_check) {
        this.load = true;
        this.formData.append('old_password', this.input.password);
        this.formData.append('new_password', this.input.newpassword);
        axios.post('/setting/change/old/password', this.formData).then(function (response) {
          if (response.data) {
            _this.load = false;
            var type = "success";
            var message = "Contraseña cambiada";

            _this.$eventBus.$emit('display-alert-appp', type, message);

            _this.cleanInputs();
          } else {
            var _type = "error";
            var _message = "Error al cambiar la contraseña";

            _this.$eventBus.$emit('display-alert-appp', _type, _message);

            _this.load = false;
          }
        });
      }
    },
    validateForm: function validateForm() {
      if (this.input.password == "") {
        this.pass_check = false;
        this.error_text.txt_password = 'La contraseña es un campo requerido';
      }

      if (this.input.newpassword == "") {
        this.new_pass_check = false;
        this.error_text.txt_newpassword = 'Debes ingresar la nueva contraseña';
      }

      if (this.input.repeatpassword == "") {
        this.confirm_pass_check = false;
        this.error_text.txt_repeatpassword = 'Debes repetir la contraseña';
      }
    },
    comprobeNewPass: function comprobeNewPass() {
      if (this.input.newpassword.length < 8) {
        this.new_pass_check = false;
        this.error_text.txt_newpassword = 'La contraseña debe tener entre 8 y 16 caracteres';
      } else {
        if (this.input.newpassword.length >= 8) {
          if (this.input.newpassword == this.input.password) {
            this.new_pass_check = false;
            this.error_text.txt_newpassword = 'La nueva contraseña no puede ser igual a la anterior';
          } else {
            this.new_pass_check = true;
          }
        }
      }
    },
    comprobeRepeatNewPass: function comprobeRepeatNewPass() {
      if (this.input.repeatpassword == "") {
        this.confirm_pass_check = false;
        this.error_text.txt_repeatpassword = 'Debes repetir la contraseña';
      } else {
        if (this.input.repeatpassword != this.input.newpassword) {
          this.confirm_pass_check = false;
          this.error_text.txt_repeatpassword = 'Las contraseñas no coinciden';
        } else {
          if (this.input.repeatpassword == this.input.newpassword) {
            this.confirm_pass_check = true;
          }
        }
      }
    },
    comproveActualPass: function comproveActualPass() {
      var _this2 = this;

      this.formData.append('password', this.input.password);
      axios.post('/profile/check/password', this.formData).then(function (response) {
        if (response.data) {
          _this2.pass_check = true;
        } else {
          _this2.pass_check = false;
          _this2.error_text.txt_password = 'La contraseña ingresada no es correcta';
        }
      });
    },
    cleanInputs: function cleanInputs() {
      this.input.password = "";
      this.input.newpassword = "";
      this.input.repeatpassword = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "appHeader box-shw-profile-header" }, [
      _c(
        "div",
        { staticClass: "left", attrs: { id: "back_arrow" } },
        [
          _c(
            "router-link",
            {
              staticClass: "headerButton goBack",
              attrs: { to: "/Profile/Settings" },
            },
            [
              _c("ion-icon", {
                staticClass: "md hydrated",
                attrs: {
                  name: "chevron-back-outline",
                  role: "img",
                  "aria-label": "chevron back outline",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "pageTitle" }, [_vm._v("Cambiar contraseña")]),
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "appCapsule" } }, [
      _c(
        "div",
        {
          staticClass: "section full mt-2 mb-2",
          attrs: { id: "section_change_pass" },
        },
        [
          _c(
            "div",
            {
              staticClass: "wide-block pb-1 pt-2",
              staticStyle: { "border-top": "none", "border-bottom": "none" },
            },
            [
              _c("form", [
                _c("div", { staticClass: "form-group boxed" }, [
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c(
                      "label",
                      { staticClass: "label ", attrs: { for: "password" } },
                      [_vm._v("Contraseña actual")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.input.password,
                          expression: "input.password",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "password1",
                        placeholder: "",
                        autocomplete: "off",
                      },
                      domProps: { value: _vm.input.password },
                      on: {
                        change: _vm.comproveActualPass,
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.input, "password", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "i",
                      {
                        staticClass: "clear-input ",
                        staticStyle: { display: "flex" },
                        on: {
                          click: function ($event) {
                            return _vm.seePassword(1)
                          },
                        },
                      },
                      [
                        _c("ion-icon", {
                          staticClass: "md hydrated hover_link",
                          attrs: {
                            name: "eye-outline",
                            role: "img",
                            "aria-label": "close circle",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _vm.pass_check == false
                    ? _c("div", { staticClass: "invalid-input" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.error_text.txt_password) +
                            "\n            "
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group boxed" }, [
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c(
                      "label",
                      { staticClass: "label ", attrs: { for: "newPassword" } },
                      [_vm._v("Nueva contraseña")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.input.newpassword,
                          expression: "input.newpassword",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        maxlength: "16",
                        id: "password2",
                        placeholder: "",
                        autocomplete: "off",
                      },
                      domProps: { value: _vm.input.newpassword },
                      on: {
                        change: function ($event) {
                          return _vm.comprobeNewPass()
                        },
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.input,
                            "newpassword",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "i",
                      {
                        staticClass: "clear-input ",
                        staticStyle: { display: "flex" },
                        on: {
                          click: function ($event) {
                            return _vm.seePassword(2)
                          },
                        },
                      },
                      [
                        _c("ion-icon", {
                          staticClass: "md hydrated hover_link",
                          attrs: {
                            name: "eye-outline",
                            role: "img",
                            "aria-label": "close circle",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _vm.new_pass_check == false
                    ? _c("div", { staticClass: "invalid-input" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.error_text.txt_newpassword) +
                            "\n            "
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group boxed" }, [
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label ",
                        attrs: { for: "newRepeatPassword" },
                      },
                      [_vm._v("Repita la contraseña")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.input.repeatpassword,
                          expression: "input.repeatpassword",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "password3",
                        placeholder: "",
                        autocomplete: "off",
                      },
                      domProps: { value: _vm.input.repeatpassword },
                      on: {
                        change: _vm.comprobeRepeatNewPass,
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.input,
                            "repeatpassword",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "i",
                      {
                        staticClass: "clear-input ",
                        staticStyle: { display: "flex" },
                        on: {
                          click: function ($event) {
                            return _vm.seePassword(3)
                          },
                        },
                      },
                      [
                        _c("ion-icon", {
                          staticClass: "md hydrated hover_link",
                          attrs: {
                            name: "eye-outline",
                            role: "img",
                            "aria-label": "close circle",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _vm.confirm_pass_check == false
                  ? _c("div", { staticClass: "invalid-input" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.error_text.txt_repeatpassword) +
                          "\n          "
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "mt-5" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary bg-primary-loole rounded btn-block btn-lg",
                      attrs: {
                        type: "button",
                        disabled: _vm.load ? true : false,
                      },
                      on: { click: _vm.changePassword },
                    },
                    [
                      _vm.load
                        ? _c("span", {
                            staticClass:
                              "spinner-border spinner-border-sm me-05",
                            attrs: { role: "status", "aria-hidden": "true" },
                          })
                        : _vm._e(),
                      _vm._v("\n              Guardar cambios\n            "),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile/ChangePassword.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Profile/ChangePassword.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=64fef148& */ "./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=64fef148& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);