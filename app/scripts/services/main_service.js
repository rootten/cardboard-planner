'use strict';

angular.module('cardboardPlannerApp')
    .service('MainService', function ($http) {
        return {

            getProjects: function(){
                return $http.get('projects')
            }
        }

    });
