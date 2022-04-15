(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Faq/faq"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Faq/Faqs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Faq/Faqs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["usuario"],
  data: function data() {
    return {
      faqs: []
    };
  },
  created: function created() {
    this.getFaqs();
  },
  methods: {
    getFaqs: function getFaqs() {
      var _this = this;

      axios.get('/faqs/data').then(function (response) {
        _this.faqs = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Faq/Faqs.vue?vue&type=template&id=468e2bfe&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Faq/Faqs.vue?vue&type=template&id=468e2bfe& ***!
  \***********************************************************************************************************************************************************************************************************/
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
            { staticClass: "headerButton goBack", attrs: { to: "/Home" } },
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
      _c("div", { staticClass: "pageTitle text-black" }, [
        _vm._v("Centro de ayuda"),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "appCapsule" } }, [
      _c("div", { attrs: { id: "faq_loole" } }, [
        _c("div", { staticClass: "section full " }, [
          _c(
            "div",
            {
              staticClass: "accordion no-border-top-bottom ",
              attrs: { id: "accordionExample1" },
            },
            _vm._l(_vm.faqs, function (faq, index) {
              return _c("div", { key: index, staticClass: "accordion-item" }, [
                _c("h2", { staticClass: "accordion-header" }, [
                  _c(
                    "button",
                    {
                      staticClass: "accordion-button collapsed",
                      attrs: {
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#accordion" + index,
                        "aria-expanded": "false",
                      },
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(faq.title_faq) +
                          "\n              "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "accordion-collapse collapse",
                    attrs: {
                      id: "accordion" + index,
                      "data-bs-parent": "#accordionExample" + index,
                    },
                  },
                  [
                    _c("div", { staticClass: "accordion-body" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(faq.description_faq) +
                          "\n              "
                      ),
                    ]),
                  ]
                ),
              ])
            }),
            0
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Faq/Faqs.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Faq/Faqs.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faqs_vue_vue_type_template_id_468e2bfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faqs.vue?vue&type=template&id=468e2bfe& */ "./resources/js/components/Faq/Faqs.vue?vue&type=template&id=468e2bfe&");
/* harmony import */ var _Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faqs.vue?vue&type=script&lang=js& */ "./resources/js/components/Faq/Faqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faqs_vue_vue_type_template_id_468e2bfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faqs_vue_vue_type_template_id_468e2bfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Faq/Faqs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Faq/Faqs.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Faq/Faqs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faqs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Faq/Faqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Faq/Faqs.vue?vue&type=template&id=468e2bfe&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Faq/Faqs.vue?vue&type=template&id=468e2bfe& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_468e2bfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faqs.vue?vue&type=template&id=468e2bfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Faq/Faqs.vue?vue&type=template&id=468e2bfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_468e2bfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_468e2bfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);