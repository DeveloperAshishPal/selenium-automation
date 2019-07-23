const pluginLoader = require('../../utils/pluginLoader')(__dirname);
const config = require('../../config/config');

module.exports = function (browser, options) {
    let availableBrowsers = config.availableBrowsers;
    let selectedBrowser = availableBrowsers.includes(browser) ? browser : config.defaultBrowser;
    this.driver = pluginLoader[selectedBrowser](options);
}