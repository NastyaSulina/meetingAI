import React, { FC } from 'react'
import styles from './Footer.module.scss'
import { Logo, Text, TextType, Input, InputType, Button, ButtonType } from '../../shared/components'

type Props = {
    withForm?: boolean
}

export const Footer: FC<Props> = ({ withForm = false }) => {
    return (
        <div className={styles.root}>
            {withForm && (
                <div className={styles.footerContainer}>
                    <div className={styles.formContainer}>
                        <Text textType={TextType.header} text='А что оно делает?' />
                        {/* <Text
                            textType={TextType.bodyParagraph}
                            text='Points автоматически резюмирует ключевые моменты из ваших встреч, облегчая доступ к самой важной информации без необходимости просмотра всей записи встречи.'
                        /> */}
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
                    </div>
                </div>
            )}

            <div className={styles.footerContainer}>
                <Logo isWhite />

                <div className={styles.textContainer}>
                    <a href='mailto:example@gmail.com'>
                        <Text textType={TextType.additionalText} text='example@gmail.com' />
                    </a>
                    <Text
                        textType={TextType.additionalText}
                        text='Учебный проект студенток СПбГУ, Факультет искусств'
                    />
                    <Text textType={TextType.additionalText} text='2023' />
                </div>
            </div>
        </div>
    )
}
