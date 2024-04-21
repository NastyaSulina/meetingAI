import React from 'react'
import styles from './ErrorPage.module.scss'
import { Figure, FigureType, Eye, Text, TextType } from '../../shared/components'
import { Menu } from '../../widgets'

const ErrorPage = () => {
    return (
        <>
            <Menu />

            <div className={styles.wrapper}>
                <Text
                    text='Попалась ошибка! Такой страницы не существует...'
                    textType={TextType.subhead}
                />
                <div className={styles.figure}>
                    <Figure
                        figureType={FigureType.STAR}
                        width={212}
                        height={212}
                        fill='var(--Orange)'
                    >
                        <div className={styles.eye}>
                            <Eye />
                        </div>
                    </Figure>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
