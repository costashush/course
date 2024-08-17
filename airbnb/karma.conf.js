// Karma configuration
// Generated on Sun Aug 27 2017 18:06:19 GMT+0300 (Jerusalem Summer Time)

// module.exports = function(config) {
//     config.set({




//         files: [
//             'bower_components/angular/angular.js',
//             'bower_components/angular-mocks/angular-mocks.js',
//             'app/controler.js',
//             'app/**/*.js'

//         ],
//         // base path that will be used to resolve all patterns (eg. files, exclude)
//         basePath: './app',


//         // frameworks to use
//         // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//         frameworks: ['jasmine'],




//         // list of files to exclude
//         exclude: [
//             'node_moudles/**/*'
//         ],


//         // preprocess matching files before serving them to the browser
//         // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//         preprocessors: {},


//         // test results reporter to use
//         // possible values: 'dots', 'progress'
//         // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//         reporters: ['progress'],


//         // web server port
//         port: 9876,


//         // enable / disable colors in the output (reporters and logs)
//         colors: true,


//         // level of logging
//         // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//         logLevel: config.LOG_INFO,


//         // enable / disable watching file and executing tests whenever any file changes
//         autoWatch: true,


//         // start these browsers
//         // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//         browsers: ['Chrome'],


//         // Continuous Integration mode
//         // if true, Karma captures browsers, runs the tests and exits
//         singleRun: false,

//         // Concurrency level
//         // how many browser should be started simultaneous
//         concurrency: Infinity
//     })
// }


module.exports = function(config) {

    config.set({
        basePath: '',

        // using jasmine here as test runner I think mocha is better however it will be hard for student to set it up very time.
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser loading from src folder
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/controler.js',
            'app/**/*.js',

        ],

        // list of files to exclude
        exclude: [
            'node_modules/**/*'
        ],

        preprocessors: {},

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,

        // add more browsers to test them be sure to add plugin for karma runner
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}