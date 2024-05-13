import React, { FC } from 'react'
import { Highlights, HighlightsSize, HighlightsType } from '@/shared/ui'
import styles from './Chat.module.scss'

export const Chat: FC<any> = () => {
    const chatList = [
        {
            participant: 'Настя',
            participantId: 0,
            dateTime: '13.05.2024 19:20:51',
            text: 'Думаешь мы успеем допилить Zoom-чат до защиты?',
        },
        {
            participant: 'Поля',
            participantId: 1,
            dateTime: '13.05.2024 19:20:51',
            text: 'Ну..........',
        },
    ]
    return (
        <div className={styles.root}>
            {chatList.map((item) => (
                <div className={styles.item}>
                    <Highlights
                        text={item.participant}
                        highlightsSize={HighlightsSize.little}
                        highlightsType={Object.values(HighlightsType)[item.participantId]}
                    />
                    <div className={styles.textInfo}>
                        <p>{item.text}</p>
                        <span>{item.dateTime}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
