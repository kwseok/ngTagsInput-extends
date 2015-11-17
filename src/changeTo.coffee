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
      attrs.$observe 'tagsChangeToSeperator', (value) -> seperator = value or tagsChangeToConfig.seperator

      keyProperty = null
      attrs.$observe 'keyProperty', (value) -> keyProperty = value

      displayProperty = 'text'
      attrs.$observe 'displayProperty', (value) -> displayProperty = value or 'text'

      makeObject = (k, v) -> o = {}; o[k] = v; o

      scope.$watch getTo, (value) -> if setModel?
        setModel(scope, makeObject(keyProperty or displayProperty, tag)  for tag in uniqueFilter(
          if seperator is 'array' then $.makeArray(value)
          else value?.split?(seperator)?.filter?((a) -> !!a) or []
        ))

      scope.$watchCollection ->
        tag[keyProperty or displayProperty]  for tag in getModel(scope) or []
      , (tags) -> if tags? and setTo?
        setTo(scope, if seperator is 'array' then tags else tags.join(seperator))

      return
]
