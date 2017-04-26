(function () {
    'use strict';
    angular.module('eatWell')
        .controller('ScheduleController', ['$scope', 'recipeService', 'scheduleService', function ($scope, recipeService, scheduleService) {

            $scope.schedule = scheduleService.getSchedule().query();

            $scope.breakf = "";

            $scope.recipes = recipeService.getRecipes().query();

            $scope.addBreakfastItem = function () {

                $scope.day.breakfast.push($scope.breakf);
                scheduleService.getSchedule().update({
                    id: $scope.day._id
                }, $scope.day);
                $scope.breakf = "";
            };

            $scope.lunchSelected = "";

            $scope.onLunchSelected() = function () {

                $scope.day.lunch.push($scope.lunchSelected);
                scheduleService.getSchedule().update({
                    id: $scope.day._id
                }, $scope.day);
                $scope.lunchSelected = "";
            };

            $scope.showAddItem = false;

        }]);
})();
