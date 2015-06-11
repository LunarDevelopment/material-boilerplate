'use strict';

/**
 * @ngdoc filter
 * @name materialBoilerplateApp.filter:nospace
 * @function
 * @description
 * # nospace
 * Filter in the materialBoilerplateApp.
 */
angular.module('materialBoilerplateApp')
    .filter('nospace', function () {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    });