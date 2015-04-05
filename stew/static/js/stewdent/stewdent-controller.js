'use strict';

angular.module('stew')
  .controller('StewdentController',
	      ['$scope', '$http', '$modal', '$location', 'Stewdent', 'token', 'StewdentCreate', 'lodash',
	       function ($scope, $http, $modal, $location, Stewdent, token, StewdentCreate, lodash) {
		 
		 $scope.user = token.getUser();
		 // Grab stewdents and skills from database, just for testing. Will comment out in deployment
		 // $scope.stewdents = resolvedStewdent.data;
		 // $scope.skills_resolve = resolvedSkill.data;
		 
		 
		 $scope.dobDateOptions = {
		   dateFormat: 'dd/mm/yy',
		   maxDate: -1
		 };
		 $scope.errors = {};
		 
		 $scope.genders = ['Male', 'Female'];
		 $scope.states = ['QLD', 'NSW', 'VIC', 'TAS', 'SA', 'WA', 'NT', 'ACT'];
		 
		 $scope.create = function () {
		   $http.post('/newStew/', $scope.stewdent).
		     success(function(data) {
		       $http.post('/skill/' + data.pk, $scope.skills).
			 success(function(data) {
			   // console.log(data);
			   // $http.post('/work/' + data.stewdent, $scope.work).
			   //   success(function(data) {
			   //     console.log('afdafa');
			   //     console.log(data);
			   //     $location.path("/done");
			   //   })
			   //   .error(function(data) {
			   //     console.log("error with work");
			   //     console.log(data);
			   //   });
			   $scope.clear();
			   $scope.open();
			 })
			 .error(function(data) {
			   alert("Oooops, something is broken.  We're still in beta, please contact stewhelp@gmail.com");
			   console.log(data);
			 });
		     })
		     .error(function(data) {
		       // this is the only time actual errors should be recieved
		       // The error here should be an Integrity error, as thats the only error that should be
		       // caused from model created.  Only if there is a duplicate email in the databse.
		       alert(data.error);
		       alert("Oooops, something is broken.  We're still in beta, please contact stewhelp@gmail.com");
		       
		       $scope.errors.push(data);
		       alert(data);
		       alert($scope.errors);
		     });
		 };

		 // TBD
		 $scope.update = function (id) {
		   $scope.stewdent = Stewdent.get({id: id});
		   $scope.open(id);
		 };
		 
		 // TBD
		 $scope.delete = function (id) {
		   Stewdent.delete({id: id},
				   function () {
				     $scope.stewdents = Stewdent.query();
				   });
		 };

		 // TBD
		 $scope.save = function (id) {
		   if (id) {
		     Stewdent.update({id: id}, $scope.stewdent,
				     function () {
				       $scope.stewdents = Stewdent.query();
				       $scope.clear();
				     });
		   } else {
		     Stewdent.save($scope.stewdent,
				   function () {
				     $scope.stewdents = Stewdent.query();
				     $scope.clear();
				   });
		   }
		 };

		 $scope.clear = function () {
		   $scope.stewdent = {
		     "first_name": "",
		     "last_name": "",
		     "gender": "",
		     "dob": "",
		     "university": "",
		     "student_num": "",
		     "degree": "",
		     "start_year": "",
		     "end_year": "",
		     "occupation": "",
		     "phone_num": "",
		     "student_email": "",
		     "address": "",
		     "city": "",
		     "state": "",
		     "post_code": "",
		     "country": "",
		     "id": ""
		   };
		   $scope.skills = {
		     "computer": ""
		   };
		 };

		 $scope.open = function (id) {
		   var stewdentSave = $modal.open({
		     templateUrl: 'thankyou-modal.html',
		     controller: 'ThankyouModalController'
		   });
		 };

		 $scope.logout = function() {
		   console.log("logout");
		   token.logout();
		   $location.path('/login');
		 };
		 
	       }])
  .controller('ThankyouModalController', ['$scope', '$modalInstance',
					  function($scope, $modalInstance) {
					    $scope.ok = function() {
					      $modalInstance.close();
					    };
					  }]);
