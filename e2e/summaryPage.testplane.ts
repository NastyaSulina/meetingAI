describe('Страница итогов', () => {
    beforeEach(async ({ browser }) => {
        await browser.url('/summary/9a48c7da-f147-4f0b-aac7-097b6d2c86b5')
    })

    it('На странице есть футер', async ({ browser }) => {
        const $footer = await browser.$('[data-test-id="footer"]')
        await expect($footer).toBeDisplayed()
    })

    it('Переход на Лендинг приложения после клика на ссылку в футере', async ({ browser }) => {
        const $footer = await browser.$('[data-test-id="footer"]')
        await expect($footer).toBeDisplayed()

        await browser.pause(2000)

        // Нажимаем на ссылку в футере
        const $logo = await browser.$('[data-test-id="logo"]')
        await $logo.click()

        await browser.pause(2000)

        const $landingTitle = await browser.$('h1')
        await expect($landingTitle).toHaveText('Приложение для резюмирования Zoom-встреч')
    })
})
