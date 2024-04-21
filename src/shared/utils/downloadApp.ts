export const downloadApp = (e: any) => {
    e.preventDefault()

    // TODO: поправить, чтобы это работало без ограничений

    const link = document.createElement('a')
    const url = 'src/shared/utils/_assets/image.png'

    link.href = url
    link.download = url
    link.click()
}
