angular.module('stew',
	       ['ngResource',
		'ngRoute',
		'ngCookies',
		'ui.bootstrap',
		'ui.date',
	       'ngLodash'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // .when('/', {
    //   templateUrl: 'static/js/views/stewdent/stewdents.html', 
    //   controller: 'StewdentController'})
      .otherwise({redirectTo: '/stewdents'});
  }])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }]);

