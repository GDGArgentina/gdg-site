'use strict';

var app = angular.module('GdgApp',
        ['ui.router', 'ngAnimate', 'GdgApp.Controllers', 'GdgApp.Services']
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
                    }
                })
                .state('objetive', {
                    url: "/objetive",
                    templateUrl: "views/objetive.html"
                })

    }]);

/*app.run(['Transition', '$rootScope', '$urlRouter', '$state', function(transition, $rootScope, $urlRouter, $state) {
        //transition.init(angular.element("#pt-main"), 28);

        $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams) {
                    //transition.leave();
                });

        $rootScope.$on('$stateChangeSuccess',
                function(e) {
                    //transition.reveal();
                });
    }]);*/

app.onSuccess = function(response) {
    console.log("onSucess");
};

app.onFailure = function(response) {
    console.log("onSucess");
}
