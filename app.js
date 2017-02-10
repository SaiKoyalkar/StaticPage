'use strict'

var app = angular.module("app", ["ui.bootstrap", "ui.router"]);
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html"
        })

         $urlRouterProvider.otherwise("/home1");
    //
    // Now set up the states
    $stateProvider
        .state('home1', {
            url: "/home1",
            templateUrl: "views/home1.html"
        })

});
