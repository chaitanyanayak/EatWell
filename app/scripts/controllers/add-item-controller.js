(function () {
    'use strict';
    angular.module('eatWell')
        .controller('AddItemController', ['$scope', 'recipeService', 'scheduleService', function ($scope, recipeService, scheduleService) {
            $scope.breakfast = "";

            $scope.recipes = recipeService.getRecipes().query();

            $scope.addBreakfastItem = function () {

                var recipe = {
                    id: $scope.breakfast
                };

                $scope.day.breakfast.push(recipe);
                console.log(JSON.stringify($scope.day));
                scheduleService.getSchedule().update({
                    id: $scope.day.id
                }, $scope.day);
                $scope.breakfast = "";
            };
        }]);
})();
