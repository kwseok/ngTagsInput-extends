# Tags input extension directives for AngularJS [![Build Status](https://travis-ci.org/stonexx/ngTagsInput-extends.svg?branch=master)](https://travis-ci.org/stonexx/ngTagsInput-extends)

## Example use [Plunker](http://embed.plnkr.co/D6wWdZUHG4nXhm5O7ZOW/)

```html
<!doctype html>
<html lang="ko" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>TEST</title>

    <link rel="stylesheet" href="//mbenford.github.io/ngTagsInput/css/ng-tags-input.min.css" />
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/webjars/org.webjars.npm/ng-tags-input/3.0.0/build/ng-tags-input.js"></script>
    <script type="text/javascript" src="//cdn.rawgit.com/stonexx/ngTagsInput-extends/master/dist/ng-tags-input-extends.js"></script>
</head>
<body ng-controller="MainCtrl">
<tags-input ng-model="tags" tags-change-to="myTags"></tags-input>
<p>Model: {{tags}}</p>
<p>ChangeTo: {{myTags}}</p>

<script type="text/javascript">
    angular.module('app', ['ng', 'ngTagsInput', 'ngTagsInput.extends'])
        .controller('MainCtrl', function($scope) {
            $scope.tags = [
                {text: 'Tag1'},
                {text: 'Tag2'},
                {text: 'Tag3'}
            ];
            $scope.myTags = null;
        });
</script>
</body>
</html>
```
