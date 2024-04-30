import { Skeleton } from '@/shared/ui/Skeleton'
import React from 'react'
import styles from './Quotes.module.scss'

export const QuotesSkeleton = () => (
    <div className={styles.root}>
        {[...Array(2)].map(() => (
            <Skeleton height={120} width={445} isDark />
        ))}
    </div>
)
