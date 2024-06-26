import React, { FC, ReactNode, useState } from 'react'
import cn from 'classnames'
import styles from './DropDown.module.scss'

type Props = {
    header: string
    children?: ReactNode
    number: number
}

export const DropDown: FC<Props> = ({ header, children = '', number }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={cn(styles.root)}>
            <div className={styles.wrapper}>
                <button
                    className={cn(styles.top)}
                    type='button'
                    onClick={toggleDropdown}
                    data-aos='slide-right'
                >
                    <div>
                        <span className={cn(styles.number)}>{`
                            ${isOpen ? '↓' : '→'} 0${number}`}</span>
                        <span className={cn(styles.header)}>{header}</span>
                    </div>
                    <span className={cn(styles.openButton)}>{isOpen ? 'Закрыть' : 'Открыть'}</span>
                </button>
                <div className={cn(styles.content, { [styles.open]: isOpen })}>{children}</div>
            </div>
        </div>
    )
}
