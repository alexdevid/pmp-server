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

/***/ "./assets/components/widgets/album-select.vue":
/*!****************************************************!*\
  !*** ./assets/components/widgets/album-select.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _album_select_vue_vue_type_template_id_836e1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-select.vue?vue&type=template&id=836e1056&scoped=true& */ "./assets/components/widgets/album-select.vue?vue&type=template&id=836e1056&scoped=true&");
/* harmony import */ var _album_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album-select.vue?vue&type=script&lang=js& */ "./assets/components/widgets/album-select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _album_select_vue_vue_type_style_index_0_id_836e1056_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album-select.vue?vue&type=style&index=0&id=836e1056&lang=less&scoped=true& */ "./assets/components/widgets/album-select.vue?vue&type=style&index=0&id=836e1056&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _album_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _album_select_vue_vue_type_template_id_836e1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _album_select_vue_vue_type_template_id_836e1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "836e1056",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/widgets/album-select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/components/widgets/album-select.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./assets/components/widgets/album-select.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./album-select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/widgets/album-select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/components/widgets/album-select.vue?vue&type=style&index=0&id=836e1056&lang=less&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./assets/components/widgets/album-select.vue?vue&type=style&index=0&id=836e1056&lang=less&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_style_index_0_id_836e1056_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--4-oneOf-1-2!../../../node_modules/vue-loader/lib??vue-loader-options!./album-select.vue?vue&type=style&index=0&id=836e1056&lang=less&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/widgets/album-select.vue?vue&type=style&index=0&id=836e1056&lang=less&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_style_index_0_id_836e1056_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_style_index_0_id_836e1056_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_style_index_0_id_836e1056_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_style_index_0_id_836e1056_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_style_index_0_id_836e1056_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/components/widgets/album-select.vue?vue&type=template&id=836e1056&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./assets/components/widgets/album-select.vue?vue&type=template&id=836e1056&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_template_id_836e1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./album-select.vue?vue&type=template&id=836e1056&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/widgets/album-select.vue?vue&type=template&id=836e1056&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_template_id_836e1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_album_select_vue_vue_type_template_id_836e1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _widgets_album_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/album-select */ "./assets/components/widgets/album-select.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showModal: false,
      maxFiles: MAX_UPLOADED_FILES,
      files: [],
      allFilesUploaded: false,
      modelsChanged: false
    };
  },
  mounted: function mounted() {},
  components: {
    AlbumSelect: _widgets_album_select__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
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
          artists: [],
          albums: []
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
          _this.files[i]['albums'] = data.data.albums;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/widgets/album-select.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/components/widgets/album-select.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    model: {
      type: Object,
      required: false
    },
    albums: {
      type: Array,
      required: true
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/widgets/album-select.vue?vue&type=style&index=0&id=836e1056&lang=less&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--4-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./assets/components/widgets/album-select.vue?vue&type=style&index=0&id=836e1056&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                    _c("div", { staticClass: "input-group" }, [
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
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-secondary",
                            on: {
                              click: function($event) {
                                _vm.showModal = true
                              }
                            }
                          },
                          [_vm._v("Choose")]
                        )
                      ])
                    ])
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
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showModal,
            expression: "showModal"
          }
        ],
        staticClass: "modal fade show",
        staticStyle: { display: "block" }
      },
      [_vm._m(5)]
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-dialog" }, [
      _c("div", { staticClass: "modal-content" }, [
        _c("div", { staticClass: "modal-header" }, [
          _c(
            "h5",
            {
              staticClass: "modal-title",
              attrs: { id: "exampleModalLiveLabel" }
            },
            [_vm._v("Modal title")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "close",
              attrs: {
                type: "button",
                "data-dismiss": "modal",
                "aria-label": "Close"
              }
            },
            [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [
          _c("p", [_vm._v("Woohoo, you're reading this text in a modal!")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-footer" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-secondary",
              attrs: { type: "button", "data-dismiss": "modal" }
            },
            [_vm._v("Close")]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "button" } },
            [_vm._v("Save changes")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/components/widgets/album-select.vue?vue&type=template&id=836e1056&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/components/widgets/album-select.vue?vue&type=template&id=836e1056&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "album-select" }, [
    _c("input", {
      staticClass: "form-control form-control-sm",
      attrs: { type: "text" }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "list-group" },
      _vm._l(_vm.albums, function(album) {
        return _c(
          "a",
          {
            staticClass: "list-group-item list-group-item-action",
            attrs: { href: "#" }
          },
          [
            _c("div", { staticClass: "d-flex w-100 justify-content-between" }, [
              _c("h5", { staticClass: "mb-1" }, [_vm._v(_vm._s(album.title))]),
              _vm._v(" "),
              _c("small", [_vm._v("3 tracks")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-1" }, [
              _vm._v(_vm._s(album.artist.title))
            ]),
            _vm._v(" "),
            _c("small", [
              _vm._v(
                "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius\n                blandit."
              )
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/components/audio/index.js","runtime","vendors~audio"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlP2Q4YjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZT81YzYzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWU/MWY5OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlPzc0MDUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvd2lkZ2V0cy9hbGJ1bS1zZWxlY3QudnVlPzY3ZGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvd2lkZ2V0cy9hbGJ1bS1zZWxlY3QudnVlPzMzMWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvd2lkZ2V0cy9hbGJ1bS1zZWxlY3QudnVlP2UyYmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvd2lkZ2V0cy9hbGJ1bS1zZWxlY3QudnVlPzc1ZGEiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL3dpZGdldHMvYWxidW0tc2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlP2RkMTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvd2lkZ2V0cy9hbGJ1bS1zZWxlY3QudnVlPzJkMzMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZT8yYTA0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3dpZGdldHMvYWxidW0tc2VsZWN0LnZ1ZT82ZjE3Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJ2aWV3cyIsImlkIiwiY29tcG9uZW50IiwiVXBsb2FkIiwiZm9yRWFjaCIsInZpZXciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiVnVlIiwiZWwiLCJyZW5kZXIiLCJoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRUEsSUFBTUMsS0FBSyxHQUFHLENBQ1Y7QUFBQ0MsSUFBRSxFQUFFLFFBQUw7QUFBZUMsV0FBUyxFQUFFQywrQ0FBTUE7QUFBaEMsQ0FEVSxDQUFkO0FBSUFILEtBQUssQ0FBQ0ksT0FBTixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNsQixNQUFJQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JGLElBQUksQ0FBQ0osRUFBN0IsQ0FBSixFQUFzQztBQUNsQyxRQUFJTywyQ0FBSixDQUFRO0FBQ0pDLFFBQUUsRUFBRSxNQUFNSixJQUFJLENBQUNKLEVBRFg7QUFFSlMsWUFBTSxFQUFFLGdCQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDTixJQUFJLENBQUNILFNBQU4sQ0FBTDtBQUFBO0FBRkwsS0FBUjtBQUlIO0FBQ0osQ0FQRCxFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUczRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFzTCxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExTTtBQUFBO0FBQUE7QUFBQTtBQUF5WixDQUFnQix1YkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3YTtBQUFBO0FBQUE7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Qy9DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlDQUF5QyxpQkFBaUIsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25jQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0QkFBNEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQSx1QkFBdUIsc0RBQXNEO0FBQzdFLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhdWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFVwbG9hZCBmcm9tICcuL3VwbG9hZCc7XHJcblxyXG5jb25zb2xlLmxvZygnaGVsbG8gdXBsb2FkJyk7XHJcblxyXG5jb25zdCB2aWV3cyA9IFtcclxuICAgIHtpZDogJ3VwbG9hZCcsIGNvbXBvbmVudDogVXBsb2FkfVxyXG5dO1xyXG5cclxudmlld3MuZm9yRWFjaCh2aWV3ID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3LmlkKSkge1xyXG4gICAgICAgIG5ldyBWdWUoe1xyXG4gICAgICAgICAgICBlbDogJyMnICsgdmlldy5pZCxcclxuICAgICAgICAgICAgcmVuZGVyOiBoID0+IGgodmlldy5jb21wb25lbnQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGZjNzg5NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNGZjNzg5NiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY0ZmM3ODk2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL21udC9kL3d3dy9wbXAtc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y0ZmM3ODk2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y0ZmM3ODk2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y0ZmM3ODk2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0ZmM3ODk2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y0ZmM3ODk2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY0ZmM3ODk2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNGZjNzg5NiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGZjNzg5NiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYWxidW0tc2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MzZlMTA1NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hbGJ1bS1zZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hbGJ1bS1zZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FsYnVtLXNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MzZlMTA1NiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjgzNmUxMDU2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL21udC9kL3d3dy9wbXAtc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgzNmUxMDU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgzNmUxMDU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgzNmUxMDU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hbGJ1bS1zZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgzNmUxMDU2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgzNmUxMDU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy93aWRnZXRzL2FsYnVtLXNlbGVjdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FsYnVtLXNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWxidW0tc2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbGJ1bS1zZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODM2ZTEwNTYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWxidW0tc2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgzNmUxMDU2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbGJ1bS1zZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgzNmUxMDU2JnNjb3BlZD10cnVlJlwiIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImF1ZGlvLXVwbG9hZFwiPlxyXG4gICAgICAgIDxmb3JtIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgbm92YWxpZGF0ZSBjbGFzcz1cInVwbG9hZC1mb3JtIHRleHQtY2VudGVyXCIgdi1zaG93PVwic2hvd0Zvcm1cIj5cclxuICAgICAgICAgICAgPHA+WW91IGNhbiB1cGxvYWQgbm90IG1vcmUgdGhhdCB7eyBtYXhGaWxlcyB9fSBmaWxlcyBhdCBvbmNlPC9wPlxyXG4gICAgICAgICAgICA8cD5FYWNoIGZpbGUgc2hvdWxkIGJlIGxlc3MgdGhhbiA1ME1CPC9wPlxyXG4gICAgICAgICAgICA8cD5BbGxvd2VkIGZpbGUgdHlwZXMgYXJlIDxjb2RlPm1wMzwvY29kZT4gYW5kIDxjb2RlPm00YTwvY29kZT48L3A+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWljb24tc3BsaXRcIiBAY2xpY2s9XCIkcmVmcy5maWxlLmNsaWNrKClcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiB0ZXh0LXdoaXRlLTUwXCI+PGkgY2xhc3M9XCJmYXMgZmEtdXBsb2FkXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlNlbGVjdCBmaWxlczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBuYW1lPVwiYXVkaW9cIiByZWY9XCJmaWxlXCIgQGNoYW5nZT1cIm9uQWRkRmlsZXMoJGV2ZW50LnRhcmdldC5maWxlcylcIlxyXG4gICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiYXVkaW8vbXAzLCBhdWRpby9tcDRcIj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF1ZGlvLXVwbG9hZC1saXN0IHRleHQtc20tbGVmdFwiIHYtc2hvdz1cIiFzaG93Rm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj4jPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPkZpbGVuYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlRpdGxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPkFydGlzdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5BbGJ1bTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgdi1mb3I9XCJmaWxlIGluIGZpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiB2LWlmPVwiZmlsZS5hdWRpb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiIHYtaWY9XCIhZmlsZS5hdWRpb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlsZS5maWxlLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZpbGUuYXVkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsZS5hdWRpby50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImZpbGVDaGFuZ2VkKGZpbGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmaWxlLmF1ZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWxlLmF1ZGlvLmFydGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJmaWxlQ2hhbmdlZChmaWxlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiYXJ0aXN0IGluIGZpbGUuYXJ0aXN0c1wiIDp2YWx1ZT1cImFydGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYXJ0aXN0LnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmaWxlLmF1ZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWxlLmF1ZGlvLmFsYnVtLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImZpbGVDaGFuZ2VkKGZpbGUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgQGNsaWNrPVwic2hvd01vZGFsID0gdHJ1ZTtcIj5DaG9vc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiIHYtaWY9XCJmaWxlLmF1ZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIDpkaXNhYmxlZD1cIiFmaWxlLmF1ZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gZmxvYXQtcmlnaHRcIiA6ZGlzYWJsZWQ9XCIhZmlsZS5jaGFuZ2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2F2ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIHByb2dyZXNzLXNtIG1iLTJcIiB2LWlmPVwiIWZpbGUuYXVkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiA6c3R5bGU9XCJ7d2lkdGg6IGZpbGUubG9hZGVkICsgJyUnfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhYWxsRmlsZXNVcGxvYWRlZFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1pY29uLXNwbGl0IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiB0ZXh0LXdoaXRlLTUwXCI+PGkgY2xhc3M9XCJmYXMgZmEtdXBsb2FkXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+VXBsb2FkIE1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhbW9kZWxzQ2hhbmdlZFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1pY29uLXNwbGl0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gdGV4dC13aGl0ZS01MFwiPjxpIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5TYXZlIEFsbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSBzaG93XCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIiB2LXNob3c9XCJzaG93TW9kYWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMaXZlTGFiZWxcIj5Nb2RhbCB0aXRsZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldvb2hvbywgeW91J3JlIHJlYWRpbmcgdGhpcyB0ZXh0IGluIGEgbW9kYWwhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbiAgICBpbXBvcnQgQWxidW1TZWxlY3QgZnJvbSAnLi4vd2lkZ2V0cy9hbGJ1bS1zZWxlY3QnO1xyXG5cclxuICAgIGNvbnN0IE1BWF9VUExPQURFRF9GSUxFUyA9IDEwO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Zvcm06IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZXM6IE1BWF9VUExPQURFRF9GSUxFUyxcclxuXHJcbiAgICAgICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgICAgICBhbGxGaWxlc1VwbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vZGVsc0NoYW5nZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBBbGJ1bVNlbGVjdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICByZXNldCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxGaWxlc1VwbG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsc0NoYW5nZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxlQ2hhbmdlZChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbHNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBsb2FkQ29tcGxldGUoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZmlsZS5hdWRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGxvYWRlZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25BZGRGaWxlcyhmaWxlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ1BsZWFzZSBzZWxlY3QgZmlsZXMgdG8gdXBsb2FkJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gTUFYX1VQTE9BREVEX0ZJTEVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdZb3UgY2FuIHVwbG9hZCBub3QgbW9yZSB0aGFuICcgKyBNQVhfVVBMT0FERURfRklMRVMgKyAnIGZpbGVzIGF0IG9uY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2F1ZGlvJywgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aXN0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsYnVtczogW11cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2luZGV4LnBocC9hcGkvYXVkaW8vdXBsb2FkJywgZm9ybURhdGEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpXVsnbG9hZGVkJ10gPSBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZCAqIDEwMCAvIGV2ZW50LnRvdGFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpXVsnYXVkaW8nXSA9IGRhdGEuZGF0YS5hdWRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpXVsnYXJ0aXN0cyddID0gZGF0YS5kYXRhLmFydGlzdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaV1bJ2FsYnVtcyddID0gZGF0YS5kYXRhLmFsYnVtcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxGaWxlc1VwbG9hZGVkID0gdGhpcy51cGxvYWRDb21wbGV0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLndhcm4oJ0ZBSUxVUkUhIScsIGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuICAgIC5hdWRpby11cGxvYWQtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luOiAtNzNweCAtMjBweDtcclxuXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVwbG9hZC1mb3JtIHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJhbGJ1bS1zZWxlY3RcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIiB2LWZvcj1cImFsYnVtIGluIGFsYnVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTFcIj57eyBhbGJ1bS50aXRsZSB9fTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjMgdHJhY2tzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+e3sgYWxidW0uYXJ0aXN0LnRpdGxlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gTWFlY2VuYXMgc2VkIGRpYW0gZWdldCByaXN1cyB2YXJpdXNcclxuICAgICAgICAgICAgICAgICAgICBibGFuZGl0Ljwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtb2RlbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFsYnVtczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuICAgIC5hbGJ1bS1zZWxlY3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICAgICAgICAgIHRvcDogMzVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTI1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1ZGlvLXVwbG9hZFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93Rm9ybSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0Zvcm1cIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWZvcm0gdGV4dC1jZW50ZXJcIixcbiAgICAgICAgYXR0cnM6IHsgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsIG5vdmFsaWRhdGU6IFwiXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIllvdSBjYW4gdXBsb2FkIG5vdCBtb3JlIHRoYXQgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1heEZpbGVzKSArXG4gICAgICAgICAgICAgIFwiIGZpbGVzIGF0IG9uY2VcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiRWFjaCBmaWxlIHNob3VsZCBiZSBsZXNzIHRoYW4gNTBNQlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4taWNvbi1zcGxpdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyZWZzLmZpbGUuY2xpY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCJTZWxlY3QgZmlsZXNcIildKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgcmVmOiBcImZpbGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICBtdWx0aXBsZTogXCJcIixcbiAgICAgICAgICAgIG5hbWU6IFwiYXVkaW9cIixcbiAgICAgICAgICAgIGFjY2VwdDogXCJhdWRpby9tcDMsIGF1ZGlvL21wNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkFkZEZpbGVzKCRldmVudC50YXJnZXQuZmlsZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogIV92bS5zaG93Rm9ybSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIXNob3dGb3JtXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImF1ZGlvLXVwbG9hZC1saXN0IHRleHQtc20tbGVmdFwiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZpbGVzLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5hdWRpb1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2hlY2tcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICFmaWxlLmF1ZGlvXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIiB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlsZS5maWxlLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5hdWRpb1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWxlLmF1ZGlvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlLmF1ZGlvLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGZpbGUuYXVkaW8udGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuYXVkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbGVDaGFuZ2VkKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGZpbGUuYXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsZS5hdWRpby5hcnRpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZS5hdWRpby5hcnRpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmlsZUNoYW5nZWQoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmF1ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJ0aXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZpbGUuYXJ0aXN0cywgZnVuY3Rpb24oYXJ0aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGFydGlzdCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhhcnRpc3QudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZS5hdWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWxlLmF1ZGlvLmFsYnVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbGUuYXVkaW8uYWxidW0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGZpbGUuYXVkaW8uYWxidW0udGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmF1ZGlvLmFsYnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5maWxlQ2hhbmdlZChmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dNb2RhbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDaG9vc2VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIGZpbGUuYXVkaW9cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIWZpbGUuYXVkaW8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtIGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFmaWxlLmNoYW5nZWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc2F2ZVwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFmaWxlLmF1ZGlvXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MgcHJvZ3Jlc3Mtc20gbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWxlLmxvYWRlZCArIFwiJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInByb2dyZXNzYmFyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlciB0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWljb24tc3BsaXQgYnRuLXNtXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uYWxsRmlsZXNVcGxvYWRlZCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzZXQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwiVXBsb2FkIE1vcmVcIildKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1pY29uLXNwbGl0IGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLm1vZGVsc0NoYW5nZWQgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCJTYXZlIEFsbFwiKV0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dNb2RhbCxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd01vZGFsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGUgc2hvd1wiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImJsb2NrXCIgfVxuICAgICAgfSxcbiAgICAgIFtfdm0uX20oNSldXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIkFsbG93ZWQgZmlsZSB0eXBlcyBhcmUgXCIpLFxuICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoXCJtcDNcIildKSxcbiAgICAgIF92bS5fdihcIiBhbmQgXCIpLFxuICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoXCJtNGFcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gdGV4dC13aGl0ZS01MFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS11cGxvYWRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMVwiIH0sIFtfdm0uX3YoXCIjXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTRcIiB9LCBbX3ZtLl92KFwiRmlsZW5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMlwiIH0sIFtfdm0uX3YoXCJUaXRsZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yXCIgfSwgW192bS5fdihcIkFydGlzdFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yXCIgfSwgW192bS5fdihcIkFsYnVtXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTFcIiB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIHRleHQtd2hpdGUtNTBcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdXBsb2FkXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIHRleHQtd2hpdGUtNTBcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2F2ZVwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJleGFtcGxlTW9kYWxMaXZlTGFiZWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIk1vZGFsIHRpdGxlXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJXb29ob28sIHlvdSdyZSByZWFkaW5nIHRoaXMgdGV4dCBpbiBhIG1vZGFsIVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkNsb3NlXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLCBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlIGNoYW5nZXNcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbGJ1bS1zZWxlY3RcIiB9LCBbXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIsXG4gICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5hbGJ1bXMsIGZ1bmN0aW9uKGFsYnVtKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW192bS5fdihfdm0uX3MoYWxidW0udGl0bGUpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIFtfdm0uX3YoXCIzIHRyYWNrc1wiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGFsYnVtLmFydGlzdC50aXRsZSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNtYWxsXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiRG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBNYWVjZW5hcyBzZWQgZGlhbSBlZ2V0IHJpc3VzIHZhcml1c1xcbiAgICAgICAgICAgICAgICBibGFuZGl0LlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==