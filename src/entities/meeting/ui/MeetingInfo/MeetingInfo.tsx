import React, { FC } from 'react'
import { Highlights, HighlightsType, HighlightsSize } from '@/shared/ui'
import { MeetingInfo as MeetingInfoType } from '../../model/types'
import styles from './MeetingInfo.module.scss'

export const MeetingInfo: FC<MeetingInfoType> = ({ date, duration, participants }) => {
    const INFORMATION_ITEMS = [
        {
            subtitle: '→ Дата встречи',
            info: date,
        },
        {
            subtitle: '→ Длительность встречи',
            info: duration,
        },
        {
            subtitle: '→ Участники',
            info: participants,
        },
    ]

    return (
        <div className={styles.root}>
            {INFORMATION_ITEMS.map((item) => (
                <div className={styles.infoWrapper} key={item.subtitle}>
                    {!!item.info && [
                        <span className={styles.subtitle}>{item.subtitle}</span>,

                        Array.isArray(item.info) ? (
                            <span className={styles.participants}>
                                {item.info.map((participant, key) => (
                                    <Highlights
                                        key={key}
                                        highlightsType={HighlightsType.stroke}
                                        highlightsSize={HighlightsSize.little}
                                        text={participant}
                                    />
                                ))}
                            </span>
                        ) : (
                            <span className={styles.info}>{item.info}</span>
                        ),
                    ]}
                </div>
            ))}
        </div>
    )
}
