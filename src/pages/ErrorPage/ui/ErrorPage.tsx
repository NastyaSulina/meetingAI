import React from 'react'
import { Menu } from '@/widgets'
import { Eye, Figure, FigureType, TextType, Text } from '@/shared/components'
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
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
