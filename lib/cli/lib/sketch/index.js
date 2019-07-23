var Design = require('./design');
var config = require('./config');
var cliConfig = require('../../cli-config');
var browserConfig = require('../../../../config/config');

Design.prototype.help = function (commands) {
    this.horizontalLine();
    this.centered('CLI MANUAL');
    this.horizontalLine();
    this.verticalSpace(2);

    for (var key in commands) {
        if (commands.hasOwnProperty(key)) {
            var value = commands[key];
            var line = '\x1b[33m' + key + '\x1b[0m';
            var padding = 40 - line.length;

            for (i = 0; i < padding; i++) {
                line += ' ';
            }
            line += value;
            console.log(line);
            this.verticalSpace();
        }
    }

    this.verticalSpace(1);
    this.horizontalLine();
}

Design.prototype.init = function () {
    this.horizontalLine(config.colorCode.Green);
    this.centered(cliConfig.appInfo.name, config.colorCode.Green);
    this.centered(cliConfig.appInfo.version, config.colorCode.Green);
    console.log(config.colorCode.Green, "Available Browsers : " + browserConfig.availableBrowsers);
    console.log(config.colorCode.Green, "Default Browser : " + browserConfig.defaultBrowser);
    this.horizontalLine(config.colorCode.Green);
}


module.exports = Design;