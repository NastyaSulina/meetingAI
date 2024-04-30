const { assert } = require('chai')

describe('Лендинг', () => {
    beforeEach(async ({ browser }) => {
        // http://localhost:9000/
        await browser.url('/')
    })

    it('На странице есть футер', async ({ browser }) => {
        const footer = await browser.$('[data-test-id="footer"]')

        assert.isTrue(await footer.isDisplayed())
    })

    it('На странице есть меню', async ({ browser }) => {
        const menu = await browser.$('[data-test-id="menu"]')

        assert.isTrue(await menu.isDisplayed())
    })
})
