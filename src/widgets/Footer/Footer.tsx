import React, { FC } from 'react'
import styles from './Footer.module.scss'
import {
    Logo,
    Text,
    TextType,
    Input,
    InputType,
    Button,
    ButtonType,
    Eye,
} from '../../shared/components'

type Props = {
    withForm?: boolean
}

// TODO: переделать на фигуры, решить, как закрепить глазик
// Сделать отправку формы на почту
// Сделать скроллбар у textarea

export const Footer: FC<Props> = ({ withForm = false }) => {
    return (
        <div className={styles.root}>
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
                        <form className={styles.form}>
                            <Input
                                inputType={InputType.input}
                                label='Ваше имя:'
                                inputName='test-1'
                                required
                            />
                            <Input
                                inputType={InputType.input}
                                label='Ваш e-mail:'
                                inputName='test-2'
                                required
                            />
                            <Input
                                inputType={InputType.textarea}
                                label='Ваш запрос:'
                                inputName='test-3'
                                required
                            />
                            <Button
                                buttonType={ButtonType.white}
                                text='Отправить'
                                onClick={() => {}}
                            />
                        </form>
                    </>
                )}

                <div className={styles.informationContainer}>
                    <Logo isWhite />

                    <div className={styles.textContainer}>
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

                <div className={styles.eye}>
                    <Eye />
                </div>
            </div>
        </div>
    )
}
