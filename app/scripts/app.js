'use strict';

/**
 * @ngdoc overview
 * @name swapicoFrontendApp
 * @description
 * # swapicoFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('swapicoFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
