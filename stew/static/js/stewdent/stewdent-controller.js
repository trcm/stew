'use strict';

angular.module('stew')
  .controller('StewdentController',
	      ['$scope', '$http', '$modal', 'resolvedStewdent', 'resolvedSkill', 'Stewdent', 'StewdentCreate', 'lodash',
	       function ($scope, $http, $modal, resolvedStewdent, resolvedSkill, Stewdent, StewdentCreate, lodash) {

		 $scope.stewdents = resolvedStewdent.data;
		 $scope.skills = resolvedSkill.data;
		 console.log($scope.stewdents);
		 console.log($scope.skills);
		 $scope.zipped = lodash.zip($scope.stewdents, $scope.skills);
		 console.log($scope.zipped);

		 // Creates a new stewdent in the database, actually calls the methods in the django-rest backend via the api
		 $scope.create = function () {
		   // create student row using form data
		   $http.post('/stewdent/', $scope.stewdent).
		     success(function(data) {
		       $scope.skills.StewdentId = data.pk;
		       // console.log($scope.skills);
		       // grab the primary key the response, call skill entry row
		       $http.post('/skill/' + data.pk, $scope.skills).
			 success(function(data) {
			   // console.log(data);
			   // create goals entry
			 });
		     });
		   $scope.clear();
		   
		 };

		 // TBD update methods, won't actually be used on this page
		 $scope.update = function (id) {
		   $scope.stewdent = Stewdent.get({id: id});
		   $scope.open(id);
		 };

		 // TBD delete methods, won't actually be used on this page
		 $scope.delete = function (id) {
		   Stewdent.delete({id: id},
				   function () {
				     $scope.stewdents = Stewdent.query();
				   });
		 };

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

		 // $scope.open = function (id) {
		 //   var stewdentSave = $modal.open({
		 //     templateUrl: 'stewdent-save.html',
		 //     controller: 'StewdentSaveController',
		 //     resolve: {
		 //       stewdent: function () {
		 // 	 return $scope.stewdent;
		 //       }
		 //     }
		 //   });

		 //   stewdentSave.result.then(function (entity) {
		 //     $scope.stewdent = entity;
		 //     $scope.save(id);
		 //   });
		 // };
	       }])
  .controller('StewdentSaveController',
	      ['$scope', '$modalInstance', 'stewdent',
	       function ($scope, $modalInstance, stewdent) {
		 $scope.stewdent = stewdent;
		 
		 $scope.dobDateOptions = {
		   dateFormat: 'dd-mm-yy',
		   maxDate: -1
		 };

		 $scope.start_yearDateOptions = {
		   dateFormat: 'dd-mm-yy'
		 };

		 $scope.end_yearDateOptions = {
		   dateFormat: 'dd-mm-yy'
		 };

		 $scope.ok = function () {
		   $modalInstance.close($scope.stewdent);
		 };

		 $scope.cancel = function () {
		   $modalInstance.dismiss('cancel');
		 };
	       }]);
