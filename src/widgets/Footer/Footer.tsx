import React, { FC } from 'react'
import { Logo, Input } from '@/shared/ui'
import {
    emailValidation,
    letterValidation,
    nameValidation,
} from '@/shared/ui/Input/model/validation'
import styles from './Footer.module.scss'
import { Form } from '../Form'

type Props = {
    withForm?: boolean
}

export const Footer: FC<Props> = ({ withForm = false }) => {
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
                        <Form>
                            <Input {...nameValidation} />
                            <Input {...emailValidation} />
                            <Input {...letterValidation} />
                        </Form>
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
