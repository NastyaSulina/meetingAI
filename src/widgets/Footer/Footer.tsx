import React, { FC, useState } from 'react'
import { Logo, Input, InputType, Button, ButtonType } from '@/shared/ui'
import styles from './Footer.module.scss'

type Props = {
    withForm?: boolean
}

export const Footer: FC<Props> = ({ withForm = false }) => {
    const [formValues, setFormValues] = useState({
        footerName: '',
        footerEmail: '',
        footerText: '',
    })
    const [isFormValid, setIsFormValid] = useState(false)

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        inputName: string,
    ) => {
        const { value } = event.target
        setFormValues((prevValues) => ({ ...prevValues, [inputName]: value }))
    }

    const validateForm = () => {
        const { footerName, footerEmail, footerText } = formValues
        const isValid =
            footerName.trim() !== '' && footerEmail.trim() !== '' && footerText.trim() !== ''
        setIsFormValid(isValid)
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // TODO: сделать отправку на почту
        console.log(formValues)
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const button = event.currentTarget
        const form = button.closest('form')
        if (form) {
            form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        }
    }

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
                        <form className={styles.form} onSubmit={handleFormSubmit}>
                            <Input
                                inputType={InputType.input}
                                label='Ваше имя:'
                                inputName='footerName'
                                required
                                value={formValues.footerName}
                                onInputChange={handleInputChange}
                                id='name'
                                onBlur={validateForm}
                            />
                            <Input
                                inputType={InputType.input}
                                label='Ваш e-mail:'
                                inputName='footerEmail'
                                required
                                value={formValues.footerEmail}
                                onInputChange={handleInputChange}
                                id='email'
                                type='email'
                                onBlur={validateForm}
                            />
                            <Input
                                inputType={InputType.textarea}
                                label='Сообщение:'
                                inputName='footerText'
                                required
                                value={formValues.footerText}
                                onInputChange={handleInputChange}
                                id='message'
                                onBlur={validateForm}
                            />
                            <Button
                                buttonType={ButtonType.white}
                                text='Отправить'
                                disabled={!isFormValid}
                                onClick={handleButtonClick}
                            />
                        </form>
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
