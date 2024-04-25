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
