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
            <div className={styles.wrapper} data-aos='slide-right'>
                <div className={cn(styles.top)}>
                    <div>
                        <span className={cn(styles.number)}>{`→ 0${number}`}</span>
                        <span className={cn(styles.header)}>{header}</span>
                    </div>
                    <button
                        type='button'
                        onClick={toggleDropdown}
                        className={cn(styles.openButton)}
                    >
                        Открыть
                    </button>
                </div>
                <div className={cn(styles.content, { [styles.open]: isOpen })}>{children}</div>
            </div>
        </div>
    )
}
