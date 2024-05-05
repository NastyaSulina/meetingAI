describe('Страница итогов', () => {
    beforeEach(async ({ browser }) => {
        await browser.url('/summary/9f84c6c2-e7f9-4278-92b9-0fe05ca11453')
    })

    it('На странице есть футер', async ({ browser }) => {
        const $footer = await browser.$('[data-test-id="footer"]')
        await expect($footer).toBeDisplayed()
    })

    it('Происходит переход на Лендинг при клике по Лого', async ({ browser }) => {
        const $footer = await browser.$('[data-test-id="footer"]')
        await expect($footer).toBeDisplayed()

        await browser.pause(1000)
        await browser.scroll(0, 4000)
        await browser.pause(2000)

        const $logo = await browser.$('[data-test-id="logo"]')
        await $logo.click()

        await browser.pause(2000)

        const $landingTitle = await browser.$('h1')
        await expect($landingTitle).toHaveText('Приложение для резюмирования Zoom-встреч')
    })

    it('Обновление текста резюме встречи', async ({ browser }) => {
        const $summary = await browser.$('[data-test-id="summary"]')
        await expect($summary).toBeDisplayed()

        const $editButton = await $summary.$('[class*="IconButton-module__edit"]')
        await $editButton.click()
        await browser.pause(2000)

        const $userSummaryInput = await $summary.$('[name="summary"]')
        // const tmp = $userSummaryInput.getProperty('value')
        await $userSummaryInput.setValue('Тестирование сценария')
        await browser.pause(4000)

        expect(await $userSummaryInput.getProperty('value')).toEqual('Тестирование сценария')

        const $resetButton = await $summary.$('[class*="IconButton-module__reset"]')
        await $resetButton.click()
        await browser.pause(2000)

        // expect(await $userSummaryInput.getProperty('value')).toEqual(tmp)
    })
})
