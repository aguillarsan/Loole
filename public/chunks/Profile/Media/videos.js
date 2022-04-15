(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Profile/Media/videos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Media/Video.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/Media/Video.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
Vue.component("InfiniteLoading", __webpack_require__(/*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js"));
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user_id', 'usuario'],
  data: function data() {
    return {
      page: 0,
      infiniteVideotId: +new Date(),
      publications: [],
      its_my_profile: this.user_id == this.usuario.id ? true : false
    };
  },
  methods: {
    infiniteHandlerVideo: function infiniteHandlerVideo($state) {
      var _this = this;

      this.page++;
      axios.get("/get-all-video-profile-looler?page=".concat(this.page, "&user_id=").concat(this.user_id)).then(function (response) {
        var data = response.data.data;

        if (data.length) {
          _this.publications = _this.publications.concat(data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    showPost: function showPost() {},
    ifBuy: function ifBuy(post) {
      var _this2 = this;

      var buy = post.post_buy;
      var post_buy_check = buy.find(function (data) {
        return data.user_id == _this2.usuario.id;
      });

      if (post_buy_check) {
        return true;
      } else {
        return false;
      }
    },
    showVideo: function showVideo(vid) {
      $("#modalVideo").modal("show");
      var video = document.getElementById("videoPlayer");
      this.$refs.videoplay.src = vid;
      this.$refs.videoplay.load();
      video.play();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Media/Video.vue?vue&type=template&id=7b440fcf&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/Media/Video.vue?vue&type=template&id=7b440fcf& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      { staticStyle: { "margin-top": "10px" } },
      [
        _c(
          "div",
          {
            staticClass: "galeria animated fadeIn",
            attrs: { id: "galeria_looler" },
          },
          [
            _c(
              "div",
              {
                staticClass: "contenedor-imagenes",
                attrs: { id: "content_img" },
              },
              _vm._l(_vm.publications, function (publi, key) {
                return _c(
                  "div",
                  {
                    key: key,
                    staticClass: "imagen fadeIn",
                    staticStyle: { position: "relative !important" },
                    attrs: { id: "galery" + publi.id },
                  },
                  [
                    _vm.its_my_profile
                      ? _c(
                          "div",
                          {
                            staticClass: "imagen animated fadeIn",
                            attrs: { click: "showVideo(publi.video)" },
                          },
                          [
                            _c("a", [
                              _c(
                                "div",
                                {
                                  staticClass: "video_play_profile hover_link",
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-secondary bg-secondary-loole   hover_link ",
                                      on: {
                                        click: function ($event) {
                                          return _vm.showVideo(publi.video)
                                        },
                                      },
                                    },
                                    [
                                      _c("ion-icon", {
                                        staticStyle: {
                                          "font-size": "25px",
                                          "margin-left": "10px",
                                        },
                                        attrs: { name: "play" },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              publi.thumbail
                                ? _c("img", {
                                    directives: [
                                      {
                                        name: "lazy",
                                        rawName: "v-lazy.container",
                                        value: publi.thumbail,
                                        expression: "publi.thumbail",
                                        modifiers: { container: true },
                                      },
                                    ],
                                    staticClass: "animated fadeIn",
                                  })
                                : _vm._e(),
                            ]),
                          ]
                        )
                      : _c(
                          "div",
                          {
                            staticClass: "imagen animated fadeIn",
                            attrs: { click: "showVideo(publi.video)" },
                          },
                          [
                            publi.post["locked"] == 1
                              ? _c(
                                  "div",
                                  { staticClass: "imagen animated fadeIn" },
                                  [
                                    _vm.ifBuy(publi.post)
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "imagen animated fadeIn",
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "video_play_profile hover_link",
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-secondary bg-secondary-loole   hover_link ",
                                                  },
                                                  [
                                                    _c("ion-icon", {
                                                      staticStyle: {
                                                        "font-size": "25px",
                                                        "margin-left": "10px",
                                                      },
                                                      attrs: { name: "play" },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            publi.thumbail
                                              ? _c("img", {
                                                  directives: [
                                                    {
                                                      name: "lazy",
                                                      rawName:
                                                        "v-lazy.container",
                                                      value: publi.thumbail,
                                                      expression:
                                                        "publi.thumbail",
                                                      modifiers: {
                                                        container: true,
                                                      },
                                                    },
                                                  ],
                                                  staticClass:
                                                    "animated fadeIn",
                                                })
                                              : _vm._e(),
                                          ]
                                        )
                                      : _c(
                                          "div",
                                          {
                                            staticClass:
                                              "imagen animated fadeIn",
                                          },
                                          [
                                            _c("a", [
                                              _c("img", {
                                                attrs: {
                                                  src: "/images/blocked.svg",
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.showPost(
                                                      _vm.post
                                                    )
                                                  },
                                                },
                                              }),
                                            ]),
                                          ]
                                        ),
                                  ]
                                )
                              : _c(
                                  "div",
                                  {
                                    staticClass: "imagen animated fadeIn",
                                    on: {
                                      click: function ($event) {
                                        return _vm.showVideo(publi.video)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "video_play_profile hover_link",
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-secondary bg-secondary-loole   hover_link ",
                                            attrs: { type: "button" },
                                          },
                                          [
                                            _c("ion-icon", {
                                              staticStyle: {
                                                "font-size": "25px",
                                                "margin-left": "10px",
                                              },
                                              attrs: { name: "play" },
                                            }),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    publi.thumbail
                                      ? _c("img", {
                                          directives: [
                                            {
                                              name: "lazy",
                                              rawName: "v-lazy.container",
                                              value: publi.thumbail,
                                              expression: "publi.thumbail",
                                              modifiers: { container: true },
                                            },
                                          ],
                                          staticClass: "animated fadeIn",
                                        })
                                      : _vm._e(),
                                  ]
                                ),
                          ]
                        ),
                  ]
                )
              }),
              0
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "infinite-loading",
          {
            ref: "InfiniteLoading",
            attrs: { identifier: _vm.infiniteVideotId },
            on: { infinite: _vm.infiniteHandlerVideo },
          },
          [
            _c(
              "div",
              {
                staticClass: "text-white",
                attrs: { slot: "no-more" },
                slot: "no-more",
              },
              [_vm._v("No hay nada publicado aún")]
            ),
            _vm._v(" "),
            _c("div", { attrs: { slot: "no-results" }, slot: "no-results" }, [
              _vm._v("No hay más publicaciones"),
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
        staticClass: "modal fade modalbox",
        staticStyle: { display: "none" },
        attrs: {
          id: "modalVideo",
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
                staticStyle: { background: "rgb(0,0,0,0.3)" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-header",
                    staticStyle: {
                      background: "rgb(0,0,0,0.1)",
                      "border-bottom": "none",
                    },
                  },
                  [
                    _c("a", { staticClass: "profile-detail" }),
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
                          staticStyle: { color: "white", "font-size": "28px" },
                          attrs: {
                            name: "close",
                            role: "img",
                            "aria-label": "close",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("video", {
                  ref: "videoplay",
                  staticStyle: { width: "100%", height: "100%" },
                  attrs: {
                    id: "videoPlayer",
                    controlslist: "nodownload",
                    controls: "",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile/Media/Video.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Profile/Media/Video.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Video_vue_vue_type_template_id_7b440fcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video.vue?vue&type=template&id=7b440fcf& */ "./resources/js/components/Profile/Media/Video.vue?vue&type=template&id=7b440fcf&");
/* harmony import */ var _Video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/Media/Video.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Video_vue_vue_type_template_id_7b440fcf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Video_vue_vue_type_template_id_7b440fcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/Media/Video.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/Media/Video.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Profile/Media/Video.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Media/Video.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/Media/Video.vue?vue&type=template&id=7b440fcf&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Profile/Media/Video.vue?vue&type=template&id=7b440fcf& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_7b440fcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video.vue?vue&type=template&id=7b440fcf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Media/Video.vue?vue&type=template&id=7b440fcf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_7b440fcf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_7b440fcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);