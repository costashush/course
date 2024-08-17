(function() {
    'use strict';

    angular
        .module('jobs', [
            'ui.router'
        ])
        .config(function($stateProvider) {
            var home = {
                name: 'home',
                url: '/',
                template: '<home></home>'
            }

            var about = {
                name: 'about',
                url: '/about',
                template: '<h3>Its the UI-Router hello world app!</h3>'
            }

            $stateProvider.state(home);
            $stateProvider.state(about);
        });

}());