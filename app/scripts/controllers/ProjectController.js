'use strict';

angular.module('cardboardPlannerApp')
  .controller('ProjectCtrl', ['$scope', '$stateParams', 'ProjectService', function ($scope, $stateParams, ProjectService) {
    $scope["ViewModel"] = this;
    this.resources = ProjectService.getProjectData($stateParams.id);

}]);
