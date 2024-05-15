import React, { FC } from 'react'
import { Button, ButtonType } from '@/shared/ui'
import { Transcript as TranscriptType } from '@/entities/meeting/model/types'

import styles from './Transcript.module.scss'

export const Transcript: FC<TranscriptType & { onClick: () => void; buttonText: string }> = ({
    transcript,
    buttonText,
    onClick,
}) => {
    return (
        <div className={styles.root}>
            <div className={styles.textContainer}>{transcript}</div>
            <div className={styles.buttonContainer}>
                <Button buttonType={ButtonType.black} text={buttonText} onClick={onClick} />
            </div>
        </div>
    )
}
