(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-ts-react-module-boilerplate", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-ts-react-module-boilerplate"] = factory();
	else
		root["dyna-ts-react-module-boilerplate"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Button/Button.tsx":
/*!*******************************!*\
  !*** ./src/Button/Button.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   EColor: () => (/* binding */ EColor),
/* harmony export */   ESize: () => (/* binding */ ESize),
/* harmony export */   EStyle: () => (/* binding */ EStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.less */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/typed-css-modules-loader@0.0.18/node_modules/typed-css-modules-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.41_typescript@5.5.4_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/less-loader/dist/cjs.js!./src/Button/Button.module.less");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var EStyle;
(function (EStyle) {
  EStyle["ROUNDED"] = "ROUNDED";
})(EStyle || (EStyle = {}));
var EColor;
(function (EColor) {
  EColor["WHITE_BLACK"] = "WHITE_BLACK";
  EColor["WHITE_RED"] = "WHITE_RED";
  EColor["BLACK_WHITE"] = "BLACK_WHITE";
  EColor["TRANSPARENT_WHITE"] = "TRANSPARENT_WHITE";
})(EColor || (EColor = {}));
var ESize;
(function (ESize) {
  ESize["SMALL"] = "SMALL";
  ESize["MEDIUM"] = "MEDIUM";
  ESize["LARGE"] = "LARGE";
  ESize["XLARGE"] = "XLARGE";
})(ESize || (ESize = {}));
var Button = /*#__PURE__*/function (_React$Component) {
  function Button() {
    _classCallCheck(this, Button);
    return _callSuper(this, Button, arguments);
  }
  _inherits(Button, _React$Component);
  return _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        userClassName = _this$props.className,
        style = _this$props.style,
        color = _this$props.color,
        size = _this$props.size,
        href = _this$props.href,
        _this$props$children = _this$props.children,
        children = _this$props$children === void 0 ? null : _this$props$children,
        onClick = _this$props.onClick;
      var className = [userClassName, _Button_module_less__WEBPACK_IMPORTED_MODULE_2__.demoColor2, "my-button my-button--style-".concat(style, " "), "my-button--color-".concat(color), "my-button--size-".concat(size)].filter(Boolean).join(' ');
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        className: className,
        href: href,
        onClick: onClick,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          children: children
        })
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
Button.defaultProps = {
  children: null,
  style: EStyle.ROUNDED,
  color: EColor.WHITE_BLACK,
  size: ESize.MEDIUM,
  href: undefined,
  onClick: function onClick() {
    return undefined;
  }
};

/***/ }),

/***/ "./src/Label/Label.tsx":
/*!*****************************!*\
  !*** ./src/Label/Label.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

var Label = function Label(props) {
  var className = props.className,
    children = props.children;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: className,
    children: children
  });
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/typed-css-modules-loader@0.0.18/node_modules/typed-css-modules-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.41_typescript@5.5.4_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/less-loader/dist/cjs.js!./src/Button/Button.module.less":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/typed-css-modules-loader@0.0.18/node_modules/typed-css-modules-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.41_typescript@5.5.4_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/less-loader/dist/cjs.js!./src/Button/Button.module.less ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demoColor2: () => (/* binding */ demoColor2)
/* harmony export */ });
/* unused harmony export redColor */
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_swc_core_1_7_14_esbuild_0_21_5_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_swc_core_1_7_14_esbuild_0_21_5_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_swc_core_1_7_14_esbuild_0_21_5_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_swc_core_1_7_14_esbuild_0_21_5_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_swc_core_1_7_14_esbuild_0_21_5_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_swc_core_1_7_14_esbuild_0_21_5_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_swc_core_1_7_14_esbuild_0_21_5_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_swc_core_1_7_14_esbuild_0_21_5_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.c6cBpWK1AK2iUn6zPq2w {
  color: red;
}
.pyrR0pM4adpv_lskssVl {
  color: pink;
}
`, "",{"version":3,"sources":["webpack://./src/Button/Button.module.less"],"names":[],"mappings":"AAAA;EACE,UAAA;AACF;AAEA;EACE,WAAA;AAAF","sourcesContent":[".redColor{\n  color: red;\n}\n\n.demoColor2{\n  color: pink;\n}\n"],"sourceRoot":""}]);
// Exports
var redColor = `c6cBpWK1AK2iUn6zPq2w`;
var demoColor2 = `pyrR0pM4adpv_lskssVl`;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_@swc+core@1.7.14_esbuild@0.21.5_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \******************************************************************************************************************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   EColor: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.EColor),
/* harmony export */   ESize: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.ESize),
/* harmony export */   EStyle: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.EStyle),
/* harmony export */   Label: () => (/* reexport safe */ _Label__WEBPACK_IMPORTED_MODULE_1__.Label)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button/Button.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./src/Label/Label.tsx");


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map