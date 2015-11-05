'use strict'

angular.module 'ngTagsInput.extends.changeTo', ['ngTagsInput']

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
        return

      scope.$watch getTo, (value) -> if setModel?
        setModel(scope, text: tag  for tag in uniqueFilter(
          if seperator is 'array'
            $.makeArray(value)
          else
            value?.split?(seperator)?.filter?((a) -> !!a) or []
        ))
        return

      scope.$watchCollection ->
        tag.text  for tag in getModel(scope) or []
      , (tags) -> if tags? and setTo?
        setTo(scope, if seperator is 'array' then tags else tags.join(seperator))
        return
      return
]
