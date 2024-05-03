import { getDateDefaultFromJSDate } from '@/shared/utils/dateFormatter'

export function transformMeetingData(data: any) {
    const { duration, id, keyWords, participants, transcript, summary, quotes, createdAt } =
        data ?? {}

    return {
        id,
        keyWords: keyWords || [],
        date: createdAt
            ? getDateDefaultFromJSDate(new Date(createdAt))
            : getDateDefaultFromJSDate(),
        duration: duration || 'N мин',
        participants: participants || ['Аноним'],
        summary: {
            originalText: summary || '',
            userText: summary || '',
        },
        quotes: quotes || [],
        transcript: transcript || '',
    }
}
