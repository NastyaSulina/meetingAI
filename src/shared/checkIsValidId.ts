export default function checkIsValidId(id: string) {
    const regex = /^[a-zA-Z0-9]+$/

    return regex.test(id)
}
