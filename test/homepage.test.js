const { describe, it, after, before } = require('mocha');
const Page = require('../pages/homepage');
const options = require('../config/options');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe ('homepage automated testing', async function () {
            this.timeout(50000);
            let driver, page;

            beforeEach (async () => {
                page = new Page('chrome',options.chrome.fullSupport);
                driver = page.driver;
                await page.visit('https://www.google.com/');
            });

            afterEach (async () => {
                await page.quit();
            });

            it ('find the input box and search button', async () => {
                const result = await page.findInputAndButton();
                expect(result.inputEnabled).to.equal(true);
                expect(result.buttonText).to.include('Google');
            });

            it ('put keyword in search box and click search button', async () => {
                const result = await page.submitKeywordAndGetResult();
                expect(result.length).to.be.above(10);
            });
        });
    } catch (ex) {
        console.log (new Error(ex.message));
    } finally {

    }
})();