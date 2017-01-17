(function () {
    'use strict';
    angular.module('eatWell')
        .controller('ScheduleController', ['$scope', 'scheduleService', function ($scope, scheduleService) {

            $scope.schedule = scheduleService.getSchedule().query();

        }]);
})();
