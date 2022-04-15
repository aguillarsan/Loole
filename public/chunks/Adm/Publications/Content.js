(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Adm/Publications/Content"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/Publications/Content.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Adm/Publications/Content.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      contents: [],
      file: "",
      user_post: "",
      load: false,
      state_id: "",
      motivo: ""
    };
  },
  created: function created() {
    this.getContent();
  },
  methods: {
    getContent: function getContent() {
      var _this = this;

      var formData = new FormData();
      formData.append('post_id', this.$route.params.post);
      axios.get("/publication/content/detail?post_id= ".concat(this.$route.params.post)).then(function (response) {
        _this.contents = response.data.contents;
        _this.user_post = response.data.user_id;
        _this.state_id = response.data.status;
      });
    },
    showImg: function showImg(content) {
      var video = document.getElementById('video' + content);

      if (video) {
        video.play();
        video.requestFullscreen();
      } else {
        this.file = content;
        var btn = document.getElementById("btn_open");
        btn.click();
      }
    },
    aprobePost: function aprobePost() {
      var _this2 = this;

      this.load = true;
      var formData = new FormData();
      formData.append('post_id', this.$route.params.post);
      axios.post('/aprove-post', formData).then(function (response) {
        _this2.sendMail();

        var type = "success";
        var message = "Publicación aprobada";

        _this2.$eventBus.$emit('display-alert-app-adm', type, message);
      });
    },
    sendMail: function sendMail() {
      var _this3 = this;

      var formData = new FormData();
      formData.append('user_id', this.user_post);
      axios.post('/email-aprove-post', formData).then(function (response) {
        console.log(response.data);
        _this3.load = false;
      });
    },
    openModal: function openModal() {
      $("#DialogForm").modal("show");
    },
    cancelPost: function cancelPost() {
      var _this4 = this;

      if (this.motivo.length > 0) {
        $("#DialogForm").modal("hide");
        this.load = true;
        var formData = new FormData();
        formData.append('motivo', this.motivo);
        formData.append('user_id', this.user_post);
        formData.append('post_id', this.$route.params.post);
        axios.post('/publication/denny', formData).then(function (response) {
          var type = "success";
          var message = "Publicación rechazada";

          _this4.$eventBus.$emit('display-alert-app-adm', type, message);

          _this4.load = false;
          setTimeout(function () {
            _this4.back();
          }, 500);
        });
      } else {
        console.log("error");
      }
    },
    back: function back() {
      window.location.replace('/PostAprobe');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/Publications/Content.vue?vue&type=template&id=3ccb96e1&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Adm/Publications/Content.vue?vue&type=template&id=3ccb96e1& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "appHeader text" }, [
      _c(
        "div",
        { staticClass: "left", attrs: { id: "back_arrow" } },
        [
          _c(
            "router-link",
            {
              staticClass: "headerButton goBack",
              attrs: { to: "/PostAprobe" },
            },
            [
              _c("ion-icon", {
                staticClass: "md hydrated",
                attrs: {
                  "aria-label": "chevron back outline",
                  name: "chevron-back-outline",
                  role: "img",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "pageTitle" }, [
        _vm._v("Contenido publicación"),
      ]),
      _vm._v(" "),
      _vm.state_id == 2
        ? _c("div", { staticClass: "right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary rounded",
                on: { click: _vm.aprobePost },
              },
              [
                _vm._v(
                  "\n              \n                Aprobar\n            "
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-danger rounded",
                on: { click: _vm.openModal },
              },
              [
                _vm._v(
                  "\n             \n                Rechazar\n            "
                ),
              ]
            ),
          ])
        : _vm._e(),
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "appCapsule" } }, [
      _c("div", { attrs: { id: "adm_responsive" } }, [
        !_vm.load
          ? _c("div", { staticClass: "section mt-2" }, [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.contents, function (content) {
                  return _c(
                    "div",
                    {
                      staticClass: "col-6",
                      staticStyle: { "margin-top": "15px" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "hover_link",
                          on: {
                            click: function ($event) {
                              return _vm.showImg(
                                content.image ? content.image : content.id
                              )
                            },
                          },
                        },
                        [
                          content.image
                            ? _c("img", {
                                staticClass: "imaged img-fluid",
                                attrs: { src: content.image, alt: "image" },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", [
                            content.video
                              ? _c(
                                  "video",
                                  {
                                    staticClass:
                                      "imaged img-fluid border-radius-lg  shadow video_min",
                                    attrs: {
                                      id: "video" + content.id,
                                      controls: "",
                                    },
                                  },
                                  [
                                    _c("source", {
                                      attrs: {
                                        src: content.video,
                                        type: "video/mp4",
                                      },
                                    }),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            content.video
                              ? _c("div", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-secondary rounded",
                                    },
                                    [_vm._v("►")]
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]
                      ),
                    ]
                  )
                }),
                0
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.load
          ? _c("div", { staticStyle: { "text-align": "center" } }, [
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
            ])
          : _vm._e(),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade stories",
        staticStyle: { display: "none" },
        attrs: {
          id: "StoryDefault",
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
              _c("div", { staticClass: "story-image" }, [
                _c("img", { attrs: { src: _vm.file, alt: "image" } }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-header" }, [
                _c("a", {
                  staticClass: "profile-detail",
                  attrs: { href: "#" },
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "close-stories",
                    attrs: { href: "#", "data-bs-dismiss": "modal" },
                  },
                  [
                    _c("ion-icon", {
                      staticClass: "md hydrated",
                      attrs: {
                        name: "close",
                        role: "img",
                        "aria-label": "close",
                      },
                    }),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _vm._m(0),
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
              _vm._m(1),
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
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.motivo,
                            expression: "motivo",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { id: "address5", rows: "6" },
                        domProps: { value: _vm.motivo },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.motivo = $event.target.value
                          },
                        },
                      }),
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
                        attrs: { type: "button" },
                        on: { click: _vm.cancelPost },
                      },
                      [_vm._v("Aceptar\n                            ")]
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
    return _c(
      "a",
      {
        staticClass: "item",
        staticStyle: { visibility: "hidden" },
        attrs: {
          href: "#",
          id: "btn_open",
          "data-bs-toggle": "modal",
          "data-component": "stories",
          "data-bs-target": "#StoryDefault",
        },
      },
      [_c("div", { staticClass: "in" }, [_c("div", [_vm._v("Default")])])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Rechzar Publicación")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Adm/Publications/Content.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Adm/Publications/Content.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue_vue_type_template_id_3ccb96e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=3ccb96e1& */ "./resources/js/components/Adm/Publications/Content.vue?vue&type=template&id=3ccb96e1&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./resources/js/components/Adm/Publications/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_3ccb96e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Content_vue_vue_type_template_id_3ccb96e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Adm/Publications/Content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Adm/Publications/Content.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Adm/Publications/Content.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/Publications/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Adm/Publications/Content.vue?vue&type=template&id=3ccb96e1&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Adm/Publications/Content.vue?vue&type=template&id=3ccb96e1& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_3ccb96e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=template&id=3ccb96e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/Publications/Content.vue?vue&type=template&id=3ccb96e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_3ccb96e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_3ccb96e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);