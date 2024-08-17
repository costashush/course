(function() {
    'use strict';

    angular
        .module('jobs')
        .service('JobService', Service);

    Service.$inject = ['dependency1'];

    function Service(dependency1) {
        this.exposedFn = exposedFn;



        var jobs = [
            [{ "title": "JavaScript dev", "description": "Contrary to popular belief, Lorem Ipsum is not simply random text", "publish_date": "2017-09-01T21:00:00.000Z", "first_name": "Yuval", "last_name": "Lerner", "location": "Tel Aviv" }, { "title": "JS Fullstack dev", "description": "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", "publish_date": "2017-09-01T21:00:00.000Z", "first_name": "Yuval", "last_name": "Lerner", "location": "Tel Aviv" }, { "title": "JAVA developer", "description": "and going through the cites of the word in classical literature, discovered the undoubtable source.", "publish_date": "2017-08-31T21:00:00.000Z", "first_name": "Adel", "last_name": "Lerner", "location": "Haifa" }, { "title": "Angular frontend dev", "description": "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil)", "publish_date": "2017-08-31T21:00:00.000Z", "first_name": "Adel", "last_name": "Lerner", "location": "Haifa" }, { "title": "SQL master", "description": "By Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.", "publish_date": "2017-08-31T21:00:00.000Z", "first_name": "Yuval", "last_name": "Lerner", "location": "Jerusalem" }]
        ];
        this.getJobs = function() {
                return jobs;
            }
            ////////////////

        function exposedFn() {}
    }
})();