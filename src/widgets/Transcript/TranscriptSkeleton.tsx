import React, { FC } from 'react'
import styles from './Transcript.module.scss'
import { Skeleton } from '@/shared/ui/Skeleton'

export const TranscriptSkeleton: FC = () => {
    return (
        <div className={styles.root}>
            <h2 className={styles.header}>Расшифровка встречи</h2>

            <Skeleton width={700} height={464} />

            <div className={styles.buttonContainer}>
                <Skeleton width={198} height={46} />
            </div>
        </div>
    )
}
