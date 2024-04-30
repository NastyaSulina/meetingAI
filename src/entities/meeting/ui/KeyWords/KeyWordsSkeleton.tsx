import { Skeleton } from '@/shared/ui/Skeleton'
import React from 'react'
import styles from './KeyWords.module.scss'

export const KeyWordsSkeleton = () => (
    <div className={styles.root}>
        {[...Array(6)].map(() => (
            <Skeleton height={36} width={176} />
        ))}
    </div>
)
