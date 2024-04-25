import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/app/appStore'
import KeyWords from '@/entities/meeting/ui/KeyWords'
import MeetingInfo from '@/entities/meeting/ui/MeetingInfo'
import { Menu } from '@/widgets/Menu'
import { fetchMeeting } from '@/entities/meeting/api/fetchMeeting'
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
    const { keyWords, participants, date, duration } = meeting

    return (
        <div className={styles.root}>
            <Menu />

            <div className={styles.content}>
                <h1 className={styles.title}>Итоги встречи</h1>
                <KeyWords keyWords={keyWords} />
                <MeetingInfo participants={participants} date={date} duration={duration} />
            </div>
        </div>
    )
}
