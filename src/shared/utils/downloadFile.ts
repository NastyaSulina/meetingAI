export const downloadApp = (e: any) => {
    e.preventDefault()

    const link = document.createElement('a')
    const url = 'https://storage.yandexcloud.net/pointsapp/Points.rar'

    link.href = url
    link.download = 'Points.rar'
    link.click()
}
