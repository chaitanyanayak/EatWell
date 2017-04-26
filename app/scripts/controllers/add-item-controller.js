(function () {
    'use strict';
    angular.module('eatWell')
        .controller('AddItemController', ['$scope', 'recipeService', 'scheduleService', function ($scope, recipeService, scheduleService) {
            $scope.breakf = "";

            $scope.recipes = recipeService.getRecipes().query();

            $scope.addBreakfastItem = function () {

                $scope.day.breakfast.push($scope.breakf);
                scheduleService.getSchedule().update({
                    id: $scope.day._id
                }, $scope.day);
                $scope.breakf = "";
            };
        }]);
})();