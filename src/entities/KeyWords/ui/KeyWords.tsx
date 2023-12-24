import React, { FC, useState, useEffect } from 'react'
import { Highlights, HighlightsType, Text, TextType } from '../../../shared/components'
import { getKeyWords } from '../api/getKeyWords'
import styles from './KeyWords.module.scss'

export const KeyWords: FC<{ id: string }> = ({ id }) => {
    const [keyWordsList, setkeyWordsList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await getKeyWords(id)

            setkeyWordsList(response?.keyWords ?? [])
        }

        fetchData().then(() => {})
    }, [])

    return (
        <>
            {keyWordsList.length > 0 ? (
                <Text text='Ключевые слова' textType={TextType.header} />
            ) : (
                <Text text='Упс! Такой встречи нет' textType={TextType.header} />
            )}
            <div className={styles.root}>
                {keyWordsList.map((keyWord) => (
                    <Highlights
                        highlightsType={HighlightsType.stroke}
                        text={keyWord}
                        key={keyWord}
                    />
                ))}
            </div>
        </>
    )
}
