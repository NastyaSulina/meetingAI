import React, { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './Menu.module.scss'
import { MenuButton, Logo } from '../../shared/ui'

const MENU_LIST = [
    { text: 'Как это работает', anchor: '#purpose' },
    { text: 'О приложении', anchor: '#cards' },
    { text: 'Контакты', anchor: '#footer' },
]

export const Menu: FC<{ withLinks?: boolean }> = ({ withLinks = false }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isTouch, setIsTouch] = React.useState(false)

    useEffect(() => {
        setIsTouch(window.innerWidth <= 768)

        const handleResize = () => {
            setIsTouch(window.innerWidth <= 768)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={styles.root}>
            <nav className={styles.navigation}>
                <Logo />

                {isTouch && (
                    <button
                        type='button'
                        className={cn(styles.button, isOpen && styles.open)}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className={cn(styles.icon, isOpen && styles.open)} />
                    </button>
                )}

                {withLinks && (
                    <ul className={styles.menuButtonContainer}>
                        {MENU_LIST.map((menuItem, key) => (
                            <li key={key} className={styles.menuButtonItem}>
                                <a href={menuItem.anchor}>
                                    <MenuButton text={menuItem.text} isWhite={isTouch} />
                                </a>
                            </li>
                        ))}

                        {isTouch && (
                            <div className={styles.bottomInfo}>
                                <Logo isWhite />
                                <div className={styles.year}>2024</div>
                            </div>
                        )}
                    </ul>
                )}
            </nav>
        </div>
    )
}
