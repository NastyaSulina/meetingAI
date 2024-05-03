import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/app/appStore'
import { KeyWords, KeyWordsSkeleton } from '@/entities/meeting/ui/KeyWords'
import MeetingInfo from '@/entities/meeting/ui/MeetingInfo'
import { fetchMeeting } from '@/entities/meeting/api/fetchMeeting'
import { Summary, Menu, Video, Footer } from '@/widgets'
import { Button, ButtonType } from '@/shared/ui'
import { Quotes, QuotesSkeleton } from '@/entities/meeting/ui/Quotes'
import { transformMeetingData } from '@/entities/meeting/model/transform'
import { setMeeting } from '@/entities/meeting/model/slice'
import { useDispatch } from 'react-redux'
import styles from './SummaryPage.module.scss'

export const SummaryPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    // TODO: вынести в middleware?
    useEffect(() => {
        async function fetchData() {
            const response = await fetchMeeting(id)

            return response
        }

        fetchData().then((response) => dispatch(setMeeting(transformMeetingData(response))))
    }, [id])

    const meeting = useAppSelector((state) => state.meeting)
    const { keyWords, participants, date, duration, summary, quotes } = meeting

    return (
        <div className={styles.root}>
            <Menu />

            <div className={styles.content}>
                <h1 className={styles.title}>Итоги встречи</h1>

                {quotes.length === 0 ? <KeyWordsSkeleton /> : <KeyWords keyWords={keyWords} />}

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
            </div>

            <div className={styles.grayScreen}>
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        <Summary userText={summary.userText} originalText={summary.originalText} />
                        {quotes.length === 0 ? <QuotesSkeleton /> : <Quotes quotes={quotes} />}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
