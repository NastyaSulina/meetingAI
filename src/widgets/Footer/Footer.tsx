import React, { FC, useState } from 'react'
import styles from './Footer.module.scss'
import { Logo, Text, TextType, Input, InputType, Button, ButtonType } from '../../shared/ui'

type Props = {
    withForm?: boolean
}

export const Footer: FC<Props> = ({ withForm = false }) => {
    const [formValues, setFormValues] = useState({
        test1: '',
        test2: '',
        test3: '',
    })

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        inputName: string,
    ) => {
        const { value } = event.target
        setFormValues((prevValues) => ({ ...prevValues, [inputName]: value }))
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
        <div id='footer' className={styles.root}>
            <div className={styles.footerContainer}>
                {withForm && (
                    <>
                        <div className={styles.headerContainer}>
                            <Text textType={TextType.header} text='Обратная связь' />
                            <Text
                                textType={TextType.bodyParagraph}
                                text='Напишите нам, если у вас есть вопросы по работе программы или любые другие предложения'
                            />
                        </div>
                        <form className={styles.form} onSubmit={handleFormSubmit}>
                            <Input
                                inputType={InputType.input}
                                label='Ваше имя:'
                                inputName='test1'
                                required
                                value={formValues.test1}
                                onInputChange={handleInputChange}
                                id='name'
                            />
                            <Input
                                inputType={InputType.input}
                                label='Ваш e-mail:'
                                inputName='test2'
                                required
                                value={formValues.test2}
                                onInputChange={handleInputChange}
                                id='email'
                                type='email'
                            />
                            <Input
                                inputType={InputType.textarea}
                                label='Сообщение:'
                                inputName='test3'
                                required
                                value={formValues.test3}
                                onInputChange={handleInputChange}
                                id='message'
                            />
                            <Button
                                buttonType={ButtonType.white}
                                text='Отправить'
                                onClick={handleButtonClick}
                            />
                        </form>
                    </>
                )}
                <div className={styles.information}>
                    <Logo isWhite />

                    <div className={styles.text}>
                        <a href='mailto:example@gmail.com'>
                            <Text textType={TextType.captions} text='example@gmail.com' />
                        </a>
                        <Text
                            textType={TextType.captions}
                            text='Учебный проект студенток СПбГУ, Факультет искусств'
                        />
                        <Text textType={TextType.captions} text='2023' />
                    </div>
                </div>
            </div>
        </div>
    )
}
