import * as React from 'react'
import styles from './Logo.module.scss'
import cn from 'classnames'

type Props = {
    fontSize?: number
    isWhite?: boolean
}

export const Logo: React.FC<Props> = ({ fontSize = 19.78, isWhite = false }) => {
    return (
        <div
            className={cn(styles.root, isWhite && styles.isWhite)}
            style={{ fontSize: `${fontSize}px` }}
            aria-hidden
        >
            Points
        </div>
    )
}
