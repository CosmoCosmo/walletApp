var walletApp = angular.module('walletApp', ["ui.router", "ngStorage", "ngGrid"]);

walletApp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /home
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "home/home.html",
        controller: "homeController"
    }).state('reset', {
        url: "/reset",
        templateUrl: "reset/reset.html",
        controller: "resetController"
    }).state('viewsource', {
        url: "/viewsource",
        templateUrl: "viewsource/viewsource.html",
        controller: "viewsourceController"
    });
});
