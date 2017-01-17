(function () {
    'use strict';
    angular.module('eatWell')
        .controller('RecipeController', ['$scope', '$stateParams', 'recipeService', function ($scope, $stateParams, recipeService) {
            $scope.recipeItem = 1;

            $scope.recipeItem = parseInt($stateParams.id, 10);

            $scope.recipe = recipeService.getRecipes().get({
                id: $scope.recipeItem
            });

            /*$scope.recipe = {};

recipeService.getRecipe($scope.recipeItem)
    .then(function (response) {
        $scope.recipe = response.data;
    }, function (response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
    });*/
        }]);
})();
