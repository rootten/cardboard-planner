'use strict';

angular.module('cardboardPlannerApp')
    .service('MainService', function ($http) {
        return {

            getProjects: function () {
                return $http.get('projects')
            }
        }

    }).service('UserService', function ($http) {
        return {
            getUser: function (login) {
                return $http.get('user/' + login);
            }
        }
    });
