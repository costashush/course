(function() {
    'use strict';

    angular
        .module('jobs')
        .component('jobNav', component());


    function component() {

        function componentController() {
            var vm = this;
            vm.title = "nav"
            init();

            function init() {

            }
        }

        return {
            bindings: {},
            controller: componentController,
            controllerAs: 'vm',
            templateUrl: '/app/components/JobNav/JobNav.html'
        }
    }

}());