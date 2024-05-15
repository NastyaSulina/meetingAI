import React, { FC } from 'react'
import { Highlight, HighlightType, HighlightSize } from '@/shared/ui'
import { MeetingInfo as MeetingInfoType } from '../../model/types'
import styles from './MeetingInfo.module.scss'

export const MeetingInfo: FC<MeetingInfoType> = ({ date, duration, participants, description }) => {
    const INFORMATION_ITEMS = [
        {
            subtitle: '→ Дата встречи',
            info: date,
        },
        {
            subtitle: '→ Длительность встречи',
            info: duration,
        },
    ]

    return (
        <div className={styles.root}>
            {INFORMATION_ITEMS.map((item) => {
                return item.info ? (
                    <div className={styles.infoWrapper} key={item.subtitle}>
                        <span className={styles.subtitle}>{item.subtitle}</span>
                        <span className={styles.info}>{item.info}</span>
                    </div>
                ) : null
            })}

            {description && (
                <div className={styles.infoWrapper}>
                    <span className={styles.subtitle}>→ Краткое описание</span>
                    <span className={styles.infoDescription}>{description}</span>
                </div>
            )}

            <div className={styles.infoWrapper}>
                {participants.length !== 0 && [
                    <span className={styles.subtitle}>→ Участники</span>,
                    participants.map((participant, key) => (
                        <Highlight
                            key={key}
                            highlightType={HighlightType.stroke}
                            highlightSize={HighlightSize.little}
                            text={participant}
                        />
                    )),
                ]}
            </div>
        </div>
    )
}
