var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var params = process.argv;
var args = process.argv.slice(3);

exports.config = {
  beforeLaunch: () => {
    console.log('beforeLaunch');
},
onComplete: () => {
  console.log('onComplete');
},

onCleanUp: () => {
  console.log('onCleanUp');
},
  //seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 10000,
  framework: 'jasmine2',
  directConnect: true,

  onPrepare: function () {
      browser.getCapabilities().then(function (cap) {
  browser.browserName = cap.get("browserName");
});

    browser.driver.manage().window().maximize();

    return new Promise(function(fulfill, reject) {
      browser.getCapabilities().then(function(value) {
        reportName = 'protractor-report-' + '_' + value.get('browserName') + '_' + Math.floor(Math.random()*1E16);
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: __dirname+'/target',
            docTitle: 'Web UI Test Report',
            screenshotsFolder: '/image',
            //takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
            consolidate: true,
            consolidateAll: true,
            preserveDirectory: true,
            //cleanDirectory: false,
            //fixedScreenshotName: true,
            fileName: "my-report.html",
            fileNamePrefix: reportName
          })
        );
        fulfill();
      });
    });
  },

  afterLaunch: function afterLaunch() {
    console.log('afterLaunch');    
    var fs = require('fs');
    var output = '';
    fs.readdirSync('target/').forEach(function (file) {
      if (!(fs.lstatSync('target/' + file).isDirectory()))
        output = output + fs.readFileSync('target/' + file);
    });
    fs.writeFileSync('target/ConsolidatedReport.html', output, 'utf8');

  },

  suites:{
    example:['./test/e2e/specs/**/sampleSpec.js',]
  },

/*  multiCapabilities: [
    {
      'browserName': 'chrome'
    },
    {
      'browserName': 'firefox'
    }
  ],*/

  capabilities: {
    'browserName': 'chrome'
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 200000
  }
};
