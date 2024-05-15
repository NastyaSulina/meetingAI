import React, { FC, useEffect, useState } from 'react'
import { Input, IconButton, IconButtonType } from '@/shared/ui'
import { useAppSelector } from '@/app/appStore'
import styles from './Summary.module.scss'

type OwnProps = {
    readOnly: boolean
    handleCopyClick: (event: MouseEvent) => void
    handleResetClick: (event: MouseEvent) => void
    handleEditClick: () => void
    validation: any
}

export const Summary: FC<OwnProps> = ({
    readOnly,
    handleCopyClick,
    handleResetClick,
    handleEditClick,
    validation,
}) => {
    const generatedText = useAppSelector((state) => state.meeting.generatedText)
    const userText = useAppSelector((state) => state.meeting.userText)

    // TODO: Не работает reset
    const [localSummary, setLocalSummary] = useState(userText || generatedText)

    useEffect(() => {
        setLocalSummary(userText || generatedText)
    }, [generatedText, userText])

    return (
        <div className={styles.root} data-test-id='summary'>
            <div className={styles.formHeader}>
                <h2 className={styles.header}>Резюме</h2>
                <div className={styles.buttonGroup}>
                    <IconButton
                        iconButtonType={IconButtonType.copy}
                        onClick={handleCopyClick}
                        ariaLabel='Скопировать резюме встречи в буфер обмена'
                    />
                    <IconButton
                        iconButtonType={IconButtonType.edit}
                        onClick={handleEditClick}
                        ariaLabel='Редактировать резюме встречи'
                    />
                    <IconButton
                        iconButtonType={IconButtonType.reset}
                        onClick={handleResetClick}
                        ariaLabel='Вернуться к оригинальному тексту резюме встречи'
                    />
                </div>
            </div>

            <Input {...validation} readOnly={readOnly} defaultValue={localSummary} />
        </div>
    )
}
