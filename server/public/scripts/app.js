'use strict';

var app = angular.module('webappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
  app.onSuccess = function(response){
      console.log("onSucess");
  };
  
  app.onFailure = function(response){
      console.log("onSucess");
  }
