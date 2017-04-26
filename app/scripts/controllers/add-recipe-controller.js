(function () {
        'use strict';
        angular.module('eatWell')
            .controller('AddRecipeController', ['$scope', 'recipeService', '$state', function ($scope, recipeService, $state) {
                    //var store = this;

                    //var baseURL = 'http://localhost:3000/';
                    $scope.showRecipes = true;
                    $scope.message = "Loading Recipes . . . ";

                    //List of All recipes
                    recipeService.getRecipes().query(
                        function (response) {
                            $scope.recipes = response;
                        },
                        function (response) {
                            $scope.message = "Error: " + response.status + " " + response.statusText;
                        });

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

                    //Building the new recipe object
                    $scope.recipe = {};

                    /*recipeService.getRecipe($scope.recipeItem)
    .then(function (response) {
        $scope.recipe = response.data;
    }, function (response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
    });*/

                    $scope.addRecipe = function () {
                        //Push this recipe object to the list of Recipes
                        $scope.recipes.push($scope.recipe);

                        //Save this recipe on the server
                        recipeService.getRecipes().save($scope.recipe,
                            function (response) {
                                console.log(response);
                                //var recipeId = response._id;
                                console.log(response._id);
                                $state.go('app.recipe', (id: response._id);
                                    },
                                    function (response) {
                                        $scope.message = "Error: " + response.status + " " + response.statusText;
                                    });

                            /*$http.put(baseURL + 'recipes/' + $scope.recipes.length, $scope.recipe)
    .then(function (response) {
        alert('posted' + response.statusText);
    }, function (response) {
        alert('failed' + response.statusText)
    });*/

                            //Clear out the form
                            $scope.recipe = {}; $scope.recipe.instructions = []; $scope.recipe.ingredients = [];
                        };

                        //The List of instructions and adding one at a time to the recipe
                        $scope.recipe.instructions = [];
                        $scope.instruction = '';
                        $scope.addInstruction = function () {
                            var inst = {
                                sequence: $scope.recipe.instructions.length + 1,
                                instruction: $scope.instruction
                            };
                            $scope.recipe.instructions.push(inst);
                            $scope.instruction = '';
                        };

                        //List of ingredientes and adding one at a time to the recipe
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
