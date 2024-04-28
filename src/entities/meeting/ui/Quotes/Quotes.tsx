import React, { FC } from 'react'
import { Text, TextType } from '@/shared/ui'
import { Quotes as QuotesType } from '../../model/types'
import styles from './Quotes.module.scss'

export const Quotes: FC<{ quotes: QuotesType }> = ({ quotes }) => {
    return (
        <div className={styles.root}>
            <Text textType={TextType.header} text='Ключевые цитаты' />
            {quotes.map((quote, index) => (
                <div className={styles.card} key={index}>
                    <Text textType={TextType.subhead} text={quote} />
                </div>
            ))}
        </div>
    )
}
