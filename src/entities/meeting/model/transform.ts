import { getDateDefaultFromJSDate } from '@/shared/utils/dateFormatter'

export function transformMeetingData(data: any) {
    const { duration, id, keyWords, participants, transcript, summary, quotes, createdAt } = data

    return {
        id,
        keyWords: keyWords || [],
        date: getDateDefaultFromJSDate(new Date(createdAt)),
        duration: duration || '',
        participants: participants || [],
        summary: {
            originalText: summary || '',
            userText: summary || '',
        },
        quotes: quotes || [],
        transcript: transcript || '',
    }
}
