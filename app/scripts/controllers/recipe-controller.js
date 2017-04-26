(function () {
    'use strict';
    angular.module('eatWell')
        .controller('RecipeController', ['$scope', '$stateParams', 'recipeService', function ($scope, $stateParams, recipeService) {

            $scope.showRecipes = true;
            $scope.message = "Loading Recipes . . . ";

            recipeService.getRecipes().query(
                function (response) {
                    $scope.recipes = response;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                });

            $scope.recipe = recipeService.getRecipes().get({
                id: $stateParams.id
            });

            $scope.editRecipe = false;

            $scope.enableEditRecipe = function () {
                $scope.editRecipe = true;
            };

            $scope.updateRecipe = function () {
                recipeService.getRecipes().update({
                    id: $scope.recipe.id
                }, $scope.recipe);
                $scope.editRecipe = false;
            };

            $scope.cancelEdit = function () {
                $scope.editRecipe = false;
            }

        }]);
})();
