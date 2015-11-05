'use strict'

module.exports = angular.module 'ngTagsInput.extends.tagsChangeToArray', ['ngTagsInput']

.directive 'tagsChangeToArray', [
  '$parse', 'uniqueFilter'
  ($parse, uniqueFilter) ->
    restrict: 'AC'
    require: 'tagsInput'
    link: (scope, element, attrs) ->
      getModel = $parse(attrs.ngModel)
      setModel = getModel.assign
      getTo = $parse(attrs.tagsChangeToArray)
      setTo = getTo.assign

      scope.$watch getTo, (value) ->
        setModel(scope, text: tag  for tag in uniqueFilter($.makeArray(value)))

      scope.$watchCollection ->
        tag.text  for tag in getModel(scope) or []
      , (tags) -> if tags? and setTo?
        setTo(scope, tag  for tag in tags or [])

      undefined
]