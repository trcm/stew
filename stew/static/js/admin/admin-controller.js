'use strict';

angular.module('stew')
  .controller('AdminController',
	      ['$scope', '$http', '$location', 'lodash', 'Stewdent', 'stewdents', 'token',
	       function($scope, $http, $location, loadsh, Stewdent, stewdents, token) {
		 $scope.test = "test";
		 $scope.stewdents = stewdents.data;
		 $scope.user = token.getUser();

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
