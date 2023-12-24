import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type Props = {
    text?: string
    ariaLabel?: string
    buttonType: ButtonType
    onClick: () => void
}

export enum ButtonType {
    black = 'black',
    white = 'white',
    gradient = 'gradient',
}

export const Button: FC<Props> = ({ text = '', ariaLabel = '', buttonType, onClick }) => {
    return (
        <button
            className={cn(styles.root, styles[buttonType])}
            type='button'
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
