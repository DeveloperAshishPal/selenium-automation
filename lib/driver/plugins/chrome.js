const Builder = require('selenium-webdriver');
let driver = require('selenium-webdriver/chrome');
exports.chrome = function (options) {
    
    let driverOption = new driver.Options();
    options.arguments.map(arg => {
        driverOption.addArguments(arg);
    })
    // o.addArguments('start-fullscreen');  
    //o.addArguments('disable-infobars');
    // o.addArguments('headless'); // running test on visual chrome browser
    options.userPreferences ? driverOption.setUserPreferences(options.userPreferences) : driverOption.setUserPreferences({}) // { credential_enable_service: false }

    return new Builder().setChromeOptions(driverOption).forBrowser('chrome').build();
};