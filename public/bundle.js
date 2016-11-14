/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n//main.js \nvar greeter = __webpack_require__(1);\ndocument.getElementById('root').appendChild(greeter());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbImdyZWV0ZXIiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsVUFBVSxtQkFBQUMsQ0FBUSxDQUFSLENBQWQ7QUFDQUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsV0FBaEMsQ0FBNENKLFNBQTVDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL21haW4uanMgXHJcbnZhciBncmVldGVyID0gcmVxdWlyZSgnLi9HcmVldGVyLmpzJyk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykuYXBwZW5kQ2hpbGQoZ3JlZXRlcigpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n// Greeter.js\n/*\r\nvar config = require('./config.json');\r\nmodule.exports = function() {\r\n\tvar greet = document.createElement('div');\r\n\tgreet.textContent = \"Hi there and greetings!\";\r\n\tgreet.textContent = config.iuap;\r\n\treturn greet;\r\n};\r\n\r\n*/\n\nvar config = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./myjson.json\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nmodule.exports = function () {\n\tvar greet = document.createElement('div');\n\tgreet.textContent = config.greetText;\n\treturn greet;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvR3JlZXRlci5qcz9lYjg0Il0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JlZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdyZWV0VGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQVdBLElBQUlBLFNBQVMsbUJBQUFDLENBQVEseUlBQVIsQ0FBYjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCLEtBQUlDLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRixPQUFNRyxXQUFOLEdBQW9CUCxPQUFPUSxTQUEzQjtBQUNBLFFBQU9KLEtBQVA7QUFDRCxDQUpEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHcmVldGVyLmpzXHJcbi8qXHJcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5qc29uJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGdyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Z3JlZXQudGV4dENvbnRlbnQgPSBcIkhpIHRoZXJlIGFuZCBncmVldGluZ3MhXCI7XHJcblx0Z3JlZXQudGV4dENvbnRlbnQgPSBjb25maWcuaXVhcDtcclxuXHRyZXR1cm4gZ3JlZXQ7XHJcbn07XHJcblxyXG4qL1xyXG5cclxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vbXlqc29uLmpzb24nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGdyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZ3JlZXQudGV4dENvbnRlbnQgPSBjb25maWcuZ3JlZXRUZXh0O1xyXG4gIHJldHVybiBncmVldDtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvR3JlZXRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);