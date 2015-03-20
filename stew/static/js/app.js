// Declare app level module which depends on filters, and services
angular.module('stew',
	       ['ngResource',
		'ngRoute',
		'ngCookies',
		'ui.bootstrap',
		'ui.date',
	       'ngLodash'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'static/js/views/home/home.html', 
        controller: 'HomeController'})
      .otherwise({redirectTo: '/'});
  }])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }]);

