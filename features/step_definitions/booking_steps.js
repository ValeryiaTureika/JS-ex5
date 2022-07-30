const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;

const {
    Given,
    When,
    Then,
    Before,
    After,
    BeforeAll
} = require("cucumber");
const {
    clickElement,
    getText
} = require("../../lib/commands.js");

Before({
    timeout: 60 * 1000
}, async function() {
    const browser = await puppeteer.launch({
        args: ['--disable-setuid-sandbox', '--disable-dev-shm-usage', ],
        headless: false,
        slowMo: 50
    });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

After(async function() {
    if (this.browser) {
        await this.browser.close();
    }
});

Given("user is on {string} page", {
    timeout: 30 * 1000
}, async function(string) {
    return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
        setTimeout: 20000,
    });
});

When("user chooses by {string}", {
    timeout: 60 * 1000
}, async function(string) {
    await clickElement(this.page, string);
});

When("user chooses movie {string}", async function(string) {
    return await clickElement(this.page, string);
});

When("user chooses seat {string}", async function(string) {
    return await clickElement(this.page, string);
});

When("user click {string}", async function(string) {
    return await clickElement(this.page, string);
});

Then("user sees text {string}", async function(string) {
    const actual = await getText(this.page, ".ticket__check-title");
    const expected = await string;
    expect(actual).contains(expected);
});

Then("user sees the reserved seat {string}", async function(string) {
    const actual = await getText(this.page, "main > section > div > p:nth-child(2) > span");
    const expected = await string;
    expect(actual).contains(expected);
});

Then("user sees the header {string}", async function(string) {
    const actual = await getText(this.page, "h2");
    const expected = await string;
    expect(actual).contains(expected);
});

Then("user sees {string} is gray", {
    timeout: 60 * 1000
}, async function(string) {
    await clickElement(this.page, string);
    await this.page.waitForNavigation(30000);
    const disabledButton = await page.$('button[disabled]');
    const isDisabled = await disabledButton !== null;
    await this.page.waitForNavigation(30000);

    await expect(isDisabled).to.not.be.null;
});