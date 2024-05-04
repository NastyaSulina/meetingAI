/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-throw-literal */

export const fetchMeeting = async (id: string) =>
    fetch(`https://points-app.ru:8002/api/meeting/${id}`)
        .then((resp) => {
            if (!resp.ok) {
                throw `Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`
            }
            return resp.json()
        })
        .catch((err) => {
            console.log('Error in fetch', err)
        })

export const mutateUserSummary = async (id: string, userText: string | null) =>
    await fetch(`https://points-app.ru:8002/api/meeting/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            customSummary: userText,
        }),
    })
        .then((result) => {
            console.log('Error !!!!!!', result)
            return result.json()
        })
        .catch((err) => {
            console.log('Error in fetch', err)
        })
