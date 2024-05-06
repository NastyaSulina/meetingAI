export const downloadApp = (e: any) => {
    e.preventDefault()

    // TODO: поправить, чтобы это работало без ограничений

    const link = document.createElement('a')
    const url = 'src/shared/assets/PointsApp.exe'

    link.href = url
    link.download = 'PointsApp.exe'
    link.click()
}
