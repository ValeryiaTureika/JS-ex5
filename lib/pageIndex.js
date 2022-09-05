module.exports = {
    days: async function(page, number) {
        try {
            let selector = `nav > a:nth-child(${number}) > span.page-nav__day-number`;
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error(`Selector ${selector} is not clickable`)
        }
    },

    moviTime: async function(page, movi, time) {
        try {
            let selector = `body > main > section:nth-child(${movi}) > div:nth-child(${time}) > ul > li > a`;
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error(`Selector ${selector} is not clickable`)
        }
    },
}