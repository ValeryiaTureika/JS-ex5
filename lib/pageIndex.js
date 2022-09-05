module.exports = {
    days: async function(page, number) {
        let selector = `nav > a:nth-child(${number}) > span.page-nav__day-number`;
        await page.waitForSelector(selector);
        await page.click(selector);
    },

    moviTime: async function(page, movi, time) {
        let selector = `body > main > section:nth-child(${movi}) > div:nth-child(${time}) > ul > li > a`;
        await page.waitForSelector(selector);
        await page.click(selector);
    },
}