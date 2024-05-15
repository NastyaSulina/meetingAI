import React, { FC } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton'
import styles from './Summary.module.scss'

export const SummarySkeleton: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.formHeader}>
                <h2 className={styles.header}>Резюме</h2>

                <div className={styles.buttonGroup}>
                    {[...Array(3)].map((_, key) => (
                        <Skeleton width={30} height={30} radius={50} isDark key={key} />
                    ))}
                </div>
            </div>

            <Skeleton height={464} isDark isFullScreen />
        </div>
    )
}
