'use strict';

angular.module('cardboardPlannerApp')
    .service('UserService', function ($http) {
    return {
        getUser: function (login) {
            return $http.get('user/' + login);
        }
    }
});
