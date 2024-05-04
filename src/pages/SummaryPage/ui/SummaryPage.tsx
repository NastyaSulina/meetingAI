import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '@/app/appStore'
import { KeyWords, KeyWordsSkeleton } from '@/entities/meeting/ui/KeyWords'
import MeetingInfo from '@/entities/meeting/ui/MeetingInfo'
import { fetchMeeting } from '@/entities/meeting/api/fetchMeeting'
import { Summary, Menu, Video, Footer, Transcript } from '@/widgets'
import cn from 'classnames'
import { DropDown } from '@/shared/ui'
import { Quotes, QuotesSkeleton } from '@/entities/meeting/ui/Quotes'
import { transformMeetingData } from '@/entities/meeting/model/transform'
import { setMeeting } from '@/entities/meeting/model/slice'
import { useDispatch } from 'react-redux'
import { SummarySkeleton } from '@/widgets/Summary'
import { Skeleton } from '@/shared/ui/Skeleton'
import { TranscriptSkeleton } from '@/widgets/Transcript'
import { VideoSkeleton } from '@/widgets/Video'
import styles from './SummaryPage.module.scss'

export const SummaryPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const meeting = useAppSelector((state) => state.meeting)
    const {
        keyWords,
        participants,
        date,
        duration,
        summary,
        quotes,
        transcript,
        title,
        description,
        done,
        videoLink,
    } = meeting

    // TODO: вынести в middleware?
    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null

        const fetchAndProcessMeeting = async () => {
            try {
                const response = await fetchMeeting(id)
                console.log('Ответ от сервера:', response)
                console.log('Done', done)

                if (response) {
                    dispatch(setMeeting(transformMeetingData(response)))

                    if (!response.done) {
                        timeoutId = setTimeout(fetchAndProcessMeeting, 10000)
                    } else {
                        clearTimeout(timeoutId)
                        timeoutId = null
                    }
                } else {
                    navigate('/error')
                }
            } catch (error) {
                console.error('Error fetching meeting:', error)
            }
        }

        fetchAndProcessMeeting()

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [id, done])

    return (
        <div className={styles.root}>
            <Menu />

            <div className={styles.content}>
                <h1 className={cn(styles.pageTitle, !done && styles.loading)}>
                    {done ? 'Итоги встречи:' : 'Загрузка...'}
                </h1>
                <h2 className={styles.meetingTitle}>
                    {title || <Skeleton width={300} height={27.5} />}
                </h2>

                {quotes.length === 0 ? <KeyWordsSkeleton /> : <KeyWords keyWords={keyWords} />}

                <div className={styles.wrapper}>
                    <MeetingInfo
                        participants={participants}
                        date={date}
                        duration={duration}
                        description={description}
                    />
                    <div className={styles.videoContainer}>
                        {videoLink ? <Video videoLink={videoLink} /> : <VideoSkeleton />}
                    </div>
                </div>
            </div>

            <div className={styles.grayScreen} data-aos='fade-in'>
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        {summary.generatedText ? (
                            <Summary
                                userText={summary.userText}
                                generatedText={summary.generatedText}
                            />
                        ) : (
                            <SummarySkeleton />
                        )}
                        {quotes.length === 0 ? <QuotesSkeleton /> : <Quotes quotes={quotes} />}
                    </div>
                </div>
            </div>

            <DropDown header='Полная текстовая расшифровка' number={3}>
                {transcript ? <Transcript transcript={transcript} /> : <TranscriptSkeleton />}
            </DropDown>
            <DropDown header='Zoom-чат (В разработке)' number={4} />

            <Footer />
        </div>
    )
}
