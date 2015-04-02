angular.module('stew')
  .controller('HomeController', ['$scope', '$http' ,'Stewdent',
				 function ($scope, $http, Stewdent) {
				   // $scope.stewdents = Stewdent.query();
				   // console.log($scope.stewdents);
				   $http.get('/stewdent/').success(function(data) {
				     $scope.stewdents = data;
				     console.log(data);
				   });
				   // $scope.stewdents = "blah";
				 }]);

// angular.module('stew')
//   .factory('Stewdent', ['$resource', function($resource) {
//     return $resource('stew/stewdent/', {}, {
//       'query': { method: 'GET'}
//     });
//   }]);
