'use strict';


var app = angular.module('GdgApp.Controllers', []);

app.controller('MainController', ['$scope', 'Transition', function($scope, transition) {

        $scope.$on('$viewContentLoading',
                function(event, viewConfig) {
                    console.log(event);
                    console.log(viewConfig);
                    // Access to all the view config properties.
                    // and one special property 'targetView'
                    // viewConfig.targetView
                });

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.onSuccess = function(response) {

        };

        $scope.onFailure = function(response) {

        };

    }]);
