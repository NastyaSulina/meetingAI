import { Skeleton } from '@/shared/ui/Skeleton'
import React from 'react'
import styles from './Quotes.module.scss'

export const QuotesSkeleton = () => (
    <div className={styles.root}>
        <h2 className={styles.header}>Ключевые цитаты</h2>

        <Skeleton height={120} width={445} isDark />
        <Skeleton height={80} width={445} isDark />
    </div>
)
