// Sun Apr 28 2024 15:39:40 GMT+0300 (Moscow Standard Time) -> 28.04.2024
export const getDateDefaultFromJSDate = (today = new Date()) =>
    'd.m.Y'
        .replace('Y', today.getFullYear().toString())
        .replace('m', (+today.getMonth() + 1 > 9 ? '' : '0') + (1 + today.getMonth()))
        .replace('d', (+today.getDate() > 9 ? '' : '0') + today.getDate())

export const getTimeDefaultFromISO = (time: string) => {
    const timeParts = time
        .replace(/[DHM]/g, ':') // заменяем D, H, M на :
        .replace(/[PTS]/g, '') // удаляем P, T, S
        .split(':')

    timeParts.forEach((part, index) => {
        if (part.length === 1) {
            timeParts[index] = `0${part}`
        }
    })

    // Специально для случая "PT38S" -> "00:38"
    if (timeParts.length === 1) {
        timeParts.unshift('00')
    }

    return timeParts.join(':')
}
