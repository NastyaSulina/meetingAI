import React, { FC } from 'react'
import styles from './Menu.module.scss'
import { MenuButton } from '../../shared/components/MenuButton'

export const Menu: FC = () => {
    return (
        <div className={styles.root}>
            <nav className={styles.navigation}>
                <div className={styles.logo}>points</div>
                <div className={styles.menuButtonContainer}>
                    <MenuButton text='Как это работает' onClick={() => {}} />
                    <MenuButton text='О приложении' onClick={() => {}} />
                    <MenuButton text='Контакты' onClick={() => {}} />
                </div>
            </nav>
        </div>
    )
}
