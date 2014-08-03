    'use strict';

    angular.module('cardboardPlannerApp')
    .service('ProjectService', function ($http) {
        return {

            getProjectData: function (code) {
                return $http.get('project/' + code);
            }
        }

    });
