(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Profile/settings"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/Settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["usuario"],
  data: function data() {
    return {
      load: false,
      loadDeleteAccount: false
    };
  },
  methods: {
    suspendAccount: function suspendAccount() {
      this.load = true;
      axios.post('/suspendAccount').then(function (response) {
        localStorage.clear();
        window.location.replace('/Login');
        location.reload();
      });
    },
    deleteAccount: function deleteAccount() {
      this.loadDeleteAccount = true;
      axios.post('/deleteAccount').then(function (response) {
        window.location.replace('/login');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Settings.vue?vue&type=template&id=0a4a3bd4&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/Settings.vue?vue&type=template&id=0a4a3bd4& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm.loadDeleteAccount ? _c("div", {
    staticClass: "logo-load-center"
  }, [_c("img", {
    staticClass: "animate-flicker",
    attrs: {
      src: "/images/img_0.png"
    }
  })]) : _vm._e(), _vm._v(" "), !_vm.loadDeleteAccount ? _c("div", {
    staticClass: "appHeader box-shw-profile-header"
  }, [_c("div", {
    staticClass: "left",
    attrs: {
      id: "back_arrow"
    }
  }, [_c("router-link", {
    staticClass: "headerButton goBack",
    attrs: {
      to: {
        path: "/" + _vm.usuario.username,
        params: {
          usermane: _vm.usuario.username
        }
      }
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      "aria-label": "chevron back outline",
      name: "chevron-back-outline",
      role: "img"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "pageTitle"
  }, [_vm._v("\n            Adminstrar perfil\n        ")])]) : _vm._e(), _vm._v(" "), !_vm.loadDeleteAccount ? _c("div", {
    attrs: {
      id: "appCapsule"
    }
  }, [_c("div", {
    attrs: {
      id: "setting_options_user"
    }
  }, [_c("ul", {
    staticClass: "listview image-listview flush transparent"
  }, [_c("li", [_c("router-link", {
    staticClass: "item",
    attrs: {
      to: "/Profile/Settings/ChangePassword"
    }
  }, [_c("div", {
    staticClass: "icon-box"
  }, [_c("ion-icon", {
    staticClass: "md hydrated icon-22",
    attrs: {
      "aria-label": "browsers outline",
      name: "key-outline",
      role: "img"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "in"
  }, [_vm._v("\n                            Cambiar contraseña\n                        ")])])], 1), _vm._v(" "), _vm.usuario.role_id == 2 ? _c("li", [_c("router-link", {
    staticClass: "item",
    attrs: {
      to: "/Profile/Settings/Account"
    }
  }, [_c("div", {
    staticClass: "icon-box"
  }, [_c("ion-icon", {
    staticClass: "md hydrated icon-22",
    attrs: {
      "aria-label": "add outline",
      name: "wallet-outline",
      role: "img"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "in"
  }, [_vm._v("\n                            Editar datos bancarios\n                        ")])])], 1) : _vm._e(), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "item",
    attrs: {
      href: "#DialogForm",
      "data-bs-toggle": "modal",
      "data-bs-target": "#DialogForm"
    }
  }, [_c("div", {
    staticClass: "icon-box"
  }, [_c("ion-icon", {
    staticClass: "md hydrated icon-22",
    attrs: {
      "aria-label": "layers outline",
      name: "person-outline",
      role: "img"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "in"
  }, [_vm._v("\n                            Suspender Cuenta\n                        ")])])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "item",
    attrs: {
      href: "#deleteAccount",
      "data-bs-toggle": "modal",
      "data-bs-target": "#deleteAccount"
    }
  }, [_c("div", {
    staticClass: "icon-box"
  }, [_c("ion-icon", {
    staticClass: "md hydrated text-red icon-22",
    attrs: {
      "aria-label": "tablet portrait outline",
      name: "person-remove-outline",
      role: "img"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "in"
  }, [_vm._v("\n                            Eliminar cuenta\n                        ")])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal fade dialogbox",
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "DialogForm",
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
  }, [_vm._m(0), _vm._v(" "), _c("form", [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("div", {
    staticClass: "btn-inline"
  }, [_c("button", {
    staticClass: "btn btn-text-outline",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-text-secondary",
    attrs: {
      type: "button",
      disabled: _vm.load ? true : false
    },
    on: {
      click: _vm.suspendAccount
    }
  }, [_vm.load ? _c("span", {
    staticClass: "spinner-border spinner-border-sm me-05",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }) : _vm._e(), _vm._v("\n                                Aceptar\n                            ")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade dialogbox",
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "deleteAccount",
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
  }, [_vm._m(2), _vm._v(" "), _c("form", [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("div", {
    staticClass: "btn-inline"
  }, [_c("button", {
    staticClass: "btn btn-text-outline",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-text-secondary",
    attrs: {
      "data-bs-dismiss": "modal",
      type: "button",
      disabled: _vm.load ? true : false
    },
    on: {
      click: _vm.deleteAccount
    }
  }, [_vm.load ? _c("span", {
    staticClass: "spinner-border spinner-border-sm me-05",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }) : _vm._e(), _vm._v("\n                                Aceptar\n                            ")])])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v("Suspender cuenta")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-body text-start mb-2"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-7 mx-auto"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("div", {
    staticClass: "mb-3 text"
  }, [_vm._v("\n                                    Una vez realizada la acción, se cerrará tu sesión. Puedes reactivar tu cuenta\n                                    solo iniciando sesión.\n                                ")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v(" Eliminar cuenta")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-body text-start mb-2"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-7 mx-auto"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("div", {
    staticClass: "mb-3 text"
  }, [_vm._v("\n                                    Una vez realizada la acción, se cerrará tu sesión y tu cuenta sera eliminada. Si\n                                    deseas reactivar tu cuenta debes enviar un correo a concato@loolapp.com.\n                                ")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Profile/Settings.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Profile/Settings.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_0a4a3bd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=0a4a3bd4& */ "./resources/js/components/Profile/Settings.vue?vue&type=template&id=0a4a3bd4&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_0a4a3bd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_0a4a3bd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/Settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Profile/Settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/Settings.vue?vue&type=template&id=0a4a3bd4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Profile/Settings.vue?vue&type=template&id=0a4a3bd4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_0a4a3bd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=0a4a3bd4& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Settings.vue?vue&type=template&id=0a4a3bd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_0a4a3bd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_0a4a3bd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);