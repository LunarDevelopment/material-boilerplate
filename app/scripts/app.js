'use strict';

/**
 * @ngdoc overview
 * @name materialBoilerplateApp
 * @description
 * # materialBoilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('materialBoilerplateApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMdIcons',
    'angular-loading-bar',
    'ng-breadcrumbs',
    'ngTouch'
  ])
    .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $mdThemingProvider
        .theme('default') 
        .primaryPalette('purple', {
        'default': 'A700',
        'hue-1': '50'
    })
        .accentPalette('orange')
        .warnPalette('red', {
            'default': 'A700',
            'hue-1': '50'
        })
        .backgroundPalette('grey', {
            'default': '200',
            'hue-1': '50'
        });
  });
