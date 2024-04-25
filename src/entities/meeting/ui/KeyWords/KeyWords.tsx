import React, { FC } from 'react'
import { Highlights, HighlightsType, HighlightsSize } from '../../../../shared/ui'
import { KeyWords as KeyWordsType } from '../../model/types'
import styles from './KeyWords.module.scss'

export const KeyWords: FC<{ keyWords: KeyWordsType }> = ({ keyWords }) => {
    return (
        <div className={styles.root}>
            {keyWords.map((keyWord, index) => (
                <Highlights
                    highlightsType={
                        index === 0
                            ? HighlightsType.gradientFill
                            : index === 1
                              ? HighlightsType.greenFill
                              : HighlightsType.stroke
                    }
                    highlightsSize={HighlightsSize.little}
                    text={keyWord}
                    key={keyWord}
                />
            ))}
        </div>
    )
}
