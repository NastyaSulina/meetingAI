import React, { FC, useState } from 'react'
import { Input, InputType, Button, ButtonType, IconButton, IconButtonType } from '@/shared/ui'
import { useDispatch } from 'react-redux'
import { setSummary } from '@/entities/meeting/model/slice'
import { Summary as SummaryType } from '@/entities/meeting/model/types'
import styles from './Summary.module.scss'
import { mutateUserSummary } from '@/entities/meeting/api/meetingApi'
import { useAppSelector } from '@/app/appStore'

export const Summary: FC<SummaryType> = ({ userText, generatedText }) => {
    const dispatch = useDispatch()

    const [summary, setLocalSummary] = useState(userText || generatedText)
    const [isEditing, setIsEditing] = useState(false)

    const meeting = useAppSelector((state) => state.meeting)
    const { id } = meeting

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = event.target

        setLocalSummary(value)
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        dispatch(setSummary(summary))
        mutateUserSummary(id, summary)
        setIsEditing(false)
    }

    const handleResetClick = (event: MouseEvent) => {
        event.preventDefault()

        dispatch(setSummary(generatedText))
        setLocalSummary(generatedText)
        mutateUserSummary(id, null)
    }

    const handleCopyClick = (event: MouseEvent) => {
        event.preventDefault()

        navigator.clipboard.writeText(summary)
    }

    return (
        <div className={styles.root} data-test-id='summary'>
            <form className={styles.form} onSubmit={handleFormSubmit}>
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
                            onClick={() => setIsEditing(!isEditing)}
                            ariaLabel='Редактировать резюме встречи'
                        />
                        <IconButton
                            iconButtonType={IconButtonType.reset}
                            onClick={handleResetClick}
                            ariaLabel='Вернуться к оригинальному тексту резюме встречи'
                        />
                    </div>
                </div>

                <Input
                    inputType={InputType.textarea}
                    label=''
                    inputName='summary'
                    isWhite
                    value={summary}
                    onInputChange={handleInputChange}
                    id='summary'
                    required
                    isEnlarged
                    readOnly={!isEditing}
                />
            </form>

            {isEditing && (
                <div className={styles.submitButton}>
                    <Button
                        buttonType={ButtonType.black}
                        text='Отправить'
                        onClick={handleFormSubmit}
                    />
                </div>
            )}
        </div>
    )
}
