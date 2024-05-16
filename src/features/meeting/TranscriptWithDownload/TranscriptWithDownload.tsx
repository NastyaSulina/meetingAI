/* eslint-disable new-cap */
import React, { FC } from 'react'
import { jsPDF } from 'jspdf'
import { Transcript as TranscriptType } from '@/entities/meeting/model/types'
import '../../../../public/fonts/Roboto-Regular-normal'
import { Transcript } from '@/entities/meeting/ui/Transcript'

export const TranscriptWithDownload: FC<TranscriptType & { title: string; date: string }> = ({
    transcript,
    title,
    date,
}) => {
    const handleDownloadPdf = async () => {
        const Doc = new jsPDF({
            orientation: 'portrait',
            format: 'a4',
            unit: 'px',
        })
        Doc.addFont('Roboto-Regular-normal.ttf', 'Roboto-Regular', 'normal')
        Doc.setFont('Roboto-Regular')

        const splitText = Doc.splitTextToSize(transcript, 440)

        Doc.setFontSize(16)
        Doc.text(title, 50, 40)

        Doc.setFontSize(10)
        Doc.text(date, 50, 55)

        Doc.setFontSize(12)

        let currentY = 90
        for (let i = 0; i < splitText.length; i++) {
            if (currentY > 560) {
                Doc.addPage()
                currentY = 40
            }

            Doc.text(splitText[i], 50, currentY)
            currentY += 15
        }

        Doc.save('transcript.pdf')
    }

    return (
        <Transcript transcript={transcript} buttonText='Скачать PDF' onClick={handleDownloadPdf} />
    )
}
