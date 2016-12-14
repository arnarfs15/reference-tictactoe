require('./globals');


var JasmineConsoleReporter = require('jasmine-console-reporter');
var reporters = require('jasmine-reporters');

var consoleReporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: './Tests',
    consolidateAll: false
});
jasmine.getEnv().addReporter(junitReporter);
jasmine.getEnv().addReporter(consoleReporter);
