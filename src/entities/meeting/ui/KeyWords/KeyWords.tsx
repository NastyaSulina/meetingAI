import React, { FC } from 'react'
import { Highlight, HighlightType, HighlightSize } from '@/shared/ui'
import { KeyWords as KeyWordsType } from '../../model/types'
import styles from './KeyWords.module.scss'

export const KeyWords: FC<{ keyWords: KeyWordsType }> = ({ keyWords }) => {
    return (
        <div className={styles.root}>
            {keyWords.map((keyWord) => {
                const highlightType = Object.values(HighlightType)[keyWord.charCodeAt(0) % 4]

                return (
                    <Highlight
                        highlightType={highlightType}
                        highlightSize={HighlightSize.little}
                        text={keyWord}
                        key={keyWord}
                    />
                )
            })}
        </div>
    )
}
