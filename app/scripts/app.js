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
      }).when('/user/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserController'
      })
      .when('/project/:id', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })    
      .otherwise({
        redirectTo: '/'
      });
  });
