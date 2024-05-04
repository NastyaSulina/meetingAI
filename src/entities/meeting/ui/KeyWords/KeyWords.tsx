import React, { FC } from 'react'
import { Highlights, HighlightsType, HighlightsSize } from '@/shared/ui'
import { KeyWords as KeyWordsType } from '../../model/types'
import styles from './KeyWords.module.scss'

export const KeyWords: FC<{ keyWords: KeyWordsType }> = ({ keyWords }) => {
    return (
        <div className={styles.root}>
            {keyWords.map((keyWord) => {
                const randomHighlightsType =
                    Object.values(HighlightsType)[
                        Math.floor(Math.random() * Object.values(HighlightsType).length)
                    ]
                return (
                    <Highlights
                        highlightsType={randomHighlightsType}
                        highlightsSize={HighlightsSize.little}
                        text={keyWord}
                        key={keyWord}
                    />
                )
            })}
        </div>
    )
}
