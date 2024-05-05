const { assert } = require('chai')

describe('Лендинг', () => {
    beforeEach(async ({ browser }) => {
        // http://localhost:9000/
        await browser.url('/')
    })

    it('На странице есть футер', async ({ browser }) => {
        const $footer = await browser.$('[data-test-id="footer"]')
        await expect($footer).toBeDisplayed()
    })

    it('На странице есть меню', async ({ browser }) => {
        const $menu = await browser.$('[data-test-id="menu"]')
        await expect($menu).toBeDisplayed()
    })

    it('Заполняются поля формы', async ({ browser }) => {
        await browser.scroll(0, 4000)

        const $footer = await browser.$('[data-test-id="footer"]')

        const $nameInput = await $footer.$('[name="test1"]')
        const $emailInput = await $footer.$('[name="test2"]')
        const $messageInput = await $footer.$('[name="test3"]')
        const $submitButton = await $footer.$('[type="button"]')

        await browser.pause(2000)

        await $nameInput.setValue('John Doe')
        await $emailInput.setValue('johndoe@example.com')
        await $messageInput.setValue('Hello, world!')

        await browser.pause(1000)

        expect(await $nameInput.getProperty('value')).toEqual('John Doe')
        expect(await $emailInput.getProperty('value')).toEqual('johndoe@example.com')
        expect(await $messageInput.getProperty('value')).toEqual('Hello, world!')

        await $submitButton.click()
    })
})
