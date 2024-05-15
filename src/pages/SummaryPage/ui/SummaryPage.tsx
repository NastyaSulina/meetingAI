import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '@/app/appStore'
import { KeyWords, KeyWordsSkeleton } from '@/entities/meeting/ui/KeyWords'
import MeetingInfo from '@/entities/meeting/ui/MeetingInfo'
import { useGetMeetingByIdQuery } from '@/entities/meeting/api/meetingApi'
import { Menu, Video, Footer } from '@/widgets'
import { DropDown } from '@/shared/ui'
import { Quotes, QuotesSkeleton } from '@/entities/meeting/ui/Quotes'
import { transformMeetingData } from '@/entities/meeting/model/transform'
import { setMeeting } from '@/entities/meeting/model/slice'
import { useDispatch } from 'react-redux'
import { SummarySkeleton } from '@/entities/meeting/ui/Summary'
import { Skeleton } from '@/shared/ui/Skeleton'
import { TranscriptSkeleton } from '@/entities/meeting/ui/Transcript'
import { VideoSkeleton } from '@/widgets/Video'
import { checkIsValidId } from '@/shared/utils'
import { ChatMessages } from '@/entities/meeting/ui/ChatMessages'
import { DownloadTranscript } from '@/features/meeting/DownloadTranscript'
import { UpdateSummary } from '@/features/meeting/UpdateSummary'
import styles from './SummaryPage.module.scss'

export const SummaryPage = () => {
    const meeting = useAppSelector((state) => state.meeting)
    const {
        keyWords,
        participants,
        date,
        duration,
        generatedText,
        quotes,
        transcript,
        title,
        description,
        done,
        videoLink,
        chatMessages,
    } = meeting

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (!checkIsValidId(id)) {
            navigate('/error')
        }
    }, [id])

    const { data, isLoading } = useGetMeetingByIdQuery(id, {
        pollingInterval: 1000,
        skip: done,
    })

    useEffect(() => {
        if (data) {
            dispatch(setMeeting(transformMeetingData(data)))
        } else if (!isLoading && process.env.NODE_ENV !== 'development') {
            navigate('/error')
        }
    }, [data, isLoading])

    return (
        <div className={styles.root}>
            <Menu />

            <div className={styles.content}>
                <h1 className={styles.pageTitle}>Итоги встречи:</h1>
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
                        {generatedText ? <UpdateSummary /> : <SummarySkeleton />}
                        {quotes.length === 0 ? <QuotesSkeleton /> : <Quotes quotes={quotes} />}
                    </div>
                </div>
            </div>

            <DropDown header='Полная расшифровка' number={3}>
                {transcript ? (
                    <DownloadTranscript transcript={transcript} title={title} date={date} />
                ) : (
                    <TranscriptSkeleton />
                )}
            </DropDown>
            <DropDown header='Zoom-чат' number={4}>
                <ChatMessages chatMessages={chatMessages} />
            </DropDown>

            <Footer />
        </div>
    )
}
