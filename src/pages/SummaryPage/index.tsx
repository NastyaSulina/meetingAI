import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { checkIsValidId } from '../../shared/utils'
import styles from './SummaryPage.module.scss'
import { KeyWords } from '../../entities/KeyWords/ui'
import { Menu } from '../../widgets/Menu'

const SummaryPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (!checkIsValidId(id)) {
            navigate('/error')
        }
    }, [id])

    return (
        <div className={styles.root}>
            <Menu />
            <div className={styles.info}>
                <KeyWords id={id} />
            </div>
        </div>
    )
}

export default SummaryPage
