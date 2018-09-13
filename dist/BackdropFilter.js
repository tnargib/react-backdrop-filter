(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-backdrop-filter", [], factory);
	else if(typeof exports === 'object')
		exports["react-backdrop-filter"] = factory();
	else
		root["react-backdrop-filter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/BackdropFilter.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BackdropFilter.jsx":
/*!********************************!*\
  !*** ./src/BackdropFilter.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/src/BackdropFilter.jsx: Support for the experimental syntax 'classProperties' isn't currently enabled (15:12):\\n\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m  \\u001b[90m// });\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 15 | \\u001b[39m  backdrop \\u001b[33m=\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39mcreateRef()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m  componentDidMount() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m    \\u001b[36mnew\\u001b[39m \\u001b[33mResizeObserver\\u001b[39m(() \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at _class.raise (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:3938:15)\\n    at _class.expectPlugin (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:5252:18)\\n    at _class.parseClassProperty (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:8102:12)\\n    at _class.pushClassProperty (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:8066:30)\\n    at _class.parseClassMemberWithIsStatic (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7999:14)\\n    at _class.parseClassMember (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7936:10)\\n    at _class.parseClassBody (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7891:12)\\n    at _class.parseClass (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7841:10)\\n    at _class.parseStatementContent (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7172:21)\\n    at _class.parseStatement (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7144:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7695:23)\\n    at _class.parseBlockBody (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7682:10)\\n    at _class.parseTopLevel (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:7109:10)\\n    at _class.parse (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:8495:17)\\n    at parse (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/parser/lib/index.js:10448:38)\\n    at parser (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/simonbrigant/Documents/web/tmp/react-backdrop-filter/node_modules/@babel/core/lib/transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack://react-backdrop-filter/./src/BackdropFilter.jsx?");

/***/ })

/******/ });
});