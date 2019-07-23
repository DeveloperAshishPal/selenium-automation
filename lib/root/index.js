const {By, until} = require('selenium-webdriver');
const driver = require('../driver');

module.exports = function(browser,option) {
    this.driver = driver(browser,option);

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's xpath
    this.findByXpath = async function(xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath(xpath));
    };

    // wait and find a specific element with it's tagName
    this.findByTagName = async function(tagName) {
        await this.driver.wait(until.elementLocated(By.tagName(tagName)), 15000, 'Looking for element');
        return await this.driver.findElement(By.tagName(tagName));
    };

    // wait and find a specific element with it's partialLinkText
    this.findByPartialLinkText = async function(partialLinkText) {
        await this.driver.wait(until.elementLocated(By.partialLinkText(partialLinkText)), 15000, 'Looking for element');
        return await this.driver.findElement(By.partialLinkText(partialLinkText));
    };

    // wait and find a specific element with it's linkText
    this.findByLinkText = async function(linkText) {
        await this.driver.wait(until.elementLocated(By.linkText(linkText)), 15000, 'Looking for element');
        return await this.driver.findElement(By.linkText(linkText));
    };

    // wait and find a specific element with it's js
    this.findByJs = async function(js) {
        await this.driver.wait(until.elementLocated(By.js(js)), 15000, 'Looking for element');
        return await this.driver.findElement(By.js(js));
    };

    // wait and find a specific element with it's css
    this.findByCss = async function(css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 15000, 'Looking for element');
        return await this.driver.findElement(By.css(css));
    };

    // wait and find a specific element with it's className
    this.findByClassName = async function(className) {
        await this.driver.wait(until.elementLocated(By.className(className)), 15000, 'Looking for element');
        return await this.driver.findElement(By.className(className));
    };
    
    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };
};