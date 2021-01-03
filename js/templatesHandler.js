(function () {

    var app = angular.module('templates', []);
    
    app.directive('mainmenu', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/mainmenu.html'
        };
    }); 

})();
