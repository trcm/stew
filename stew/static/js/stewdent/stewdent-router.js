'use strict';

angular.module('stew')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/stewdents', {
        templateUrl: '/static/js/views/stewdent/stewdents.html',
        controller: 'StewdentController',
        resolve:{
	  // autenticated: ['token', '$http', function(token, $http) {
	  //   token.authenticated();
	  //   $http.defaults.headers.common.Authorization = 'Token ' + token.get();
	  // }],
	  // resolvedSkill: ['$http', function($http) {
	  //   return $http.get('/skill/').success(function(data) {
	  //     return data.data;
	  //   });
	  // }],
          // resolvedStewdent: ['Stewdent', '$http', function (Stewdent, $http) {
	  //   return $http.get('/stewdent/').success(function(data) {
	  //     return data.data;
	  //   });
          //   // return Stewdent.query();
          // }]
        }
      });
  }]);
