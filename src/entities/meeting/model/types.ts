export type KeyWords = Array<string>
export type Quotes = Array<string>
export type Transcript = {
    transcript: string
}

export type MeetingInfo = {
    date: string
    duration: string
    participants: Array<string>
    description: string
}

export type Summary = { generatedText: string; userText: string | null }
