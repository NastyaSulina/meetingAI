import React, { FC } from 'react'
import { Quotes as QuotesType } from '../../model/types'
import styles from './Quotes.module.scss'

export const Quotes: FC<{ quotes: QuotesType }> = ({ quotes }) => {
    return (
        <div className={styles.root}>
            <h2 className={styles.header}>Ключевые цитаты</h2>
            {quotes.map((quote, index) => (
                <div className={styles.card} key={index}>
                    <span className={styles.text}>{quote}</span>
                </div>
            ))}
        </div>
    )
}
