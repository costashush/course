(function() {
    'use strict';

    angular
        .module('jobs')
        .component('home', component());


    function component(JobService) {

        function componentController() {
            var vm = this;
            vm.title = "HELLLLOOO COMPO"
            init();

            function init() {

            }
        }

        return {
            bindings: {},
            controller: ['JobService', componentController],
            controllerAs: 'vm',
            templateUrl: '/app/components/Home/Home.html'
        }
    }

}());