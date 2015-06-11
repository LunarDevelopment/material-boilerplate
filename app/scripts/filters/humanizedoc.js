'use strict';

/**
 * @ngdoc filter
 * @name materialBoilerplateApp.filter:humanizeDoc
 * @function
 * @description
 * # humanizeDoc
 * Filter in the materialBoilerplateApp.
 */
angular.module('materialBoilerplateApp')
    .filter('humanizeDoc', function() {
        return function(doc) {
            if (!doc) return;
            if (doc.type === 'directive') {
                return doc.name.replace(/([A-Z])/g, function($1) {
                    return '-'+$1.toLowerCase();
                });
            }
            return doc.label || doc.name;
        };
    });