(function () {
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(setRouteConfig);

    function setRouteConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../views/shared/layout.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: '../views/shared/about.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            })
            .when('/software', {
                templateUrl: '../views/shared/software.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            })
            .when('/gaming', {
                templateUrl: '../views/shared/gaming.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            })
            .when('/books', {
                templateUrl: '../views/shared/books.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            })
            .when('/videos', {
                templateUrl: '../views/shared/videoRecomandations.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            });
    }
})();