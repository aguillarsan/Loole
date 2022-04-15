(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Adm/AproveProfiles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/AproveProfiles.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Adm/AproveProfiles.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
      cuentas: [],
      pendientes: 0,
      total_users: 0,
      total_rechazadas: 0,
      modulo: 1,
      load: false,
      imagen: null,
      motivo_id: ""
    };
  },
  created: function created() {
    this.getCuentas();
  },
  methods: {
    getCuentas: function getCuentas(state) {
      var _this = this;

      if (state) {
        this.modulo = state;
      } else {
        this.modulo = 1;
      }

      axios.get("/get-cuentas-usuarios-revision?modulo=".concat(this.modulo, ")")).then(function (response) {
        _this.cuentas = response.data.users;
        _this.pendientes = response.data.total_pendientes;
        _this.total_users = response.data.total_usuarios;
        _this.total_rechazadas = response.data.total_rechazadas;
        console.log(_this.cuentas);
      });
    },
    ApproveAccount: function ApproveAccount(user_id) {
      var _this2 = this;

      this.load = true;
      var formData = new FormData();
      formData.append('user_id', user_id);
      axios.post('/approve-account-looler', formData).then(function (response) {
        _this2.getCuentas();

        _this2.load = false;
      });
    },
    getImageDni: function getImageDni(user, identified) {
      var _this3 = this;

      var formData = new FormData();
      formData.append('user_id', user);
      formData.append('identified', identified);
      axios.post('/get-image-dni', formData).then(function (response) {
        _this3.imagen = response.data;
        $("#DialogImage").modal("show");
      });
    },
    DenyAccount: function DenyAccount() {
      var _this4 = this;

      this.load = true;
      var formData = new FormData();
      formData.append('user_id', this.account_id);
      formData.append('motivo_rechazo_id', this.motivo_id);

      if (this.motivo_id == '') {
        document.getElementById("error_rechazar_cuenta").innerHTML = this.txt_error_cuenta_rechazo;
      } else {
        axios.post('/deny-account-looler', formData).then(function (response) {
          _this4.getCuentas();

          _this4.account_id = '';
          _this4.motivo_id = '';
          _this4.load = false;
        });
      }
    },
    modalReachazo: function modalReachazo(id) {
      this.account_id = id;
      $("#DialogForm").modal("show");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/AproveProfiles.vue?vue&type=template&id=083cb796&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Adm/AproveProfiles.vue?vue&type=template&id=083cb796& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "extra-header-active", attrs: { id: "appCapsule" } },
      [
        _c("div", { attrs: { id: "adm_responsive" } }, [
          _c("div", { staticClass: "tab-content mt-1" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane fade show active",
                attrs: { id: "pilled", role: "tabpanel" },
              },
              [
                _c("div", { staticClass: "section full mt-1" }, [
                  _c("div", { staticClass: "wide-block pt-2 pb-2" }, [
                    _c(
                      "ul",
                      {
                        staticClass: "nav nav-tabs capsuled",
                        attrs: { role: "tablist" },
                      },
                      [
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link active",
                              attrs: {
                                "data-bs-toggle": "tab",
                                href: "#home",
                                role: "tab",
                                "aria-selected": "true",
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.getCuentas(1)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                        Cuentas pendientes\n\n                                        "
                              ),
                              _c(
                                "h5",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: { "font-size": "18px" },
                                },
                                [_vm._v(_vm._s(_vm.pendientes))]
                              ),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link",
                              attrs: {
                                "data-bs-toggle": "tab",
                                href: "#",
                                role: "tab",
                                "aria-selected": "false",
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.getCuentas(5)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                        Cuentas Rechazadas\n\n                                        "
                              ),
                              _c(
                                "h5",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: { "font-size": "18px" },
                                },
                                [_vm._v(_vm._s(_vm.total_rechazadas))]
                              ),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link",
                              attrs: {
                                "data-bs-toggle": "tab",
                                href: "#home",
                                role: "tab",
                                "aria-selected": "false",
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.getCuentas(3)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                        Cuentas Aprobadas\n\n                                        "
                              ),
                              _c(
                                "h5",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: { "font-size": "18px" },
                                },
                                [_vm._v(_vm._s(_vm.total_users))]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "tab-content mt-2" }, [
                      !_vm.load
                        ? _c(
                            "div",
                            {
                              staticClass: "tab-pane fade active show",
                              attrs: { role: "tabpanel" },
                            },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c("table", { staticClass: "table" }, [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(
                                          "\n                                                        Nombre/ País\n                                                    "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(
                                          "\n                                                        Rut/DNI\n                                                    "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(
                                          "\n                                                        Fotos\n                                                    "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm.modulo == 5
                                        ? _c("th", [_vm._v("Motivo rechazo")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(
                                          "\n                                                        opciones\n                                                    "
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.cuentas, function (cuenta) {
                                      return _c("tr", [
                                        _c("td", [
                                          _c("div", [
                                            _vm._v(_vm._s(cuenta.name)),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticStyle: {
                                                "margin-top": "5px",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(cuenta.country.country) +
                                                  "\n                                                        "
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(cuenta.dni))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("div", [
                                            cuenta.role_id == 2
                                              ? _c(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      "data-bs-toggle": "modal",
                                                      href: "#modal_foto_cedula\n                                                        ",
                                                    },
                                                    on: {
                                                      click: function ($event) {
                                                        $event.preventDefault()
                                                        return _vm.getImageDni(
                                                          cuenta.id,
                                                          1
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                                Imagen 1\n                                                            "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticStyle: {
                                                "margin-top": "8px",
                                              },
                                            },
                                            [
                                              cuenta.role_id == 2
                                                ? _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        "data-bs-toggle":
                                                          "modal",
                                                        href: "#modal_foto_cedula\n                                                        ",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.getImageDni(
                                                            cuenta.id,
                                                            2
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                                Imagen 2\n                                                            "
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _vm.modulo == 5
                                          ? _c("td", [
                                              _vm._v(
                                                "\n                                                        " +
                                                  _vm._s(
                                                    cuenta.reason_rejection
                                                      ? cuenta.reason_rejection
                                                          .reason
                                                      : ""
                                                  ) +
                                                  "\n                                                    "
                                              ),
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "text-secondary hover_link",
                                              on: {
                                                click: function ($event) {
                                                  $event.preventDefault()
                                                  return _vm.ApproveAccount(
                                                    cuenta.id
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("ion-icon", {
                                                staticStyle: {
                                                  "font-size": "35px",
                                                },
                                                attrs: {
                                                  name: "checkmark-circle-outline",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "text-danger hover_link",
                                              on: {
                                                click: function ($event) {
                                                  return _vm.modalReachazo(
                                                    cuenta.id
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("ion-icon", {
                                                staticStyle: {
                                                  "font-size": "35px",
                                                },
                                                attrs: {
                                                  name: "close-circle-outline",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]),
                                      ])
                                    }),
                                    0
                                  ),
                                ]),
                              ]),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.load
                        ? _c(
                            "div",
                            { staticStyle: { "text-align": "center" } },
                            [
                              _c("div", {
                                staticClass: "spinner-border text-primary",
                                staticStyle: {
                                  height: "100px",
                                  width: "100px",
                                  "margin-top": "50px",
                                  "text-align": "center !important",
                                },
                                attrs: { role: "status" },
                              }),
                            ]
                          )
                        : _vm._e(),
                    ]),
                  ]),
                ]),
              ]
            ),
          ]),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade dialogbox",
        staticStyle: { display: "none" },
        attrs: {
          id: "DialogImage",
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
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: _vm.imagen, alt: "image" },
                }),
                _vm._v(" "),
                _vm._m(1),
              ]
            ),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade dialogbox",
        staticStyle: { display: "none" },
        attrs: {
          id: "DialogForm",
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
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "modal-body text-start mb-2" }, [
                  _c("div", { staticClass: "form-group " }, [
                    _c("div", { staticClass: "input-wrapper" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "email1" } },
                        [_vm._v("Motivo")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.motivo_id,
                              expression: "motivo_id",
                            },
                          ],
                          staticClass: "form-control form-select",
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.motivo_id = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v(
                              "\n                                        Falta de información\n                                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v(
                              "\n                                        No cumple los requisitos de edad\n                                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v(
                              "\n                                        La foto de carnet no es legible\n                                    "
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c("div", { staticClass: "btn-inline" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-text-secondary",
                        attrs: { type: "button", "data-bs-dismiss": "modal" },
                      },
                      [_vm._v("Cancelar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-text-primary",
                        attrs: { type: "button", "data-bs-dismiss": "modal" },
                        on: { click: _vm.DenyAccount },
                      },
                      [_vm._v("Aceptar\n                                ")]
                    ),
                  ]),
                ]),
              ]),
            ]),
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
    return _c("div", { staticClass: "appHeader text" }, [
      _c("div", { staticClass: "pageTitle" }, [_vm._v("Cuentas por aprobar")]),
      _vm._v(" "),
      _c("div", { staticClass: "right" }),
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
            staticClass: "btn btn-text-primary",
            attrs: { href: "#", "data-bs-dismiss": "modal" },
          },
          [_vm._v("Cerrar")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Rechzar cuenta")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Adm/AproveProfiles.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Adm/AproveProfiles.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AproveProfiles_vue_vue_type_template_id_083cb796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AproveProfiles.vue?vue&type=template&id=083cb796& */ "./resources/js/components/Adm/AproveProfiles.vue?vue&type=template&id=083cb796&");
/* harmony import */ var _AproveProfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AproveProfiles.vue?vue&type=script&lang=js& */ "./resources/js/components/Adm/AproveProfiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AproveProfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AproveProfiles_vue_vue_type_template_id_083cb796___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AproveProfiles_vue_vue_type_template_id_083cb796___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Adm/AproveProfiles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Adm/AproveProfiles.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Adm/AproveProfiles.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AproveProfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AproveProfiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/AproveProfiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AproveProfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Adm/AproveProfiles.vue?vue&type=template&id=083cb796&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Adm/AproveProfiles.vue?vue&type=template&id=083cb796& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AproveProfiles_vue_vue_type_template_id_083cb796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AproveProfiles.vue?vue&type=template&id=083cb796& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/AproveProfiles.vue?vue&type=template&id=083cb796&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AproveProfiles_vue_vue_type_template_id_083cb796___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AproveProfiles_vue_vue_type_template_id_083cb796___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);