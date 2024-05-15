import React, { FC } from 'react'
import { Highlight, HighlightSize, HighlightType } from '@/shared/ui'
import styles from './ChatMessages.module.scss'
import { ChatMessages as ChatMessagesType } from '../../model/types'

export const ChatMessages: FC<{ chatMessages: ChatMessagesType }> = ({ chatMessages }) => {
    return (
        <div className={styles.root}>
            {chatMessages.map((item, key) => (
                <div className={styles.item} key={key}>
                    <Highlight
                        text={item.participant}
                        highlightSize={HighlightSize.little}
                        highlightType={Object.values(HighlightType)[item.participantId]}
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
