import React, { FC, useState } from 'react'
import { Input, Button, ButtonType, IconButton, IconButtonType } from '@/shared/ui'
import { useDispatch } from 'react-redux'
import { setUserSummary } from '@/entities/meeting/model/slice'
import { Summary as SummaryType } from '@/entities/meeting/model/types'
import { useChangeUserSummaryMutation } from '@/entities/meeting/api/meetingApi'
import { useAppSelector } from '@/app/appStore'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './Summary.module.scss'
import { summaryValidation } from './model/validation'

export const Summary: FC<SummaryType> = ({ userText, generatedText }) => {
    const meeting = useAppSelector((state) => state.meeting)
    const { id } = meeting

    const summary = userText || generatedText
    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useDispatch()
    const methods = useForm()
    const [changeUserSummary] = useChangeUserSummaryMutation()

    const handleResetClick = (event: MouseEvent) => {
        event.preventDefault()

        changeUserSummary({ id, userText: null })
        dispatch(setUserSummary(null))
    }

    const handleCopyClick = (event: MouseEvent) => {
        event.preventDefault()

        const summaryElement = document.getElementById('summary')
        const summaryTextValue = summaryElement.textContent

        navigator.clipboard.writeText(summaryTextValue)
    }

    const onSubmit = methods.handleSubmit((data) => {
        changeUserSummary({ id, userText: data.summary })
        dispatch(setUserSummary(data.summary))

        setIsEditing(false)
    })

    return (
        <div className={styles.root} data-test-id='summary'>
            <FormProvider {...methods}>
                <form
                    className={styles.form}
                    onSubmit={(e) => e.preventDefault()}
                    noValidate
                    autoComplete='off'
                >
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

                    <Input {...summaryValidation} readOnly={!isEditing} defaultValue={summary} />

                    {isEditing && (
                        <div className={styles.submitButton}>
                            <Button
                                buttonType={ButtonType.black}
                                text='Отправить'
                                onClick={onSubmit}
                            />
                        </div>
                    )}
                </form>
            </FormProvider>
        </div>
    )
}
