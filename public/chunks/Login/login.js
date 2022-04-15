(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Login/login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/Login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      inputs: {
        email: "",
        password: ""
      },
      email_validate: {
        validate: null,
        text_required_input: null,
        text_error_format: null
      },
      password_validate: null,
      error_login: null,
      load: false
    };
  },
  created: function created() {
    var _this = this;

    document.getElementById("body_element").className = "bg-white dark-mode-active";
    document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;background-attachment:fixed !important;";
    addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        _this.login();
      }
    });
  },
  methods: {
    login: function login() {
      var _this2 = this;

      this.validateData();

      if (this.password_validate && this.email_validate.validate) {
        this.load = true;
        var formData = new FormData();
        formData.append("email", this.inputs.email);
        formData.append("password", this.inputs.password);
        axios.post("/authenticate/login", formData).then(function (response) {
          console.log(response.data.code);

          if (response.data.code == 200) {
            _this2.loginSucces(response.data.authUser);
          }

          if (response.data.code == 500) {
            $("#DialogIconedDanger").modal("show");
            _this2.load = false;
          }

          if (response.data.code == 401) {
            _this2.loginFalied();
          }
        });
      }
    },
    validateData: function validateData() {
      if (this.inputs.email != "") {
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (emailRegex.test(this.inputs.email)) {
          this.email_validate.validate = true;
        } else {
          this.email_validate.validate = false;
          this.email_validate.text_error_format = "El correo electrónico no es valido";
          this.email_validate.text_required_input = null;
        }
      } else {
        this.email_validate.validate = false;
        this.email_validate.text_error_format = null;
        this.email_validate.text_required_input = "El correo electrónico es requerido";
      }

      if (this.inputs.password == "") {
        this.password_validate = false;
      } else {
        if (this.inputs.password != "") {
          this.password_validate = true;
        }
      }
    },
    loginSucces: function loginSucces(authUser) {
      console.log(authUser.role_id);

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
    loginFalied: function loginFalied() {
      this.load = false;
      this.error_login = false;
    },
    clearInput: function clearInput() {
      var email = document.getElementById("email1");
      this.inputs.email = "";
    },
    seePassword: function seePassword() {
      var passInput = document.getElementById("password1");

      if (passInput.type == "password") {
        passInput.type = "text";
      } else {
        passInput.type = "password";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    !_vm.load
      ? _c(
          "div",
          {
            staticClass:
              "appHeader no-border transparent position-absolute animated fadeIn",
          },
          [
            _c(
              "div",
              { staticClass: "left" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "headerButton goBack",
                    attrs: { to: "/Landing" },
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
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "pt-0", attrs: { id: "appCapsule" } }, [
      _c("div", { staticClass: "login-form " }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "section mt-1",
            staticStyle: { "margin-top": "1rem !important" },
          },
          [
            _c("form", { attrs: { action: "app-pages.html" } }, [
              _c("div", { staticClass: "form-group boxed" }, [
                _c(
                  "div",
                  {
                    staticClass: "input-wrapper",
                    staticStyle: { "text-align": "left" },
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "label white", attrs: { for: "email1" } },
                      [_vm._v("Correo")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputs.email,
                          expression: "inputs.email",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        id: "email1",
                        placeholder: "Correo Electronico",
                      },
                      domProps: { value: _vm.inputs.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.inputs, "email", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.inputs.email
                      ? _c(
                          "i",
                          {
                            staticClass: "clear-input",
                            staticStyle: { display: "flex" },
                            on: { click: _vm.clearInput },
                          },
                          [
                            _c("ion-icon", {
                              staticClass: "md hydrated hover_link",
                              attrs: {
                                name: "close-circle",
                                role: "img",
                                "aria-label": "close circle",
                              },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                  ]
                ),
                _vm._v(" "),
                _vm.email_validate.validate == false
                  ? _c("div", { staticClass: "invalid-input" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.email_validate.text_required_input != null
                              ? _vm.email_validate.text_required_input
                              : _vm.email_validate.text_error_format
                          ) +
                          "\n            "
                      ),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group boxed" }, [
                _c(
                  "div",
                  {
                    staticClass: "input-wrapper",
                    staticStyle: { "text-align": "left" },
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "label white", attrs: { for: "email1" } },
                      [_vm._v("Contrseña")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputs.password,
                          expression: "inputs.password",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "password1",
                        placeholder: "Ingrese su contraseña",
                        autocomplete: "off",
                      },
                      domProps: { value: _vm.inputs.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.inputs, "password", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "i",
                      {
                        staticClass: "clear-input ",
                        staticStyle: { display: "flex" },
                        on: { click: _vm.seePassword },
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
                  ]
                ),
                _vm._v(" "),
                _vm.password_validate == false
                  ? _c("div", { staticClass: "invalid-input" }, [
                      _vm._v(
                        "\n              La contraseña es requerida\n            "
                      ),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "mt-2",
                  staticStyle: { "margin-top": "2rem !important" },
                  on: {
                    click: function ($event) {
                      return _vm.login()
                    },
                  },
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary bg-primary-loole rounded me-1",
                      staticStyle: { width: "100%" },
                      attrs: {
                        type: "button",
                        disabled: _vm.load ? true : false,
                      },
                    },
                    [
                      _vm.load
                        ? _c("span", {
                            staticClass:
                              "spinner-border spinner-border-sm me-05",
                            attrs: { role: "status", "aria-hidden": "true" },
                          })
                        : _vm._e(),
                      _vm._v("\n              Iniciar sesión\n            "),
                    ]
                  ),
                  _vm._v(" "),
                  _vm.error_login == false
                    ? _c("div", { staticClass: "invalid-input" }, [
                        _vm._v(
                          "\n              Correo electrónico o contraseña incorrectos\n            "
                        ),
                      ])
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c("hr", { staticStyle: { "margin-top": "2rem" } }),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "register-btn-login mt-2" }, [
                _c(
                  "div",
                  [
                    _c("router-link", { attrs: { to: "/Register" } }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-secondary bg-secondary-loole rounded me-1",
                          attrs: { type: "button" },
                        },
                        [
                          _vm._v(
                            "\n                  Ser Fan\n                "
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("router-link", { attrs: { to: "/SingUp" } }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary bg-primary-loole rounded me-1",
                          attrs: { type: "button" },
                        },
                        [
                          _vm._v(
                            "\n                  Ser looler\n                "
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade dialogbox",
        staticStyle: { display: "none" },
        attrs: {
          id: "DialogIconedDanger",
          "data-bs-backdrop": "static",
          tabindex: "-1",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c(
              "div",
              {
                staticClass: "modal-content",
                staticStyle: {
                  "max-width": "600px",
                  "max-height": "600px !important",
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "modal-icon text-danger" },
                  [
                    _c("ion-icon", {
                      attrs: { name: "person-remove-outline" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body white" }, [
                  _vm._v(
                    "\n          Su cuenta fue eliminada de Loole, Si deseas reactivar tu cuenta debes enviar un correo a\n          concato@loolapp.com.\n        "
                  ),
                ]),
                _vm._v(" "),
                _vm._m(4),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "section",
        staticStyle: { "margin-bottom": "1.5rem !important" },
      },
      [
        _c("img", {
          staticClass: "form-image ",
          staticStyle: {
            "max-width": "140px",
            width: "100%",
            "margin-top": "100px",
          },
          attrs: { src: "/images/logo/isotipo.svg", alt: "image" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section mt-5" }, [
      _c(
        "h4",
        { staticClass: "white", staticStyle: { "text-align": "center" } },
        [
          _vm._v(
            "\n          Se parte de una comunidad exclusiva para creadores de contenido e\n          interactúa con tus Loolers.\n        "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section mt-1" }, [
      _c("h5", { staticClass: "white" }, [
        _vm._v("¿Aún no tienes una cuenta?"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Error")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("div", { staticClass: "btn-inline" }, [
        _c(
          "a",
          {
            staticClass: "btn",
            attrs: { href: "#", "data-bs-dismiss": "modal" },
          },
          [_vm._v("Cerrar")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Login/Login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Login/Login.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=74b91af0& */ "./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Login/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=74b91af0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);