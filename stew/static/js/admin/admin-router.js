var mod = angular.module('stew');


mod.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/admin', {
      templateUrl: '/static/js/views/admin/admin.html',
      controller: 'AdminController',
      resolve: {
	autenticated: ['token', '$http', function(token, $http) {
	  token.authenticated();
	  $http.defaults.headers.common.Authorization = 'Token ' + token.get();
	  return true;
	}],
	stewdents: ['$http', function($http) {
	  return $http.get('/stewdent/').success(function(data) {
	    return data.data;
	  });
	}],
	skills: ['$http', function($http) {
	  return $http.get('/skill/').success(function(data) {
	    return data.data;
	  });
	}]
      }
    });
}]);
