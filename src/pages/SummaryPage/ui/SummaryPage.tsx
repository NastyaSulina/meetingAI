import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/app/appStore'
import KeyWords from '@/entities/meeting/ui/KeyWords'
import MeetingInfo from '@/entities/meeting/ui/MeetingInfo'
import { fetchMeeting } from '@/entities/meeting/api/fetchMeeting'
import { Summary, Menu, Video } from '@/widgets'
import { Button, ButtonType } from '@/shared/ui'
import styles from './SummaryPage.module.scss'

export const SummaryPage = () => {
    const { id } = useParams()

    // TODO: вынести в middleware?
    useEffect(() => {
        async function fetchData() {
            const response = await fetchMeeting(id)

            return response
        }

        fetchData().then((response) => console.log(response))
    }, [])

    const meeting = useAppSelector((state) => state.meeting)
    const { keyWords, participants, date, duration, summary } = meeting

    return (
        <div className={styles.root}>
            <Menu />

            <div className={styles.content}>
                <h1 className={styles.title}>Итоги встречи</h1>

                <KeyWords keyWords={keyWords} />

                <div className={styles.wrapper}>
                    <MeetingInfo participants={participants} date={date} duration={duration} />
                    <div className={styles.videoContainer}>
                        <Video />
                        <Button
                            buttonType={ButtonType.black}
                            text='Скачать видео'
                            onClick={() => {}}
                        />
                    </div>
                </div>

                <Summary text={summary.text} originalText={summary.originalText} />
            </div>
        </div>
    )
}
