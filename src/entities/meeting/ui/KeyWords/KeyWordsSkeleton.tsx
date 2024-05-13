import { Skeleton } from '@/shared/ui/Skeleton'
import React from 'react'
import styles from './KeyWords.module.scss'

export const KeyWordsSkeleton = () => (
    <div className={styles.root}>
        {[...Array(8)].map((_, key) => (
            <Skeleton height={36} width={100 + (key % 4) * 40} key={key} />
        ))}
    </div>
)
