import React, { FC, useState } from 'react'
import { Logo, Input, Button, ButtonType } from '@/shared/ui'
import { useForm, FormProvider } from 'react-hook-form'
import { emailValidation, letterValidation, nameValidation } from '@/shared/ui/Input/Input.config'
import styles from './Footer.module.scss'

type Props = {
    withForm?: boolean
}

export const Footer: FC<Props> = ({ withForm = false }) => {
    const methods = useForm()
    const [success, setSuccess] = useState(false)

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data)

        methods.reset()
        setSuccess(true)
    })

    return (
        <div id='footer' className={styles.root} data-test-id='footer'>
            <div className={styles.footerContainer}>
                {withForm && (
                    <>
                        <div className={styles.headerContainer}>
                            <h2 className={styles.header}>Обратная связь</h2>
                            <span className={styles.info}>
                                Напишите нам, если у вас есть вопросы по работе программы или любые
                                другие предложения
                            </span>
                        </div>
                        <FormProvider {...methods}>
                            <form
                                className={styles.form}
                                onSubmit={(e) => e.preventDefault()}
                                noValidate
                                autoComplete='off'
                            >
                                <div className={styles.inputs}>
                                    <Input {...nameValidation} />
                                    <Input {...emailValidation} />
                                    <Input {...letterValidation} />
                                </div>
                                <div>
                                    {success && (
                                        <p className={styles.success}>Спасибо за обратную связь!</p>
                                    )}
                                    <Button
                                        buttonType={ButtonType.white}
                                        text='Отправить'
                                        onClick={onSubmit}
                                    />
                                </div>
                            </form>
                        </FormProvider>
                    </>
                )}

                <div className={styles.information}>
                    <Logo isWhite />

                    <div className={styles.text}>
                        <a className={styles.captions} href='mailto:example@gmail.com'>
                            example@gmail.com
                        </a>
                        <span className={styles.captions}>
                            Учебный проект студенток СПбГУ, Факультет искусств
                        </span>
                        <span className={styles.captions}>2024</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
