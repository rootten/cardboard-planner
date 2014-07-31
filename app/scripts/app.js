'use strict';

angular
  .module('cardboardPlannerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id', {
        templateUrl: 'views/project.html',
        controller: 'Projecttrl'
      })    
      .otherwise({
        redirectTo: '/'
      });
  });
