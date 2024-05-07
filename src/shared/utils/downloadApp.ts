export const downloadApp = (e: any) => {
    e.preventDefault()

    // TODO: поправить, чтобы это работало без ограничений

    const link = document.createElement('a')
    const url = 'https://storage.yandexcloud.net/pointsapp/PointsApp.rar'

    link.href = url
    link.download = 'PointsApp.exe'
    link.click()
}
