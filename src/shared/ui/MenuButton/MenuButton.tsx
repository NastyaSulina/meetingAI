import React, { FC } from 'react'
import cn from 'classnames'
import styles from './MenuButton.module.scss'

type Props = {
    text?: string
    onClick?: () => void
    isWhite?: boolean
}

export const MenuButton: FC<Props> = ({ text = '', onClick, isWhite = false }) => {
    return (
        <button
            type='button'
            className={cn(styles.root, isWhite && styles.isWhite)}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
