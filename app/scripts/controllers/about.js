'use strict';

/**
 * @ngdoc function
 * @name materialBoilerplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the materialBoilerplateApp
 */
angular.module('materialBoilerplateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
