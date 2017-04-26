(function () {
    'use strict';

    angular.module('eatWell')
        .constant("baseURL", "http://localhost:3000/")
        .service('recipeService', ['$resource', 'baseURL', function ($resource, baseURL) {

            //Get all the recipes
            this.getRecipes = function () {
                //return $http.get(baseURL + 'recipes');

                return $resource(baseURL + "recipes/:id", null, {
                    update: {
                        method: 'PUT'
                    }
                });
            };
        }]);
})();
