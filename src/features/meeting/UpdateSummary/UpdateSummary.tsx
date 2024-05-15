import React, { FC, useState } from 'react'
import { Button, ButtonType } from '@/shared/ui'
import { useDispatch } from 'react-redux'
import { setUserSummary } from '@/entities/meeting/model/slice'
import { useChangeUserSummaryMutation } from '@/entities/meeting/api/meetingApi'
import { useAppSelector } from '@/app/appStore'
import { FormProvider, useForm } from 'react-hook-form'

import { ValidationType } from '@/shared/ui/Input/model/validation'
import { Summary } from '@/entities/meeting/ui/Summary'
import styles from './UpdateSummary.module.scss'

export const summaryValidation = {
    label: '',
    multiline: true,
    id: 'summary',
    name: 'summary',
    placeholder: '',
    isEnlarged: true,
    isWhite: true,
    validation: {
        [ValidationType.Required]: {
            value: true,
            message: 'Это поле обязательно для заполнения',
        },
    },
}

export const UpdateSummary: FC = () => {
    const [isEditing, setIsEditing] = useState(false)

    const meeting = useAppSelector((state) => state.meeting)
    const { id, generatedText } = meeting

    const dispatch = useDispatch()
    const methods = useForm()

    const [changeUserSummary] = useChangeUserSummaryMutation()

    const handleResetClick = (event: MouseEvent) => {
        event.preventDefault()

        changeUserSummary({ id, userText: null })
        dispatch(setUserSummary(null))

        const summaryElement = document.getElementById('summary') as HTMLInputElement
        summaryElement.value = generatedText
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
        <FormProvider {...methods}>
            <form
                className={styles.root}
                onSubmit={(e) => e.preventDefault()}
                noValidate
                autoComplete='off'
            >
                <Summary
                    readOnly={!isEditing}
                    handleResetClick={handleResetClick}
                    handleCopyClick={handleCopyClick}
                    handleEditClick={() => setIsEditing(!isEditing)}
                    validation={summaryValidation}
                />

                {isEditing && (
                    <div className={styles.submitButton}>
                        <Button buttonType={ButtonType.black} text='Отправить' onClick={onSubmit} />
                    </div>
                )}
            </form>
        </FormProvider>
    )
}
