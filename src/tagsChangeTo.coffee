'use strict'

module.exports = angular.module 'ngTagsInput.extends.tagsChangeTo', ['ngTagsInput']

.constant 'tagsChangeToConfig',
  seperator: '|'

.directive 'tagsChangeTo', [
  'tagsChangeToConfig', '$parse', 'uniqueFilter'
  (tagsChangeToConfig, $parse, uniqueFilter) ->
    restrict: 'AC'
    require: 'tagsInput'
    link: (scope, element, attrs) ->
      getModel = $parse(attrs.ngModel)
      setModel = getModel.assign
      getTo = $parse(attrs.tagsChangeTo)
      setTo = getTo.assign

      seperator = tagsChangeToConfig.seperator
      attrs.$observe 'tagsChangeToSeperator', (value) ->
        seperator = value or tagsChangeToConfig.seperator

      scope.$watch getTo, (value) ->
        tags = uniqueFilter(value?.split?(seperator)?.filter?((a) -> !!a)) or []
        setModel(scope, text: tag  for tag in tags)

      scope.$watchCollection ->
        tag.text  for tag in getModel(scope) or []
      , (tags) -> if tags? and setTo?
        setTo(scope, (tag  for tag in tags or []).join(seperator))

      undefined
]
