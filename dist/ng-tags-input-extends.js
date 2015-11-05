(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("angular"), require("ng-tags-input"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "angular", "ng-tags-input"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery"), require("angular"), require("ng-tags-input")) : factory(root["jQuery"], root["angular"], root[false]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	angular.module('ngTagsInput.extends', ['ngTagsInput.extends.changeTo', 'ngTagsInput.extends.paste']);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _interopRequireDefault = __webpack_require__(3)['default'];
	
	var _angular = __webpack_require__(5);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	if (!$) {
	    throw new Error("Angular.extends requires a AngularJS");
	}
	
	module.exports = _angular2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(3)['default'];
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	if (!_jquery2['default']) {
	    throw new Error("jQuery.extends requires a jQuery");
	}
	
	module.exports = _jquery2['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, $) {'use strict';
	angular.module('ngTagsInput.extends.changeTo', ['ngTagsInput']).constant('tagsChangeToConfig', {
	  seperator: '|'
	}).directive('tagsChangeTo', [
	  'tagsChangeToConfig', '$parse', 'uniqueFilter', function(tagsChangeToConfig, $parse, uniqueFilter) {
	    return {
	      restrict: 'AC',
	      require: 'tagsInput',
	      link: function(scope, element, attrs) {
	        var getModel, getTo, seperator, setModel, setTo;
	        getModel = $parse(attrs.ngModel);
	        setModel = getModel.assign;
	        getTo = $parse(attrs.tagsChangeTo);
	        setTo = getTo.assign;
	        seperator = tagsChangeToConfig.seperator;
	        attrs.$observe('tagsChangeToSeperator', function(value) {
	          seperator = value || tagsChangeToConfig.seperator;
	        });
	        scope.$watch(getTo, function(value) {
	          var tag;
	          if (setModel != null) {
	            setModel(scope, (function() {
	              var i, len, ref, ref1, results;
	              ref1 = uniqueFilter(seperator === 'array' ? $.makeArray(value) : (value != null ? typeof value.split === "function" ? (ref = value.split(seperator)) != null ? typeof ref.filter === "function" ? ref.filter(function(a) {
	                return !!a;
	              }) : void 0 : void 0 : void 0 : void 0) || []);
	              results = [];
	              for (i = 0, len = ref1.length; i < len; i++) {
	                tag = ref1[i];
	                results.push({
	                  text: tag
	                });
	              }
	              return results;
	            })());
	          }
	        });
	        scope.$watchCollection(function() {
	          var i, len, ref, results, tag;
	          ref = getModel(scope) || [];
	          results = [];
	          for (i = 0, len = ref.length; i < len; i++) {
	            tag = ref[i];
	            results.push(tag.text);
	          }
	          return results;
	        }, function(tags) {
	          if ((tags != null) && (setTo != null)) {
	            setTo(scope, seperator === 'array' ? tags : tags.join(seperator));
	          }
	        });
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngTagsInput.extends.paste', ['ngTagsInput']).constant('tagsPasteConfig', {
	  delimiter: /[|\/\n]/g
	}).directive('tagsPaste', [
	  'tagsPasteConfig', '$parse', function(tagsPasteConfig, $parse) {
	    return {
	      restrict: 'AC',
	      require: 'tagsInput',
	      link: function(scope, element, attrs) {
	        var delimiter, getModel, setModel;
	        delimiter = null;
	        attrs.$observe('tagsPaste', function(value) {
	          delimiter = value || tagsPasteConfig.delimiter;
	          if (!(delimiter instanceof RegExp)) {
	            delimiter = new RegExp(delimiter.toString(), 'g');
	          }
	        });
	        getModel = $parse(attrs.ngModel);
	        setModel = getModel.assign;
	        element.on('paste', function(e) {
	          var i, len, ref, splitedValue, tags, text;
	          e.preventDefault();
	          e.stopPropagation();
	          splitedValue = (ref = e.originalEvent.clipboardData.getData('text/plain')) != null ? typeof ref.split === "function" ? ref.split(delimiter).filter(function(a) {
	            return !!a;
	          }) : void 0 : void 0;
	          if (splitedValue.length > 0) {
	            tags = getModel(scope) || [];
	            for (i = 0, len = splitedValue.length; i < len; i++) {
	              text = splitedValue[i];
	              if (!tags.some(function(a) {
	                return a.text === text;
	              })) {
	                tags.push({
	                  text: text
	                });
	              }
	            }
	            scope.$evalAsync(function() {
	              return setModel(scope, tags);
	            });
	          }
	        });
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxOGM1YjI2NWRjMmYyNzU1YThjYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOmZhbHNlLFwiY29tbW9uanNcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImNvbW1vbmpzMlwiOlwibmctdGFncy1pbnB1dFwiLFwiYW1kXCI6XCJuZy10YWdzLWlucHV0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9jaGFuZ2VUby5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bhc3RlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7cUJBRU4s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QUMsUUFBVixFQUFQLEVBQTZCLEdBQTdCLEVBQWhCOztTQUYwQixDQUE1QjtTQUtBLFdBQVcsT0FBTyxLQUFLLENBQUMsT0FBYjtTQUNYLFdBQVcsUUFBUSxDQUFDO1NBQ3BCLE9BQU8sQ0FBQyxFQUFSLENBQVcsT0FBWCxFQUFvQixTQUFDLENBQUQ7QUFDbEI7V0FBQSxDQUFDLENBQUMsY0FBRjtXQUNBLENBQUMsQ0FBQyxlQUFGO1dBQ0EsMEhBQWtFLENBQUUsTUFBTyxVQUFVLENBQUMsTUFBdkUsQ0FBOEUsU0FBQyxDQUFEO29CQUFPLENBQUMsQ0FBQztXQUFULENBQTlFO1dBQ2YsSUFBRyxZQUFZLENBQUMsTUFBYixHQUFzQixDQUF6QjthQUNFLE9BQU8sU0FBUyxLQUFULEtBQW1CO0FBQzFCOztlQUNFLEtBQThCLElBQUksQ0FBQyxJQUFMLENBQVUsU0FBQyxDQUFEO3dCQUFPLENBQUMsQ0FBQyxJQUFGLEtBQVU7ZUFBakIsQ0FBVixDQUE5QjtpQkFBQSxJQUFJLENBQUMsSUFBTCxDQUFVO21CQUFBLE1BQU0sSUFBTjtrQkFBVjs7QUFERjthQUVBLEtBQUssQ0FBQyxVQUFOLENBQWlCO3NCQUFHLFNBQVMsS0FBVCxFQUFnQixJQUFoQjthQUFILENBQWpCLEVBSkY7O1NBSmtCLENBQXBCO09BVEksQ0FGTjs7R0FERixDQUZzQjtFQUx4QiIsImZpbGUiOiJuZy10YWdzLWlucHV0LWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwibmctdGFncy1pbnB1dFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIiwgXCJhbmd1bGFyXCIsIFwibmctdGFncy1pbnB1dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcIm5nLXRhZ3MtaW5wdXRcIikpIDogZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wiYW5ndWxhclwiXSwgcm9vdFtmYWxzZV0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMThjNWIyNjVkYzJmMjc1NWE4Y2NcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnbmdUYWdzSW5wdXQnXG5pbXBvcnQgJy4vY2hhbmdlVG8uY29mZmVlJ1xuaW1wb3J0ICcuL3Bhc3RlLmNvZmZlZSdcblxuYW5ndWxhci5tb2R1bGUoJ25nVGFnc0lucHV0LmV4dGVuZHMnLCBbXG4gICAgJ25nVGFnc0lucHV0LmV4dGVuZHMuY2hhbmdlVG8nLFxuICAgICduZ1RhZ3NJbnB1dC5leHRlbmRzLnBhc3RlJ1xuXSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuZ3VsYXIuZXh0ZW5kcyByZXF1aXJlcyBhIEFuZ3VsYXJKU1wiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9hbmd1bGFyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgalF1ZXJ5XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2pxdWVyeS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6ZmFsc2UsXCJjb21tb25qc1wiOlwibmctdGFncy1pbnB1dFwiLFwiY29tbW9uanMyXCI6XCJuZy10YWdzLWlucHV0XCIsXCJhbWRcIjpcIm5nLXRhZ3MtaW5wdXRcIn1cbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nVGFnc0lucHV0LmV4dGVuZHMuY2hhbmdlVG8nLCBbJ25nVGFnc0lucHV0J11cblxuLmNvbnN0YW50ICd0YWdzQ2hhbmdlVG9Db25maWcnLFxuICBzZXBlcmF0b3I6ICd8J1xuXG4uZGlyZWN0aXZlICd0YWdzQ2hhbmdlVG8nLCBbXG4gICd0YWdzQ2hhbmdlVG9Db25maWcnLCAnJHBhcnNlJywgJ3VuaXF1ZUZpbHRlcidcbiAgKHRhZ3NDaGFuZ2VUb0NvbmZpZywgJHBhcnNlLCB1bmlxdWVGaWx0ZXIpIC0+XG4gICAgcmVzdHJpY3Q6ICdBQydcbiAgICByZXF1aXJlOiAndGFnc0lucHV0J1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBnZXRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKVxuICAgICAgc2V0TW9kZWwgPSBnZXRNb2RlbC5hc3NpZ25cbiAgICAgIGdldFRvID0gJHBhcnNlKGF0dHJzLnRhZ3NDaGFuZ2VUbylcbiAgICAgIHNldFRvID0gZ2V0VG8uYXNzaWduXG5cbiAgICAgIHNlcGVyYXRvciA9IHRhZ3NDaGFuZ2VUb0NvbmZpZy5zZXBlcmF0b3JcbiAgICAgIGF0dHJzLiRvYnNlcnZlICd0YWdzQ2hhbmdlVG9TZXBlcmF0b3InLCAodmFsdWUpIC0+XG4gICAgICAgIHNlcGVyYXRvciA9IHZhbHVlIG9yIHRhZ3NDaGFuZ2VUb0NvbmZpZy5zZXBlcmF0b3JcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHNjb3BlLiR3YXRjaCBnZXRUbywgKHZhbHVlKSAtPiBpZiBzZXRNb2RlbD9cbiAgICAgICAgc2V0TW9kZWwoc2NvcGUsIHRleHQ6IHRhZyAgZm9yIHRhZyBpbiB1bmlxdWVGaWx0ZXIoXG4gICAgICAgICAgaWYgc2VwZXJhdG9yIGlzICdhcnJheSdcbiAgICAgICAgICAgICQubWFrZUFycmF5KHZhbHVlKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbHVlPy5zcGxpdD8oc2VwZXJhdG9yKT8uZmlsdGVyPygoYSkgLT4gISFhKSBvciBbXVxuICAgICAgICApKVxuICAgICAgICByZXR1cm5cblxuICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbiAtPlxuICAgICAgICB0YWcudGV4dCAgZm9yIHRhZyBpbiBnZXRNb2RlbChzY29wZSkgb3IgW11cbiAgICAgICwgKHRhZ3MpIC0+IGlmIHRhZ3M/IGFuZCBzZXRUbz9cbiAgICAgICAgc2V0VG8oc2NvcGUsIGlmIHNlcGVyYXRvciBpcyAnYXJyYXknIHRoZW4gdGFncyBlbHNlIHRhZ3Muam9pbihzZXBlcmF0b3IpKVxuICAgICAgICByZXR1cm5cbiAgICAgIHJldHVyblxuXVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2hhbmdlVG8uY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ1RhZ3NJbnB1dC5leHRlbmRzLnBhc3RlJywgWyduZ1RhZ3NJbnB1dCddXG5cbi5jb25zdGFudCAndGFnc1Bhc3RlQ29uZmlnJyxcbiAgZGVsaW1pdGVyOiAvW3wvXFxuXS9nXG5cbi5kaXJlY3RpdmUgJ3RhZ3NQYXN0ZScsIFtcbiAgJ3RhZ3NQYXN0ZUNvbmZpZycsICckcGFyc2UnXG4gICh0YWdzUGFzdGVDb25maWcsICRwYXJzZSkgLT5cbiAgICByZXN0cmljdDogJ0FDJ1xuICAgIHJlcXVpcmU6ICd0YWdzSW5wdXQnXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIGRlbGltaXRlciA9IG51bGxcbiAgICAgIGF0dHJzLiRvYnNlcnZlICd0YWdzUGFzdGUnLCAodmFsdWUpIC0+XG4gICAgICAgIGRlbGltaXRlciA9IHZhbHVlIG9yIHRhZ3NQYXN0ZUNvbmZpZy5kZWxpbWl0ZXJcbiAgICAgICAgZGVsaW1pdGVyID0gbmV3IFJlZ0V4cChkZWxpbWl0ZXIudG9TdHJpbmcoKSwgJ2cnKSAgdW5sZXNzIGRlbGltaXRlciBpbnN0YW5jZW9mIFJlZ0V4cFxuICAgICAgICByZXR1cm5cblxuICAgICAgZ2V0TW9kZWwgPSAkcGFyc2UoYXR0cnMubmdNb2RlbClcbiAgICAgIHNldE1vZGVsID0gZ2V0TW9kZWwuYXNzaWduXG4gICAgICBlbGVtZW50Lm9uICdwYXN0ZScsIChlKSAtPlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzcGxpdGVkVmFsdWUgPSBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk/LnNwbGl0PyhkZWxpbWl0ZXIpLmZpbHRlciAoYSkgLT4gISFhXG4gICAgICAgIGlmIHNwbGl0ZWRWYWx1ZS5sZW5ndGggPiAwXG4gICAgICAgICAgdGFncyA9IGdldE1vZGVsKHNjb3BlKSBvciBbXVxuICAgICAgICAgIGZvciB0ZXh0IGluIHNwbGl0ZWRWYWx1ZVxuICAgICAgICAgICAgdGFncy5wdXNoKHRleHQ6IHRleHQpICB1bmxlc3MgdGFncy5zb21lIChhKSAtPiBhLnRleHQgaXMgdGV4dFxuICAgICAgICAgIHNjb3BlLiRldmFsQXN5bmMgLT4gc2V0TW9kZWwoc2NvcGUsIHRhZ3MpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFzdGUuY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==