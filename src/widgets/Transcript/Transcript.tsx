import React, { FC } from 'react'
import { Input, InputType, Button, ButtonType } from '@/shared/ui'
import { jsPDF } from 'jspdf'
import { Transcript as TranscriptType } from '@/entities/meeting/model/types'

import styles from './Transcript.module.scss'

export const Transcript: FC<TranscriptType> = ({ transcript }) => {
    const handleDownloadPdf = async () => {
        const Doc = new jsPDF()

        Doc.text('Hello, world!', 20, 20)

        Doc.addFont('/src/app/fonts/SuisseIntl-Regular.woff2', 'SuisseIntl', 'normal')
        Doc.setFont('SuisseIntl')
        Doc.save('transcript.pdf')
    }

    const buttonProps = {
        buttonType: ButtonType.black,
        text: 'Скачать PDF',
        onClick: handleDownloadPdf,
    }

    return (
        <div className={styles.root}>
            <Input
                inputType={InputType.textarea}
                label=''
                inputName='transcript'
                isWhite
                value={transcript}
                onInputChange={() => {}}
                id='transcript'
                required
                isEnlarged
                readOnly
            />

            <div className={styles.buttonContainer}>
                <Button {...buttonProps} />
            </div>
        </div>
    )
}
