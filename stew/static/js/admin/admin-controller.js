'use strict';

angular.module('stew')
  .controller('AdminController',
	      ['$scope', '$http', '$location', '$modal', 'lodash', 'Stewdent', 'Skill', 'stewdents', 'skills', 'token',
	       function($scope, $http, $location, $modal, lodash, Stewdent, Skill, stewdents, skills, token) {
		 $scope.test = "test";
		 // $scope.stewdents = stewdents.data;
		 $scope.user = token.getUser();

		 // $scope.stewdents = Stewdent.query()
		 //   .$promise.then(function(data) {
		 //     console.log(data);
		 //   });
		 $scope.stewdents = stewdents.data;
		 $scope.stewdentsSfc = stewdents.data;
		 $scope.skills = skills.data;

		 $scope.combined = [];
		 
		 $scope.zipped = lodash.zip($scope.stewdents, $scope.skills);

		 lodash.forEach($scope.zipped, function(i) {
		   $scope.combined.push(lodash.merge(i[0], i[1]));
		 });
		 
		 $scope.combinedSf = $scope.combined;
		 
		 $scope.delete = function (id) {
		   console.log(id.pk);
		   Stewdent.delete({id: id.pk}, function() {
		     $scope.stewdents = Stewdent.query();
		   });
		 };

		 // $scope.logout = function() {
		 //   // console.log("logout");
		 //   token.logout();
		 //   $location.path('/stewdents');
		 // };

		 $scope.edit = function(stewdent) {
		   var id = stewdent.stewdent;
		   var stewdentEdit = lodash.find($scope.stewdents, function(s) {
		     return s.stewdent == id;
		   });
		   var skillEdit = lodash.find($scope.skills, function(s) {
		     return s.stewdent == id;
		   });
		   console.log(stewdentEdit);
		   console.log(skillEdit);

		   var stewEdit = $modal.open({
		     templateUrl: 'static/js/views/admin/stewdentEdit-modal.html',
		     controller: 'StewdentEditController',
		     size: 'lg',
		     resolve: {
		       stewdent: function() {
			 return stewdentEdit;
		       },
		       skill: function() {
			 return skillEdit;
		       }
		     }
		   });

		   stewEdit.result.then(function(data) {
		     // makes sure that the stewdent serialier isn't
		     // trying to serialize anything it shouldn't
		     delete data[0].skills;
		     delete data[0].tablet;
		     delete data[0].smartphone;
		     delete data[0].languages_spoken;
		     delete data[0].languages_coding;
		     delete data[0].personal;
		     delete data[0].computer_based;
		     delete data[0].software_skills;
		     delete data[0].content;
		     console.log(data[1]);
		     var skillData = data[1];
		     // save the new data using put methods
		     $http.put('/stewdent/' + id, data[0]).
		       success(function(data) {
			 $http.put('/skill/' + id, skillData).
			   success(function(data) {
			       // update the combined 
			     var dents = Stewdent.query();
			     var skill = Skill.query();
			     $scope.zipped = lodash.zip(dents, skill);
			     console.log($scope.zipped);
			     lodash.forEach($scope.zipped, function(i) {
			       $scope.combined.push(lodash.merge(i[0], i[1]));
			     });
			     console.log($scope.combined);
			     
			     $scope.combinedSf = $scope.combined;
			   })
			   .error(function(data) {
			     alert("Oooops, something is broken.  We're still in beta, please contact stewhelp@gmail.com");
			     console.log(data);
			   });
		       })
		       .error(function(data) {
			 alert("Oooops, something is broken.  We're still in beta, please contact stewhelp@gmail.com");
			 console.log(data);
		       });
		   });
		 };
		 

		 $scope.view = function(stewdent) {
		   console.log(stewdent);
		   $modal.open({
		     templateUrl: 'static/js/views/admin/stewdentinfo-modal.html',
		     controller: 'StewdentInfoController',
		     size: "lg",
		     resolve: {
		       stewdent: function() {
			 return stewdent;
		       }
		     }
		   });
		 };

	       }])
  .controller('StewdentInfoController', ['$scope', '$modalInstance', 'stewdent', function($scope, $modalInstance, stewdent) {
    $scope.stewdent = stewdent;
    $scope.close = function() {
      $modalInstance.close('close');
    };
  }])
  .controller('StewdentEditController', ['$scope', '$modalInstance', 'stewdent', 'skill', function($scope, $modalInstance, stewdent, skill) {
    $scope.stewdent = stewdent;
    $scope.skills = skill;
    
    $scope.genders = ['Male', 'Female', 'Not specified'];
    $scope.states = ['QLD', 'NSW', 'VIC', 'TAS', 'SA', 'WA', 'NT', 'ACT'];

    $scope.ok = function() {
      $modalInstance.close([$scope.stewdent, $scope.skills]);
    };
    
  }]);
