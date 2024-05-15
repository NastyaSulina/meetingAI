import React, { FC } from 'react'
import cn from 'classnames'
import styles from './IconButton.module.scss'

type Props = {
    ariaLabel?: string
    iconButtonType: IconButtonType
    onClick: (e: any) => void
}

export enum IconButtonType {
    copy = 'copy',
    edit = 'edit',
    reset = 'reset',
}

export const IconButton: FC<Props> = ({ iconButtonType, ariaLabel = '', onClick, ...props }) => {
    return (
        <button
            type='button'
            className={cn(styles.root, styles[iconButtonType])}
            aria-label={ariaLabel}
            onClick={onClick}
            {...props}
        />
    )
}
