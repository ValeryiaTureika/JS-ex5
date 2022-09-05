const {
    clickElement,
    getText,
    row1PlaseVip,
    seats
} = require("./lib/commands");
const {
    days,
    moviTime
} = require("./lib/pageIndex");

let page;

beforeEach(async() => {
    page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000);
});

afterEach(() => {
    page.close();
});

describe("Ticket booking", () => {
    beforeEach(async() => {
        await page.goto("http://qamid.tmweb.ru/client/index.php", {
            timeout: 60000,
        });
    });

    test("should book one VIP seat", async() => {
        await days(page, "5");
        await moviTime(page, "2", "2");
        await page.waitForSelector("h1");
        await row1PlaseVip(page, "1");
        await clickElement(page, "button");
        await page.waitForSelector("h1");
        const actual = await getText(
            page,
            "main > section > div > p:nth-child(2) > span",
            (text) => text.textContent
        );
        const expected = "1/2";
        const actualPrise = await getText(
            page,
            "main > section > div > p:nth-child(6) > span",
            (text) => text.textContent
        );
        const expectedPrise = "350";
        expect(actual).toContain(expected);
        expect(actualPrise).toContain(expectedPrise);
    }, 60000);

    test("should book two seats", async() => {
        await days(page, "6");
        await moviTime(page, "1", "3");
        await page.waitForSelector("h1");
        await seats(page, "5", "6");
        await seats(page, "5", "7");
        await clickElement(page, "button");
        await page.waitForSelector("h1");
        const actual = await getText(
            page,
            "main > section > div > p:nth-child(2) > span",
            (text) => text.textContent
        );
        const expected = "5/6, 5/7";
        const actualPrise = await getText(
            page,
            "main > section > div > p:nth-child(6) > span",
            (text) => text.textContent
        );
        const expectedPrise = "200";
        expect(actual).toContain(expected);
        expect(actualPrise).toContain(expectedPrise);
    }, 60000);

    test("should not book", async() => {
        await days(page, "2");
        await moviTime(page, "2", "3");
        await page.waitForSelector("h1");
        await clickElement(page, "button");
        const actual = await getText(page, "h2", (text) => text.textContent);
        const expected = "Фильм 3";
        expect(actual).toContain(expected);
    }, 60000);
});