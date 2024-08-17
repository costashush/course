(function() {
    'use strict';

    angular
        .module('tasks')
        .factory('usersFactory', usersFactory);

    function usersFactory() {
        var users = [{
                id: 'user_1',
                firstName: 'Bob first',
                lastName: 'Talka calle',
                image: 'https://robohash.org/' + this.id,
                phone: 1212121212,
                showPhone: false,
                isSelected: false

            },
            {
                id: 'user_2',
                firstName: 'Bob second',
                lastName: 'Talka calle',
                image: 'https://robohash.org/' + this.id,
                phone: 1212121212,
                showPhone: false,
                isSelected: false
            }
        ]


        var usersFactory = {};
        usersFactory.getUsers = function() {
            return users;
        }





        return usersFactory;
    }
})();