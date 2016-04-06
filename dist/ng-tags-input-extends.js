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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMmJkMmM4YzJmNGUwYjI5N2RkNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpmYWxzZSxcImNvbW1vbmpzXCI6XCJuZy10YWdzLWlucHV0XCIsXCJjb21tb25qczJcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImFtZFwiOlwibmctdGFncy1pbnB1dFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhbmdlVG8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFDQTs7QUFFQSxTQUFRLE1BQVIsQ0FBZSxxQkFBZixFQUFzQyxDQUNsQyw4QkFEa0MsQ0FBdEMsRTs7Ozs7OztBQ0xBOztBQUVBOzs7Ozs7QUFFQSxLQUFJLGtCQUFKLEVBQWM7QUFDVixXQUFNLElBQUksS0FBSixDQUFVLDBDQUFWLENBQU4sQ0FEVTtFQUFkOztBQUlBLFFBQU8sT0FBUCxxQjs7Ozs7O0FDUkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQTtBQUFBOztBQUVBLFFBQU8sQ0FBQyxNQUFSLENBQWUsOEJBQWYsRUFBK0MsQ0FBQyxhQUFELENBQS9DLENBRUEsQ0FBQyxRQUZELENBRVUsb0JBRlYsRUFHRTtHQUFBLFdBQVcsR0FBWDtFQUhGLENBS0EsQ0FBQyxTQUxELENBS1csY0FMWCxFQUsyQjtHQUN6QixvQkFEeUIsRUFDSCxRQURHLEVBRXpCLFNBQUMsa0JBQUQsRUFBcUIsTUFBckI7WUFDRTtPQUFBLFVBQVUsSUFBVjtPQUNBLFNBQVMsV0FEVDtPQUVBLE1BQU0sU0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQjtBQUNKO1NBQUEsV0FBVyxPQUFPLEtBQUssQ0FBQyxPQUFiO1NBQ1gsV0FBVyxRQUFRLENBQUM7U0FDcEIsUUFBUSxPQUFPLEtBQUssQ0FBQyxZQUFiO1NBQ1IsUUFBUSxLQUFLLENBQUM7U0FFZCxZQUFZLGtCQUFrQixDQUFDO1NBQy9CLEtBQUssQ0FBQyxRQUFOLENBQWUsdUJBQWYsRUFBd0MsU0FBQyxLQUFEO2tCQUFXLFlBQVksU0FBUyxrQkFBa0IsQ0FBQztTQUFuRCxDQUF4QztTQUVBLGNBQWM7U0FDZCxLQUFLLENBQUMsUUFBTixDQUFlLGFBQWYsRUFBOEIsU0FBQyxLQUFEO2tCQUFXLGNBQWM7U0FBekIsQ0FBOUI7U0FFQSxrQkFBa0I7U0FDbEIsS0FBSyxDQUFDLFFBQU4sQ0FBZSxpQkFBZixFQUFrQyxTQUFDLEtBQUQ7a0JBQVcsa0JBQWtCLFNBQVM7U0FBdEMsQ0FBbEM7U0FFQSxhQUFhLFNBQUMsQ0FBRCxFQUFJLENBQUo7QUFBVTtXQUFBLElBQUU7V0FBSSxDQUFFLEdBQUYsR0FBSztrQkFBRztTQUF4QjtTQUViLFNBQVMsU0FBQyxHQUFEO0FBQ1A7V0FBQSxTQUFTO0FBQ1Q7O2FBQ0UsSUFBdUIsYUFBSyxNQUFMLFFBQXZCO2VBQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxDQUFaOztBQURGO2tCQUVBO1NBSk87U0FNVCxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsRUFBb0IsU0FBQyxLQUFEO0FBQVc7V0FBQSxJQUFHLGdCQUFIO29CQUM3QixTQUFTLEtBQVQ7O0FBQWdCOzs7QUFBQTtvQkFBQTs7OEJBQUEsV0FBVyxlQUFlLGVBQTFCLEVBQTJDLEdBQTNDO0FBQUE7O2lCQUFoQixFQUQ2Qjs7U0FBWCxDQUFwQjtTQVVBLEtBQUssQ0FBQyxnQkFBTixDQUF1QjtBQUNyQjtBQUFBO0FBQUE7Z0JBQUE7OzBCQUFBLEdBQUksZ0JBQWUsZUFBZjtBQUFKOztTQURxQixDQUF2QixFQUVFLFNBQUMsSUFBRDtXQUFVLElBQUcsa0JBQVUsZUFBYjtvQkFDVixNQUFNLEtBQU4sRUFBZ0IsY0FBYSxPQUFoQixHQUE2QixJQUE3QixHQUF1QyxJQUFJLENBQUMsSUFBTCxDQUFVLFNBQVYsQ0FBcEQsRUFEVTs7U0FBVixDQUZGO09BakNJLENBRk47O0dBREYsQ0FGeUI7RUFMM0IiLCJmaWxlIjoibmctdGFncy1pbnB1dC1leHRlbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcIm5nLXRhZ3MtaW5wdXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYW5ndWxhclwiLCBcIm5nLXRhZ3MtaW5wdXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImFuZ3VsYXJcIiksIHJlcXVpcmUoXCJuZy10YWdzLWlucHV0XCIpKSA6IGZhY3Rvcnkocm9vdFtcImFuZ3VsYXJcIl0sIHJvb3RbZmFsc2VdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDJiZDJjOGMyZjRlMGIyOTdkZDdcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnbmdUYWdzSW5wdXQnXG5pbXBvcnQgJy4vY2hhbmdlVG8uY29mZmVlJ1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdUYWdzSW5wdXQuZXh0ZW5kcycsIFtcbiAgICAnbmdUYWdzSW5wdXQuZXh0ZW5kcy5jaGFuZ2VUbydcbl0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuXG5pZiAoIWFuZ3VsYXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJuZ1RhZ3NJbnB1dC5leHRlbmRzIHJlcXVpcmVzIGEgQW5ndWxhckpTXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2FuZ3VsYXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOmZhbHNlLFwiY29tbW9uanNcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImNvbW1vbmpzMlwiOlwibmctdGFncy1pbnB1dFwiLFwiYW1kXCI6XCJuZy10YWdzLWlucHV0XCJ9XG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ1RhZ3NJbnB1dC5leHRlbmRzLmNoYW5nZVRvJywgWyduZ1RhZ3NJbnB1dCddXG5cbi5jb25zdGFudCAndGFnc0NoYW5nZVRvQ29uZmlnJyxcbiAgc2VwZXJhdG9yOiAnfCdcblxuLmRpcmVjdGl2ZSAndGFnc0NoYW5nZVRvJywgW1xuICAndGFnc0NoYW5nZVRvQ29uZmlnJywgJyRwYXJzZSdcbiAgKHRhZ3NDaGFuZ2VUb0NvbmZpZywgJHBhcnNlKSAtPlxuICAgIHJlc3RyaWN0OiAnQUMnXG4gICAgcmVxdWlyZTogJ3RhZ3NJbnB1dCdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgZ2V0TW9kZWwgPSAkcGFyc2UoYXR0cnMubmdNb2RlbClcbiAgICAgIHNldE1vZGVsID0gZ2V0TW9kZWwuYXNzaWduXG4gICAgICBnZXRUbyA9ICRwYXJzZShhdHRycy50YWdzQ2hhbmdlVG8pXG4gICAgICBzZXRUbyA9IGdldFRvLmFzc2lnblxuXG4gICAgICBzZXBlcmF0b3IgPSB0YWdzQ2hhbmdlVG9Db25maWcuc2VwZXJhdG9yXG4gICAgICBhdHRycy4kb2JzZXJ2ZSAndGFnc0NoYW5nZVRvU2VwZXJhdG9yJywgKHZhbHVlKSAtPiBzZXBlcmF0b3IgPSB2YWx1ZSBvciB0YWdzQ2hhbmdlVG9Db25maWcuc2VwZXJhdG9yXG5cbiAgICAgIGtleVByb3BlcnR5ID0gbnVsbFxuICAgICAgYXR0cnMuJG9ic2VydmUgJ2tleVByb3BlcnR5JywgKHZhbHVlKSAtPiBrZXlQcm9wZXJ0eSA9IHZhbHVlXG5cbiAgICAgIGRpc3BsYXlQcm9wZXJ0eSA9ICd0ZXh0J1xuICAgICAgYXR0cnMuJG9ic2VydmUgJ2Rpc3BsYXlQcm9wZXJ0eScsICh2YWx1ZSkgLT4gZGlzcGxheVByb3BlcnR5ID0gdmFsdWUgb3IgJ3RleHQnXG5cbiAgICAgIG1ha2VPYmplY3QgPSAoaywgdikgLT4gbz17fTsgb1trXT12OyBvXG5cbiAgICAgIHVuaXF1ZSA9IChhcnIpIC0+XG4gICAgICAgIHJlc3VsdCA9IFtdXG4gICAgICAgIGZvciBhIGluIGFyclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGEpICB1bmxlc3MgYSBpbiByZXN1bHRcbiAgICAgICAgcmVzdWx0XG5cbiAgICAgIHNjb3BlLiR3YXRjaCBnZXRUbywgKHZhbHVlKSAtPiBpZiBzZXRNb2RlbD9cbiAgICAgICAgc2V0TW9kZWwoc2NvcGUsIG1ha2VPYmplY3Qoa2V5UHJvcGVydHkgb3IgZGlzcGxheVByb3BlcnR5LCB0YWcpICBmb3IgdGFnIGluIHVuaXF1ZShcbiAgICAgICAgICBpZiBzZXBlcmF0b3IgaXMgJ2FycmF5J1xuICAgICAgICAgICAgdW5sZXNzIHZhbHVlP1xuICAgICAgICAgICAgICB2YWx1ZSA9IFtdXG4gICAgICAgICAgICBlbHNlIHVubGVzcyBhbmd1bGFyLmlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXVxuICAgICAgICAgIGVsc2UgdmFsdWU/LnNwbGl0PyhzZXBlcmF0b3IpPy5maWx0ZXI/KChhKSAtPiAhIWEpIG9yIFtdXG4gICAgICAgICkpXG5cbiAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gLT5cbiAgICAgICAgdGFnW2tleVByb3BlcnR5IG9yIGRpc3BsYXlQcm9wZXJ0eV0gIGZvciB0YWcgaW4gZ2V0TW9kZWwoc2NvcGUpIG9yIFtdXG4gICAgICAsICh0YWdzKSAtPiBpZiB0YWdzPyBhbmQgc2V0VG8/XG4gICAgICAgIHNldFRvKHNjb3BlLCBpZiBzZXBlcmF0b3IgaXMgJ2FycmF5JyB0aGVuIHRhZ3MgZWxzZSB0YWdzLmpvaW4oc2VwZXJhdG9yKSlcblxuICAgICAgcmV0dXJuXG5dXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jaGFuZ2VUby5jb2ZmZWVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9