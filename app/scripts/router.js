(function () {
    'use strict';
    angular.module('eatWell')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'views/header.html'
                        },
                        'content': {
                            templateUrl: 'views/Calendar.html',
                            controller: 'ScheduleController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }
                })
                // route for the aboutus page
                .state('app.aboutus', {
                    url: 'aboutus',
                    views: {
                        'content@': {
                            templateUrl: 'views/aboutus.html'
                        }
                    }
                })

            // route for the menu page
            .state('app.addrecipe', {
                url: 'addrecipe',
                views: {
                    'content@': {
                        templateUrl: 'views/addrecipe.html',
                        controller: 'AddRecipeController'
                    }
                }
            })

            // route for the menu page
            .state('app.recipelist', {
                url: 'recipelist',
                views: {
                    'content@': {
                        templateUrl: 'views/recipelist.html',
                        controller: 'RecipeController'
                    }
                }
            })

            // route for the menu page
            .state('app.recipeTiles', {
                url: 'recipelist',
                views: {
                    'content@': {
                        templateUrl: 'views/recipeTiles.html',
                        controller: 'RecipeController'
                    }
                }
            })

            // route for the recipe page
            .state('app.recipe', {
                url: 'recipe/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/recipe.html',
                        controller: 'RecipeController'
                    }
                }
            });
            $urlRouterProvider.otherwise('/');
        }]);
})();
