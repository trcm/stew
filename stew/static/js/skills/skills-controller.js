'use strict';

angular.module('stew')
  .controller('SkillsController', ['$scope', '$modal', 'resolvedSkills', 'Skills',
    function ($scope, $modal, resolvedSkills, Skills) {

      $scope.skills = resolvedSkills;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.skills = Skills.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Skills.delete({id: id},
          function () {
            $scope.skills = Skills.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Skills.update({id: id}, $scope.skills,
            function () {
              $scope.skills = Skills.query();
              $scope.clear();
            });
        } else {
          Skills.save($scope.skills,
            function () {
              $scope.skills = Skills.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.skills = {
          
          "computer_based": "",
          
          "personal": "",
          
          "languages_spoken": "",
          
          "languages_coding": "",
          
          "software_skills": "",
          
          "smartphone": "",
          
          "tabel": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var skillsSave = $modal.open({
          templateUrl: 'skills-save.html',
          controller: 'SkillsSaveController',
          resolve: {
            skills: function () {
              return $scope.skills;
            }
          }
        });

        skillsSave.result.then(function (entity) {
          $scope.skills = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('SkillsSaveController', ['$scope', '$modalInstance', 'skills',
    function ($scope, $modalInstance, skills) {
      $scope.skills = skills;

      

      $scope.ok = function () {
        $modalInstance.close($scope.skills);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);
