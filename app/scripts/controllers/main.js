'use strict';

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
