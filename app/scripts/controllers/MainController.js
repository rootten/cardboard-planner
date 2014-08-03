'use strict';

var app = angular.module('cardboardPlannerApp');
app.controller('MainCtrl', function ($scope, MainService) {
    MainService.getProjects().success(function (projects) {
        
        $scope.projects = projects;
    })
});

