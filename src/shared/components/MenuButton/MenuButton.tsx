import React, { FC } from 'react'
import cn from 'classnames'
import styles from './MenuButton.module.scss'

type Props = {
    text?: string
    onClick?: () => void
}

export const MenuButton: FC<Props> = ({ text = '', onClick }) => {
    return (
        <button className={cn(styles.root)} type='button' onClick={onClick}>
            {text}
        </button>
    )
}
