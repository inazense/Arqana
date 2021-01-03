(function () {

    var app = angular.module('templates', []);
    
    app.directive('mainmenu', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/mainmenu.html'
        };
    }); 

    app.directive('central', function () {
        return  {
            restrict: 'E',
            templateUrl: '/templates/central.html'
        }
    });

    app.directive('presentation', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/presentation.html'
        };
    });

    app.directive('projects', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/projects.html'
        }
    });

    app.directive('me', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/me.html'
        }
    });

    app.directive('contact', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/contact.html'
        }
    });
})();
