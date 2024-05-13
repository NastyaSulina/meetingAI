import React from 'react'
import { Menu } from '@/widgets'
import { Eye, Figure, FigureType } from '@/shared/ui'
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
    return (
        <>
            <Menu />

            <div className={styles.wrapper}>
                <h1 className={styles.header}>Попалась ошибка! Такой страницы не существует...</h1>
                <div className={styles.figure}>
                    <Figure
                        figureType={FigureType.STAR}
                        width={212}
                        height={212}
                        fill='var(--Orange)'
                    >
                        <div className={styles.eye}>
                            <Eye scale={2.5} />
                        </div>
                    </Figure>
                </div>
            </div>
        </>
    )
}
