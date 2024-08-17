(function() {
  'use strict';

  angular.module('tasks').controller('usersController', usersController);

  usersController.$inject = ['$rootScope', '$scope', 'usersFactory', 'taskMakerFactory'];

  function usersController($rootScope, $scope, usersFactory, taskMakerFactory) {
    $scope.isSelected = function(user) {
      var selectedUser = _.find($scope.users, { id: user.id });
      _.each($scope.users, function(user) {
        user.isSelected = false;
      });
      selectedUser.isSelected = true;
      taskMakerFactory.selectedUser(user);
      return $scope.$emit('userSelected');
    };

    function init() {
      $scope.users = usersFactory.getUsers();
    }

    init();
  }
})();
