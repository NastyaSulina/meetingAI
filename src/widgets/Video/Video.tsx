/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC } from 'react'
import { Button, ButtonType } from '@/shared/ui'
import styles from './Video.module.scss'

export const Video: FC<{ videoLink: string }> = ({ videoLink }) => {
    return (
        <div className={styles.root}>
            <video className={styles.movie} src={videoLink} controls />
            <div className={styles.buttonContainer}>
                <Button buttonType={ButtonType.black} text='Скачать видео' onClick={() => {}} />
            </div>
        </div>
    )
}
