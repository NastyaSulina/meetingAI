import React, { FC } from 'react'
import styles from './Video.module.scss'

export const Video: FC<{ videoLink: string }> = ({ videoLink }) => {
    return (
        <div className={styles.root}>
            <video src={videoLink} controls />
        </div>
    )
}
