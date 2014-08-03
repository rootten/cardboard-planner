'use strict';

angular
  .module('cardboardPlannerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('ProjectList', {
            url: "",
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('ProjectDetails', {
            url: "/project/:id",
            templateUrl: 'views/project.html',
            controller: 'ProjectCtrl'
        })
        .state('UserDetails', {
            url: "/user/:id",
            templateUrl: 'views/user.html',
            controller: 'UserController'
        });
});
