'use strict';

var app = angular.module('GdgApp',
        ['ui.router', 'GdgApp.Controllers', 'GdgApp.Services']
        );

app.config(['$injector', '$stateProvider', '$urlRouterProvider', function($injector, $stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");

        //
        // Now set up the states
        $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "views/home.html",
                    onEnter: function($stateParams, $state) {
                    },
                    controller: function($scope) {
                        //PageTransitions.init();
                        //PageTransitions.nextPage(17);
                    }
                })
                /*.state('state1.list', {
                 url: "/list",
                 templateUrl: "partials/state1.list.html",
                 controller: function($scope) {
                 $scope.items = ["A"., "List", "Of", "Items"];
                 }
                 })*/
                .state('objetive', {
                    url: "/objetive",
                    templateUrl: "views/objetive.html"
                })
        /*.state('state2.list', {
         url: "/list",
         templateUrl: "partials/state2.list.html",
         controller: function($scope) {
         $scope.things = ["A", "Set", "Of", "Things"];
         }
         })*/
    }]);

app.run(['Transition', '$rootScope', '$urlRouter', '$state', function(transition, $rootScope, $urlRouter, $state) {
        transition.init(angular.element("#pt-main"), 28);

        $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams) {
                    transition.leave();
                });

        $rootScope.$on('$stateChangeSuccess',
                function(e) {
                    transition.reveal();
                });
    }]);

app.onSuccess = function(response) {
    console.log("onSucess");
};

app.onFailure = function(response) {
    console.log("onSucess");
}
