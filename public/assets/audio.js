(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["audio"],{

/***/ "./assets/components/audio/index.js":
/*!******************************************!*\
  !*** ./assets/components/audio/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload */ "./assets/components/audio/upload.vue");


console.log('hello upload');
var views = [{
  id: 'upload',
  component: _upload__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
views.forEach(function (view) {
  if (document.getElementById(view.id)) {
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: '#' + view.id,
      render: function render(h) {
        return h(view.component);
      }
    });
  }
});

/***/ }),

/***/ "./assets/components/audio/upload.vue":
/*!********************************************!*\
  !*** ./assets/components/audio/upload.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload_vue_vue_type_template_id_f4fc7896_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.vue?vue&type=template&id=f4fc7896&scoped=true& */ "./assets/components/audio/upload.vue?vue&type=template&id=f4fc7896&scoped=true&");
/* harmony import */ var _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.vue?vue&type=script&lang=js& */ "./assets/components/audio/upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _upload_vue_vue_type_style_index_0_id_f4fc7896_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.vue?vue&type=style&index=0&id=f4fc7896&lang=less&scoped=true& */ "./assets/components/audio/upload.vue?vue&type=style&index=0&id=f4fc7896&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upload_vue_vue_type_template_id_f4fc7896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upload_vue_vue_type_template_id_f4fc7896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f4fc7896",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/audio/upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/components/audio/upload.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/components/audio/upload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/audio/upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/components/audio/upload.vue?vue&type=style&index=0&id=f4fc7896&lang=less&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./assets/components/audio/upload.vue?vue&type=style&index=0&id=f4fc7896&lang=less&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_f4fc7896_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--4-oneOf-1-2!../../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=style&index=0&id=f4fc7896&lang=less&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/audio/upload.vue?vue&type=style&index=0&id=f4fc7896&lang=less&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_f4fc7896_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_f4fc7896_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_f4fc7896_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_f4fc7896_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_f4fc7896_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/components/audio/upload.vue?vue&type=template&id=f4fc7896&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./assets/components/audio/upload.vue?vue&type=template&id=f4fc7896&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_f4fc7896_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=template&id=f4fc7896&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/audio/upload.vue?vue&type=template&id=f4fc7896&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_f4fc7896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_f4fc7896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/audio/upload.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/components/audio/upload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var MAX_UPLOADED_FILES = 10;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showForm: true,
      maxFiles: MAX_UPLOADED_FILES,
      files: [],
      allFilesUploaded: false,
      modelsChanged: false
    };
  },
  mounted: function mounted() {},
  methods: {
    reset: function reset() {
      this.showForm = true;
      this.files = [];
      this.allFilesUploaded = false;
      this.modelsChanged = false;
    },
    fileChanged: function fileChanged(file) {
      file.changed = true;
      this.modelsChanged = true;
    },
    uploadComplete: function uploadComplete() {
      var uploaded = true;
      this.files.forEach(function (file) {
        if (!file.audio) {
          uploaded = false;
        }
      });
      return uploaded;
    },
    onAddFiles: function onAddFiles(files) {
      var _this = this;

      if (!files.length) {
        this.error = 'Please select files to upload';
        return;
      }

      if (files.length > MAX_UPLOADED_FILES) {
        this.error = 'You can upload not more than ' + MAX_UPLOADED_FILES + ' files at once';
        return;
      }

      this.showForm = false;

      var _loop = function _loop(i) {
        var file = files[i];

        if (!file) {
          return "continue";
        }

        var formData = new FormData();
        formData.append('audio', file);

        _this.files.splice(i, 0, {
          file: file,
          loaded: 0,
          audio: null,
          changed: false,
          artists: []
        });

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/index.php/api/audio/upload', formData, {
          onUploadProgress: function onUploadProgress(event) {
            _this.files[i]['loaded'] = Math.round(event.loaded * 100 / event.total);
          },
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (data) {
          _this.files[i]['audio'] = data.data.audio;
          _this.files[i]['artists'] = data.data.artists;
          _this.allFilesUploaded = _this.uploadComplete();
        })["catch"](function (error) {
          return console.warn('FAILURE!!', error);
        });
      };

      for (var i = 0; i <= files.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/audio/upload.vue?vue&type=style&index=0&id=f4fc7896&lang=less&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--4-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./assets/components/audio/upload.vue?vue&type=style&index=0&id=f4fc7896&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/audio/upload.vue?vue&type=template&id=f4fc7896&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/components/audio/upload.vue?vue&type=template&id=f4fc7896&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "audio-upload" }, [
    _c(
      "form",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showForm,
            expression: "showForm"
          }
        ],
        staticClass: "upload-form text-center",
        attrs: { enctype: "multipart/form-data", novalidate: "" }
      },
      [
        _c("p", [
          _vm._v(
            "You can upload not more that " +
              _vm._s(_vm.maxFiles) +
              " files at once"
          )
        ]),
        _vm._v(" "),
        _c("p", [_vm._v("Each file should be less than 50MB")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-primary btn-icon-split",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.$refs.file.click()
              }
            }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("span", { staticClass: "text" }, [_vm._v("Select files")])
          ]
        ),
        _vm._v(" "),
        _c("input", {
          ref: "file",
          attrs: {
            type: "file",
            multiple: "",
            name: "audio",
            accept: "audio/mp3, audio/mp4"
          },
          on: {
            change: function($event) {
              return _vm.onAddFiles($event.target.files)
            }
          }
        })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.showForm,
            expression: "!showForm"
          }
        ],
        staticClass: "audio-upload-list text-sm-left"
      },
      [
        _c("div", { staticClass: "card" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "list-group list-group-flush" },
            _vm._l(_vm.files, function(file) {
              return _c("li", { staticClass: "list-group-item" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-1" }, [
                    file.audio
                      ? _c("i", { staticClass: "fa fa-check" })
                      : _vm._e(),
                    _vm._v(" "),
                    !file.audio
                      ? _c("i", { staticClass: "fas fa-circle-notch fa-spin" })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(file.file.name) +
                        "\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    file.audio
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: file.audio.title,
                              expression: "file.audio.title"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "text" },
                          domProps: { value: file.audio.title },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  file.audio,
                                  "title",
                                  $event.target.value
                                )
                              },
                              function($event) {
                                return _vm.fileChanged(file)
                              }
                            ]
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    file.audio
                      ? _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: file.audio.artist,
                                expression: "file.audio.artist"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            on: {
                              input: function($event) {
                                return _vm.fileChanged(file)
                              },
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  file.audio,
                                  "artist",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(file.artists, function(artist) {
                            return _c(
                              "option",
                              { domProps: { value: artist } },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(artist.title) +
                                    "\n                                "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    file.audio
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: file.audio.album.title,
                              expression: "file.audio.album.title"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "text" },
                          domProps: { value: file.audio.album.title },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  file.audio.album,
                                  "title",
                                  $event.target.value
                                )
                              },
                              function($event) {
                                return _vm.fileChanged(file)
                              }
                            ]
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  file.audio
                    ? _c("div", { staticClass: "col-sm-1" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            attrs: { disabled: !file.audio }
                          },
                          [_c("i", { staticClass: "fa fa-times" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-sm float-right",
                            attrs: { disabled: !file.changed }
                          },
                          [_c("i", { staticClass: "fa fa-save" })]
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                !file.audio
                  ? _c("div", { staticClass: "progress progress-sm mb-2" }, [
                      _c("div", {
                        staticClass: "progress-bar",
                        style: { width: file.loaded + "%" },
                        attrs: { role: "progressbar" }
                      })
                    ])
                  : _vm._e()
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer text-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-icon-split btn-sm",
                attrs: { disabled: !_vm.allFilesUploaded },
                on: {
                  click: function($event) {
                    return _vm.reset()
                  }
                }
              },
              [
                _vm._m(3),
                _vm._v(" "),
                _c("span", { staticClass: "text" }, [_vm._v("Upload More")])
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success btn-icon-split btn-sm",
                attrs: { disabled: !_vm.modelsChanged }
              },
              [
                _vm._m(4),
                _vm._v(" "),
                _c("span", { staticClass: "text" }, [_vm._v("Save All")])
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Allowed file types are "),
      _c("code", [_vm._v("mp3")]),
      _vm._v(" and "),
      _c("code", [_vm._v("m4a")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon text-white-50" }, [
      _c("i", { staticClass: "fas fa-upload" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-1" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [_vm._v("Filename")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [_vm._v("Artist")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [_vm._v("Album")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-1" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon text-white-50" }, [
      _c("i", { staticClass: "fas fa-upload" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon text-white-50" }, [
      _c("i", { staticClass: "fas fa-save" })
    ])
  }
]
render._withStripped = true



/***/ })

},[["./assets/components/audio/index.js","runtime","vendors~audio"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlP2Q4YjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZT81YzYzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWU/MWY5OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlPzc0MDUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZT9kZDEwIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWU/MmEwNCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwidmlld3MiLCJpZCIsImNvbXBvbmVudCIsIlVwbG9hZCIsImZvckVhY2giLCJ2aWV3IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlZ1ZSIsImVsIiwicmVuZGVyIiwiaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUVBLElBQU1DLEtBQUssR0FBRyxDQUNWO0FBQUNDLElBQUUsRUFBRSxRQUFMO0FBQWVDLFdBQVMsRUFBRUMsK0NBQU1BO0FBQWhDLENBRFUsQ0FBZDtBQUlBSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEIsTUFBSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCRixJQUFJLENBQUNKLEVBQTdCLENBQUosRUFBc0M7QUFDbEMsUUFBSU8sMkNBQUosQ0FBUTtBQUNKQyxRQUFFLEVBQUUsTUFBTUosSUFB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cUI7QUFDdEMsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0NBQW9DO0FBQzNELGVBQWUsK0JBQStCO0FBQzlDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRCxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhdWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFVwbG9hZCBmcm9tICcuL3VwbG9hZCc7XHJcblxyXG5jb25zb2xlLmxvZygnaGVsbG8gdXBsb2FkJyk7XHJcblxyXG5jb25zdCB2aWV3cyA9IFtcclxuICAgIHtpZDogJ3VwbG9hZCcsIGNvbXBvbmVudDogVXBsb2FkfVxyXG5dO1xyXG5cclxudmlld3MuZm9yRWFjaCh2aWV3ID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3LmlkKSkge1xyXG4gICAgICAgIG5ldyBWdWUoe1xyXG4gICAgICAgICAgICBlbDogJyMnICsgdmlldy5pZCxcclxuICAgICAgICAgICAgcmVuZGVyOiBoID0+IGgodmlldy5jb21wb25lbnQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGZjNzg5NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNGZjNzg5NiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY0ZmM3ODk2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL21udC9kL3d3dy9wbXAtc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y0ZmM3ODk2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y0ZmM3ODk2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y0ZmM3ODk2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0ZmM3ODk2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y0ZmM3ODk2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY0ZmM3ODk2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNGZjNzg5NiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGZjNzg5NiZzY29wZWQ9dHJ1ZSZcIiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJhdWRpby11cGxvYWRcIj5cclxuICAgICAgICA8Zm9ybSBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG5vdmFsaWRhdGUgY2xhc3M9XCJ1cGxvYWQtZm9ybSB0ZXh0LWNlbnRlclwiIHYtc2hvdz1cInNob3dGb3JtXCI+XHJcbiAgICAgICAgICAgIDxwPllvdSBjYW4gdXBsb2FkIG5vdCBtb3JlIHRoYXQge3sgbWF4RmlsZXMgfX0gZmlsZXMgYXQgb25jZTwvcD5cclxuICAgICAgICAgICAgPHA+RWFjaCBmaWxlIHNob3VsZCBiZSBsZXNzIHRoYW4gNTBNQjwvcD5cclxuICAgICAgICAgICAgPHA+QWxsb3dlZCBmaWxlIHR5cGVzIGFyZSA8Y29kZT5tcDM8L2NvZGU+IGFuZCA8Y29kZT5tNGE8L2NvZGU+PC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1pY29uLXNwbGl0XCIgQGNsaWNrPVwiJHJlZnMuZmlsZS5jbGljaygpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gdGV4dC13aGl0ZS01MFwiPjxpIGNsYXNzPVwiZmFzIGZhLXVwbG9hZFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5TZWxlY3QgZmlsZXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgbmFtZT1cImF1ZGlvXCIgcmVmPVwiZmlsZVwiIEBjaGFuZ2U9XCJvbkFkZEZpbGVzKCRldmVudC50YXJnZXQuZmlsZXMpXCJcclxuICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImF1ZGlvL21wMywgYXVkaW8vbXA0XCI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWRpby11cGxvYWQtbGlzdCB0ZXh0LXNtLWxlZnRcIiB2LXNob3c9XCIhc2hvd0Zvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+IzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5GaWxlbmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5UaXRsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5BcnRpc3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+QWxidW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgdi1pZj1cImZpbGUuYXVkaW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIiB2LWlmPVwiIWZpbGUuYXVkaW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbGUuZmlsZS5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmaWxlLmF1ZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGUuYXVkaW8udGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJmaWxlQ2hhbmdlZChmaWxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZmlsZS5hdWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsZS5hdWRpby5hcnRpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZmlsZUNoYW5nZWQoZmlsZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImFydGlzdCBpbiBmaWxlLmFydGlzdHNcIiA6dmFsdWU9XCJhcnRpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGFydGlzdC50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZpbGUuYXVkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsZS5hdWRpby5hbGJ1bS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImZpbGVDaGFuZ2VkKGZpbGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiIHYtaWY9XCJmaWxlLmF1ZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIDpkaXNhYmxlZD1cIiFmaWxlLmF1ZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gZmxvYXQtcmlnaHRcIiA6ZGlzYWJsZWQ9XCIhZmlsZS5jaGFuZ2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2F2ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIHByb2dyZXNzLXNtIG1iLTJcIiB2LWlmPVwiIWZpbGUuYXVkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiA6c3R5bGU9XCJ7d2lkdGg6IGZpbGUubG9hZGVkICsgJyUnfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhYWxsRmlsZXNVcGxvYWRlZFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1pY29uLXNwbGl0IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiB0ZXh0LXdoaXRlLTUwXCI+PGkgY2xhc3M9XCJmYXMgZmEtdXBsb2FkXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+VXBsb2FkIE1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhbW9kZWxzQ2hhbmdlZFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1pY29uLXNwbGl0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gdGV4dC13aGl0ZS01MFwiPjxpIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5TYXZlIEFsbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4gICAgY29uc3QgTUFYX1VQTE9BREVEX0ZJTEVTID0gMTA7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzaG93Rm9ybTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1heEZpbGVzOiBNQVhfVVBMT0FERURfRklMRVMsXHJcblxyXG4gICAgICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgYWxsRmlsZXNVcGxvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb2RlbHNDaGFuZ2VkOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgcmVzZXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsRmlsZXNVcGxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbHNDaGFuZ2VkID0gZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZUNoYW5nZWQoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwbG9hZENvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVwbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbGUuYXVkaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBsb2FkZWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQWRkRmlsZXMoZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdQbGVhc2Ugc2VsZWN0IGZpbGVzIHRvIHVwbG9hZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IE1BWF9VUExPQURFRF9GSUxFUykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnWW91IGNhbiB1cGxvYWQgbm90IG1vcmUgdGhhbiAnICsgTUFYX1VQTE9BREVEX0ZJTEVTICsgJyBmaWxlcyBhdCBvbmNlJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdWRpbycsIGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMuc3BsaWNlKGksIDAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGlzdHM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9pbmRleC5waHAvYXBpL2F1ZGlvL3VwbG9hZCcsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaV1bJ2xvYWRlZCddID0gTWF0aC5yb3VuZChldmVudC5sb2FkZWQgKiAxMDAgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaV1bJ2F1ZGlvJ10gPSBkYXRhLmRhdGEuYXVkaW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaV1bJ2FydGlzdHMnXSA9IGRhdGEuZGF0YS5hcnRpc3RzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbEZpbGVzVXBsb2FkZWQgPSB0aGlzLnVwbG9hZENvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybignRkFJTFVSRSEhJywgZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxyXG4gICAgLmF1ZGlvLXVwbG9hZC1saXN0IHtcclxuICAgICAgICBtYXJnaW46IC03M3B4IC0yMHB4O1xyXG5cclxuICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXBsb2FkLWZvcm0ge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1ZGlvLXVwbG9hZFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93Rm9ybSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0Zvcm1cIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWZvcm0gdGV4dC1jZW50ZXJcIixcbiAgICAgICAgYXR0cnM6IHsgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsIG5vdmFsaWRhdGU6IFwiXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIllvdSBjYW4gdXBsb2FkIG5vdCBtb3JlIHRoYXQgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1heEZpbGVzKSArXG4gICAgICAgICAgICAgIFwiIGZpbGVzIGF0IG9uY2VcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiRWFjaCBmaWxlIHNob3VsZCBiZSBsZXNzIHRoYW4gNTBNQlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4taWNvbi1zcGxpdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyZWZzLmZpbGUuY2xpY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCJTZWxlY3QgZmlsZXNcIildKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgcmVmOiBcImZpbGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICBtdWx0aXBsZTogXCJcIixcbiAgICAgICAgICAgIG5hbWU6IFwiYXVkaW9cIixcbiAgICAgICAgICAgIGFjY2VwdDogXCJhdWRpby9tcDMsIGF1ZGlvL21wNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkFkZEZpbGVzKCRldmVudC50YXJnZXQuZmlsZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogIV92bS5zaG93Rm9ybSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIXNob3dGb3JtXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImF1ZGlvLXVwbG9hZC1saXN0IHRleHQtc20tbGVmdFwiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZpbGVzLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5hdWRpb1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2hlY2tcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICFmaWxlLmF1ZGlvXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIiB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlsZS5maWxlLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5hdWRpb1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWxlLmF1ZGlvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlLmF1ZGlvLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGZpbGUuYXVkaW8udGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuYXVkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbGVDaGFuZ2VkKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGZpbGUuYXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsZS5hdWRpby5hcnRpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZS5hdWRpby5hcnRpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmlsZUNoYW5nZWQoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmF1ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJ0aXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZpbGUuYXJ0aXN0cywgZnVuY3Rpb24oYXJ0aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGFydGlzdCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhhcnRpc3QudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGZpbGUuYXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsZS5hdWRpby5hbGJ1bS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZS5hdWRpby5hbGJ1bS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBmaWxlLmF1ZGlvLmFsYnVtLnRpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmF1ZGlvLmFsYnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5maWxlQ2hhbmdlZChmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBmaWxlLmF1ZGlvXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFmaWxlLmF1ZGlvIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhZmlsZS5jaGFuZ2VkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXNhdmVcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAhZmlsZS5hdWRpb1xuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2dyZXNzIHByb2dyZXNzLXNtIG1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmlsZS5sb2FkZWQgKyBcIiVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJwcm9ncmVzc2JhclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXIgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1pY29uLXNwbGl0IGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmFsbEZpbGVzVXBsb2FkZWQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0KClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIlVwbG9hZCBNb3JlXCIpXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4taWNvbi1zcGxpdCBidG4tc21cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5tb2RlbHNDaGFuZ2VkIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwiU2F2ZSBBbGxcIildKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFwiQWxsb3dlZCBmaWxlIHR5cGVzIGFyZSBcIiksXG4gICAgICBfYyhcImNvZGVcIiwgW192bS5fdihcIm1wM1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIGFuZCBcIiksXG4gICAgICBfYyhcImNvZGVcIiwgW192bS5fdihcIm00YVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiB0ZXh0LXdoaXRlLTUwXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXVwbG9hZFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xXCIgfSwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNFwiIH0sIFtfdm0uX3YoXCJGaWxlbmFtZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yXCIgfSwgW192bS5fdihcIlRpdGxlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTJcIiB9LCBbX3ZtLl92KFwiQXJ0aXN0XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTJcIiB9LCBbX3ZtLl92KFwiQWxidW1cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMVwiIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gdGV4dC13aGl0ZS01MFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS11cGxvYWRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gdGV4dC13aGl0ZS01MFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zYXZlXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=