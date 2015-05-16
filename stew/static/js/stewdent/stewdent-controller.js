'use strict';

angular.module('stew')
  .controller('StewdentController',
	      ['$scope', '$http', '$modal', '$location', '$window', 'Stewdent', 'token', 'StewdentCreate', 'usSpinnerService', 'lodash',
	       function ($scope, $http, $modal, $location, $window, Stewdent, token, StewdentCreate, usSpinnerService, lodash) {
		 
		 $scope.user = token.getUser();

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
		 $scope.unis = [
		   'Australian Catholic University',
		   'Australian National University',
		   'Bond University',
		   'Central Queensland University',
		   'Charles Darwin University', 
		   'Charles Sturt University',  
		   'Curtin University',  
		   'Deakin University',  
		   'Edith Cowan University',  
		   'Federation University',  
		   'Flinders University',  
		   'Griffith University',  
		   'James Cook University',  
		   'La Trobe University',  
		   'Macquarie University',  
		   'Monash University',  
		   'Murdoch University',  
		   'Queensland University of Technology',  
		   'RMIT University',  
		   'Southern Cross University',  
		   'Swinburne University of Technology',  
		   'University of Adelaide',  
		   'University of Canberra',  
		   'University of Melbourne',  
		   'University of New England',  
		   'University of New South Wales',  
		   'University of Newcastle',  
		   'University of Notre Dame',  
		   'University of Queensland',  
		   'University of South Australia',  
		   'University of Southern Queensland',  
		   'University of Sydney',  
		   'University of Tasmania',  
		   'University of Technology Sydney',  
		   'University of the Sunshine Coast',  
		   'University of Western Australia',  
		   'University of Western Sydney',  
		   'University of Wollongong',  
		   'Victoria University'
		 ];

		 $scope.create = function () {

		   // open a modal for confimation
		   var confirmModal = $modal.open({
		     templateUrl: 'static/js/views/stewdent/confirm-Modal.html',
		     controller: 'ConfirmationController'
		   });
		   // if the modal is confirmed then continue 
		   confirmModal.result.then(function() {
		     
		     usSpinnerService.spin('spinner-1');
		     $scope.errors = [];

		     $window.scrollTo(0,0);

		     // send data to backend
		     $http.post('/newStew/', $scope.stewdent).
		       success(function(data) {
			 $http.post('/skill/' + data.pk, $scope.skills).
			   success(function(data) {
			     $scope.clear();
			     usSpinnerService.stop('spinner-1');
			     $scope.open();
			   })
			   .error(function(data) {
			     alert("Oooops, something is broken.  We're still in beta, please contact info@thestew.com.au");
			     console.log(data);
			   });
		       })
		       .error(function(data) {
			 usSpinnerService.stop('spinner-1');
			 for (var key in data) {
			   $scope.errors.push(data[key]);
			 }
			 $scope.errors.push("Something broke! We\'re still in beta so please contact info@thestew.com.au");
		       });
		   });
		   
		 };

		 // clear the form
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

		 // open the thank you modal, this might soon be removed
		 $scope.open = function () {
		   var stewdentSave = $modal.open({
		     templateUrl: 'thankyou-modal.html',
		     controller: 'ThankyouModalController'
		   });
		 };

		 // logout the user
		 $scope.logout = function() {
		   console.log("logout");
		   token.logout();
		   $location.path('/login');
		 };

		 $scope.toolTipOne = 
		   "<p>" +
		   "Examples for each skill category include but aren’t limited to:" +
		   "<p><strong>Creative Design</strong> - Graphic design, Photoshop editing, Web & App UI design, Infographics, Posters/Flyers</p>" +
		   "<p><strong>Tech Design</strong> - 2D & 3D modelling, Architecture, CAD, Drafting, Industrial design </p>" +
		   "<p><strong>Programming/IT</strong> - Wordpress, Website dev, Mobile Apps, Software dev, Database dev </p>" +
		   "<p><strong>Online Marketing</strong> - Analytics, Social Media, SEO, Traffic generation, Blogging, Web PR</p>" +
		   "<p><strong>Writing</strong> - Creative writing, Speeches, Reports, Translation, Web content, Proofing/Editing</p>" +
		   "<p><strong>Video/Music</strong> – Video/Audio editing, Production, Animation, Mastering, Song writing </p>" +
		   "<p><strong>Financial</strong> - Tax Returns, Accounting </p>" +
		   "<p><strong>Research/Analysis</strong> - Market Research, User testing, General Research, Database analysis, Data collection </p>" +
		   "<p><strong>In-Person</strong> – Sales, User testing, Face-to-face marketing, Customer service, Tutoring, Event management</p>" +
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
					  }])
  .controller('ConfirmationController', ['$scope', '$modalInstance', function($scope, $modalInstance)  {
    $scope.yes = function() {
      $modalInstance.close();
    };

    $scope.no = function() {
      $modalInstance.dismiss();
    };
  }]);
