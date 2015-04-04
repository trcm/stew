'use strict';

angular.module('stew')
  .controller('AdminController',
	      ['$scope', '$http', '$location', 'lodash', 'Stewdent', 'stewdents', 'skills', 'token',
	       function($scope, $http, $location, lodash, Stewdent, stewdents, skills, token) {
		 $scope.test = "test";
		 // $scope.stewdents = stewdents.data;
		 $scope.user = token.getUser();

		 // $scope.stewdents = Stewdent.query()
		 //   .$promise.then(function(data) {
		 //     console.log(data);
		 //   });
		 $scope.stewdents = stewdents.data;
		 $scope.skills = skills.data;

		 $scope.zipped = lodash.zip($scope.stewdents, $scope.skills);
		 console.log($scope.zipped);
		 $scope.update = function (id) {
		   $scope.stewdent = Stewdent.get({id: id});
		   $scope.open(id);
		 };

		 console.log(token.getUser());
		 if (token.authenticated) {
		   console.log('auth');
		 }
		 
		 // TBD
		 $scope.delete = function (id) {
		   console.log(id);
		   Stewdent.delete({id: id.pk},
		   		   function () {
		   		     $scope.stewdents = Stewdent.query();
		   		   });
		 };

		 $scope.logout = function() {
		   console.log("logout");
		   token.logout();
		   $location.path('/stewdents');
		 };
		 
	       }]);
