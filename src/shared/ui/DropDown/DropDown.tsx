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
        <div className={cn(styles.root)} onClick={toggleDropdown}>
            <div className={styles.wrapper} data-aos='slide-right'>
                <div className={cn(styles.top)}>
                    <div className={cn(styles.number)}>{`→ 0${number}`}</div>
                    <div className={cn(styles.header)}>{header}</div>
                </div>
                <div className={cn(styles.content, { [styles.open]: isOpen })}>{children}</div>
            </div>
        </div>
    )
}
