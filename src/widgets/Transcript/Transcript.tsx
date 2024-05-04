import React, { FC } from 'react'
import { Input, InputType, Button, ButtonType } from '@/shared/ui'
import { Transcript as TranscriptType } from '@/entities/meeting/model/types'
import styles from './Transcript.module.scss'

export const Transcript: FC<TranscriptType> = ({ transcript }) => {
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
                <Button buttonType={ButtonType.black} text='Скачать PDF' onClick={() => {}} />
            </div>
        </div>
    )
}
