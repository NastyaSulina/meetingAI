import { getDateDefaultFromJSDate, getTimeDefaultFromISO } from '@/shared/utils'

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
        videoLink,
    } = data ?? {}

    return {
        id,
        keyWords: keyWords || [],
        date: createdAt ? getDateDefaultFromJSDate(new Date(createdAt)) : '', // TODO: заменить на поле startTime
        duration: duration ? getTimeDefaultFromISO(duration) : '',
        participants: participants || [],
        generatedText: summary || '',
        userText: customSummary || null,
        quotes: quotes || [],
        transcript: transcript || '',
        title: title || '',
        description: description || '',
        done: Boolean(done),
        videoLink: videoLink || '',
    }
}
