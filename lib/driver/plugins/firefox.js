const Builder = require('selenium-webdriver');
let driver = require('selenium-webdriver/firefox');
exports.firefox = function (options) {
    
    let driverOption = new driver.Options();
    options.arguments.map(arg => {
        driverOption.addArguments(arg);
    })
    // o.addArguments('start-fullscreen');  
    //o.addArguments('disable-infobars');
    // o.addArguments('headless'); // running test on visual firefox browser
    options.userPreferences ? driverOption.setUserPreferences(options.userPreferences) : driverOption.setUserPreferences({}) // { credential_enable_service: false }

    return new Builder().setFirefoxOptions(driverOption).forBrowser('firefox').build();
};