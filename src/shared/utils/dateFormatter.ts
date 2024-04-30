// Sun Apr 28 2024 15:39:40 GMT+0300 (Moscow Standard Time) -> 28.04.2024
export const getDateDefaultFromJSDate = (today = new Date()) =>
    'd.m.Y'
        .replace('Y', today.getFullYear().toString())
        .replace('m', (+today.getMonth() + 1 > 9 ? '' : '0') + (1 + today.getMonth()))
        .replace('d', (+today.getDate() > 9 ? '' : '0') + today.getDate())
