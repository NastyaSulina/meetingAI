import React, { FC } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton'
import styles from './Video.module.scss'

export const VideoSkeleton: FC = () => {
    return (
        <div className={styles.root}>
            <Skeleton isFullScreen height={335} isDark />
            <div className={styles.buttonContainer}>
                <Skeleton width={198} height={46} isDark />
            </div>
        </div>
    )
}
