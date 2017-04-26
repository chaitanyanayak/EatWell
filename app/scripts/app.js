(function () {

    var app = angular.module('eatWell', ['app-directives', 'ngResource', 'ui.router']);

    app.config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
            ]);

    $(document).ready(function () {
        /* $('.day').on('click','.addButton',function () {
             $(this).before('<input type="text" class="newitem"/>');
             $(this).removeClass("addButton");
             $(this).addClass("addNewItem");
         });*/
        $('.day').on('click', '.addNewItem', function (day) {
            var newItem = $(this).closest('.day').find('.newitem');
            day.breakfast.push(newItem.val());
            alert(newItem.val());
            //$(this).removeClass("addNewItem");
            //$(this).addClass("addButton");
            //newItem.remove();
        });
    });

    var addItem = function (meal, day, item) {
        //var newItem = $(this).closest('.day').find('.newitem');
        day.breakfast.push(item);
        alert(newItem.val());
        //$(this).removeClass("addNewItem");
        //$(this).addClass("addButton");
        //newItem.remove();
    };

})();
