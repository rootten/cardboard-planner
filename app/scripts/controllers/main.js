'use strict';

angular.module('cardboardPlannerApp')
<<<<<<< HEAD
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
=======
  .controller('MainCtrl', function ($scope) {
    
  });
>>>>>>> 4beb29715aeab66b4592a3c76d11b4ddaf6b093c
