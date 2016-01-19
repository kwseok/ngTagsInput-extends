(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("ng-tags-input"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "ng-tags-input"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular"), require("ng-tags-input")) : factory(root["angular"], root[false]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	angular.module('ngTagsInput.extends', ['ngTagsInput.extends.changeTo']);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!_angular2.default) {
	    throw new Error("ngTagsInput.extends requires a AngularJS");
	}
	
	module.exports = _angular2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	angular.module('ngTagsInput.extends.changeTo', ['ngTagsInput']).constant('tagsChangeToConfig', {
	  seperator: '|'
	}).directive('tagsChangeTo', [
	  'tagsChangeToConfig', '$parse', function(tagsChangeToConfig, $parse) {
	    return {
	      restrict: 'AC',
	      require: 'tagsInput',
	      link: function(scope, element, attrs) {
	        var displayProperty, getModel, getTo, keyProperty, makeObject, seperator, setModel, setTo, unique;
	        getModel = $parse(attrs.ngModel);
	        setModel = getModel.assign;
	        getTo = $parse(attrs.tagsChangeTo);
	        setTo = getTo.assign;
	        seperator = tagsChangeToConfig.seperator;
	        attrs.$observe('tagsChangeToSeperator', function(value) {
	          return seperator = value || tagsChangeToConfig.seperator;
	        });
	        keyProperty = null;
	        attrs.$observe('keyProperty', function(value) {
	          return keyProperty = value;
	        });
	        displayProperty = 'text';
	        attrs.$observe('displayProperty', function(value) {
	          return displayProperty = value || 'text';
	        });
	        makeObject = function(k, v) {
	          var o;
	          o = {};
	          o[k] = v;
	          return o;
	        };
	        unique = function(arr) {
	          var a, i, len, result;
	          result = [];
	          for (i = 0, len = arr.length; i < len; i++) {
	            a = arr[i];
	            if (indexOf.call(result, a) < 0) {
	              result.push(a);
	            }
	          }
	          return result;
	        };
	        scope.$watch(getTo, function(value) {
	          var tag;
	          if (setModel != null) {
	            return setModel(scope, (function() {
	              var i, len, ref, ref1, results;
	              ref1 = unique(seperator === 'array' ? value == null ? value = [] : !angular.isArray(value) ? value = [value] : void 0 : (value != null ? typeof value.split === "function" ? (ref = value.split(seperator)) != null ? typeof ref.filter === "function" ? ref.filter(function(a) {
	                return !!a;
	              }) : void 0 : void 0 : void 0 : void 0) || []);
	              results = [];
	              for (i = 0, len = ref1.length; i < len; i++) {
	                tag = ref1[i];
	                results.push(makeObject(keyProperty || displayProperty, tag));
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
	            results.push(tag[keyProperty || displayProperty]);
	          }
	          return results;
	        }, function(tags) {
	          if ((tags != null) && (setTo != null)) {
	            return setTo(scope, seperator === 'array' ? tags : tags.join(seperator));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMmJkMmM4YzJmNGUwYjI5N2RkNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpmYWxzZSxcImNvbW1vbmpzXCI6XCJuZy10YWdzLWlucHV0XCIsXCJjb21tb25qczJcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImFtZFwiOlwibmctdGFncy1pbnB1dFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhbmdlVG8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSw0REFBWSxDQUFDOzs7Ozs7QUFLYixRQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQ2xDLDhCQUE4QixDQUNqQyxDQUFDLEM7Ozs7Ozs7QUNQRixhQUFZLENBQUM7Ozs7Ozs7O0FBSWIsS0FBSSxrQkFBUSxFQUFFO0FBQ1YsV0FBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0VBQy9EOztBQUVELE9BQU0sQ0FBQyxPQUFPLG9CQUFVLEM7Ozs7OztBQ1J4QixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQUE7O0FBRUEsUUFBTyxDQUFDLE1BQVIsQ0FBZSw4QkFBZixFQUErQyxDQUFDLGFBQUQsQ0FBL0MsQ0FFQSxDQUFDLFFBRkQsQ0FFVSxvQkFGVixFQUdFO0dBQUEsV0FBVyxHQUFYO0VBSEYsQ0FLQSxDQUFDLFNBTEQsQ0FLVyxjQUxYLEVBSzJCO0dBQ3pCLG9CQUR5QixFQUNILFFBREcsRUFFekIsU0FBQyxrQkFBRCxFQUFxQixNQUFyQjtZQUNFO09BQUEsVUFBVSxJQUFWO09BQ0EsU0FBUyxXQURUO09BRUEsTUFBTSxTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCO0FBQ0o7U0FBQSxXQUFXLE9BQU8sS0FBSyxDQUFDLE9BQWI7U0FDWCxXQUFXLFFBQVEsQ0FBQztTQUNwQixRQUFRLE9BQU8sS0FBSyxDQUFDLFlBQWI7U0FDUixRQUFRLEtBQUssQ0FBQztTQUVkLFlBQVksa0JBQWtCLENBQUM7U0FDL0IsS0FBSyxDQUFDLFFBQU4sQ0FBZSx1QkFBZixFQUF3QyxTQUFDLEtBQUQ7a0JBQVcsWUFBWSxTQUFTLGtCQUFrQixDQUFDO1NBQW5ELENBQXhDO1NBRUEsY0FBYztTQUNkLEtBQUssQ0FBQyxRQUFOLENBQWUsYUFBZixFQUE4QixTQUFDLEtBQUQ7a0JBQVcsY0FBYztTQUF6QixDQUE5QjtTQUVBLGtCQUFrQjtTQUNsQixLQUFLLENBQUMsUUFBTixDQUFlLGlCQUFmLEVBQWtDLFNBQUMsS0FBRDtrQkFBVyxrQkFBa0IsU0FBUztTQUF0QyxDQUFsQztTQUVBLGFBQWEsU0FBQyxDQUFELEVBQUksQ0FBSjtBQUFVO1dBQUEsSUFBRTtXQUFJLENBQUUsR0FBRixHQUFLO2tCQUFHO1NBQXhCO1NBRWIsU0FBUyxTQUFDLEdBQUQ7QUFDUDtXQUFBLFNBQVM7QUFDVDs7YUFDRSxJQUF1QixhQUFLLE1BQUwsUUFBdkI7ZUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLENBQVo7O0FBREY7a0JBRUE7U0FKTztTQU1ULEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYixFQUFvQixTQUFDLEtBQUQ7QUFBVztXQUFBLElBQUcsZ0JBQUg7b0JBQzdCLFNBQVMsS0FBVDs7QUFBZ0I7OztBQUFBO29CQUFBOzs4QkFBQSxXQUFXLGVBQWUsZUFBMUIsRUFBMkMsR0FBM0M7QUFBQTs7aUJBQWhCLEVBRDZCOztTQUFYLENBQXBCO1NBVUEsS0FBSyxDQUFDLGdCQUFOLENBQXVCO0FBQ3JCO0FBQUE7QUFBQTtnQkFBQTs7MEJBQUEsR0FBSSxnQkFBZSxlQUFmO0FBQUo7O1NBRHFCLENBQXZCLEVBRUUsU0FBQyxJQUFEO1dBQVUsSUFBRyxrQkFBVSxlQUFiO29CQUNWLE1BQU0sS0FBTixFQUFnQixjQUFhLE9BQWhCLEdBQTZCLElBQTdCLEdBQXVDLElBQUksQ0FBQyxJQUFMLENBQVUsU0FBVixDQUFwRCxFQURVOztTQUFWLENBRkY7T0FqQ0ksQ0FGTjs7R0FERixDQUZ5QjtFQUwzQiIsImZpbGUiOiJuZy10YWdzLWlucHV0LWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwibmctdGFncy1pbnB1dFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJhbmd1bGFyXCIsIFwibmctdGFncy1pbnB1dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcIm5nLXRhZ3MtaW5wdXRcIikpIDogZmFjdG9yeShyb290W1wiYW5ndWxhclwiXSwgcm9vdFtmYWxzZV0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkMmJkMmM4YzJmNGUwYjI5N2RkN1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICduZ1RhZ3NJbnB1dCdcbmltcG9ydCAnLi9jaGFuZ2VUby5jb2ZmZWUnXG5cbmFuZ3VsYXIubW9kdWxlKCduZ1RhZ3NJbnB1dC5leHRlbmRzJywgW1xuICAgICduZ1RhZ3NJbnB1dC5leHRlbmRzLmNoYW5nZVRvJ1xuXSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5cbmlmICghYW5ndWxhcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm5nVGFnc0lucHV0LmV4dGVuZHMgcmVxdWlyZXMgYSBBbmd1bGFySlNcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvYW5ndWxhci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6ZmFsc2UsXCJjb21tb25qc1wiOlwibmctdGFncy1pbnB1dFwiLFwiY29tbW9uanMyXCI6XCJuZy10YWdzLWlucHV0XCIsXCJhbWRcIjpcIm5nLXRhZ3MtaW5wdXRcIn1cbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nVGFnc0lucHV0LmV4dGVuZHMuY2hhbmdlVG8nLCBbJ25nVGFnc0lucHV0J11cblxuLmNvbnN0YW50ICd0YWdzQ2hhbmdlVG9Db25maWcnLFxuICBzZXBlcmF0b3I6ICd8J1xuXG4uZGlyZWN0aXZlICd0YWdzQ2hhbmdlVG8nLCBbXG4gICd0YWdzQ2hhbmdlVG9Db25maWcnLCAnJHBhcnNlJ1xuICAodGFnc0NoYW5nZVRvQ29uZmlnLCAkcGFyc2UpIC0+XG4gICAgcmVzdHJpY3Q6ICdBQydcbiAgICByZXF1aXJlOiAndGFnc0lucHV0J1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBnZXRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKVxuICAgICAgc2V0TW9kZWwgPSBnZXRNb2RlbC5hc3NpZ25cbiAgICAgIGdldFRvID0gJHBhcnNlKGF0dHJzLnRhZ3NDaGFuZ2VUbylcbiAgICAgIHNldFRvID0gZ2V0VG8uYXNzaWduXG5cbiAgICAgIHNlcGVyYXRvciA9IHRhZ3NDaGFuZ2VUb0NvbmZpZy5zZXBlcmF0b3JcbiAgICAgIGF0dHJzLiRvYnNlcnZlICd0YWdzQ2hhbmdlVG9TZXBlcmF0b3InLCAodmFsdWUpIC0+IHNlcGVyYXRvciA9IHZhbHVlIG9yIHRhZ3NDaGFuZ2VUb0NvbmZpZy5zZXBlcmF0b3JcblxuICAgICAga2V5UHJvcGVydHkgPSBudWxsXG4gICAgICBhdHRycy4kb2JzZXJ2ZSAna2V5UHJvcGVydHknLCAodmFsdWUpIC0+IGtleVByb3BlcnR5ID0gdmFsdWVcblxuICAgICAgZGlzcGxheVByb3BlcnR5ID0gJ3RleHQnXG4gICAgICBhdHRycy4kb2JzZXJ2ZSAnZGlzcGxheVByb3BlcnR5JywgKHZhbHVlKSAtPiBkaXNwbGF5UHJvcGVydHkgPSB2YWx1ZSBvciAndGV4dCdcblxuICAgICAgbWFrZU9iamVjdCA9IChrLCB2KSAtPiBvPXt9OyBvW2tdPXY7IG9cblxuICAgICAgdW5pcXVlID0gKGFycikgLT5cbiAgICAgICAgcmVzdWx0ID0gW11cbiAgICAgICAgZm9yIGEgaW4gYXJyXG4gICAgICAgICAgcmVzdWx0LnB1c2goYSkgIHVubGVzcyBhIGluIHJlc3VsdFxuICAgICAgICByZXN1bHRcblxuICAgICAgc2NvcGUuJHdhdGNoIGdldFRvLCAodmFsdWUpIC0+IGlmIHNldE1vZGVsP1xuICAgICAgICBzZXRNb2RlbChzY29wZSwgbWFrZU9iamVjdChrZXlQcm9wZXJ0eSBvciBkaXNwbGF5UHJvcGVydHksIHRhZykgIGZvciB0YWcgaW4gdW5pcXVlKFxuICAgICAgICAgIGlmIHNlcGVyYXRvciBpcyAnYXJyYXknXG4gICAgICAgICAgICB1bmxlc3MgdmFsdWU/XG4gICAgICAgICAgICAgIHZhbHVlID0gW11cbiAgICAgICAgICAgIGVsc2UgdW5sZXNzIGFuZ3VsYXIuaXNBcnJheSh2YWx1ZSlcbiAgICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdXG4gICAgICAgICAgZWxzZSB2YWx1ZT8uc3BsaXQ/KHNlcGVyYXRvcik/LmZpbHRlcj8oKGEpIC0+ICEhYSkgb3IgW11cbiAgICAgICAgKSlcblxuICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbiAtPlxuICAgICAgICB0YWdba2V5UHJvcGVydHkgb3IgZGlzcGxheVByb3BlcnR5XSAgZm9yIHRhZyBpbiBnZXRNb2RlbChzY29wZSkgb3IgW11cbiAgICAgICwgKHRhZ3MpIC0+IGlmIHRhZ3M/IGFuZCBzZXRUbz9cbiAgICAgICAgc2V0VG8oc2NvcGUsIGlmIHNlcGVyYXRvciBpcyAnYXJyYXknIHRoZW4gdGFncyBlbHNlIHRhZ3Muam9pbihzZXBlcmF0b3IpKVxuXG4gICAgICByZXR1cm5cbl1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NoYW5nZVRvLmNvZmZlZVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=