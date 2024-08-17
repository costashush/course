(function() {
    'use strict';

    angular
        .module('jobs')
        .component('job', component());

    function component() {



        function componentController() {
            var vm = this;
            //       vm.jsonJobs = JobsService.GetJobs();
            init();

            function init() {

            }
        }

        return {
            bindings: {
                jobobj: '<',
                jobtitle: '<'
            },
            controller: componentController,
            controllerAs: 'vm',
            templateUrl: '/app/components/Job/Job.html'
        }
    }
}());