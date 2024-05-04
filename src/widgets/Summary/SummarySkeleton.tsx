import React, { FC } from 'react'
import styles from './Summary.module.scss'
import { Skeleton } from '@/shared/ui/Skeleton'

export const SummarySkeleton: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.form}>
                <div className={styles.formHeader}>
                    <h2 className={styles.header}>Резюме</h2>
                    <div className={styles.buttonGroup}>
                        {[...Array(3)].map(() => (
                            <Skeleton width={30} height={30} radius={50} isDark />
                        ))}
                    </div>
                </div>

                <Skeleton width={443} height={464} isDark />
            </div>
        </div>
    )
}
