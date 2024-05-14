import React, { ReactNode, FC, useState } from 'react'
import { Button, ButtonType } from '@/shared/ui'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './Form.module.scss'

export const Form: FC<{ children: ReactNode }> = ({ children }) => {
    const methods = useForm()
    const [success, setSuccess] = useState(false)

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data)

        methods.reset()
        setSuccess(true)
    })

    return (
        <FormProvider {...methods}>
            <form
                className={styles.root}
                onSubmit={(e) => e.preventDefault()}
                noValidate
                autoComplete='off'
            >
                <div className={styles.inputs}>{children}</div>
                <div>
                    {success && <p className={styles.success}>Спасибо за обратную связь!</p>}
                    <Button buttonType={ButtonType.white} text='Отправить' onClick={onSubmit} />
                </div>
            </form>
        </FormProvider>
    )
}
