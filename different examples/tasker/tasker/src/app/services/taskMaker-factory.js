(function() {
  'use strict';

  angular.module('tasks').factory('taskMakerFactory', taskMaker);

  taskMaker.$inject = ['taskFactory'];
  function taskMaker(taskFactory) {
    var taskMaker = {};
    var task = {};

    taskMaker.selectedUser = function(user) {
      task.userId = user.id;
      task.userImage = user.image;
      return;
    };
    taskMaker.unSelectUser = function() {
      return (task.userI = null);
    };
    taskMaker.userId = function() {
      if (task.userId) {
        return task.userId;
      }
      return;
    };
    taskMaker.getUserImage = function() {
      return task.userImage;
    };
    return taskMaker;
  }
})();
