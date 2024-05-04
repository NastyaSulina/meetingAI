// Sun Apr 28 2024 15:39:40 GMT+0300 (Moscow Standard Time) -> 28.04.2024
export const getDateDefaultFromJSDate = (today = new Date()) =>
    'd.m.Y'
        .replace('Y', today.getFullYear().toString())
        .replace('m', (+today.getMonth() + 1 > 9 ? '' : '0') + (1 + today.getMonth()))
        .replace('d', (+today.getDate() > 9 ? '' : '0') + today.getDate())

export const getTimeDefaultFromISO = (time: string) => {
    const timeParts = time
        .replace(/[DHM]/g, ':') // replace D, H, M with :
        .replace(/[PTS]/g, '') // remove P, T, S
        .split(':')

    // Pad each part with leading zero if necessary
    timeParts.forEach((part, index) => {
        if (part.length === 1) {
            timeParts[index] = `0${part}`
        }
    })

    // Special handling for "PT38S" -> "00:38"
    if (timeParts.length === 1) {
        timeParts.unshift('00') // add leading 00:
    }

    return timeParts.join(':')
}
