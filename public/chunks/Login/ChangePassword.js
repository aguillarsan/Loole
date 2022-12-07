(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Login/ChangePassword"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/ChangePassword.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      load: false,
      password: null,
      confirm_password: null,
      error_password: null,
      icon_name_1: "eye-off-outline",
      icon_name_2: "eye-off-outline",
      pass: false,
      pass_confirm: false,
      error_confirm_password: ''
    };
  },
  created: function created() {
    document.getElementById("body_element").className = "bg-white dark-mode-active";
    document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;background-attachment:fixed !important;";
  },
  watch: {
    password: function password(text) {
      if (text) {
        this.error_password = '';
      }
    },
    confirm_password: function confirm_password(text) {
      if (text) {
        this.error_confirm_password = '';
      }
    }
  },
  methods: {
    saveNewPassword: function saveNewPassword() {
      this.validate();

      if (this.pass && this.pass_confirm) {
        this.checkToken();
      }
    },
    validate: function validate() {
      if (!this.password) {
        this.error_password = 'Debes ingresar una contraseña';
      } else if (this.password.length < 8) {
        this.error_password = 'La contraseña debe tener entre 8 y 16 caracteres';
      } else if (this.password && this.password.length >= 8) {
        this.pass = true;
      }

      if (!this.confirm_password) {
        this.error_confirm_password = 'Debes repetir la contraseña';
      } else if (this.confirm_password != this.password) {
        this.error_confirm_password = 'Las contraseñas no coinciden';
      } else if (this.confirm_password == this.password) {
        this.pass_confirm = true;
      }
    },
    checkToken: function checkToken() {
      var _this = this;

      this.load = true;
      axios.get('/reset/check/token', {
        params: {
          token: this.$route.params.token
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          _this.updatePassword();
        } else {
          _this.load = false;

          _this.alert(response.data.message, response.data.type, response.data.position);

          setTimeout(function () {
            _this.$router.push('/Login/reset-password');
          }, 400);
        }
      });
    },
    updatePassword: function updatePassword() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('password', this.password);
      formData.append('token', this.$route.params.token);
      axios.post('/reset/password/update/password', formData).then(function (response) {
        _this2.alert(response.data.message, response.data.type, response.data.position);

        if (response.data.code == 200) {
          _this2.load = false;
          setTimeout(function () {
            _this2.$router.push('/Login');
          }, 300);
        }
      });
    },
    alert: function alert(message, type, position) {
      Vue.$toast.open({
        message: message,
        type: type,
        position: position,
        duration: 5000
      });
    },
    seePassword: function seePassword(input) {
      var passW1 = document.getElementById("pass1");
      var passW2 = document.getElementById("pass2");

      if (input == 1) {
        if (passW1.type == "password") {
          passW1.type = "text";
          this.icon_name_1 = "eye-outline";
        } else {
          passW1.type = "password";
          this.icon_name_1 = "eye-off-outline";
        }
      }

      if (input == 2) {
        if (passW2.type == "password") {
          passW2.type = "text";
          this.icon_name_2 = "eye-outline";
        } else {
          passW2.type = "password";
          this.icon_name_2 = "eye-off-outline";
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/ChangePassword.vue?vue&type=template&id=0b17db48&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login/ChangePassword.vue?vue&type=template&id=0b17db48& ***!
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

  return _c("div", [_c("div", {
    staticClass: "appHeader no-border transparent position-absolute animated fadeIn"
  }, [_c("div", {
    staticClass: "left"
  }, [_c("router-link", {
    staticClass: "headerButton goBack",
    attrs: {
      to: "/Login"
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      name: "chevron-back-outline",
      role: "img",
      "aria-label": "chevron back outline"
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    attrs: {
      id: "appCapsule"
    }
  }, [_c("div", {
    staticClass: "login-form"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "section mt-2 mb-5"
  }, [_c("form", [_c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper",
    staticStyle: {
      "text-align": "left"
    }
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "pass1"
    }
  }, [_vm._v("Nueva Contraseña")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      id: "pass1",
      placeholder: "*********"
    },
    domProps: {
      value: _vm.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
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
      name: _vm.icon_name_1,
      role: "img",
      "aria-label": "close circle"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                            " + _vm._s(_vm.error_password) + "\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "input-wrapper",
    staticStyle: {
      "text-align": "left"
    }
  }, [_c("label", {
    staticClass: "label white",
    attrs: {
      "for": "pass2"
    }
  }, [_vm._v("Confirmar Contraseña")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.confirm_password,
      expression: "confirm_password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      id: "pass2",
      placeholder: "*********"
    },
    domProps: {
      value: _vm.confirm_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.confirm_password = $event.target.value;
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
      name: _vm.icon_name_2,
      role: "img",
      "aria-label": "close circle"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "invalid-input"
  }, [_vm._v("\n                            " + _vm._s(_vm.error_confirm_password) + "\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group boxed"
  }, [_c("div", {
    staticClass: "mt-2",
    staticStyle: {
      "margin-top": "2rem !important"
    }
  }, [_c("button", {
    staticClass: "btn btn-primary bg-primary-loole rounded me-1",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      type: "button",
      disabled: _vm.load ? true : false
    },
    on: {
      click: _vm.saveNewPassword
    }
  }, [_vm._v("\n                                Aceptar\n\n                                "), _vm.load ? _c("span", {
    staticClass: "spinner-border spinner-border-sm",
    staticStyle: {
      "margin-left": "5px !important"
    },
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }) : _vm._e()])])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "section",
    staticStyle: {
      "margin-bottom": "1.5rem !important"
    }
  }, [_c("img", {
    staticClass: "form-image",
    staticStyle: {
      "max-width": "140px",
      width: "100%",
      "margin-top": "100px"
    },
    attrs: {
      src: "/images/logo/isotipo.svg",
      alt: "image",
      width: "140",
      height: "79"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "section mt-5"
  }, [_c("h1", [_vm._v("Recuperación de contraseña")]), _vm._v(" "), _c("h4", [_vm._v("Escriba su nueva contraseña")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Login/ChangePassword.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Login/ChangePassword.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_0b17db48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=0b17db48& */ "./resources/js/components/Login/ChangePassword.vue?vue&type=template&id=0b17db48&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/components/Login/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_0b17db48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_0b17db48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login/ChangePassword.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Login/ChangePassword.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Login/ChangePassword.vue?vue&type=template&id=0b17db48&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Login/ChangePassword.vue?vue&type=template&id=0b17db48& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_0b17db48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=0b17db48& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/ChangePassword.vue?vue&type=template&id=0b17db48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_0b17db48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_0b17db48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);