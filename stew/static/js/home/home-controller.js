angular.module('stew')
  .controller('HomeController', ['$scope', '$http' ,'Stewdent',
				 function ($scope, $http, Stewdent) {
				   $http.get('/stewdent/').success(function(data) {
				     $scope.stewdents = data;
				     console.log(data);
				   });
				 }]);

