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
	
	angular.module('ngTagsInput.extends', ['ngTagsInput.extends.tagsChangeTo', 'ngTagsInput.extends.tagsChangeToArray']);
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

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	module.exports = angular.module('ngTagsInput.extends.tagsChangeTo', ['ngTagsInput']).constant('tagsChangeToConfig', {
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
	          return seperator = value || tagsChangeToConfig.seperator;
	        });
	        scope.$watch(getTo, function(value) {
	          var ref, tag, tags;
	          tags = uniqueFilter(value != null ? typeof value.split === "function" ? (ref = value.split(seperator)) != null ? typeof ref.filter === "function" ? ref.filter(function(a) {
	            return !!a;
	          }) : void 0 : void 0 : void 0 : void 0) || [];
	          return setModel(scope, (function() {
	            var i, len, results;
	            results = [];
	            for (i = 0, len = tags.length; i < len; i++) {
	              tag = tags[i];
	              results.push({
	                text: tag
	              });
	            }
	            return results;
	          })());
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
	          var tag;
	          if ((tags != null) && (setTo != null)) {
	            return setTo(scope, ((function() {
	              var i, len, ref, results;
	              ref = tags || [];
	              results = [];
	              for (i = 0, len = ref.length; i < len; i++) {
	                tag = ref[i];
	                results.push(tag);
	              }
	              return results;
	            })()).join(seperator));
	          }
	        });
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, $) {'use strict';
	module.exports = angular.module('ngTagsInput.extends.tagsChangeToArray', ['ngTagsInput']).directive('tagsChangeToArray', [
	  '$parse', 'uniqueFilter', function($parse, uniqueFilter) {
	    return {
	      restrict: 'AC',
	      require: 'tagsInput',
	      link: function(scope, element, attrs) {
	        var getModel, getTo, setModel, setTo;
	        getModel = $parse(attrs.ngModel);
	        setModel = getModel.assign;
	        getTo = $parse(attrs.tagsChangeToArray);
	        setTo = getTo.assign;
	        scope.$watch(getTo, function(value) {
	          var tag;
	          return setModel(scope, (function() {
	            var i, len, ref, results;
	            ref = uniqueFilter($.makeArray(value));
	            results = [];
	            for (i = 0, len = ref.length; i < len; i++) {
	              tag = ref[i];
	              results.push({
	                text: tag
	              });
	            }
	            return results;
	          })());
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
	          var tag;
	          if ((tags != null) && (setTo != null)) {
	            return setTo(scope, (function() {
	              var i, len, ref, results;
	              ref = tags || [];
	              results = [];
	              for (i = 0, len = ref.length; i < len; i++) {
	                tag = ref[i];
	                results.push(tag);
	              }
	              return results;
	            })());
	          }
	        });
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNzMzNWRkOTU0YzQ0ODY5MzQ3YSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOmZhbHNlLFwiY29tbW9uanNcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImNvbW1vbmpzMlwiOlwibmctdGFncy1pbnB1dFwiLFwiYW1kXCI6XCJuZy10YWdzLWlucHV0XCJ9Iiwid2VicGFjazovLy8uL3NyYy90YWdzQ2hhbmdlVG8uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy90YWdzQ2hhbmdlVG9BcnJheS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLDRE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QixRQUFRLE9BQU8sS0FBSyxDQUFDLGlCQUFiO1NBQ1IsUUFBUSxLQUFLLENBQUM7U0FFZCxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsRUFBb0IsU0FBQyxLQUFEO0FBQ2xCO2tCQUFBLFNBQVMsS0FBVDs7QUFBZ0I7QUFBQTtrQkFBQTs7NEJBQUE7aUJBQUEsTUFBTSxHQUFOOztBQUFBOztlQUFoQjtTQURrQixDQUFwQjtTQUdBLEtBQUssQ0FBQyxnQkFBTixDQUF1QjtBQUNyQjtBQUFBO0FBQUE7Z0JBQUE7OzBCQUFBLEdBQUcsQ0FBQztBQUFKOztTQURxQixDQUF2QixFQUVFLFNBQUMsSUFBRDtBQUFVO1dBQUEsSUFBRyxrQkFBVSxlQUFiO29CQUNWLE1BQU0sS0FBTjs7QUFBYTtBQUFBO29CQUFBOzs4QkFBQTtBQUFBOztpQkFBYixFQURVOztTQUFWLENBRkY7Z0JBS0E7T0FkSSxDQUZOOztHQURGLENBRjhCO0VBRmYiLCJmaWxlIjoibmctdGFncy1pbnB1dC1leHRlbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcIm5nLXRhZ3MtaW5wdXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCIsIFwiYW5ndWxhclwiLCBcIm5nLXRhZ3MtaW5wdXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIiksIHJlcXVpcmUoXCJuZy10YWdzLWlucHV0XCIpKSA6IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImFuZ3VsYXJcIl0sIHJvb3RbZmFsc2VdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI3MzM1ZGQ5NTRjNDQ4NjkzNDdhXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ25nVGFnc0lucHV0J1xuaW1wb3J0ICcuL3RhZ3NDaGFuZ2VUby5jb2ZmZWUnXG5pbXBvcnQgJy4vdGFnc0NoYW5nZVRvQXJyYXkuY29mZmVlJ1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdUYWdzSW5wdXQuZXh0ZW5kcycsIFtcbiAgICAnbmdUYWdzSW5wdXQuZXh0ZW5kcy50YWdzQ2hhbmdlVG8nLFxuICAgICduZ1RhZ3NJbnB1dC5leHRlbmRzLnRhZ3NDaGFuZ2VUb0FycmF5J1xuXSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuZ3VsYXIuZXh0ZW5kcyByZXF1aXJlcyBhIEFuZ3VsYXJKU1wiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9hbmd1bGFyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgalF1ZXJ5XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2pxdWVyeS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6ZmFsc2UsXCJjb21tb25qc1wiOlwibmctdGFncy1pbnB1dFwiLFwiY29tbW9uanMyXCI6XCJuZy10YWdzLWlucHV0XCIsXCJhbWRcIjpcIm5nLXRhZ3MtaW5wdXRcIn1cbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSAnbmdUYWdzSW5wdXQuZXh0ZW5kcy50YWdzQ2hhbmdlVG8nLCBbJ25nVGFnc0lucHV0J11cblxuLmNvbnN0YW50ICd0YWdzQ2hhbmdlVG9Db25maWcnLFxuICBzZXBlcmF0b3I6ICd8J1xuXG4uZGlyZWN0aXZlICd0YWdzQ2hhbmdlVG8nLCBbXG4gICd0YWdzQ2hhbmdlVG9Db25maWcnLCAnJHBhcnNlJywgJ3VuaXF1ZUZpbHRlcidcbiAgKHRhZ3NDaGFuZ2VUb0NvbmZpZywgJHBhcnNlLCB1bmlxdWVGaWx0ZXIpIC0+XG4gICAgcmVzdHJpY3Q6ICdBQydcbiAgICByZXF1aXJlOiAndGFnc0lucHV0J1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBnZXRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKVxuICAgICAgc2V0TW9kZWwgPSBnZXRNb2RlbC5hc3NpZ25cbiAgICAgIGdldFRvID0gJHBhcnNlKGF0dHJzLnRhZ3NDaGFuZ2VUbylcbiAgICAgIHNldFRvID0gZ2V0VG8uYXNzaWduXG5cbiAgICAgIHNlcGVyYXRvciA9IHRhZ3NDaGFuZ2VUb0NvbmZpZy5zZXBlcmF0b3JcbiAgICAgIGF0dHJzLiRvYnNlcnZlICd0YWdzQ2hhbmdlVG9TZXBlcmF0b3InLCAodmFsdWUpIC0+XG4gICAgICAgIHNlcGVyYXRvciA9IHZhbHVlIG9yIHRhZ3NDaGFuZ2VUb0NvbmZpZy5zZXBlcmF0b3JcblxuICAgICAgc2NvcGUuJHdhdGNoIGdldFRvLCAodmFsdWUpIC0+XG4gICAgICAgIHRhZ3MgPSB1bmlxdWVGaWx0ZXIodmFsdWU/LnNwbGl0PyhzZXBlcmF0b3IpPy5maWx0ZXI/KChhKSAtPiAhIWEpKSBvciBbXVxuICAgICAgICBzZXRNb2RlbChzY29wZSwgdGV4dDogdGFnICBmb3IgdGFnIGluIHRhZ3MpXG5cbiAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gLT5cbiAgICAgICAgdGFnLnRleHQgIGZvciB0YWcgaW4gZ2V0TW9kZWwoc2NvcGUpIG9yIFtdXG4gICAgICAsICh0YWdzKSAtPiBpZiB0YWdzPyBhbmQgc2V0VG8/XG4gICAgICAgIHNldFRvKHNjb3BlLCAodGFnICBmb3IgdGFnIGluIHRhZ3Mgb3IgW10pLmpvaW4oc2VwZXJhdG9yKSlcblxuICAgICAgdW5kZWZpbmVkXG5dXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90YWdzQ2hhbmdlVG8uY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUgJ25nVGFnc0lucHV0LmV4dGVuZHMudGFnc0NoYW5nZVRvQXJyYXknLCBbJ25nVGFnc0lucHV0J11cblxuLmRpcmVjdGl2ZSAndGFnc0NoYW5nZVRvQXJyYXknLCBbXG4gICckcGFyc2UnLCAndW5pcXVlRmlsdGVyJ1xuICAoJHBhcnNlLCB1bmlxdWVGaWx0ZXIpIC0+XG4gICAgcmVzdHJpY3Q6ICdBQydcbiAgICByZXF1aXJlOiAndGFnc0lucHV0J1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBnZXRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKVxuICAgICAgc2V0TW9kZWwgPSBnZXRNb2RlbC5hc3NpZ25cbiAgICAgIGdldFRvID0gJHBhcnNlKGF0dHJzLnRhZ3NDaGFuZ2VUb0FycmF5KVxuICAgICAgc2V0VG8gPSBnZXRUby5hc3NpZ25cblxuICAgICAgc2NvcGUuJHdhdGNoIGdldFRvLCAodmFsdWUpIC0+XG4gICAgICAgIHNldE1vZGVsKHNjb3BlLCB0ZXh0OiB0YWcgIGZvciB0YWcgaW4gdW5pcXVlRmlsdGVyKCQubWFrZUFycmF5KHZhbHVlKSkpXG5cbiAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gLT5cbiAgICAgICAgdGFnLnRleHQgIGZvciB0YWcgaW4gZ2V0TW9kZWwoc2NvcGUpIG9yIFtdXG4gICAgICAsICh0YWdzKSAtPiBpZiB0YWdzPyBhbmQgc2V0VG8/XG4gICAgICAgIHNldFRvKHNjb3BlLCB0YWcgIGZvciB0YWcgaW4gdGFncyBvciBbXSlcblxuICAgICAgdW5kZWZpbmVkXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGFnc0NoYW5nZVRvQXJyYXkuY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==