module.exports = {
    clickElement: async function(page, selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error(`Selector ${selector} is not clickable`)
        }
    },

    getText: async function(page, selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (link) => link.textContent);
        } catch (error) {
            throw new Error(`Not possible to get text from ${selector} selector`)
        }
    },

    seats: async function(page, row, seat) {
        try {
            let selector = `main > section div:nth-child(${row}) > span:nth-child(${seat})`;
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error(`Selector ${selector} is not clickable`)
        }
    },

    row1PlaseVip: async function(page, number) {
        try {
            let selector = `section  div:nth-child(${number}) > span.buying-scheme__chair.buying-scheme__chair_vip`;
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error(`Selector ${selector} is not clickable`)
        }
    },
}