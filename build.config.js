/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `buildDir` folder is where our projects are compiled during
   * development and the `compileDir` folder is where our app resides once it's
   * completely built.
   */
  buildDir: 'build',
  compileDir: 'bin',

  dateRange: {
    minDate: '1900-01-01',
    maxDate: '2099-12-31'
  },

  devEnv: {
    name: 'development',
    apiEndpoint: 'http://localhost:9001'
  },

  prodEnv: {
    name: 'production',
    apiEndpoint: 'https://api.calendar.drevle.com'
  },

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  appFiles: {
    js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  /**
   * This is a collection of files used during testing only.
   */
  testFiles: {
    js: [
      'node_modules/angular-mocks/angular-mocks.js'
    ]
  },

  /**
   * This is the same as `appFiles`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `appFiles` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendorFiles.js`.
   *
   * The `vendorFiles.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendorFiles.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendorFiles.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  vendorFiles: {
    js: [
      'node_modules/angular/angular.js',
      'node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-ui-utils/modules/route/route.js',
      'node_modules/moment/moment.js',
      'node_modules/moment/locale/ru.js',
      'node_modules/angular-moment/angular-moment.min.js',
      'node_modules/angular-resource/angular-resource.min.js',
      'node_modules/angular-native-picker/build/angular-datepicker.js',
      'node_modules/angular-ui-notification/dist/angular-ui-notification.min.js',
      'node_modules/angular-loading-bar/build/loading-bar.js'
    ],
    css: [
      'node_modules/angular-ui-notification/dist/angular-ui-notification.min.css',
      'node_modules/angular-loading-bar/build/loading-bar.min.css'
    ],
    fonts: [
      'node_modules/bootstrap/fonts/*'
    ],
    assets: [
        'images',
        'fonts'
    ]
  }
};
