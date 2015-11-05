'use strict';

import 'ngTagsInput'
import './changeTo.coffee'
import './paste.coffee'

angular.module('ngTagsInput.extends', [
    'ngTagsInput.extends.changeTo',
    'ngTagsInput.extends.paste'
]);