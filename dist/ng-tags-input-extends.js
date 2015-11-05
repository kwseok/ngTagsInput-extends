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
	          return void 0;
	        });
	        scope.$watch(getTo, function(value) {
	          var ref, tag, tags;
	          if (setModel != null) {
	            tags = seperator === 'array' ? $.makeArray(value) : (value != null ? typeof value.split === "function" ? (ref = value.split(seperator)) != null ? typeof ref.filter === "function" ? ref.filter(function(a) {
	              return !!a;
	            }) : void 0 : void 0 : void 0 : void 0) || [];
	            setModel(scope, (function() {
	              var i, len, ref1, results;
	              ref1 = uniqueFilter(tags);
	              results = [];
	              for (i = 0, len = ref1.length; i < len; i++) {
	                tag = ref1[i];
	                results.push({
	                  text: tag
	                });
	              }
	              return results;
	            })());
	            return void 0;
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
	            return void 0;
	          }
	        });
	        return void 0;
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
	          return void 0;
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
	          return void 0;
	        });
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMzI1OTZiNDM1Y2VhMDM4ODQwMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOmZhbHNlLFwiY29tbW9uanNcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImNvbW1vbmpzMlwiOlwibmctdGFncy1pbnB1dFwiLFwiYW1kXCI6XCJuZy10YWdzLWlucHV0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9jaGFuZ2VUby5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bhc3RlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7cUJBRU4s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LEtBQWpCO0FBQ0o7U0FBQSxZQUFZO1NBQ1osS0FBSyxDQUFDLFFBQU4sQ0FBZSxXQUFmLEVBQTRCLFNBQUMsS0FBRDtXQUMxQixZQUFZLFNBQVMsZUFBZSxDQUFDO1dBQ3JDLE1BQTBELHFCQUFxQixNQUEvRTthQUFBLFlBQWdCLFdBQU8sU0FBUyxDQUFDLFFBQVYsRUFBUCxFQUE2QixHQUE3QixFQUFoQjs7a0JBQ0E7U0FIMEIsQ0FBNUI7U0FLQSxXQUFXLE9BQU8sS0FBSyxDQUFDLE9BQWI7U0FDWCxXQUFXLFFBQVEsQ0FBQztTQUVwQixPQUFPLENBQUMsRUFBUixDQUFXLE9BQVgsRUFBb0IsU0FBQyxDQUFEO0FBQ2xCO1dBQUEsQ0FBQyxDQUFDLGNBQUY7V0FDQSxDQUFDLENBQUMsZUFBRjtXQUNBLDBIQUFrRSxDQUFFLE1BQU8sVUFBVSxDQUFDLE1BQXZFLENBQThFLFNBQUMsQ0FBRDtvQkFBTyxDQUFDLENBQUM7V0FBVCxDQUE5RTtXQUNmLElBQUcsWUFBWSxDQUFDLE1BQWIsR0FBc0IsQ0FBekI7YUFDRSxPQUFPLFNBQVMsS0FBVCxLQUFtQjtBQUMxQjs7ZUFDRSxLQUE4QixJQUFJLENBQUMsSUFBTCxDQUFVLFNBQUMsQ0FBRDt3QkFBTyxDQUFDLENBQUMsSUFBRixLQUFVO2VBQWpCLENBQVYsQ0FBOUI7aUJBQUEsSUFBSSxDQUFDLElBQUwsQ0FBVTttQkFBQSxNQUFNLElBQU47a0JBQVY7O0FBREY7YUFFQSxLQUFLLENBQUMsVUFBTixDQUFpQjtzQkFBRyxTQUFTLEtBQVQsRUFBZ0IsSUFBaEI7YUFBSCxDQUFqQixFQUpGOztrQkFLQTtTQVRrQixDQUFwQjtnQkFXQTtPQXJCSSxDQUZOOztHQURGLENBRnNCO0VBTHhCIiwiZmlsZSI6Im5nLXRhZ3MtaW5wdXQtZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIiksIHJlcXVpcmUoXCJuZy10YWdzLWlucHV0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiLCBcImFuZ3VsYXJcIiwgXCJuZy10YWdzLWlucHV0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwibmctdGFncy1pbnB1dFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJhbmd1bGFyXCJdLCByb290W2ZhbHNlXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjMzI1OTZiNDM1Y2VhMDM4ODQwM1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICduZ1RhZ3NJbnB1dCdcbmltcG9ydCAnLi9jaGFuZ2VUby5jb2ZmZWUnXG5pbXBvcnQgJy4vcGFzdGUuY29mZmVlJ1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdUYWdzSW5wdXQuZXh0ZW5kcycsIFtcbiAgICAnbmdUYWdzSW5wdXQuZXh0ZW5kcy5jaGFuZ2VUbycsXG4gICAgJ25nVGFnc0lucHV0LmV4dGVuZHMucGFzdGUnXG5dKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgQW5ndWxhckpTXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2FuZ3VsYXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5LmV4dGVuZHMgcmVxdWlyZXMgYSBqUXVlcnlcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvanF1ZXJ5LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpmYWxzZSxcImNvbW1vbmpzXCI6XCJuZy10YWdzLWlucHV0XCIsXCJjb21tb25qczJcIjpcIm5nLXRhZ3MtaW5wdXRcIixcImFtZFwiOlwibmctdGFncy1pbnB1dFwifVxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdUYWdzSW5wdXQuZXh0ZW5kcy5jaGFuZ2VUbycsIFsnbmdUYWdzSW5wdXQnXVxuXG4uY29uc3RhbnQgJ3RhZ3NDaGFuZ2VUb0NvbmZpZycsXG4gIHNlcGVyYXRvcjogJ3wnXG5cbi5kaXJlY3RpdmUgJ3RhZ3NDaGFuZ2VUbycsIFtcbiAgJ3RhZ3NDaGFuZ2VUb0NvbmZpZycsICckcGFyc2UnLCAndW5pcXVlRmlsdGVyJ1xuICAodGFnc0NoYW5nZVRvQ29uZmlnLCAkcGFyc2UsIHVuaXF1ZUZpbHRlcikgLT5cbiAgICByZXN0cmljdDogJ0FDJ1xuICAgIHJlcXVpcmU6ICd0YWdzSW5wdXQnXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIGdldE1vZGVsID0gJHBhcnNlKGF0dHJzLm5nTW9kZWwpXG4gICAgICBzZXRNb2RlbCA9IGdldE1vZGVsLmFzc2lnblxuICAgICAgZ2V0VG8gPSAkcGFyc2UoYXR0cnMudGFnc0NoYW5nZVRvKVxuICAgICAgc2V0VG8gPSBnZXRUby5hc3NpZ25cblxuICAgICAgc2VwZXJhdG9yID0gdGFnc0NoYW5nZVRvQ29uZmlnLnNlcGVyYXRvclxuICAgICAgYXR0cnMuJG9ic2VydmUgJ3RhZ3NDaGFuZ2VUb1NlcGVyYXRvcicsICh2YWx1ZSkgLT5cbiAgICAgICAgc2VwZXJhdG9yID0gdmFsdWUgb3IgdGFnc0NoYW5nZVRvQ29uZmlnLnNlcGVyYXRvclxuICAgICAgICB1bmRlZmluZWRcblxuICAgICAgc2NvcGUuJHdhdGNoIGdldFRvLCAodmFsdWUpIC0+IGlmIHNldE1vZGVsP1xuICAgICAgICB0YWdzID0gaWYgc2VwZXJhdG9yIGlzICdhcnJheSdcbiAgICAgICAgICAkLm1ha2VBcnJheSh2YWx1ZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHZhbHVlPy5zcGxpdD8oc2VwZXJhdG9yKT8uZmlsdGVyPygoYSkgLT4gISFhKSBvciBbXVxuICAgICAgICBzZXRNb2RlbChzY29wZSwgdGV4dDogdGFnICBmb3IgdGFnIGluIHVuaXF1ZUZpbHRlcih0YWdzKSlcbiAgICAgICAgdW5kZWZpbmVkXG5cbiAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gLT5cbiAgICAgICAgdGFnLnRleHQgIGZvciB0YWcgaW4gZ2V0TW9kZWwoc2NvcGUpIG9yIFtdXG4gICAgICAsICh0YWdzKSAtPiBpZiB0YWdzPyBhbmQgc2V0VG8/XG4gICAgICAgIHNldFRvKHNjb3BlLCBpZiBzZXBlcmF0b3IgaXMgJ2FycmF5JyB0aGVuIHRhZ3MgZWxzZSB0YWdzLmpvaW4oc2VwZXJhdG9yKSlcbiAgICAgICAgdW5kZWZpbmVkXG5cbiAgICAgIHVuZGVmaW5lZFxuXVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2hhbmdlVG8uY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ1RhZ3NJbnB1dC5leHRlbmRzLnBhc3RlJywgWyduZ1RhZ3NJbnB1dCddXG5cbi5jb25zdGFudCAndGFnc1Bhc3RlQ29uZmlnJyxcbiAgZGVsaW1pdGVyOiAvW3wvXFxuXS9nXG5cbi5kaXJlY3RpdmUgJ3RhZ3NQYXN0ZScsIFtcbiAgJ3RhZ3NQYXN0ZUNvbmZpZycsICckcGFyc2UnXG4gICh0YWdzUGFzdGVDb25maWcsICRwYXJzZSkgLT5cbiAgICByZXN0cmljdDogJ0FDJ1xuICAgIHJlcXVpcmU6ICd0YWdzSW5wdXQnXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIGRlbGltaXRlciA9IG51bGxcbiAgICAgIGF0dHJzLiRvYnNlcnZlICd0YWdzUGFzdGUnLCAodmFsdWUpIC0+XG4gICAgICAgIGRlbGltaXRlciA9IHZhbHVlIG9yIHRhZ3NQYXN0ZUNvbmZpZy5kZWxpbWl0ZXJcbiAgICAgICAgZGVsaW1pdGVyID0gbmV3IFJlZ0V4cChkZWxpbWl0ZXIudG9TdHJpbmcoKSwgJ2cnKSAgdW5sZXNzIGRlbGltaXRlciBpbnN0YW5jZW9mIFJlZ0V4cFxuICAgICAgICB1bmRlZmluZWRcblxuICAgICAgZ2V0TW9kZWwgPSAkcGFyc2UoYXR0cnMubmdNb2RlbClcbiAgICAgIHNldE1vZGVsID0gZ2V0TW9kZWwuYXNzaWduXG5cbiAgICAgIGVsZW1lbnQub24gJ3Bhc3RlJywgKGUpIC0+XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHNwbGl0ZWRWYWx1ZSA9IGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKT8uc3BsaXQ/KGRlbGltaXRlcikuZmlsdGVyIChhKSAtPiAhIWFcbiAgICAgICAgaWYgc3BsaXRlZFZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgICB0YWdzID0gZ2V0TW9kZWwoc2NvcGUpIG9yIFtdXG4gICAgICAgICAgZm9yIHRleHQgaW4gc3BsaXRlZFZhbHVlXG4gICAgICAgICAgICB0YWdzLnB1c2godGV4dDogdGV4dCkgIHVubGVzcyB0YWdzLnNvbWUgKGEpIC0+IGEudGV4dCBpcyB0ZXh0XG4gICAgICAgICAgc2NvcGUuJGV2YWxBc3luYyAtPiBzZXRNb2RlbChzY29wZSwgdGFncylcbiAgICAgICAgdW5kZWZpbmVkXG5cbiAgICAgIHVuZGVmaW5lZFxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Bhc3RlLmNvZmZlZVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=