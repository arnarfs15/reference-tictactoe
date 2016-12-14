require('./globals');

var reporters = require('jasmine-reporters');

var junitReporter = new reporters.JUnitXmlReporter({
    savePath: './tests',
    consolidateAll: false
});
jasmine.getEnv().addReporter(junitReporter);
