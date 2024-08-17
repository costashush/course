(function() {
    'use strict';

    angular
        .module('tasks')
        .controller('taskController', taskController);

    taskController.$inject = ['$rootScope', '$scope', 'taskFactory'];

    function taskController($rootScope, $scope, taskFactory) {
       $scope.removeTask =function (task) {
           return taskFactory.remove(task)
       }

        function init() {
            $scope.tasks = taskFactory.getTasks();

        }
        init();
    };
})();