// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // libraries
            'lib/lodash/lodash.js',
            'lib/angular/angular.js',
            'lib/angular-mocks/angular-mocks.js',

            // directive
            './dist/ng-table.js',

            // tests
            'test/*.js'
            //'test/tableParamsSpec.js'
            //'test/tableControllerSpec.js'
        ],

        // generate js files from html templates
        preprocessors: {
            '*.js': 'coverage'
        },

        reporters: ['progress', 'coverage'],

        autoWatch: true,
        browsers: ['PhantomJS'],
        coverageReporter: {
            type: 'lcov',
            dir: 'out/coverage'
        },
        plugins:[
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ]
    });
};
