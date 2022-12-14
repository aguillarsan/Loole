(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/Adm/PostAprobe"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/PostAprobe.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Adm/PostAprobe.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      actualy_date: moment__WEBPACK_IMPORTED_MODULE_0___default()(),
      modulo: 2,
      posts: [],
      post_revision: null,
      post_rejected: null,
      post_aproved: null,
      file_view: [],
      load: false,
      logs: []
    };
  },
  created: function created() {
    this.getPostRevision();
  },
  methods: {
    formato: function formato(d) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(d).format("DD/MM/YY");
    },
    getPostRevision: function getPostRevision(state) {
      var _this = this;

      if (state) {
        this.modulo = state;
      } else {
        this.modulo = 2;
      }

      axios.get("/get-post-revision?modulo=".concat(this.modulo)).then(function (response) {
        _this.posts = response.data.posts;
        _this.post_revision = response.data.post_revision;
        _this.post_rejected = response.data.post_rejected;
        _this.post_aproved = response.data.post_aproved;
      });
    },
    formatDate: function formatDate(d) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(d).format("DD/MM/yy");
    },
    showFile: function showFile(post) {
      this.file_view.push(post.id);
      this.$eventBus.$emit('show.gallery', post.post_image);
    },
    sendMail: function sendMail(user_id) {
      var formData = new FormData();
      formData.append('user_id', user_id);
      axios.post('/email-aprove-post', formData).then(function (response) {});
    },
    showModal: function showModal(post) {
      var _this2 = this;

      axios.get('/log/publicaction/' + post).then(function (response) {
        _this2.logs = response.data;
        $("#DialogBasic").modal("show");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/PostAprobe.vue?vue&type=template&id=5ed5107f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Adm/PostAprobe.vue?vue&type=template&id=5ed5107f& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
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
                                  return _vm.getPostRevision(2)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                        Publicaciones pendientes\n\n                                        "
                              ),
                              _c(
                                "h5",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: { "font-size": "18px" },
                                },
                                [_vm._v(_vm._s(_vm.post_revision))]
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
                                  return _vm.getPostRevision(3)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                        Publicaciones Rechazadas\n\n                                        "
                              ),
                              _c(
                                "h5",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: { "font-size": "18px" },
                                },
                                [_vm._v(_vm._s(_vm.post_rejected))]
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
                                  return _vm.getPostRevision(1)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                                        Publicaciones Aprobadas\n\n                                        "
                              ),
                              _c(
                                "h5",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: { "font-size": "18px" },
                                },
                                [_vm._v(_vm._s(_vm.post_aproved))]
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
                              _c("div", { staticClass: "section mt-2" }, [
                                _c(
                                  "div",
                                  { staticClass: "row" },
                                  _vm._l(_vm.posts, function (post) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "col-4",
                                        staticStyle: { "margin-top": "5px" },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "card product-card" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "card-body" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "contenedor-imagenes",
                                                    staticStyle: {
                                                      display: "block",
                                                      height: "200px",
                                                    },
                                                    attrs: {
                                                      id: "content_img",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "imagen fadeIn",
                                                      },
                                                      [
                                                        _c("img", {
                                                          staticClass: "image",
                                                          staticStyle: {
                                                            "border-radius":
                                                              "8px",
                                                          },
                                                          attrs: {
                                                            src: post.user
                                                              .real_profile_img
                                                              ? post.user
                                                                  .real_profile_img
                                                              : post.user
                                                                  .profile_image,
                                                            alt: "product image",
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "h2",
                                                  { staticClass: "title" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        post.user.username
                                                      ) + " "
                                                    ),
                                                    _c("img", {
                                                      staticStyle: {
                                                        "margin-top": "-2px",
                                                      },
                                                      attrs: {
                                                        src: "/images/sello/sello.svg",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  { staticClass: "text" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.formato(
                                                          post.created_at
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.actualy_date.diff(
                                                  post.created_at,
                                                  "days"
                                                ) == 0 &&
                                                _vm.actualy_date.diff(
                                                  post.created_at,
                                                  "minute"
                                                ) >= 60
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block font-eleven",
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                            Hace " +
                                                            _vm._s(
                                                              _vm.actualy_date.diff(
                                                                post.created_at,
                                                                "hours"
                                                              )
                                                            ) +
                                                            "\n                                                            hrs\n                                                        "
                                                        ),
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.actualy_date.diff(
                                                  post.created_at,
                                                  "minute"
                                                ) < 60 &&
                                                _vm.actualy_date.diff(
                                                  post.created_at,
                                                  "minute"
                                                ) >= 1
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block font-eleven",
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                            Hace " +
                                                            _vm._s(
                                                              _vm.actualy_date.diff(
                                                                post.created_at,
                                                                "minute"
                                                              )
                                                            ) +
                                                            "\n                                                            min\n                                                        "
                                                        ),
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.actualy_date.diff(
                                                  post.created_at,
                                                  "days"
                                                ) >= 1
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block font-eleven",
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                            Hace " +
                                                            _vm._s(
                                                              _vm.actualy_date.diff(
                                                                post.created_at,
                                                                "days"
                                                              )
                                                            ) +
                                                            "\n                                                            d??as\n                                                        "
                                                        ),
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.actualy_date.diff(
                                                  post.created_at,
                                                  "minute"
                                                ) < 1
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block font-eleven",
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                            Hace " +
                                                            _vm._s(
                                                              _vm.actualy_date.diff(
                                                                post.created_at,
                                                                "seconds"
                                                              )
                                                            ) +
                                                            "\n                                                            s\n                                                        "
                                                        ),
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: {
                                                      to: {
                                                        path:
                                                          "/PostAprobe/Content/" +
                                                          post.id,
                                                        params: {
                                                          post: post.id,
                                                        },
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-primary btn-block rounded",
                                                        staticStyle: {
                                                          "margin-top": "10px",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                                Ver Publicaci??n"
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.modulo == 3 ||
                                                _vm.modulo == 1
                                                  ? _c(
                                                      "a",
                                                      {
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.showModal(
                                                              post.id
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm btn-secondary btn-block rounded",
                                                            staticStyle: {
                                                              "margin-top":
                                                                "10px",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                Ver Log"
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  : _vm._e(),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  }),
                                  0
                                ),
                              ]),
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
          id: "DialogBasic",
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
                _c("div", { staticClass: "modal-header" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  _vm._l(_vm.logs, function (log) {
                    return _c("div", { staticClass: "message-item" }, [
                      _c("img", {
                        staticClass: "avatar",
                        attrs: {
                          src: "assets/img/sample/avatar/avatar1.jpg",
                          alt: "avatar",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _c("div", { staticClass: "title" }, [
                          _vm._v(_vm._s(log.user.name)),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "bubble" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(log.message) +
                              "\n                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "footer" }, [
                          _vm._v("  " + _vm._s(_vm.formato(log.created_at))),
                        ]),
                      ]),
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _vm._m(1),
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
    return _c("div", { staticClass: "appHeader text" }, [
      _c("div", { staticClass: "pageTitle" }, [_vm._v("Publicaciones")]),
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
            staticClass: "btn btn-text-secondary",
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

/***/ "./resources/js/components/Adm/PostAprobe.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Adm/PostAprobe.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostAprobe_vue_vue_type_template_id_5ed5107f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostAprobe.vue?vue&type=template&id=5ed5107f& */ "./resources/js/components/Adm/PostAprobe.vue?vue&type=template&id=5ed5107f&");
/* harmony import */ var _PostAprobe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostAprobe.vue?vue&type=script&lang=js& */ "./resources/js/components/Adm/PostAprobe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostAprobe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostAprobe_vue_vue_type_template_id_5ed5107f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostAprobe_vue_vue_type_template_id_5ed5107f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Adm/PostAprobe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Adm/PostAprobe.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Adm/PostAprobe.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostAprobe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostAprobe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/PostAprobe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostAprobe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Adm/PostAprobe.vue?vue&type=template&id=5ed5107f&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Adm/PostAprobe.vue?vue&type=template&id=5ed5107f& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostAprobe_vue_vue_type_template_id_5ed5107f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostAprobe.vue?vue&type=template&id=5ed5107f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Adm/PostAprobe.vue?vue&type=template&id=5ed5107f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostAprobe_vue_vue_type_template_id_5ed5107f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostAprobe_vue_vue_type_template_id_5ed5107f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);