(function () {
    'use strict';
    angular.module('eatWell')
        .controller('AddRecipeController', ['$scope', 'recipeService', function ($scope, recipeService) {
            //var store = this;

            var baseURL = 'http://localhost:3000/';
            $scope.showRecipes = true;
            $scope.message = "Loading Recipes . . . ";

            $scope.recipes = recipeService.getRecipes().query();

            //$scope.recipes = [];
            /*recipeService.getRecipes()
                //$http.get(baseURL + 'recipes')
                .then(function (response) {
                    $scope.recipes = response.data;
                    $scope.showRecipes = true;
                }, function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                });*/
            //}, function () {
            //this.recipes = temprecipes;

            /*fetch('http://localhost:3000/recipes/')
                .then(function (response) {
                    $scope.recipes = response.json();
                    alert($scope.recipes[0].name);
                }).then(function (json) {
                    console.log('parsed json: ', json);
                }).catch(function (ex) {
                    console.log('parsing failed: ', ex);
                });*/
            /*$http.get('http://localhost:3000/recipes/')
                .success(function (data) {
                    this.recipes = = data;
                });*/

            /*$scope.recipeItem = 1;

            //$scope.recipeItem = parseInt($routeParams.id, 10);

            $scope.recipe = recipeService.getRecipes().get({
                id: $scope.recipeItem
            });*/

            $scope.recipe = {};

            /*recipeService.getRecipe($scope.recipeItem)
    .then(function (response) {
        $scope.recipe = response.data;
    }, function (response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
    });*/

            $scope.addRecipe = function () {

                //recipeService.getRecipes().save($scope.recipe);

                $scope.recipes.push($scope.recipe);
                recipeService.getRecipes().save($scope.recipe);
                /*$http.put(baseURL + 'recipes/' + $scope.recipes.length, $scope.recipe)
    .then(function (response) {
        alert('posted' + response.statusText);
    }, function (response) {
        alert('failed' + response.statusText)
    });*/

                $scope.recipe = {};
                $scope.recipe.instructions = [];
                $scope.recipe.ingredients = [];
            };

            $scope.recipe.instructions = [];

            $scope.instruction = '';

            $scope.addInstruction = function () {
                $scope.recipe.instructions.push($scope.instruction);
                $scope.instruction = '';
            };

            $scope.recipe.ingredients = [];

            $scope.ingredient = '';
            $scope.quantity = '';

            $scope.addIngredient = function () {

                var ing = {
                    ingredient: $scope.ingredient,
                    quantity: $scope.quantity
                };

                $scope.recipe.ingredients.push(ing);
                $scope.ingredient = '';
                $scope.quantity = '';
            };

        }]);
    /*var temprecipes = [{
    name: 'Stephan Curry',
    description: 'Stephen Currys curry',
    servingsize: '4',
    instructions: ['Add Stephen in the basket', 'Add curry in the basket'],
        [
        {
            slno: '1',
            instruction: 'Add Stephen in the basket'
                   }, {
            slno: '2',
            instruction: 'Add curry in the basket'
                   }
               ]
    ingredients: [
        {
            ingredient: 'Chicken',
            quantity: '2 lbs'

            }
        ]
    }];*/
})();
/*app.controller('StoreController', ['$http', function($http){
   var store = this;
   store.products = [];
   
   $http.get('/store-products.json').success(function(data){
     store.products = data;
   });
 }]);*/
/*app.controller('AddRecipeController',function () {
    this.recipe = {};
    
   this.addRecipe = function (recipes) {
        recipes.push(this.recipe);
    } 
   this.recipe = {};
});*/
