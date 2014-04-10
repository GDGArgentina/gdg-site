'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.onSuccess = function(response){
        
    };
    
    $scope.onFailure = function(response){
        
    };
    
  });
