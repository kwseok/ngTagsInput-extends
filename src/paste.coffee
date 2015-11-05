'use strict'

angular.module 'ngTagsInput.extends.paste', ['ngTagsInput']

.constant 'tagsPasteConfig',
  delimiter: /[|/\n]/g

.directive 'tagsPaste', [
  'tagsPasteConfig', '$parse'
  (tagsPasteConfig, $parse) ->
    restrict: 'AC'
    require: 'tagsInput'
    link: (scope, element, attrs) ->
      delimiter = null
      attrs.$observe 'tagsPaste', (value) ->
        delimiter = value or tagsPasteConfig.delimiter
        delimiter = new RegExp(delimiter.toString(), 'g')  unless delimiter instanceof RegExp
        undefined

      getModel = $parse(attrs.ngModel)
      setModel = getModel.assign

      element.on 'paste', (e) ->
        e.preventDefault()
        e.stopPropagation()
        splitedValue = e.originalEvent.clipboardData.getData('text/plain')?.split?(delimiter).filter (a) -> !!a
        if splitedValue.length > 0
          tags = getModel(scope) or []
          for text in splitedValue
            tags.push(text: text)  unless tags.some (a) -> a.text is text
          scope.$evalAsync -> setModel(scope, tags)
        undefined

      undefined
]