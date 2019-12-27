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
      error: null,
      showForm: true,
      maxFiles: MAX_UPLOADED_FILES,
      files: [],
      allFilesUploaded: false,
      modelsChanged: false
    };
  },
  mounted: function mounted() {},
  methods: {
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
                  _c("div", { staticClass: "col-sm-3" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(file.file.name) +
                        "\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
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
                    _vm.showForm = true
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
        _c("div", { staticClass: "col-sm-3" }, [_vm._v("Filename")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-3" }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [_vm._v("Artist")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [_vm._v("Album")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-1" }, [_vm._v("Album")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlP2Q4YjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZT81YzYzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWU/MWY5OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlPzc0MDUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZT9kZDEwIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWU/MmEwNCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwidmlld3MiLCJpZCIsImNvbXBvbmVudCIsIlVwbG9hZCIsImZvckVhY2giLCJ2aWV3IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlZ1ZSIsImVsIiwicmVuZGVyIiwiaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUVBLElBQU1DLEtBQUssR0FBRyxDQUNWO0FBQUNDLElBQUUsRUFBRSxRQUFMO0FBQWVDLFdBQVMsRUFBRUMsK0NBQU1BO0FBQWhDLENBRFUsQ0FBZDtBQUlBSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEIsTUFBSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCRixJQUFJLENBQUNKLEVBQTdCLENBQUosRUFBc0M7QUFDbEMsUUFBSU8sMkNBQUosQ0FBUTtBQUNKQyxRQUFFLEVBQUUsTUFBTUosSUFB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MEJBQTBCO0FBQzdDO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRCxlQUFlLCtCQUErQjtBQUM5QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0QsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXVkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBVcGxvYWQgZnJvbSAnLi91cGxvYWQnO1xyXG5cclxuY29uc29sZS5sb2coJ2hlbGxvIHVwbG9hZCcpO1xyXG5cclxuY29uc3Qgdmlld3MgPSBbXHJcbiAgICB7aWQ6ICd1cGxvYWQnLCBjb21wb25lbnQ6IFVwbG9hZH1cclxuXTtcclxuXHJcbnZpZXdzLmZvckVhY2godmlldyA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldy5pZCkpIHtcclxuICAgICAgICBuZXcgVnVlKHtcclxuICAgICAgICAgICAgZWw6ICcjJyArIHZpZXcuaWQsXHJcbiAgICAgICAgICAgIHJlbmRlcjogaCA9PiBoKHZpZXcuY29tcG9uZW50KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjRmYzc4OTYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjRmYzc4OTYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmNGZjNzg5NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9tbnQvZC93d3cvcG1wLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNGZjNzg5NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNGZjNzg5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNGZjNzg5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGZjNzg5NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmNGZjNzg5NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNGZjNzg5NiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjRmYzc4OTYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjRmYzc4OTYmc2NvcGVkPXRydWUmXCIiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXVkaW8tdXBsb2FkXCI+XHJcbiAgICAgICAgPGZvcm0gZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBub3ZhbGlkYXRlIGNsYXNzPVwidXBsb2FkLWZvcm0gdGV4dC1jZW50ZXJcIiB2LXNob3c9XCJzaG93Rm9ybVwiPlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2FuIHVwbG9hZCBub3QgbW9yZSB0aGF0IHt7IG1heEZpbGVzIH19IGZpbGVzIGF0IG9uY2U8L3A+XHJcbiAgICAgICAgICAgIDxwPkVhY2ggZmlsZSBzaG91bGQgYmUgbGVzcyB0aGFuIDUwTUI8L3A+XHJcbiAgICAgICAgICAgIDxwPkFsbG93ZWQgZmlsZSB0eXBlcyBhcmUgPGNvZGU+bXAzPC9jb2RlPiBhbmQgPGNvZGU+bTRhPC9jb2RlPjwvcD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4taWNvbi1zcGxpdFwiIEBjbGljaz1cIiRyZWZzLmZpbGUuY2xpY2soKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIHRleHQtd2hpdGUtNTBcIj48aSBjbGFzcz1cImZhcyBmYS11cGxvYWRcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+U2VsZWN0IGZpbGVzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIG5hbWU9XCJhdWRpb1wiIHJlZj1cImZpbGVcIiBAY2hhbmdlPVwib25BZGRGaWxlcygkZXZlbnQudGFyZ2V0LmZpbGVzKVwiXHJcbiAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJhdWRpby9tcDMsIGF1ZGlvL21wNFwiPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVkaW8tdXBsb2FkLWxpc3QgdGV4dC1zbS1sZWZ0XCIgdi1zaG93PVwiIXNob3dGb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPiM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+RmlsZW5hbWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+VGl0bGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+QXJ0aXN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPkFsYnVtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPkFsYnVtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgdi1pZj1cImZpbGUuYXVkaW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIiB2LWlmPVwiIWZpbGUuYXVkaW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbGUuZmlsZS5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmaWxlLmF1ZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGUuYXVkaW8udGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJmaWxlQ2hhbmdlZChmaWxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZmlsZS5hdWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsZS5hdWRpby5hcnRpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZmlsZUNoYW5nZWQoZmlsZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImFydGlzdCBpbiBmaWxlLmFydGlzdHNcIiA6dmFsdWU9XCJhcnRpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGFydGlzdC50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZpbGUuYXVkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsZS5hdWRpby5hbGJ1bS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImZpbGVDaGFuZ2VkKGZpbGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiIHYtaWY9XCJmaWxlLmF1ZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIDpkaXNhYmxlZD1cIiFmaWxlLmF1ZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gZmxvYXQtcmlnaHRcIiA6ZGlzYWJsZWQ9XCIhZmlsZS5jaGFuZ2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2F2ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIHByb2dyZXNzLXNtIG1iLTJcIiB2LWlmPVwiIWZpbGUuYXVkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiA6c3R5bGU9XCJ7d2lkdGg6IGZpbGUubG9hZGVkICsgJyUnfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhYWxsRmlsZXNVcGxvYWRlZFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1pY29uLXNwbGl0IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzaG93Rm9ybSA9IHRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIHRleHQtd2hpdGUtNTBcIj48aSBjbGFzcz1cImZhcyBmYS11cGxvYWRcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5VcGxvYWQgTW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIDpkaXNhYmxlZD1cIiFtb2RlbHNDaGFuZ2VkXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWljb24tc3BsaXQgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiB0ZXh0LXdoaXRlLTUwXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlNhdmUgQWxsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbiAgICBjb25zdCBNQVhfVVBMT0FERURfRklMRVMgPSAxMDtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Zvcm06IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlczogTUFYX1VQTE9BREVEX0ZJTEVTLFxyXG5cclxuICAgICAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIGFsbEZpbGVzVXBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxzQ2hhbmdlZDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZpbGVDaGFuZ2VkKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGxvYWRDb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1cGxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlLmF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwbG9hZGVkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkFkZEZpbGVzKGZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnUGxlYXNlIHNlbGVjdCBmaWxlcyB0byB1cGxvYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiBNQVhfVVBMT0FERURfRklMRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ1lvdSBjYW4gdXBsb2FkIG5vdCBtb3JlIHRoYW4gJyArIE1BWF9VUExPQURFRF9GSUxFUyArICcgZmlsZXMgYXQgb25jZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Rm9ybSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXVkaW8nLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpc3RzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvaW5kZXgucGhwL2FwaS9hdWRpby91cGxvYWQnLCBmb3JtRGF0YSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2ldWydsb2FkZWQnXSA9IE1hdGgucm91bmQoZXZlbnQubG9hZGVkICogMTAwIC8gZXZlbnQudG90YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2ldWydhdWRpbyddID0gZGF0YS5kYXRhLmF1ZGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2ldWydhcnRpc3RzJ10gPSBkYXRhLmRhdGEuYXJ0aXN0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxGaWxlc1VwbG9hZGVkID0gdGhpcy51cGxvYWRDb21wbGV0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLndhcm4oJ0ZBSUxVUkUhIScsIGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuICAgIC5hdWRpby11cGxvYWQtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luOiAtNzNweCAtMjBweDtcclxuXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVwbG9hZC1mb3JtIHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdWRpby11cGxvYWRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0Zvcm0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dGb3JtXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1mb3JtIHRleHQtY2VudGVyXCIsXG4gICAgICAgIGF0dHJzOiB7IGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLCBub3ZhbGlkYXRlOiBcIlwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJZb3UgY2FuIHVwbG9hZCBub3QgbW9yZSB0aGF0IFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tYXhGaWxlcykgK1xuICAgICAgICAgICAgICBcIiBmaWxlcyBhdCBvbmNlXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkVhY2ggZmlsZSBzaG91bGQgYmUgbGVzcyB0aGFuIDUwTUJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWljb24tc3BsaXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcmVmcy5maWxlLmNsaWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwiU2VsZWN0IGZpbGVzXCIpXSlcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHJlZjogXCJmaWxlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgICBuYW1lOiBcImF1ZGlvXCIsXG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXVkaW8vbXAzLCBhdWRpby9tcDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ub25BZGRGaWxlcygkZXZlbnQudGFyZ2V0LmZpbGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6ICFfdm0uc2hvd0Zvcm0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIiFzaG93Rm9ybVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJhdWRpby11cGxvYWQtbGlzdCB0ZXh0LXNtLWxlZnRcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGZpbGUuYXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWNoZWNrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhZmlsZS5hdWRpb1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpbGUuZmlsZS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGZpbGUuYXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsZS5hdWRpby50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZS5hdWRpby50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBmaWxlLmF1ZGlvLnRpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmF1ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5maWxlQ2hhbmdlZChmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBmaWxlLmF1ZGlvXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGUuYXVkaW8uYXJ0aXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbGUuYXVkaW8uYXJ0aXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbGVDaGFuZ2VkKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5hdWRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFydGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChmaWxlLmFydGlzdHMsIGZ1bmN0aW9uKGFydGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRvbVByb3BzOiB7IHZhbHVlOiBhcnRpc3QgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoYXJ0aXN0LnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBmaWxlLmF1ZGlvXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGUuYXVkaW8uYWxidW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbGUuYXVkaW8uYWxidW0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogZmlsZS5hdWRpby5hbGJ1bS50aXRsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5hdWRpby5hbGJ1bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmlsZUNoYW5nZWQoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgZmlsZS5hdWRpb1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhZmlsZS5hdWRpbyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc20gZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIWZpbGUuY2hhbmdlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zYXZlXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgIWZpbGUuYXVkaW9cbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzcyBwcm9ncmVzcy1zbSBtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpbGUubG9hZGVkICsgXCIlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwicHJvZ3Jlc3NiYXJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyIHRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4taWNvbi1zcGxpdCBidG4tc21cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5hbGxGaWxlc1VwbG9hZGVkIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dGb3JtID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwiVXBsb2FkIE1vcmVcIildKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1pY29uLXNwbGl0IGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLm1vZGVsc0NoYW5nZWQgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCJTYXZlIEFsbFwiKV0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXCJBbGxvd2VkIGZpbGUgdHlwZXMgYXJlIFwiKSxcbiAgICAgIF9jKFwiY29kZVwiLCBbX3ZtLl92KFwibXAzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgYW5kIFwiKSxcbiAgICAgIF9jKFwiY29kZVwiLCBbX3ZtLl92KFwibTRhXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIHRleHQtd2hpdGUtNTBcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdXBsb2FkXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTFcIiB9LCBbX3ZtLl92KFwiI1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zXCIgfSwgW192bS5fdihcIkZpbGVuYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTNcIiB9LCBbX3ZtLl92KFwiVGl0bGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMlwiIH0sIFtfdm0uX3YoXCJBcnRpc3RcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMlwiIH0sIFtfdm0uX3YoXCJBbGJ1bVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xXCIgfSwgW192bS5fdihcIkFsYnVtXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiB0ZXh0LXdoaXRlLTUwXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXVwbG9hZFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiB0ZXh0LXdoaXRlLTUwXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNhdmVcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==