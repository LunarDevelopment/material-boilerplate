'use strict';

/**
 * @ngdoc filter
 * @name materialBoilerplateApp.filter:directiveBrackets
 * @function
 * @description
 * # directiveBrackets
 * Filter in the materialBoilerplateApp.
 */
angular.module('materialBoilerplateApp')
    .filter('directiveBrackets', function() {
        return function(str) {
            if (str.indexOf('-') > -1) {
                return '<' + str + '>';
            }
            return str;
        };
    });
