'use strict';

/**
 * @ngdoc directive
 * @name materialBoilerplateApp.directive:menuLink
 * @description
 * # menuLink
 */
angular.module('materialBoilerplateApp')
    .directive('menuLink', function() {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'views/partials/menu-link.tmpl.html',
            link: function($scope, $element) {
                var controller = $element.parent().controller();

                $scope.isSelected = function() {
                    return controller.isSelected($scope.section);
                };

                $scope.focusSection = function() {
                    // set flag to be used later when
                    // $locationChangeSuccess calls openPage()
                    controller.autoFocusContent = true;
                };
            }
        };
    });