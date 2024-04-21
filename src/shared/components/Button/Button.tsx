import * as React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type Props = {
    text?: string
    ariaLabel?: string
    buttonType: ButtonType
    onClick: (e: any) => void
}

export enum ButtonType {
    black = 'black',
    white = 'white',
    gradient = 'gradient',
}

export const Button: React.FC<Props> = ({
    buttonType = ButtonType.black,
    text = '',
    ariaLabel = '',
    onClick,
    ...props
}) => {
    return (
        <button
            type='button'
            className={cn(styles.root, styles[buttonType])}
            aria-label={ariaLabel}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    )
}
