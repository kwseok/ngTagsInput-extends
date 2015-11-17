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
	    throw new Error("ngTagsInput.extends requires a AngularJS");
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
	    throw new Error("ngTagsInput.extends requires a jQuery");
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
	        var displayProperty, getModel, getTo, keyProperty, makeObject, seperator, setModel, setTo;
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
	        scope.$watch(getTo, function(value) {
	          var tag;
	          if (setModel != null) {
	            return setModel(scope, (function() {
	              var i, len, ref, ref1, results;
	              ref1 = uniqueFilter(seperator === 'array' ? $.makeArray(value) : (value != null ? typeof value.split === "function" ? (ref = value.split(seperator)) != null ? typeof ref.filter === "function" ? ref.filter(function(a) {
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNmNkMGJlYjg1NzMzYmNkZmU0YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOmZhbHNlLFwiY29tbW9uanNcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImNvbW1vbmpzMlwiOlwibmctdGFncy1pbnB1dFwiLFwiYW1kXCI6XCJuZy10YWdzLWlucHV0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9jaGFuZ2VUby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLDREQUFZLENBQUM7O3FCQUVOLENBQWE7O3FCQUNiLENBQW1COztBQUUxQixRQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQ2xDLDhCQUE4QixDQUNqQyxDQUFDLEM7Ozs7Ozs7QUNQRixzREFBWSxDQUFDOzs7O29DQUVPLENBQVM7Ozs7QUFFN0IsS0FBSSxDQUFDLENBQUMsRUFBRTtBQUNKLFdBQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztFQUMvRDs7QUFFRCxPQUFNLENBQUMsT0FBTyx1QkFBVSxDOzs7Ozs7O0FDUnhCLGFBQVksQ0FBQzs7OzttQ0FFQyxDQUFROzs7O0FBRXRCLEtBQUksb0JBQUUsRUFBRTtBQUNKLFdBQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztFQUM1RDs7QUFFRCxPQUFNLENBQUMsT0FBTyxzQkFBSSxDOzs7Ozs7QUNSbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7O0FDUkEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFFQSxRQUFPLENBQUMsTUFBUixDQUFlLDhCQUFmLEVBQStDLENBQUMsYUFBRCxDQUEvQyxDQUVBLENBQUMsUUFGRCxDQUVVLG9CQUZWLEVBR0U7R0FBQSxXQUFXLEdBQVg7RUFIRixDQUtBLENBQUMsU0FMRCxDQUtXLGNBTFgsRUFLMkI7R0FDekIsb0JBRHlCLEVBQ0gsUUFERyxFQUNPLGNBRFAsRUFFekIsU0FBQyxrQkFBRCxFQUFxQixNQUFyQixFQUE2QixZQUE3QjtZQUNFO09BQUEsVUFBVSxJQUFWO09BQ0EsU0FBUyxXQURUO09BRUEsTUFBTSxTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCO0FBQ0o7U0FBQSxXQUFXLE9BQU8sS0FBSyxDQUFDLE9BQWI7U0FDWCxXQUFXLFFBQVEsQ0FBQztTQUNwQixRQUFRLE9BQU8sS0FBSyxDQUFDLFlBQWI7U0FDUixRQUFRLEtBQUssQ0FBQztTQUVkLFlBQVksa0JBQWtCLENBQUM7U0FDL0IsS0FBSyxDQUFDLFFBQU4sQ0FBZSx1QkFBZixFQUF3QyxTQUFDLEtBQUQ7a0JBQVcsWUFBWSxTQUFTLGtCQUFrQixDQUFDO1NBQW5ELENBQXhDO1NBRUEsY0FBYztTQUNkLEtBQUssQ0FBQyxRQUFOLENBQWUsYUFBZixFQUE4QixTQUFDLEtBQUQ7a0JBQVcsY0FBYztTQUF6QixDQUE5QjtTQUVBLGtCQUFrQjtTQUNsQixLQUFLLENBQUMsUUFBTixDQUFlLGlCQUFmLEVBQWtDLFNBQUMsS0FBRDtrQkFBVyxrQkFBa0IsU0FBUztTQUF0QyxDQUFsQztTQUVBLGFBQWEsU0FBQyxDQUFELEVBQUksQ0FBSjtBQUFVO1dBQUEsSUFBSTtXQUFJLENBQUUsR0FBRixHQUFPO2tCQUFHO1NBQTVCO1NBRWIsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLFNBQUMsS0FBRDtBQUFXO1dBQUEsSUFBRyxnQkFBSDtvQkFDN0IsU0FBUyxLQUFUOztBQUFnQjs7O0FBQUE7b0JBQUE7OzhCQUFBLFdBQVcsZUFBZSxlQUExQixFQUEyQyxHQUEzQztBQUFBOztpQkFBaEIsRUFENkI7O1NBQVgsQ0FBcEI7U0FNQSxLQUFLLENBQUMsZ0JBQU4sQ0FBdUI7QUFDckI7QUFBQTtBQUFBO2dCQUFBOzswQkFBQSxHQUFJLGdCQUFlLGVBQWY7QUFBSjs7U0FEcUIsQ0FBdkIsRUFFRSxTQUFDLElBQUQ7V0FBVSxJQUFHLGtCQUFVLGVBQWI7b0JBQ1YsTUFBTSxLQUFOLEVBQWdCLGNBQWEsT0FBaEIsR0FBNkIsSUFBN0IsR0FBdUMsSUFBSSxDQUFDLElBQUwsQ0FBVSxTQUFWLENBQXBELEVBRFU7O1NBQVYsQ0FGRjtPQXZCSSxDQUZOOztHQURGLENBRnlCO0VBTDNCIiwiZmlsZSI6Im5nLXRhZ3MtaW5wdXQtZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIiksIHJlcXVpcmUoXCJuZy10YWdzLWlucHV0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiLCBcImFuZ3VsYXJcIiwgXCJuZy10YWdzLWlucHV0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwibmctdGFncy1pbnB1dFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJhbmd1bGFyXCJdLCByb290W2ZhbHNlXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkNmNkMGJlYjg1NzMzYmNkZmU0YlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICduZ1RhZ3NJbnB1dCdcbmltcG9ydCAnLi9jaGFuZ2VUby5jb2ZmZWUnXG5cbmFuZ3VsYXIubW9kdWxlKCduZ1RhZ3NJbnB1dC5leHRlbmRzJywgW1xuICAgICduZ1RhZ3NJbnB1dC5leHRlbmRzLmNoYW5nZVRvJ1xuXSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm5nVGFnc0lucHV0LmV4dGVuZHMgcmVxdWlyZXMgYSBBbmd1bGFySlNcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvYW5ndWxhci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5pZiAoISQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJuZ1RhZ3NJbnB1dC5leHRlbmRzIHJlcXVpcmVzIGEgalF1ZXJ5XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2pxdWVyeS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6ZmFsc2UsXCJjb21tb25qc1wiOlwibmctdGFncy1pbnB1dFwiLFwiY29tbW9uanMyXCI6XCJuZy10YWdzLWlucHV0XCIsXCJhbWRcIjpcIm5nLXRhZ3MtaW5wdXRcIn1cbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nVGFnc0lucHV0LmV4dGVuZHMuY2hhbmdlVG8nLCBbJ25nVGFnc0lucHV0J11cblxuLmNvbnN0YW50ICd0YWdzQ2hhbmdlVG9Db25maWcnLFxuICBzZXBlcmF0b3I6ICd8J1xuXG4uZGlyZWN0aXZlICd0YWdzQ2hhbmdlVG8nLCBbXG4gICd0YWdzQ2hhbmdlVG9Db25maWcnLCAnJHBhcnNlJywgJ3VuaXF1ZUZpbHRlcidcbiAgKHRhZ3NDaGFuZ2VUb0NvbmZpZywgJHBhcnNlLCB1bmlxdWVGaWx0ZXIpIC0+XG4gICAgcmVzdHJpY3Q6ICdBQydcbiAgICByZXF1aXJlOiAndGFnc0lucHV0J1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBnZXRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKVxuICAgICAgc2V0TW9kZWwgPSBnZXRNb2RlbC5hc3NpZ25cbiAgICAgIGdldFRvID0gJHBhcnNlKGF0dHJzLnRhZ3NDaGFuZ2VUbylcbiAgICAgIHNldFRvID0gZ2V0VG8uYXNzaWduXG5cbiAgICAgIHNlcGVyYXRvciA9IHRhZ3NDaGFuZ2VUb0NvbmZpZy5zZXBlcmF0b3JcbiAgICAgIGF0dHJzLiRvYnNlcnZlICd0YWdzQ2hhbmdlVG9TZXBlcmF0b3InLCAodmFsdWUpIC0+IHNlcGVyYXRvciA9IHZhbHVlIG9yIHRhZ3NDaGFuZ2VUb0NvbmZpZy5zZXBlcmF0b3JcblxuICAgICAga2V5UHJvcGVydHkgPSBudWxsXG4gICAgICBhdHRycy4kb2JzZXJ2ZSAna2V5UHJvcGVydHknLCAodmFsdWUpIC0+IGtleVByb3BlcnR5ID0gdmFsdWVcblxuICAgICAgZGlzcGxheVByb3BlcnR5ID0gJ3RleHQnXG4gICAgICBhdHRycy4kb2JzZXJ2ZSAnZGlzcGxheVByb3BlcnR5JywgKHZhbHVlKSAtPiBkaXNwbGF5UHJvcGVydHkgPSB2YWx1ZSBvciAndGV4dCdcblxuICAgICAgbWFrZU9iamVjdCA9IChrLCB2KSAtPiBvID0ge307IG9ba10gPSB2OyBvXG5cbiAgICAgIHNjb3BlLiR3YXRjaCBnZXRUbywgKHZhbHVlKSAtPiBpZiBzZXRNb2RlbD9cbiAgICAgICAgc2V0TW9kZWwoc2NvcGUsIG1ha2VPYmplY3Qoa2V5UHJvcGVydHkgb3IgZGlzcGxheVByb3BlcnR5LCB0YWcpICBmb3IgdGFnIGluIHVuaXF1ZUZpbHRlcihcbiAgICAgICAgICBpZiBzZXBlcmF0b3IgaXMgJ2FycmF5JyB0aGVuICQubWFrZUFycmF5KHZhbHVlKVxuICAgICAgICAgIGVsc2UgdmFsdWU/LnNwbGl0PyhzZXBlcmF0b3IpPy5maWx0ZXI/KChhKSAtPiAhIWEpIG9yIFtdXG4gICAgICAgICkpXG5cbiAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gLT5cbiAgICAgICAgdGFnW2tleVByb3BlcnR5IG9yIGRpc3BsYXlQcm9wZXJ0eV0gIGZvciB0YWcgaW4gZ2V0TW9kZWwoc2NvcGUpIG9yIFtdXG4gICAgICAsICh0YWdzKSAtPiBpZiB0YWdzPyBhbmQgc2V0VG8/XG4gICAgICAgIHNldFRvKHNjb3BlLCBpZiBzZXBlcmF0b3IgaXMgJ2FycmF5JyB0aGVuIHRhZ3MgZWxzZSB0YWdzLmpvaW4oc2VwZXJhdG9yKSlcblxuICAgICAgcmV0dXJuXG5dXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jaGFuZ2VUby5jb2ZmZWVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9