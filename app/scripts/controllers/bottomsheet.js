'use strict';

/**
 * @ngdoc function
 * @name materialBoilerplateApp.controller:BottomsheetCtrl
 * @description
 * # BottomsheetCtrl
 * Controller of the materialBoilerplateApp
 */
angular.module('materialBoilerplateApp')
    .controller('BottomsheetCtrl', function ($scope, $mdBottomSheet) {
    $scope.items = [
        { name: 'Hangout', icon: 'format_quote', fill: 'red', size: '40' },
        { name: 'Mail', icon: 'email', fill: 'red', size: '40' },
        { name: 'Message', icon: 'message', fill: 'red', size: '40' },
        { name: 'Copy', icon: 'content_copy', fill: 'red', size: '40' },
        { name: 'Facebook', icon: 'facebook', fill: 'red', size: '40' },
        { name: 'Twitter', icon: 'twitter', fill: 'red', size: '40' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
  });
