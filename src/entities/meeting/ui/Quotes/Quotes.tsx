import React, { FC } from 'react'
import { Quotes as QuotesType } from '../../model/types'
import styles from './Quotes.module.scss'
import { QuotesSkeleton } from './QuotesSkeleton'

export const Quotes: FC<{ quotes: QuotesType }> = ({ quotes }) => {
    return (
        <div className={styles.root}>
            <h2 className={styles.header}>Ключевые цитаты</h2>
            {quotes.length === 0 ? (
                <QuotesSkeleton />
            ) : (
                quotes.map((quote, index) => (
                    <div className={styles.card} key={index}>
                        <span className={styles.text}>{quote}</span>
                    </div>
                ))
            )}
        </div>
    )
}
