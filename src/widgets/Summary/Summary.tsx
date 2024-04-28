import React, { FC, useState, useEffect } from 'react'
import {
    Input,
    InputType,
    Button,
    ButtonType,
    IconButton,
    IconButtonType,
    Text,
    TextType,
} from '@/shared/ui'
import { useDispatch } from 'react-redux'
import { setSummary } from '@/entities/meeting/model/slice'
import { Summary as SummaryType } from '@/entities/meeting/model/types'
import styles from './Summary.module.scss'

export const Summary: FC<SummaryType> = ({ userText, originalText }) => {
    const dispatch = useDispatch()

    const [summary, setLocalSummary] = useState(userText)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        setLocalSummary(originalText)
    }, [originalText])

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = event.target

        setLocalSummary(value || userText)
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        dispatch(setSummary(summary))
        setIsEditing(false)
    }

    const handleResetClick = (event: MouseEvent) => {
        event.preventDefault()

        dispatch(setSummary(originalText))
        setLocalSummary(originalText)
    }

    const handleCopyClick = (event: MouseEvent) => {
        event.preventDefault()

        navigator.clipboard.writeText(summary)
    }

    return (
        <div className={styles.root}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <div className={styles.formHeader}>
                    <Text textType={TextType.header} text='Резюме' />
                    <div className={styles.buttonGroup}>
                        <IconButton
                            iconButtonType={IconButtonType.copy}
                            onClick={handleCopyClick}
                            ariaLabel='Скопировать резюме встречи в буфер обмена'
                        />
                        <IconButton
                            iconButtonType={IconButtonType.edit}
                            onClick={() => setIsEditing(true)}
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

                {isEditing && (
                    <Button
                        buttonType={ButtonType.black}
                        text='Отправить'
                        onClick={handleFormSubmit}
                    />
                )}
            </form>
        </div>
    )
}
