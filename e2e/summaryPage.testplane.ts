describe('Страница итогов.Содержимое', () => {
    beforeEach(async ({ browser }) => {
        await browser.url('/summary/819546bf-9e44-4a27-8606-a8afb6392742')
        await browser.pause(800)
    })

    it('На странице есть меню', async ({ browser }) => {
        const $menu = await browser.$('[data-test-id="menu"]')
        expect($menu).toBeDisplayed()
    })

    it('На странице есть футер', async ({ browser }) => {
        const $footer = await browser.$('[data-test-id="footer"]')
        expect($footer).toBeDisplayed()
    })
})

describe('Резюме встречи', () => {
    beforeEach(async ({ browser }) => {
        await browser.url('/summary/819546bf-9e44-4a27-8606-a8afb6392742')

        await browser.scroll(0, 800)
        await browser.pause(1500)
    })

    it('Блок отображается', async ({ browser }) => {
        const $summary = await browser.$('[data-test-id="summary"]')

        expect($summary).toBeDisplayed()
    })

    it('Изменения в Резюме без режима редактирования', async ({ browser }) => {
        const $userSummaryInput = await browser.$('[name="summary"]')

        expect(await $userSummaryInput.getAttribute('readonly')).toEqual('true')
    })

    it('Изменения в Резюме в режиме редактирования', async ({ browser }) => {
        const $summary = await browser.$('[data-test-id="summary"]')

        const $editButton = await $summary.$('[class*="IconButton-module__edit"]')
        await $editButton.click()

        const $userSummaryInput = await $summary.$('[name="summary"]')
        await $userSummaryInput.setValue('Тестирование сценария')

        expect(await $userSummaryInput.getProperty('value')).toEqual('Тестирование сценария')
    })
})
