'use strict';

angular.module('cardboardPlannerApp')
  .controller('ProjectCtrl', ['$scope','$routeParams', 'projectService'] , function ($scope, $routeParams, projectService) {
    $scope["ViewModel"] = this;
    this.resources = projectService.GetProjectData($routeParams.id);

});
