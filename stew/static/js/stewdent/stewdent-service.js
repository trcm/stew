'use strict';

angular.module('stew')
  .factory('Stewdent', ['$resource', function ($resource) {
    return $resource('/stewdent/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'},
      'delete': { method: 'DELETE', isArray: true}
    });
  }])
  .factory('Skill', ['$resource', function($resource) {
    return $resource('/skill/:id', {}, {
      'query' : {method: 'GET', isArray:true},
      'get' : {method: 'GET'}
    });
  }])
  .factory('StewdentCreate', ['$resource', function($resource) {
    return $resource('/stewdent/', {}, {
      'create' : {method : 'POST'}
    });
  }]);
