'use strict';

var app = angular.module('cardboardPlannerApp');

app.controller('UserController', ['UserService', '$stateParams', function (UserService, $stateParams) {
    var controller = this;
    UserService.getUser($stateParams.id).success(function (user) {
        controller.userDetails = user;
    });
} ]);