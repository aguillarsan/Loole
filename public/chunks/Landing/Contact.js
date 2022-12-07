(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Landing/Contact"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/Contact.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing/Contact.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      error_name: false,
      error_email: false,
      error_phone: false,
      error_msg: false,
      inputs: {
        fullname: null,
        email: null,
        phone: null,
        msg: null
      },
      formData: new FormData(),
      load: false,
      icon_name: "eye-outline",
      inputs_valid: 4
    };
  },
  created: function created() {
    document.getElementById("body_element").className = "bg-white dark-mode-active";
    document.getElementById("body_element").style = "background-image: linear-gradient(180deg, #080425 0%, #050424 100%) !important;background-attachment: fixed !important;";
  },
  watch: {
    'inputs.fullname': function inputsFullname() {
      this.error_name = false;
    },
    'inputs.email': function inputsEmail() {
      this.validateEmail();
    },
    'inputs.phone': function inputsPhone() {
      this.error_phone = false;
    },
    'inputs.msg': function inputsMsg() {
      this.error_msg = false;
    }
  },
  methods: {
    register: function register() {
      this.validate();

      if (!this.error_name && !this.error_phone && !this.error_msg && !this.error_email) {
        axios.get('/contact/send-message', {
          params: {
            'email': this.inputs.email,
            'phone': this.inputs.phone,
            'msg': this.inputs.msg,
            'name': this.inputs.fullname
          }
        }).then(function (response) {});
        this.alert('Su consulta fue enviada', 'success', 'bottom-right');
        this.cleanForm();
      }
    },
    validateEmail: function validateEmail() {
      if (this.inputs.email != "") {
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (emailRegex.test(this.inputs.email)) {
          this.error_email = false;
          return false;
        } else {
          this.error_mail = " El correo electrónico ingresado es incorrecto";
          this.error_email = true;
          return true;
        }
      } else {
        this.error_mail = " El correo electrónico requerido";
        this.error_email = true;
        return true;
      }
    },
    alert: function alert(message, type, position) {
      Vue.$toast.open({
        message: message,
        type: type,
        position: position,
        duration: 5000
      });
    },
    validate: function validate() {
      if (!this.inputs.fullname) {
        this.error_name = true;
      }

      if (!this.inputs.phone) {
        this.error_phone = true;
      }

      if (!this.inputs.msg) {
        this.error_msg = true;
      }

      this.validateEmail();
    },
    cleanForm: function cleanForm() {
      this.inputs.fullname = null;
      this.inputs.email = null;
      this.inputs.phone = null;
      this.inputs.msg = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/Contact.vue?vue&type=template&id=630df46d&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing/Contact.vue?vue&type=template&id=630df46d& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "appHeader no-border transparent position-absolute animated fadeIn"
  }, [_c("div", {
    staticClass: "left"
  }, [_c("router-link", {
    staticClass: "headerButton goBack",
    attrs: {
      to: "/Landing"
    }
  }, [_c("ion-icon", {
    staticClass: "md hydrated",
    attrs: {
      name: "chevron-back-outline",
      role: "img",
      "aria-label": "chevron back outline"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "pageTitle"
  }), _vm._v(" "), _c("div", {
    staticClass: "right"
  }, [_c("router-link", {
    staticClass: "headerButton text-primary",
    attrs: {
      to: "/Login"
    }
  }, [_vm._v(" Login ")])], 1)]) : _vm._e(), _vm._v(" "), !_vm.load ? _c("div", {
    attrs: {
      id: "appCapsule"
    }
  }, [_c("div", {
    staticClass: "login-form"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "section mt-2 mb-5"
  }, [_c("form", {
    attrs: {
      action: "app-pages.html"
    }
  }, [_c("div", {
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
      id: "name1"
    },
    domProps: {
      value: _vm.inputs.fullname
    },
    on: {
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
  })], 1) : _vm._e()]), _vm._v(" "), _vm.error_name ? _c("div", {
    staticClass: "invalid-input",
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("\n                            El nombre es obligatorio\n                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
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
      id: "email1"
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
      role: "img",
      "aria-label": "close circle"
    },
    on: {
      click: function click($event) {
        return _vm.clearInput(1);
      }
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.error_email ? _c("div", {
    staticClass: "invalid-input",
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.error_mail) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Teléfono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.phone,
      expression: "inputs.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "name1"
    },
    domProps: {
      value: _vm.inputs.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.inputs, "phone", $event.target.value);
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
  })], 1) : _vm._e()]), _vm._v(" "), _vm.error_phone ? _c("div", {
    staticClass: "invalid-input",
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("\n                            El teléfono es obligatorio\n                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Mensaje")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputs.msg,
      expression: "inputs.msg"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "300",
      rows: "5"
    },
    domProps: {
      value: _vm.inputs.msg
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.inputs, "msg", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.error_msg ? _c("div", {
    staticClass: "invalid-input",
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("\n                            Debes ingresar un mensaje\n                        ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "label white mt-1",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.inputs.msg ? _vm.inputs.msg.length : "0") + "/300")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-5",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.register();
      }
    }
  }, [_c("button", {
    staticClass: "btn btn-primary rounded me-1",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      type: "submit",
      disabled: _vm.load ? true : false
    }
  }, [_vm.load ? _c("span", {
    staticClass: "spinner-border spinner-border-sm me-05",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }) : _vm._e(), _vm._v("\n                            Enviar\n                        ")])])])])])]) : _vm._e()]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "section"
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
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "section mt-3"
  }, [_c("h1", [_vm._v("Contacto")]), _vm._v(" "), _c("h4", {
    staticClass: "mt-2"
  }, [_vm._v("Si tiene alguna pregunta, por favor complete el siguiente formulario para\n                    contactarnos.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Landing/Contact.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Landing/Contact.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_630df46d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=630df46d& */ "./resources/js/components/Landing/Contact.vue?vue&type=template&id=630df46d&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/components/Landing/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_630df46d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_630df46d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Landing/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Landing/Contact.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Landing/Contact.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Landing/Contact.vue?vue&type=template&id=630df46d&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Landing/Contact.vue?vue&type=template&id=630df46d& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_630df46d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=630df46d& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/Contact.vue?vue&type=template&id=630df46d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_630df46d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_630df46d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);