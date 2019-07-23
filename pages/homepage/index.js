let Base = require('../../lib/root');
const locator = require('../utils/locator');

const demoLocatorId = locator.demoLocatorKey;

let demoInput;

Base.prototype.findInputAndButton = async function () {
    demoInput = await this.findById(demoInput);
    
    const result = await this.driver.wait(async function () {
        const searchButtonText = await searchButton.getAttribute('value');
        const searchInputEnableFlag = await searchInput.isEnabled();

        return {
            inputEnabled: searchInputEnableFlag,
            buttonText: searchButtonText
        }
    }, 5000);
    return result;
};

Base.prototype.submitKeywordAndGetResult = async function() {
    await this.findInputAndButton();
    await this.write(searchInput, fakeNameKeyword);
    await searchButton.click();
    resultStat = await this.findById(resultConfirmationSelectorId);
    return await this.driver.wait(async function () {
        return await resultStat.getText();
    }, 5000);
};

module.exports = Base;