describe('Лендинг.Содержимое', async function () {
    beforeEach(async ({ browser }) => {
        await browser.url('/')
    })

    it('На странице есть футер', async ({ browser }) => {
        const $footer = await browser.$('[data-test-id="footer"]')

        expect($footer).toBeDisplayed()
    })

    it('На странице есть меню', async ({ browser }) => {
        const $menu = await browser.$('[data-test-id="menu"]')

        expect($menu).toBeDisplayed()
    })

    it('На странице есть экран "А что оно делает?"', async ({ browser }) => {
        const $purpose = await browser.$('[data-test-id="purpose"] > h2')

        expect($purpose).toHaveText('А что оно делает?')
    })

    it('На странице есть экран "Итоги встречи"', async ({ browser }) => {
        const $cards = await browser.$('[data-test-id="cards"] > h2')

        expect($cards).toHaveText('Итоги встречи')
    })

    it('На странице есть Баннер', async ({ browser }) => {
        const $banner = await browser.$('[data-test-id="banner"] > h1')

        expect($banner).toHaveText('Приложение для резюмирования Zoom-встреч')
    })

    it('Заполняются поля формы', async ({ browser }) => {
        const $footer = await browser.$('[data-test-id="footer"]')

        const $nameInput = await $footer.$('[name="footerName"]')
        const $emailInput = await $footer.$('[name="footerEmail"]')
        const $messageInput = await $footer.$('[name="footerText"]')
        const $submitButton = await $footer.$('[type="button"]')

        expect(await $submitButton.getProperty('disabled')).toEqual(true)

        await $nameInput.setValue('John Doe')
        await $emailInput.setValue('johndoe@example.com')
        await $messageInput.setValue('Hello, world!')

        expect(await $nameInput.getProperty('value')).toEqual('John Doe')
        expect(await $emailInput.getProperty('value')).toEqual('johndoe@example.com')
        expect(await $messageInput.getProperty('value')).toEqual('Hello, world!')

        await $submitButton.click()

        expect(await $submitButton.getProperty('disabled')).toEqual(false)
    })
})
