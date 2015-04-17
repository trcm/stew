angular.module('stew')
  .controller('navbarController',
	      ['$scope', '$http', '$location', '$window', 'token', function($scope, $http, $location, $window, token) {
		$scope.user = token.getUser();
		
		$scope.logout = function() {
		  // console.log("logout");
		  token.logout();
		  $location.path('/stewdents');
		};
		
	      }]);
