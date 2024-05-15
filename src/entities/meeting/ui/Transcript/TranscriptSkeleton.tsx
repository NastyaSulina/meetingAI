import React, { FC } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton'
import styles from './Transcript.module.scss'

export const TranscriptSkeleton: FC = () => {
    return (
        <div className={styles.root}>
            <Skeleton width={700} height={464} />

            <div className={styles.buttonContainer}>
                <Skeleton width={198} height={46} />
            </div>
        </div>
    )
}
