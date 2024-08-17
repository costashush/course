(function() {
  'use strict';

  angular.module('tasks').controller('taskMakerCtrl', taskMakerCtrl);

  taskMakerCtrl.$inject = ['$rootScope', '$scope', 'taskMakerFactory', 'taskFactory' , 'APP_CONFIG'];
  function taskMakerCtrl($rootScope, $scope, taskMakerFactory, taskFactory, APP_CONFIG) {
    $scope.appName = APP_CONFIG.appName;
    $rootScope.$on('userSelected', function() {
      $scope.userId = taskMakerFactory.userId();
    });

    $scope.inputs = function() {
      if ($scope.body && $scope.title) {
        return false;
      }
      return true;
    };

    $scope.makeTask = function() {
      var task = {
        id: _.uniqueId('users_'),
        body: $scope.body,
        tilte: $scope.title,
        img: taskMakerFactory.getUserImage()
      };
      taskFactory.addTask(task);
      formReset();
      return;
    };

    function formReset() {
      $scope.body = undefined;
      $scope.title = undefined;
      $scope.userId = undefined;
      return;
    }
  }
})();
