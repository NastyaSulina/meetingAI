describe('Страница итогов', () => {
    beforeEach(async ({ browser }) => {
        await browser.url('/summary/1')
    })

    it('На странице есть футер', async ({ browser }) => {
        const footer = await browser.$('[data-test-id="footer"]')

        assert.isTrue(await footer.isDisplayed())
    })
})
