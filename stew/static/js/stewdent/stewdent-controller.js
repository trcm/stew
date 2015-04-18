'use strict';

angular.module('stew')
  .controller('StewdentController',
	      ['$scope', '$http', '$modal', '$location', 'Stewdent', 'token', 'StewdentCreate', 'usSpinnerService', 'lodash',
	       function ($scope, $http, $modal, $location, Stewdent, token, StewdentCreate, usSpinnerService, lodash) {
		 
		 $scope.user = token.getUser();
		 // Grab stewdents and skills from database, just for testing. Will comment out in deployment
		 // $scope.stewdents = resolvedStewdent.data;
		 // $scope.skills_resolve = resolvedSkill.data;
		 
		 $scope.dobDateOptions = {
		   dateFormat: 'dd/mm/yy',
		   maxDate: -1
		 };

		 $scope.uniYearDateOptions = {
		   dateFormat: 'yyyy'
		 };
		 
		 $scope.errors = [];
		 
		 $scope.genders = ['Male', 'Female', 'Not specified'];
		 $scope.states = ['QLD', 'NSW', 'VIC', 'TAS', 'SA', 'WA', 'NT', 'ACT'];
		 
		 $scope.create = function () {

		   // combine skill inputs into one input
		   
		   usSpinnerService.spin('spinner-1');
		   $scope.errors = [];

		   
		   $http.post('/newStew/', $scope.stewdent).
		     success(function(data) {
		       $http.post('/skill/' + data.pk, $scope.skills).
			 success(function(data) {
			   $scope.clear();
			   usSpinnerService.stop('spinner-1');
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
		       usSpinnerService.stop('spinner-1');
		       alert("Oooops, something is broken.  We're still in beta, please contact stewhelp@gmail.com");
		       for (var key in data) {
			 $scope.errors.push(data[key][0]);
			 
		       }
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

		 $scope.open = function () {
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

		 $scope.toolTipOne = "<p>" +
		   " This includes any computer based skills (from home) you feel may be useful professionally.<br/>" +
		   "Examples include but aren't limited to:" +
		   "</p>" +
		   "<p>" +
		   "<strong>Design</strong> - Graphic design, Photoshop editing, Web & App UI design, 2D & 3D modelling, Infographics, Drafting <br />" +
		   "<strong>Programming/Tech</strong> - Wordpress, Website dev, Mobile Apps, Software dev, Database dev <br/>" +
		   "<strong>Online Marketing</strong> - Analytics, Social Media, SEO, Traffic generation, Blog mentions, Web PR <br/> " +
		   "<strong>Writing/Translation</strong> - Creative writing, Speeches, Reports, Translation, Web content, Proofing/Editing<br/>" +
		   "<strong>Video/Animation</strong> - Video Ads, Video editing, Production, Animation<br/>" +
		   "<strong>Music/Audio</strong> - Audio Editing, Mastering, Songwriting, Jingles<br/>" +
		   "<strong>Financial</strong> - Tax Returns, Accounting<br/>" +
		   "<strong>Research/Analysis</strong> - Market Research, User testing, General Research, Database analysis, Data collection<br/>" +
		   "</p>";
		 $scope.toolTipTwo = "<p>Please also provide any releveant software you feel competent with, for each skill category.</p>" +
		   "Eg. <p><strong>Creative Design</strong> - Adobe Photoshop, Illustrator</p>" +
		   "<p><strong>Tech Design</strong> - Autocad, Revit</p>";
		 
	       }])
  .controller('ThankyouModalController', ['$scope', '$modalInstance',
					  function($scope, $modalInstance) {
					    $scope.ok = function() {
					      $modalInstance.close();
					    };
					  }]);
