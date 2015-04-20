var mod = angular.module('stew');

mod.factory("Combined", ['$http', 'Stewdent', 'Skill', 'lodash', function($http, Stewdent, Skill, lodash) {

  var combine = function() {
    var stewdents = Stewdent.query();
    var skills = Skill.query();
    console.log(stewdents, skills);
    var zipped = [];
    var combined = [];
    lodash.zip(stewdents, skills);

    lodash.forEach(zipped, function(i) {
      combined.push(lodash.merge(i[0], i[1]));
    });
    console.log(combined);
    return combined;
  };

  return {
    combine: combine
  };
  
}]);

