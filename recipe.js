(function () {
    var app = angular.module('recipe', []);

    /*app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    
    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
  }]);*/

    app.controller('RecipeController', ['$scope', '$http', function ($scope, $http) {
        //var store = this;
        $scope.recipes = [];

        /*$http.get('http://localhost:3000/recipes')
            .then(function (response) {
                alert(response);
                alert(response.data);
                alert(response.json());
                this.recipes = response.json();
            });*/
        //}, function () {
        //this.recipes = temprecipes;

        fetch('http://localhost:3000/recipes/')
            .then(function (response) {
                $scope.recipes = response.json();
                alert($scope.recipes[0].name);
            }).then(function (json) {
                console.log('parsed json: ', json);
            }).catch(function (ex) {
                console.log('parsing failed: ', ex);
            });
        /*$http.get('http://localhost:3000/recipes/')
            .success(function (data) {
                this.recipes = = data;
            });*/
        $scope.recipe = {};

        $scope.addRecipe = function () {
            $scope.recipes.push($scope.recipe);
            $scope.recipe = {};
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

    /*app.controller('AddRecipeController',function () {
        this.recipe = {};
        
       this.addRecipe = function (recipes) {
            recipes.push(this.recipe);
        } 
       this.recipe = {};
    });*/


    var temprecipes = [{
        name: 'Stephan Curry',
        description: 'Stephen Currys curry',
        servingsize: '4',
        instructions: ['Add Stephen in the basket', 'Add curry in the basket'],
        /*[
                   {
                       slno: '1',
                       instruction: 'Add Stephen in the basket'
                   }, {
                       slno: '2',
                       instruction: 'Add curry in the basket'
                   }
               ]*/
        ingredients: [
            {
                ingredient: 'Chicken',
                quantity: '2 lbs'

            }
        ]
    }];
})();
