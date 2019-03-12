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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbers */ \"./src/script/numbers.js\");\n\r\n\r\n$(document).ready(function () {\r\n\r\n  $('#addanswer').on(\"click\", () => {\r\n    // Get numbers from user input\r\n    let number1 = $(\"#number1\").val().trim();\r\n    let number2 = $(\"#number2\").val().trim();\r\n    // Send numbers to number.js\r\n    Object(_numbers__WEBPACK_IMPORTED_MODULE_0__[\"checknumbers\"])(number1, number2)\r\n  })\r\n\r\n\r\n\r\n})\n\n//# sourceURL=webpack:///./src/script/index.js?");

/***/ }),

/***/ "./src/script/numbers.js":
/*!*******************************!*\
  !*** ./src/script/numbers.js ***!
  \*******************************/
/*! exports provided: checknumbers, addnumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checknumbers\", function() { return checknumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addnumbers\", function() { return addnumbers; });\nconst checknumbers = (number1, number2) => {\r\n  // Convert input strings to actual numbers\r\n  let num1 = Number(number1);\r\n  let num2 = Number(number2);\r\n  // Quick check to make sure inputs are numbers\r\n  if (num1 && num2) {\r\n    return addnumbers(num1, num2)\r\n  }\r\n  // Show error message if both inputs are not numbers\r\n  else {\r\n    $(\"#answer\").val('Not A Number');\r\n    return $(\"#additionerror\").show();\r\n  }\r\n}\r\n\r\nconst addnumbers = (num1, num2) => {\r\n  // Do addition\r\n  let result = num1 + num2;\r\n  // Set value into HTML id named answer\r\n  $(\"#answer\").val(result);\r\n}\n\n//# sourceURL=webpack:///./src/script/numbers.js?");

/***/ })

/******/ });