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
//
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
      filesToUpload: []
    };
  },
  mounted: function mounted() {
    console.log(this.message);
  },
  methods: {
    onAddFiles: function onAddFiles(files) {
      console.log(files);

      if (!files.length) {
        this.error = 'Please select files to upload';
        return;
      }

      if (files.length > MAX_UPLOADED_FILES) {
        this.error = 'You can upload not more than ' + MAX_UPLOADED_FILES + ' files at once';
        return;
      }

      this.filesToUpload = files;
      console.log(this.filesToUpload);
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
  return _c(
    "form",
    {
      staticClass: "upload-form",
      attrs: { enctype: "multipart/form-data", novalidate: "" }
    },
    [
      _c("p", [_vm._v("You can upload not more that 10 files at once")]),
      _vm._v(" "),
      _c("p", [_vm._v("Each file should be less than 50MB")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "button file-select",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              return _vm.$refs.file.click()
            }
          }
        },
        [_vm._v("Select files")]
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
  )
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
  }
]
render._withStripped = true



/***/ })

},[["./assets/components/audio/index.js","runtime","vendors~audio"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlP2Q4YjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZT81YzYzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWU/MWY5OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdWRpby91cGxvYWQudnVlPzc0MDUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZT9kZDEwIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1ZGlvL3VwbG9hZC52dWU/MmEwNCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwidmlld3MiLCJpZCIsImNvbXBvbmVudCIsIlVwbG9hZCIsImZvckVhY2giLCJ2aWV3IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlZ1ZSIsImVsIiwicmVuZGVyIiwiaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUVBLElBQU1DLEtBQUssR0FBRyxDQUNWO0FBQUNDLElBQUUsRUFBRSxRQUFMO0FBQWVDLFdBQVMsRUFBRUMsK0NBQU1BO0FBQWhDLENBRFUsQ0FBZDtBQUlBSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEIsTUFBSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCRixJQUFJLENBQUNKLEVBQTdCLENBQUosRUFBc0M7QUFDbEMsUUFBSU8sMkNBQUosQ0FBUTtBQUNKQyxRQUFFLEVBQUUsTUFBTUosSUFBSSxDQUFDSixFQURYO0FBRUpTLFlBQU0sRUFBRSxnQkFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ04sSUFBSSxDQUFDSCxTQUFOLENBQUw7QUFBQTtBQUZMLEtBQVI7QUFJSDtBQUNKLENBUEQsRTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHM0Y7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxzR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBc0wsQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMU07QUFBQTtBQUFBO0FBQUE7QUFBeVosQ0FBZ0IsdWJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN2E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNXQTtBQUVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsaUJBREE7QUFHQTtBQUhBO0FBS0EsR0FQQTtBQVFBLFNBUkEscUJBUUE7QUFDQTtBQUNBLEdBVkE7QUFXQTtBQUNBLGNBREEsc0JBQ0EsS0FEQSxFQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBZEE7QUFYQSxHOzs7Ozs7Ozs7OztBQ2JBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXVkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBVcGxvYWQgZnJvbSAnLi91cGxvYWQnO1xyXG5cclxuY29uc29sZS5sb2coJ2hlbGxvIHVwbG9hZCcpO1xyXG5cclxuY29uc3Qgdmlld3MgPSBbXHJcbiAgICB7aWQ6ICd1cGxvYWQnLCBjb21wb25lbnQ6IFVwbG9hZH1cclxuXTtcclxuXHJcbnZpZXdzLmZvckVhY2godmlldyA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldy5pZCkpIHtcclxuICAgICAgICBuZXcgVnVlKHtcclxuICAgICAgICAgICAgZWw6ICcjJyArIHZpZXcuaWQsXHJcbiAgICAgICAgICAgIHJlbmRlcjogaCA9PiBoKHZpZXcuY29tcG9uZW50KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjRmYzc4OTYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjRmYzc4OTYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmNGZjNzg5NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9tbnQvZC93d3cvcG1wLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNGZjNzg5NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNGZjNzg5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNGZjNzg5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNGZjNzg5NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmNGZjNzg5NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvYXVkaW8vdXBsb2FkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNGZjNzg5NiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGxvYWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjRmYzc4OTYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjRmYzc4OTYmc2NvcGVkPXRydWUmXCIiLCI8dGVtcGxhdGU+XHJcbiAgICA8Zm9ybSBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG5vdmFsaWRhdGUgY2xhc3M9XCJ1cGxvYWQtZm9ybVwiPlxyXG4gICAgICAgIDxwPllvdSBjYW4gdXBsb2FkIG5vdCBtb3JlIHRoYXQgMTAgZmlsZXMgYXQgb25jZTwvcD5cclxuICAgICAgICA8cD5FYWNoIGZpbGUgc2hvdWxkIGJlIGxlc3MgdGhhbiA1ME1CPC9wPlxyXG4gICAgICAgIDxwPkFsbG93ZWQgZmlsZSB0eXBlcyBhcmUgPGNvZGU+bXAzPC9jb2RlPiBhbmQgPGNvZGU+bTRhPC9jb2RlPjwvcD5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uIGZpbGUtc2VsZWN0XCIgQGNsaWNrPVwiJHJlZnMuZmlsZS5jbGljaygpXCI+U2VsZWN0IGZpbGVzPC9hPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIG5hbWU9XCJhdWRpb1wiIHJlZj1cImZpbGVcIiBAY2hhbmdlPVwib25BZGRGaWxlcygkZXZlbnQudGFyZ2V0LmZpbGVzKVwiIGFjY2VwdD1cImF1ZGlvL21wMywgYXVkaW8vbXA0XCI+XHJcbiAgICA8L2Zvcm0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgY29uc3QgTUFYX1VQTE9BREVEX0ZJTEVTID0gMTA7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuXHJcbiAgICAgICAgICAgICAgICBmaWxlc1RvVXBsb2FkOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25BZGRGaWxlcyhmaWxlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZXMpXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnUGxlYXNlIHNlbGVjdCBmaWxlcyB0byB1cGxvYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiBNQVhfVVBMT0FERURfRklMRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ1lvdSBjYW4gdXBsb2FkIG5vdCBtb3JlIHRoYW4gJyArIE1BWF9VUExPQURFRF9GSUxFUyArICcgZmlsZXMgYXQgb25jZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IGZpbGVzO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1RvVXBsb2FkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxyXG4gICAgLnVwbG9hZC1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWxlLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm1cIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtZm9ybVwiLFxuICAgICAgYXR0cnM6IHsgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsIG5vdmFsaWRhdGU6IFwiXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJZb3UgY2FuIHVwbG9hZCBub3QgbW9yZSB0aGF0IDEwIGZpbGVzIGF0IG9uY2VcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIkVhY2ggZmlsZSBzaG91bGQgYmUgbGVzcyB0aGFuIDUwTUJcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGZpbGUtc2VsZWN0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyZWZzLmZpbGUuY2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlNlbGVjdCBmaWxlc1wiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHJlZjogXCJmaWxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgbmFtZTogXCJhdWRpb1wiLFxuICAgICAgICAgIGFjY2VwdDogXCJhdWRpby9tcDMsIGF1ZGlvL21wNFwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0ub25BZGRGaWxlcygkZXZlbnQudGFyZ2V0LmZpbGVzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXCJBbGxvd2VkIGZpbGUgdHlwZXMgYXJlIFwiKSxcbiAgICAgIF9jKFwiY29kZVwiLCBbX3ZtLl92KFwibXAzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgYW5kIFwiKSxcbiAgICAgIF9jKFwiY29kZVwiLCBbX3ZtLl92KFwibTRhXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=