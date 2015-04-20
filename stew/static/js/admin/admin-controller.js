'use strict';

angular.module('stew')
  .controller('AdminController',
	      ['$scope', '$http', '$location', '$modal', 'lodash', 'Stewdent', 'Skill', 'Combined', 'stewdents', 'skills', 'token',
	       function($scope, $http, $location, $modal, lodash, Stewdent, Skill, Combined, stewdents, skills, token) {
		 $scope.test = "test";
		 // $scope.stewdents = stewdents.data;
		 $scope.user = token.getUser();

		 $scope.stewdents = [];
		 $scope.skills = [];
		 $scope.combined = [];
		 $scope.combinedSf = [];
		 
		 $scope.stewdents = stewdents.data;
		 $scope.stewdentsSfc = stewdents.data;
		 $scope.skills = skills.data;
		 
		 $scope.zipped = lodash.zip($scope.stewdents, $scope.skills);
		 // lodash.forEach($scope.zipped, function(i) {
		 //   $scope.combined.push(lodash.merge(i[0], i[1]));

		 // });
		 // $scope.combinedSf = $scope.combined;
		 
		 // console.log($scope.combined);
		 
		 $scope.delete = function (id) {
		   console.log(id.pk);

		   $http.delete("/stewdent/" + id.pk)
		     .success(function(data) {
		       console.log(data);
		       $scope.stewdents = Stewdent.query();
		       console.log($scope.stewdents);
		     });
		   
		   // Stewdent.delete({id: id.pk}).$promise
		   //   .then(function(data) {
		   //     $scope.stewdents = Stewdent.query();
		   //     $scope.skills = Skill.query();
		   //   });
		 };

		 $scope.edit = function(stewdent) {
		   var id = stewdent.pk;
		   console.log(stewdent);
		   console.log(id);
		   var stewdentEdit = lodash.find($scope.stewdents, function(s) {
		     // console.log(s);
		     return s.stewdent == id;
		   });
		   console.log($scope.skills);
		   var skillEdit = lodash.find($scope.skills, function(s) {
		     // console.log(s);
		     return s.stewdent == id;
		   });
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
		     console.log(data[0]);
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
			     $scope.stewdents = dents;
			     $scope.skills = skill;
			     $scope.stewdentsSf = dents;
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

    $scope.cancel = function() {
      $modalInstance.dismiss();
    };
    
  }]);
