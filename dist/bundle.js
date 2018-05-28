/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/nav.html":
/*!*****************************!*\
  !*** ./components/nav.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type.\\n| <nav>\\n|   <p>Navigation</p>\\n| </nav>\");\n\n//# sourceURL=webpack:///./components/nav.html?");

/***/ }),

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ \"ko\");\n/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ko__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n\n\n\nclass Product {\n  constructor(name, rating = null) {\n    this.name = name;\n    this.userRating = ko__WEBPACK_IMPORTED_MODULE_0___default.a.observable(rating);\n  }\n}\n\nclass ProductsViewModel {\n  constructor() {\n    this.products = ko__WEBPACK_IMPORTED_MODULE_0___default.a.observableArray();\n    this.likedCount = ko__WEBPACK_IMPORTED_MODULE_0___default.a.pureComputed(() => this.products().filter(p => p.userRating() == 'like').length);\n    this.dislikedCount = ko__WEBPACK_IMPORTED_MODULE_0___default.a.pureComputed(() => this.products().filter(p => p.userRating() == 'dislike').length);\n  }\n\n  addProduct() {\n      const name = `Product ${this.products().length + 1}`;\n      this.products.push(new Product(name));\n  }\n}\n\nko__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings(new ProductsViewModel(), document.getElementById('root'));\n\n\n//# sourceURL=webpack:///./js/init.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ \"ko\");\n/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ko__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_nav_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nav.html */ \"./components/nav.html\");\n/* harmony import */ var _components_nav_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_nav_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass LikeWidgetViewModel {\n  constructor(params) {\n    this.chosenValue = params.value;\n  }\n\n  like() {\n    this.chosenValue('like');\n  }\n\n  dislike() {\n    this.chosenValue('dislike');\n  }\n}\n\nko__WEBPACK_IMPORTED_MODULE_0___default.a.components.register('like-or-dislike', {\n  viewModel: LikeWidgetViewModel,\n  template: _components_nav_html__WEBPACK_IMPORTED_MODULE_1___default.a\n});\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "ko":
/*!*********************!*\
  !*** external "ko" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ko;\n\n//# sourceURL=webpack:///external_%22ko%22?");

/***/ })

/******/ });