import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import checkIsValidId from '../../shared/checkIsValidId'
import styles from './SummaryPage.module.scss'

const SummaryPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (!checkIsValidId(id)) {
            navigate('/error')
        }
    }, [id])

    return <div className={styles.root}>Это страница итогов! Id is 👉️ {id}</div>
}

export default SummaryPage
