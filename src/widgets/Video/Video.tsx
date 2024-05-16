/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable global-require */
import React, { FC } from 'react'
import { Button, ButtonType } from '@/shared/ui'
import styles from './Video.module.scss'

export const Video: FC<{ videoLink: string }> = ({ videoLink }) => {
    const downloadVideo = async (e: any) => {
        e.preventDefault()

        const link = document.createElement('a')
        const url = videoLink

        link.href = url
        link.download = 'meeting.mp4'
        link.target = '_blank'
        link.click()
    }

    return (
        <div className={styles.root}>
            <video
                className={styles.movie}
                src={videoLink}
                controls
                poster={require('/src/widgets/Video/_assets/poster.png')}
            />
            <div className={styles.buttonContainer}>
                <Button
                    buttonType={ButtonType.black}
                    text='Скачать видео'
                    onClick={downloadVideo}
                />
            </div>
        </div>
    )
}
