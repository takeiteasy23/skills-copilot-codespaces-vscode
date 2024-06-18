function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/skillsMember.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}