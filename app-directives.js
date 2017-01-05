(function() {
  var app = angular.module('app-directives',[]);
app.directive("appTabs", function() {
    return {
      restrict: "E",
      templateUrl: "tabs.html",
      controller: function() {
        this.tab = 2;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });
  })();