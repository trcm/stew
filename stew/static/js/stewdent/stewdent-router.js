'use strict';

angular.module('stew')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/stewdents', {
        templateUrl: '/static/js/views/stewdent/stew.html',
        controller: 'StewdentController',
        resolve:{
	  resolvedSkill: ['$http', function($http) {
	    return $http.get('/skill/').success(function(data) {
	      return data.data;
	    });
	  }],
          resolvedStewdent: ['Stewdent', '$http', function (Stewdent, $http) {
	    return $http.get('/stewdent/').success(function(data) {
	      return data.data;
	    });
            // return Stewdent.query();
          }]
        }
      });
  }]);
