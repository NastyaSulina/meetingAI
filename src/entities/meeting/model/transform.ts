import { getDateDefaultFromJSDate, getTimeDefaultFromISO } from '@/shared/utils/dateFormatter'

export function transformMeetingData(data: any) {
    const {
        duration,
        id,
        keyWords,
        participants,
        transcript,
        summary,
        customSummary,
        quotes,
        createdAt,
        title,
        description,
        done,
    } = data ?? {}

    return {
        id,
        keyWords: keyWords || [],
        date: createdAt ? getDateDefaultFromJSDate(new Date(createdAt)) : '', // TODO: заменить на поле startTime
        duration: duration ? getTimeDefaultFromISO(duration) : '',
        participants: participants || [],
        summary: {
            generatedText: summary || '',
            userText: customSummary || '',
        },
        quotes: quotes || [],
        transcript: transcript || '',
        title: title || '',
        description: description || '',
        done: Boolean(done),
    }
}
