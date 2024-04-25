import React, { FC } from 'react'
import { Highlights, HighlightsType, HighlightsSize, Text, TextType } from '@/shared/ui'
import { MeetingInfo as MeetingInfoType } from '../../model/types'
import styles from './MeetingInfo.module.scss'

export const MeetingInfo: FC<MeetingInfoType> = ({ date, duration, participants }) => {
    return (
        <div className={styles.root}>
            <div className={styles.infoWrapper}>
                <Text textType={TextType.bodyParagraph} text='→ Дата встречи' />
                <Text textType={TextType.header} text={date} />
            </div>
            <div className={styles.infoWrapper}>
                <Text textType={TextType.bodyParagraph} text='→ Длительность встречи' />
                <Text textType={TextType.header} text={duration} />
            </div>
            <div className={styles.infoWrapper}>
                <Text textType={TextType.bodyParagraph} text='→ Участники' />
                <div className={styles.participants}>
                    {participants.map((participant, key) => (
                        <Highlights
                            key={key}
                            highlightsType={HighlightsType.stroke}
                            highlightsSize={HighlightsSize.little}
                            text={participant}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
