'use strict';

angular.module('stew')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/skills', {
        templateUrl: 'views/skills/skills.html',
        controller: 'SkillsController',
        resolve:{
          resolvedSkills: ['Skills', function (Skills) {
            return Skills.query();
          }]
        }
      })
    }]);
