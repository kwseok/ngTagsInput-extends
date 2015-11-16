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
	
	angular.module('ngTagsInput.extends', ['ngTagsInput.extends.changeTo']);
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZWM4YmU0MGMyODY5NmU4ZGM3NSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOmZhbHNlLFwiY29tbW9uanNcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImNvbW1vbmpzMlwiOlwibmctdGFncy1pbnB1dFwiLFwiYW1kXCI6XCJuZy10YWdzLWlucHV0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9jaGFuZ2VUby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLDREQUFZLENBQUM7O3FCQUVOLENBQWE7O3FCQUNiLENBQW1COztBQUUxQixRQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQ2xDLDhCQUE4QixDQUNqQyxDQUFDLEM7Ozs7Ozs7QUNQRixzREFBWSxDQUFDOzs7O29DQUVPLENBQVM7Ozs7QUFFN0IsS0FBSSxDQUFDLENBQUMsRUFBRTtBQUNKLFdBQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztFQUMzRDs7QUFFRCxPQUFNLENBQUMsT0FBTyx1QkFBVSxDOzs7Ozs7O0FDUnhCLGFBQVksQ0FBQzs7OzttQ0FFQyxDQUFROzs7O0FBRXRCLEtBQUksb0JBQUUsRUFBRTtBQUNKLFdBQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztFQUN2RDs7QUFFRCxPQUFNLENBQUMsT0FBTyxzQkFBSSxDOzs7Ozs7QUNSbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7O0FDUkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFFQSxRQUFPLENBQUMsTUFBUixDQUFlLDhCQUFmLEVBQStDLENBQUMsYUFBRCxDQUEvQyxDQUVBLENBQUMsUUFGRCxDQUVVLG9CQUZWLEVBR0U7R0FBQSxXQUFXLEdBQVg7RUFIRixDQUtBLENBQUMsU0FMRCxDQUtXLGNBTFgsRUFLMkI7R0FDekIsb0JBRHlCLEVBQ0gsUUFERyxFQUNPLGNBRFAsRUFFekIsU0FBQyxrQkFBRCxFQUFxQixNQUFyQixFQUE2QixZQUE3QjtZQUNFO09BQUEsVUFBVSxJQUFWO09BQ0EsU0FBUyxXQURUO09BRUEsTUFBTSxTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCO0FBQ0o7U0FBQSxXQUFXLE9BQU8sS0FBSyxDQUFDLE9BQWI7U0FDWCxXQUFXLFFBQVEsQ0FBQztTQUNwQixRQUFRLE9BQU8sS0FBSyxDQUFDLFlBQWI7U0FDUixRQUFRLEtBQUssQ0FBQztTQUVkLFlBQVksa0JBQWtCLENBQUM7U0FDL0IsS0FBSyxDQUFDLFFBQU4sQ0FBZSx1QkFBZixFQUF3QyxTQUFDLEtBQUQ7V0FDdEMsWUFBWSxTQUFTLGtCQUFrQixDQUFDO1NBREYsQ0FBeEM7U0FJQSxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsRUFBb0IsU0FBQyxLQUFEO0FBQVc7V0FBQSxJQUFHLGdCQUFIO2FBQzdCLFNBQVMsS0FBVDs7QUFBZ0I7OztBQUFBO29CQUFBOzs4QkFBQTttQkFBQSxNQUFNLEdBQU47O0FBQUE7O2lCQUFoQixFQUQ2Qjs7U0FBWCxDQUFwQjtTQVNBLEtBQUssQ0FBQyxnQkFBTixDQUF1QjtBQUNyQjtBQUFBO0FBQUE7Z0JBQUE7OzBCQUFBLEdBQUcsQ0FBQztBQUFKOztTQURxQixDQUF2QixFQUVFLFNBQUMsSUFBRDtXQUFVLElBQUcsa0JBQVUsZUFBYjthQUNWLE1BQU0sS0FBTixFQUFnQixjQUFhLE9BQWhCLEdBQTZCLElBQTdCLEdBQXVDLElBQUksQ0FBQyxJQUFMLENBQVUsU0FBVixDQUFwRCxFQURVOztTQUFWLENBRkY7T0FwQkksQ0FGTjs7R0FERixDQUZ5QjtFQUwzQiIsImZpbGUiOiJuZy10YWdzLWlucHV0LWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwibmctdGFncy1pbnB1dFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIiwgXCJhbmd1bGFyXCIsIFwibmctdGFncy1pbnB1dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcIm5nLXRhZ3MtaW5wdXRcIikpIDogZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wiYW5ndWxhclwiXSwgcm9vdFtmYWxzZV0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNmVjOGJlNDBjMjg2OTZlOGRjNzVcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnbmdUYWdzSW5wdXQnXG5pbXBvcnQgJy4vY2hhbmdlVG8uY29mZmVlJ1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdUYWdzSW5wdXQuZXh0ZW5kcycsIFtcbiAgICAnbmdUYWdzSW5wdXQuZXh0ZW5kcy5jaGFuZ2VUbydcbl0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuXG5pZiAoISQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbmd1bGFyLmV4dGVuZHMgcmVxdWlyZXMgYSBBbmd1bGFySlNcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvYW5ndWxhci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5pZiAoISQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkuZXh0ZW5kcyByZXF1aXJlcyBhIGpRdWVyeVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9qcXVlcnkuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOmZhbHNlLFwiY29tbW9uanNcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImNvbW1vbmpzMlwiOlwibmctdGFncy1pbnB1dFwiLFwiYW1kXCI6XCJuZy10YWdzLWlucHV0XCJ9XG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ1RhZ3NJbnB1dC5leHRlbmRzLmNoYW5nZVRvJywgWyduZ1RhZ3NJbnB1dCddXG5cbi5jb25zdGFudCAndGFnc0NoYW5nZVRvQ29uZmlnJyxcbiAgc2VwZXJhdG9yOiAnfCdcblxuLmRpcmVjdGl2ZSAndGFnc0NoYW5nZVRvJywgW1xuICAndGFnc0NoYW5nZVRvQ29uZmlnJywgJyRwYXJzZScsICd1bmlxdWVGaWx0ZXInXG4gICh0YWdzQ2hhbmdlVG9Db25maWcsICRwYXJzZSwgdW5pcXVlRmlsdGVyKSAtPlxuICAgIHJlc3RyaWN0OiAnQUMnXG4gICAgcmVxdWlyZTogJ3RhZ3NJbnB1dCdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgZ2V0TW9kZWwgPSAkcGFyc2UoYXR0cnMubmdNb2RlbClcbiAgICAgIHNldE1vZGVsID0gZ2V0TW9kZWwuYXNzaWduXG4gICAgICBnZXRUbyA9ICRwYXJzZShhdHRycy50YWdzQ2hhbmdlVG8pXG4gICAgICBzZXRUbyA9IGdldFRvLmFzc2lnblxuXG4gICAgICBzZXBlcmF0b3IgPSB0YWdzQ2hhbmdlVG9Db25maWcuc2VwZXJhdG9yXG4gICAgICBhdHRycy4kb2JzZXJ2ZSAndGFnc0NoYW5nZVRvU2VwZXJhdG9yJywgKHZhbHVlKSAtPlxuICAgICAgICBzZXBlcmF0b3IgPSB2YWx1ZSBvciB0YWdzQ2hhbmdlVG9Db25maWcuc2VwZXJhdG9yXG4gICAgICAgIHJldHVyblxuXG4gICAgICBzY29wZS4kd2F0Y2ggZ2V0VG8sICh2YWx1ZSkgLT4gaWYgc2V0TW9kZWw/XG4gICAgICAgIHNldE1vZGVsKHNjb3BlLCB0ZXh0OiB0YWcgIGZvciB0YWcgaW4gdW5pcXVlRmlsdGVyKFxuICAgICAgICAgIGlmIHNlcGVyYXRvciBpcyAnYXJyYXknXG4gICAgICAgICAgICAkLm1ha2VBcnJheSh2YWx1ZSlcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB2YWx1ZT8uc3BsaXQ/KHNlcGVyYXRvcik/LmZpbHRlcj8oKGEpIC0+ICEhYSkgb3IgW11cbiAgICAgICAgKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gLT5cbiAgICAgICAgdGFnLnRleHQgIGZvciB0YWcgaW4gZ2V0TW9kZWwoc2NvcGUpIG9yIFtdXG4gICAgICAsICh0YWdzKSAtPiBpZiB0YWdzPyBhbmQgc2V0VG8/XG4gICAgICAgIHNldFRvKHNjb3BlLCBpZiBzZXBlcmF0b3IgaXMgJ2FycmF5JyB0aGVuIHRhZ3MgZWxzZSB0YWdzLmpvaW4oc2VwZXJhdG9yKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICByZXR1cm5cbl1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NoYW5nZVRvLmNvZmZlZVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=