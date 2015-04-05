angular.module('stew',
	       ['ngResource',
		'ngRoute',
		'ngCookies',
		'LocalStorageModule',
		'ui.bootstrap',
		'ui.date',
		'smart-table',
		'ngLodash'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
	templateUrl: 'static/js/views/login.html',
	controller: 'authController'})
      .otherwise({redirectTo: '/stewdents'});
  }])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }])
  .factory('api', function($resource){
    function add_auth_header(data, headersGetter){
      // as per HTTP authentication spec [1], credentials must be
      // encoded in base64. Lets use window.btoa [2]
      var headers = headersGetter();
      headers['Authorization'] = ('Token ' + btoa(data.username +
						  ':' + data.password));
      console.log(headers);
    }
    // defining the endpoints. Note we escape url trailing dashes: Angular
    // strips unescaped trailing slashes. Problem as Django redirects urls
    // not ending in slashes to url that ends in slash for SEO reasons, unless
    // we tell Django not to [3]. This is a problem as the POST data cannot
    // be sent with the redirect. So we want Angular to not strip the slashes!
    return {
      auth: $resource('/auth/', {}, {
	login: {method: 'POST', transformRequest: add_auth_header},
	logout: {method: 'DELETE'}
      }),
      users: $resource('/api/users\\/', {}, {
	create: {method: 'POST'}
      }),
      token: $resource('/api-token-auth\\/', {}, {
	tok: {method: 'POST' }
      })
    };
  }).
  controller('authController', ['$scope', '$location', '$http', 'api', 'token', function($scope, $location, $http, api, token) {
    // Angular does not detect auto-fill or auto-complete. If the browser
    // autofills "username", Angular will be unaware of this and think
    // the $scope.username is blank. To workaround this we use the
    // autofill-event polyfill [4][5]
    // $('#id_auth_form input').checkAndTriggerAutoFillEvent();

    $scope.getCredentials = function(){
      return {username: $scope.username, password: $scope.password};
    };

    $scope.login = function(){

      // $http.post('/api-token-auth/', $scope.getCredentials )
      // 	.success(function(data) {
      // 	  console.log(data);
      // 	  alert(data);
      // 	});

      api.token.tok($scope.getCredentials()).
      	$promise.
      	then(function(data){
      	  // on good username and password
      	  $scope.user = data.username;
          $http.defaults.headers.common.Authorization = 'Token ' + data.token;
	  token.store(data.token);
	  
	  $http.get('/auth/').success(function(data) {
	    console.log(data);
	    token.storeUser(data.user);
	    console.log(data.user);
	    console.log(token.getUser());
	    console.log(token.get());
	    $location.path('/admin');
	  });
	  console.log(data);
      	}).
	catch(function(data){
      	  // on incorrect username and password
      	  alert(data.data.detail);
      	  alert(data);
	});
    };

    $scope.logout = function(){
      $scope.user = undefined;
      // api.auth.logout(function(){
      // 	$scope.user = undefined;
      // });
    };
    // $scope.register = function($event){
    //   // prevent login form from firing
    //   $event.preventDefault();
    //   // create user and immediatly login on success
    //   api.users.create($scope.getCredentials()).
    //     $promise.
    //     then($scope.login).
    //     catch(function(data){
    //       alert(data.data.username);
    //     });
    // };
  }])
  .factory('token', ['$http','$location', 'localStorageService', function($http, $location, localStorageService) {
    var token = undefined;
    return {
      store: function(tok) {
	console.log(localStorageService.get('token'));
	localStorageService.cookie.set('token', tok);
	token = tok;
      },
      storeUser: function(user) {
	localStorageService.cookie.set('user', user);
      },
      getUser: function() {
	return localStorageService.cookie.get('user');
      },
      get: function() {
	return localStorageService.cookie.get('token');
      },
      authenticated: function() {
	if (!(localStorageService.cookie.get('token'))) {
	  console.log(localStorageService.cookie.get('token'));
	  $location.path("/login");
	}
	console.log(localStorageService.cookie.get('token'));
	// if (token == undefined) {
	//   $location.path("/login");
	// }
      },
      logout: function() {
	localStorageService.cookie.clearAll();
	localStorageService.cookie.clearAll();
      }
    };
  }]);
