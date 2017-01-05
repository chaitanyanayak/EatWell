(function () {
    
    var app = angular.module('eatWell', ['app-directives','recipe']);
    
    app.controller('WeekController', function () {
        this.week = weekData;
        
        
    });
    
    app.controller('AddItemController', function () {
        this.breakfast="";
        
        this.addBreakfast = function(day) {
            day.breakfast.push(this.breakfast);
            this.breakfast="";
        };
    });
    
    $(document).ready(function() {
       /* $('.day').on('click','.addButton',function () {
            $(this).before('<input type="text" class="newitem"/>');
            $(this).removeClass("addButton");
            $(this).addClass("addNewItem");
        });*/
        $('.day').on('click','.addNewItem',function (day) {
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


    var weekData = [{
        day: 'Monday',
        date: '12-26-2016',
        breakfast: [
            'Oatmeal',
            'Coffee',
            'Banana'
        ],
        lunch: [
            'Chicken Caesan salad'
        ],
        dinner: [
            'Grilled Salmon'
        ],
        snacks: [
            'Fruit bowl',
            'Protien shake'
        ]
    }, {
        day: 'Tuesday',
        date: '12-27-2016',
        breakfast: [
            'Bread Toast',
            'Coffee',
            'Apple'
        ],
        lunch: [
            'Chicken Caesan salad'
        ],
        dinner: [
            'Grilled Salmon'
        ],
        snacks: [
            'Fruit bowl',
            'Protien shake'
        ]
    }, {
        day: 'Wednesday',
        date: '12-28-2016',
        breakfast: [
            'Scrambled eggs',
            'Bread Toast',
            'Coffee',
            'Banana'
        ],
        lunch: [
            'Chicken Caesan salad'
        ],
        dinner: [
            'Grilled Salmon'
        ],
        snacks: [
            'Fruit bowl',
            'Protien shake'
        ]
    }, {
        day: 'Thursday',
        date: '12-29-2016',
        breakfast: [
            'Oatmeal',
            'Coffee',
            'Banana'
        ],
        lunch: [
            'Chicken Caesan salad'
        ],
        dinner: [
            'Grilled Salmon'
        ],
        snacks: [
            'Fruit bowl',
            'Protien shake'
        ]
    }, {
        day: 'Friday',
        date: '12-30-2016',
        breakfast: [
            'Oatmeal',
            'Coffee',
            'Banana'
        ],
        lunch: [
            'Chicken Caesan salad'
        ],
        dinner: [
            'Grilled Salmon'
        ],
        snacks: [
            'Fruit bowl',
            'Protien shake'
        ]
    }, {
        day: 'Saturday',
        date: '12-31-2016',
        breakfast: [
            'Oatmeal',
            'Coffee',
            'Banana'
        ],
        lunch: [
            'Chicken Caesan salad'
        ],
        dinner: [
            'Grilled Salmon'
        ],
        snacks: [
            'Fruit bowl',
            'Protien shake'
        ]
    }, {
        day: 'Sunday',
        date: '01-01-2017',
        breakfast: [
            'Oatmeal',
            'Coffee',
            'Banana'
        ],
        lunch: [
            'Chicken Caesan salad'
        ],
        dinner: [
            'Grilled Salmon'
        ],
        snacks: [
            'Fruit bowl',
            'Protien shake'
        ]
    }];
}) ();