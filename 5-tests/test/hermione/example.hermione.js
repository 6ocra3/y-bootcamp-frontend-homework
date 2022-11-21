const { assert } = require('chai');

describe('github', async function () {
    it('Тест, который пройдет', async function ({ browser }) {
        await this.browser.url("/hw/store")
        // const home = await this.browser.$(".Home")
        // await home.waitForExist()
    });
});