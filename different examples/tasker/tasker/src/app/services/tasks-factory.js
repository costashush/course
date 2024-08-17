(function() {
    'use strict';

    angular
        .module('tasks')
        .factory('taskFactory', taskFactory);


    function taskFactory() {
        var tasks = [{
                id: 'task_1',
                text: 'Bob is book',
                img: 'https://robohash.org/' + this.id,
                title: 'this is title',
                priority: 5,
                importance: 2,
                completed: '100%'
            },
            {
                id: 'task_2',
                text: 'toro is book',
                img: 'https://robohash.org/' + this.id,
                title: 'second task',
                priority: 4,
                importance: 1,
                completed: '100%'
            }
        ];

        var taskFactory = {};

        taskFactory.getTasks = function() {
            return tasks;
        };
        taskFactory.addTask = function(task) {
            return tasks.push(task)
        }
        taskFactory.remove = function(task){
            return tasks.splice(task, 1)
        }

        return taskFactory;
    }
})();