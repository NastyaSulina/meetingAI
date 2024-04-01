import React, { FC } from 'react'
import styles from './Menu.module.scss'
import { MenuButton, Logo } from '../../shared/components'

const MENU_LIST = [
    { text: 'Как это работает', onClick: () => {} },
    { text: 'О приложении', onClick: () => {} },
    { text: 'Контакты', onClick: () => {} },
]

export const Menu: FC = () => {
    return (
        <div className={styles.root}>
            <nav className={styles.navigation}>
                <Logo />

                <div className={styles.menuButtonContainer}>
                    {MENU_LIST.map((menuItem, key) => (
                        <MenuButton key={key} text={menuItem.text} onClick={menuItem.onClick} />
                    ))}
                </div>
            </nav>
        </div>
    )
}
