import React, { FC } from 'react'
import { Text, TextType } from '@/shared/ui'
import { Quotes as QuotesType } from '../../model/types'
import styles from './Quotes.module.scss'
import { QuotesSkeleton } from './QuotesSkeleton'

export const Quotes: FC<{ quotes: QuotesType }> = ({ quotes }) => {
    return (
        <div className={styles.root}>
            <Text textType={TextType.header} text='Ключевые цитаты' />
            {quotes.length === 0 ? (
                <QuotesSkeleton />
            ) : (
                quotes.map((quote, index) => (
                    <div className={styles.card} key={index}>
                        <Text textType={TextType.subhead} text={quote} />
                    </div>
                ))
            )}
        </div>
    )
}
