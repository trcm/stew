'use strict';

angular.module('stew')
  .factory('Skills', ['$resource', function ($resource) {
    return $resource('stew/skills/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
