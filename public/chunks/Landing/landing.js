(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Landing/landing"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/Landing.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing/Landing.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["usuario"],
  created: function created() {
    document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;";
  },
  computed: {
    currentRoute: function currentRoute() {
      return this.$route.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/Landing.vue?vue&type=template&id=7e4136e4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing/Landing.vue?vue&type=template&id=7e4136e4& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "appHeader no-border animated fadeIn scrolled is-active no-box-shadow balck-back-loole no-boreder-bottom",
        staticStyle: { "z-index": "9999" },
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "right", attrs: { id: "btn_rigth_w_m_l" } },
          [
            _c(
              "router-link",
              {
                staticClass: "headerButton text-primary",
                attrs: { to: "/Login" },
              },
              [_c("div", { staticClass: "white" }, [_vm._v("Ingresar")])]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "headerButton text-primary",
                attrs: { to: "/SingUp" },
              },
              [
                _c("button", { staticClass: "btn btn-primary rounded" }, [
                  _vm._v("Ser Looler"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "headerButton text-primary",
                attrs: { to: "/Register" },
              },
              [
                _c("button", { staticClass: "btn btn-secondary rounded" }, [
                  _vm._v("Ser Fan"),
                ]),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "right",
            staticStyle: { display: "none" },
            attrs: { id: "burger_menu_landing" },
          },
          [
            _c(
              "a",
              {
                staticClass: "headerButton",
                attrs: {
                  href: "#",
                  "data-bs-toggle": "dropdown",
                  "aria-expanded": "false",
                },
              },
              [
                _c("ion-icon", {
                  staticClass: "md hydrated",
                  staticStyle: { color: "white" },
                  attrs: {
                    name: "menu-outline",
                    role: "img",
                    "aria-label": "menu outline",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "dropdown-menu dropdown-menu-end" },
              [
                _c("router-link", { attrs: { to: "/Login" } }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-item", attrs: { href: "#" } },
                    [_vm._v("Ingresar")]
                  ),
                ]),
                _vm._v(" "),
                _c("router-link", { attrs: { to: "/SingUp" } }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-item", attrs: { href: "#" } },
                    [_vm._v("Comenzar")]
                  ),
                ]),
                _vm._v(" "),
                _c("router-link", { attrs: { to: "/Landing" } }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-item", attrs: { href: "#" } },
                    [_vm._v("Be a looler")]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [_vm._v("Suscriptor")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [_vm._v("Ayuda")]
                ),
              ],
              1
            ),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "lo-hero-container-main" }, [
      _c("div", { staticClass: "lo-hero-container lo-h-space-between" }, [
        _c(
          "div",
          { staticClass: "lo-hero-info-wrap" },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("router-link", { attrs: { to: "/SingUp" } }, [
              _c("button", { staticClass: "lo-primary-button" }, [
                _vm._v("Convertirme en Looler"),
              ]),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c("img", {
          staticClass: "lo-login-phone-img",
          attrs: { src: "/images/landing/login-phone.png", alt: "" },
        }),
      ]),
    ]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "lo-section-container-main",
        staticStyle: { "padding-top": "184px", "padding-bottom": "184px" },
      },
      [
        _c("div", { staticClass: "lo-section-container lo-h-space-between" }, [
          _c("img", {
            staticClass: "lo-section2-img",
            attrs: { src: "/images/landing/iPhone.png", alt: "" },
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "lo-section-info2-container" },
            [
              _c("h2", { staticClass: "lo-howork-title" }, [
                _vm._v("Lo hacemos simple"),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "lo-section-parragraph" }, [
                _vm._v(
                  "Nos preocupamos de que dedicarse a esto sea lo más fácil posible,\n                    es por eso que contamos con una interfaz sencilla e intuitiva para que puedas publicar tu\n                    contenido y ver el de los demás de una forma más sencilla."
                ),
              ]),
              _vm._v(" "),
              _c("router-link", { attrs: { to: "/SingUp" } }, [
                _c("button", { staticClass: "lo-primary-button" }, [
                  _vm._v("Crear una cuenta Looler®"),
                ]),
              ]),
            ],
            1
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _vm._m(5),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "form-image",
        staticStyle: { "max-width": "100px", width: "100%" },
        attrs: { src: "/images/landing/loole-logo.svg", alt: "image" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "lo-hero-title" }, [
      _vm._v("Tu contenido, "),
      _c("br"),
      _vm._v("\n                    Tu tiempo, "),
      _c("br"),
      _vm._v("\n                    Tu dinero."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "lo-parragraph" }, [
      _vm._v(" Bienvenido a Loole, una plataforma exclusiva para "),
      _c("span", { staticStyle: { "font-weight": "600px" } }, [
        _vm._v("creadores de contenido."),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "lo-howork-container-main" }, [
      _c("div", { staticClass: "lo-howork-container" }, [
        _c(
          "h2",
          {
            staticClass: "lo-howork-title",
            staticStyle: { "text-align": "center" },
          },
          [_vm._v("¿Cómo funciona?")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "lo-howrok-steps-container" }, [
          _c("div", { staticClass: "lo-howork-step" }, [
            _c("img", {
              staticClass: "lo-howork-step-img",
              attrs: { src: "/images/landing/lo-account.svg", alt: "" },
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "lo-howork-step-title" }, [
              _vm._v("Crea tu cuenta"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "lo-howork-step-parragraph" }, [
              _vm._v("Solo tienes que completar algunos detos necesarios."),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lo-howork-step" }, [
            _c("img", {
              staticClass: "lo-howork-step-img",
              attrs: { src: "/images/landing/lo-post.svg", alt: "" },
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "lo-howork-step-title" }, [
              _vm._v("Publica tu contenido"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "lo-howork-step-parragraph" }, [
              _vm._v(
                "Selecciona tus mejores fotos y videos, y agregales el\n                        valor."
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lo-howork-step" }, [
            _c("img", {
              staticClass: "lo-howork-step-img",
              attrs: { src: "/images/landing/lo-collection.svg", alt: "" },
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "lo-howork-step-title" }, [
              _vm._v("Encanta a tus seguidores"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "lo-howork-step-parragraph" }, [
              _vm._v("Tus followers comenzarán a comprar tu contenido"),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lo-howork-step" }, [
            _c("img", {
              staticClass: "lo-howork-step-img",
              attrs: { src: "/images/landing/lo-money.svg", alt: "" },
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "lo-howork-step-title" }, [
              _vm._v("¡Retira tu dinero!"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "lo-howork-step-parragraph" }, [
              _vm._v("Solo ingresas donde quieres que te lo enviemos y listo."),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass: "lo-section-container-main",
        staticStyle: { "margin-bottom": "0px" },
      },
      [
        _c("div", { staticClass: "lo-section-container lo-h-space-between" }, [
          _c("img", {
            staticClass: "lo-section1-img",
            attrs: { src: "/images/landing/movements.svg", alt: "" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "lo-section-info1-container" }, [
            _c("h2", { staticClass: "lo-howork-title" }, [
              _vm._v("Controla tu dinero"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "lo-section-parragraph" }, [
              _vm._v(
                "En loole® tu dinero siempre estará protegido y disponible para\n                    cuando quieras sacarlo. Contamos con diferentes métodos para retirar tu dinero, elige el que más\n                    te acomode."
              ),
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "lo-primary-button" }, [
              _vm._v("¿Cuánto son los límites de retiro?"),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "lo-footer-container-main" }, [
      _c("div", { staticClass: "lo-footer-container" }, [
        _c("img", {
          staticClass: "lo-footer-logo-loole",
          attrs: { src: "/images/landing/loole-logo.svg", alt: "" },
        }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Landing/Landing.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Landing/Landing.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Landing_vue_vue_type_template_id_7e4136e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=7e4136e4& */ "./resources/js/components/Landing/Landing.vue?vue&type=template&id=7e4136e4&");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js& */ "./resources/js/components/Landing/Landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_7e4136e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Landing_vue_vue_type_template_id_7e4136e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Landing/Landing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Landing/Landing.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Landing/Landing.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/Landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Landing/Landing.vue?vue&type=template&id=7e4136e4&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Landing/Landing.vue?vue&type=template&id=7e4136e4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_7e4136e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=template&id=7e4136e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/Landing.vue?vue&type=template&id=7e4136e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_7e4136e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_7e4136e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);