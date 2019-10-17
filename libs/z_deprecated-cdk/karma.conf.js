// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const { customLaunchers, platformMap } = require('../../../test/browser-providers');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    customLaunchers: customLaunchers,
    browserConsoleLogOptions: {
      terminal: true,
      level: 'log',
    },
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../../coverage/cdk'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessLocal'],
    singleRun: false,
  });
};
