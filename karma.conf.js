module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
      'node_modules/karma-jasmine/lib/boot.js',
      'node_modules/karma-jasmine/lib/adapter.js',
      'src/**/*.js', // Adjust this based on your source folder
      'test/**/*.spec.js', // Adjust this based on your test folder
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': ['coverage'], // Optional: add coverage for source files
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
      },
    },
    singleRun: false,
    concurrency: Infinity,
    browserDisconnectTimeout: 10000,
    browserNoActivityTimeout: 30000,
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
    ],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
  });
};
