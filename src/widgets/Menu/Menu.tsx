import React, { FC } from 'react'
import styles from './Menu.module.scss'
import { MenuButton, Logo } from '../../shared/ui'

const MENU_LIST = [
    { text: 'Как это работает', href: '#pointSecond' },
    { text: 'О приложении', href: '#pointFourth' },
    { text: 'Контакты', href: '#footer' },
]

export const Menu: FC = () => {
    return (
        <div className={styles.root} data-test-id='menu'>
            <nav className={styles.navigation}>
                <Logo />

                <ul className={styles.menuButtonContainer}>
                    {MENU_LIST.map((menuItem, key) => (
                        <li key={key}>
                            <a href={menuItem.href}>
                                <MenuButton text={menuItem.text} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
