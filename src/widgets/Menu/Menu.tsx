import React, { FC } from 'react'
import styles from './Menu.module.scss'
import { MenuButton, Logo } from '../../shared/ui'

const MENU_LIST = [
    { text: 'Как это работает', anchor: '#purpose' },
    { text: 'О приложении', anchor: '#cards' },
    { text: 'Контакты', anchor: '#footer' },
]

export const Menu: FC = () => {
    return (
        <div className={styles.root} data-test-id='menu'>
            <nav className={styles.navigation}>
                <Logo />

                <ul className={styles.menuButtonContainer}>
                    {MENU_LIST.map((menuItem, key) => (
                        <li key={key}>
                            <a href={menuItem.anchor}>
                                <MenuButton text={menuItem.text} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
