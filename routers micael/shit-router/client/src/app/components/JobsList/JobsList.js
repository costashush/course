(function() {
    'use strict';

    angular
        .module('jobs')
        .component('jobsList', component());

    function component() {



        function componentController(JobsService) {
            var vm = this;
            vm.jsonJobs = JobsService.GetJobs();
            console.log(vm.jsonJobs);
            init();

            function init() {

            }
        }

        return {
            bindings: {},
            controller: ['JobsService', componentController],
            controllerAs: 'vm',
            templateUrl: '/app/components/JobsList/JobsList.html'
        }
    }
}());