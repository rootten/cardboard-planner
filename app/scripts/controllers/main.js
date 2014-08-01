'use strict';

//var app = angular.module('cardboardPlannerApp')
//  .controller('MainCtrl', function ($scope) {
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });

angular.module('cardboardPlannerApp')
    .controller('MainCtrl', function ($scope, MainService) {
        debugger
         MainService.getProjects().success(function(projects){

             $scope.projects = projects;
         })
//        $scope.projects = [
//            {name: 'sci',
//                resources: [
//                    {userId: 'mmajewski',
//                        firstName: 'stanislaw',
//                        lastName: 'palimaka'
//                    },
//                    {userId: 'tliptak',
//                        firstName: 'stanislaw',
//                        lastName: 'palimaka'
//                    },
//                    {userId: 'aczerski',
//                        firstName: 'stanislaw',
//                        lastName: 'palimaka'
//                    }
//                ]
//            },
//            {name: 'sci',
//                resources: [
//                    {userId: 'jlesniak',
//                        firstName: 'stanislaw',
//                        lastName: 'palimaka'
//                    },
//                    {userId: 'tliptak',
//                        firstName: 'stanislaw',
//                        lastName: 'palimaka'
//                    },
//                    {userId: 'aczerski',
//                        firstName: 'stanislaw',
//                        lastName: 'palimaka'
//                    }
//                ]
//            }
//        ];
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
