(function () {
    'use strict';

    angular.module('eatWell')
        .constant("baseURL", "http://localhost:3000/")
        .service('scheduleService', ['$resource', 'baseURL', function ($resource, baseURL) {
            //var baseURL = 'http://localhost:3000/';
            //var recipes = [];

            this.getSchedule = function () {
                //return $http.get(baseURL + 'schedule');
                return $resource(baseURL + "schedule/:id", null, {
                    'update': {
                        method: 'PUT'
                    }
                });
            };

        }]);
})();
