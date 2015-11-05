'use strict';

import 'ngTagsInput'
import './tagsChangeTo.coffee'
import './tagsChangeToArray.coffee'

angular.module('ngTagsInput.extends', [
    'ngTagsInput.extends.tagsChangeTo',
    'ngTagsInput.extends.tagsChangeToArray'
]);