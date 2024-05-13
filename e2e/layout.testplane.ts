describe('Лендинг.Скриншоты', async function () {
    beforeEach(async ({ browser }) => {
        await browser.url('/')
        await browser.setWindowSize(1200, 800)
    })

    it('Футер должен иметь статическое содержимое', async function ({ browser }) {
        await browser.assertView('landing-footer', '[data-test-id="footer"]', {
            ignoreElements: ['[data-test-id="menu"]'],
            tolerance: 5,
        })
    })

    it('Меню должно иметь статическое содержимое', async function ({ browser }) {
        await browser.assertView('landing-menu', '[data-test-id="menu"]', {
            tolerance: 5,
        })
    })

    it('Экраны должны иметь статическое содержимое', async function ({ browser }) {
        await browser.assertView('landing-purpose', '[data-test-id="purpose"]', {
            ignoreElements: ['[data-test-id="menu"]'],
            tolerance: 5,
        })

        await browser.assertView('landing-cards', '[data-test-id="cards"]', {
            ignoreElements: ['[data-test-id="menu"]'],
            tolerance: 5,
        })

        await browser.assertView('landing-banner', '[data-test-id="banner"]', {
            ignoreElements: ['[data-test-id="menu"]'],
            tolerance: 5,
        })
    })
})
