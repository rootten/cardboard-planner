'use strict';

var app = angular.module('cardboardPlannerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  app.service('userService', function () {
      return {
          getUser: function (login) {
              return {
                  _id: 'tciesiolka',
                  email: 'tciesiolk@infusion.com',
                  title: 'Consultant',
                  firstName: 'Tomasz',
                  lastName: 'Ciesiołka',
                  techSkills: [
                    'C#',
                    'CRM'
                  ],
                  wantedSkills: [
                    'AngularJS',
                    'MongoDB'
                  ]
              };
          }
      };
  });

  app.controller('UserController', ['userService', '$routeParams', function (userService, $routeParams) {
      console.log($routeParams.id);
      this.userDetails = userService.getUser($routeParams.id);
  } ]);
